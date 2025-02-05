import React, { useState, useEffect, useRef } from "react";
import Map, { Source, Layer, NavigationControl, Marker } from "react-map-gl";
import axios from "axios";
import { Icon } from "@iconify/react";
import FrameContainer from "../../../UI/FrameContainer";
import { useTheme } from "../../../context/ThemeContext";

const RouteMap = ({ formData, modeId }) => {
  const [bounds, setBounds] = useState(null);
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const mapRef = useRef(null)
  const {darkMode} = useTheme();
  const [zoom, setZoom] = useState(7);
  const [pitch, setPitch] = useState(0);
  const [coordinates, setCoordinates] = useState({
    origin: null,
    destination: null,
  });
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isStyleLoading, setIsStyleLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 35.289,
    longitude: 51.389,
    zoom: zoom,
    pitch: pitch,
  });

  // map resize handler 
  useEffect(() => {
    if (isMapLoaded) {
      const sidebar = document.querySelector("aside"); // Select the sidebar element
      let timeoutId;
  
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.resize();
          }
        }, 0); // Small delay for smooth resizing
      };
  
      const resizeObserver = new ResizeObserver(handleResize);
  
      if (sidebar) {
        resizeObserver.observe(sidebar);
      }
  
      return () => {
        clearTimeout(timeoutId);
        resizeObserver.disconnect();
      };
    }
  }, [isMapLoaded]);
  
  

  // map load handler
  const handleMapLoad = () => {
    setIsMapLoaded(true);
    setIsStyleLoading(false);
  };

  // style load handler
  const handleStyleData = () => {
    setIsStyleLoading(false);
  };

  // style listener
  useEffect(() => {
    if (isMapLoaded) {
      setIsStyleLoading(true);
    }
  }, [darkMode]);

  // city coordinates
  const getCityCoordinates = async (cityName) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search`,
        {
          params: {
            q: cityName,
            format: 'json',
            countrycodes: 'ir',
            limit: 1,
            'accept-language': 'fa'
          },
          headers: {
            "User-Agent": "TravelBooking/1.0"
          },
        }
      );
  
      if (response.data && response.data.length > 0) {
        const coordinates = [
          parseFloat(response.data[0].lon),
          parseFloat(response.data[0].lat),
        ];
        return coordinates;
      }
      return null;
    } catch (error) {
      console.error(`Error fetching coordinates for ${cityName}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const updateCoordinates = async () => {
      if (formData?.origin) {
        const originCoords = await getCityCoordinates(formData.origin);
        if (originCoords) {
          setCoordinates(prev => ({ ...prev, origin: originCoords }));
        }
      }
      if (formData?.destination) {
        const destCoords = await getCityCoordinates(formData.destination);
        if (destCoords) {
          setCoordinates(prev => ({ ...prev, destination: destCoords }));
        }
      }
    };
  
    updateCoordinates();
  }, [formData]);
  
  useEffect(() => {
    if (coordinates.origin && coordinates.destination) {
      fetchRoute();
      const bounds = getBounds(coordinates.origin, coordinates.destination);
      setViewport(bounds);
    }
  }, [coordinates]);

  const calculateZoomLevel = (minLat, maxLat, minLng, maxLng) => {
    const latZoom = Math.floor(8 - Math.log2(maxLat - minLat));
    const lngZoom = Math.floor(8 - Math.log2(maxLng - minLng));
    return Math.min(Math.min(latZoom, lngZoom), 12);
  };

  const getBounds = (origin, destination) => {
    const minLat = Math.min(origin[1], destination[1]);
    const maxLat = Math.max(origin[1], destination[1]);
    const minLng = Math.min(origin[0], destination[0]);
    const maxLng = Math.max(origin[0], destination[0]);
    
    const padding = 50; // پدینگ به پیکسل
    
    const newBounds = [
      [minLng - 0.1, minLat - 0.1], // جنوب غربی
      [maxLng + 0.1, maxLat + 0.1]  // شمال شرقی
    ];
    
    setBounds(newBounds);
    
    return {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      zoom: calculateZoomLevel(minLat, maxLat, minLng, maxLng),
      pitch: pitch,
      bearing: 0,
      padding: { top: padding, bottom: padding, left: padding, right: padding }
    };
  };

  
  const fetchRoute = async () => {
    if (!coordinates.origin || !coordinates.destination) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://router.project-osrm.org/route/v1/driving/${coordinates.origin[0]},${coordinates.origin[1]};${coordinates.destination[0]},${coordinates.destination[1]}?overview=full&geometries=geojson`
      );
      const routeData = response.data.routes[0].geometry;
      setRoute(routeData);
    } catch (error) {
      console.error("Error fetching route:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleZoom = (newZoom) => {
    const updatedViewport = {
      ...viewport,
      zoom: newZoom,
      transitionDuration: 500
    };
    setZoom(newZoom);
    setViewport(updatedViewport);
  };

  const handlePitch = () => {
    const newPitch = pitch === 0 ? 45 : 0;
    setPitch(newPitch);
    setViewport(prev => ({
      ...prev,
      pitch: newPitch
    }));
  };

  // Store the actual map style URL in a constant or useMemo
  const mapStyleUrl = darkMode 
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 14
      });
    });
  };

  const handleResetView = () => {
    setViewport({
      latitude: 35.289,
      longitude: 51.3890,
      zoom: 7
    });
  };

  const handleMove = (evt) => {
    const newViewport = {
      ...evt.viewState,
      zoom: evt.viewState.zoom || zoom
    };
    setViewport(newViewport);
    setZoom(newViewport.zoom);
  };

  return (
    <div className="w-full h-[550px] overflow-hidden [mask:linear-gradient(black_40%,transparent)] dark:[mask:linear-gradient(black_40%,transparent)] cursor-grab active:cursor-grabbing">
      {/* Loading overlay */}
      {isStyleLoading && (
        <div className="absolute inset-0 bg-white dark:bg-black/40 backdrop-blur-[2px] flex justify-center z-50">
          <FrameContainer backgroundColor={2} preferredStyles="h-10 mt-10">
            <div className="bg-clrDarkBrown dark:bg-clrCoal text-clrWhite rounded-lg p-3 text-sm flex gap-3 items-center">
              <Icon
                icon="line-md:loading-loop"
                className="w-6 h-6 text-white dark:text-clrLightGreen"
              />
              در حال بارگذاری نقشه
            </div>
          </FrameContainer>
        </div>
      )}

      <Map
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapStyleUrl}
        mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
        onLoad={handleMapLoad}
        onStyleData={handleStyleData}
        ref={mapRef}
        onMove={handleMove}
        maxZoom={24}
        minZoom={1}
        dragRotate={true}
        touchZoomRotate={true}
      >
        <NavigationControl position="top-right" />

        {route && (
          <Source type="geojson" data={{ type: "Feature", geometry: route }}>
            <Layer
              id="route"
              type="line"
              paint={{
                "line-color": darkMode ? "#41914e" : "#dda15e",
                "line-width": 3,
              }}
            />
          </Source>
        )}

        {loading && (
          <FrameContainer
            backgroundColor={2}
            preferredStyles="absolute top-10 left-[45%]"
          >
            <div className="bg-clrDarkBrown dark:bg-clrCoal text-clrWhite rounded-lg p-2 text-sm flex gap-3 items-center">
              <Icon
                icon="line-md:loading-loop"
                className="w-6 h-6 text-white dark:text-clrLightGreen"
              />
              در حال جستوجوی مسیر
            </div>
          </FrameContainer>
        )}

        {coordinates.origin && (
          <Marker
            longitude={coordinates.origin[0]}
            latitude={coordinates.origin[1]}
            anchor="center"
          >
            <div className="marker-container">
              <Icon
                icon="mdi:map-marker"
                className="w-8 h-8 text-clrBlue"
              />
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-clrMilk dark:bg-black/90 text-clrBlue px-2 py-1 rounded text-xs whitespace-nowrap">
                مبدا {formData?.origin}
              </div>
            </div>
          </Marker>
        )}

        {coordinates.destination && (
          <Marker
            longitude={coordinates.destination[0]}
            latitude={coordinates.destination[1]}
            anchor="center"
          >
            <div className="marker-container">
              <Icon
                icon="mdi:map-marker"
                className="w-8 h-8 text-clrDarkBrown"
              />
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-clrMilk dark:bg-black/90 text-clrDarkBrown px-2 py-1 rounded text-xs whitespace-nowrap">
                مقصد {formData?.destination}
              </div>
            </div>
          </Marker>
        )}

        {/* Map Controls Container */}
        <FrameContainer
          backgroundColor={1}
          preferredStyles="absolute z-50 p-px rounded-lg top-5 left-7"
        >
          <div className="flex flex-col gap-3 p-2 rounded-lg bg-white dark:bg-clrCoal">
            {/* Zoom In */}
            <button
              onClick={() => handleZoom(zoom + 1)}
              className="hover:dark:drop-shadow-[0_0_2px_green] hover:drop-shadow-[0_0_1px_yellow] duration-200"
              title="بزرگنمایی"
            >
              <Icon
                icon="solar:minimalistic-magnifer-zoom-in-linear"
                className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen"
              />
            </button>

            <hr className="border-clrLightBrown/30 dark:border-clrDarkGreen" />

            {/* Zoom Out */}
            <button
              onClick={() => handleZoom(zoom - 1)}
              className="hover:dark:drop-shadow-[0_0_2px_green] hover:drop-shadow-[0_0_1px_yellow] duration-200"
              title="کوچک‌نمایی"
            >
              <Icon
                icon="solar:minimalistic-magnifer-zoom-out-linear"
                className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen"
              />
            </button>

            <hr className="border-clrLightBrown/30 dark:border-clrDarkGreen" />

            {/* Current Location */}
            <button
              onClick={handleCurrentLocation}
              className="hover:dark:drop-shadow-[0_0_2px_green] hover:drop-shadow-[0_0_1px_yellow] duration-200"
              title="موقعیت فعلی"
            >
              <Icon
                icon="mdi:crosshairs-gps"
                className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen"
              />
            </button>

            <hr className="border-clrLightBrown/30 dark:border-clrDarkGreen" />

            {/* Reset View */}
            <button
              onClick={handleResetView}
              className="hover:dark:drop-shadow-[0_0_2px_green] hover:drop-shadow-[0_0_1px_yellow] duration-200"
              title="بازنشانی نما"
            >
              <Icon
                icon="mdi:restart"
                className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen"
              />
            </button>

            <hr className="border-clrLightBrown/30 dark:border-clrDarkGreen" />

            {/* Toggle Traffic */}
            <button
              onClick={handlePitch}
              className="hover:dark:drop-shadow-[0_0_2px_green] hover:drop-shadow-[0_0_1px_yellow] duration-200"
              title="تغییر زاویه دید"
            >
              <Icon
                icon="akar-icons:box"
                className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen transition-all duration-300"
                style={{
                  transform: `perspective(400px) rotateX(${
                    pitch === 0 ? 0 : 35
                  }deg)`,
                  transformOrigin: "center bottom",
                }}
              />
            </button>
          </div>
        </FrameContainer>
      </Map>
    </div>
  );
};

export default RouteMap;