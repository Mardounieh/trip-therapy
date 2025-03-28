import { Line } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';

// necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const FooterBackground = () => {
  const phaseRef = useRef(0);
  const chartRef = useRef(null);

const generateComplexWave = (baseAmplitude, complexity, phase = 0) => {
  return Array.from({ length: 100 }, (_, i) => ({
    x: i,
    y:
      (baseAmplitude * Math.sin((i / 12) + complexity + phase)) +
      (baseAmplitude / 2) * Math.cos((i / 8) + phase) +
      (baseAmplitude / 3) * Math.sin((i / 5) + complexity * 2 + phase)
  })).map(({ x, y }) => ({
    x,
    y: y * 0.7
  }));
};
  

  const data = {
    labels: Array.from({ length: 100 }, (_, i) => i.toString()),
    datasets: [
      {
        data: generateComplexWave(1, 0.5, phaseRef.current),
        borderColor: 'rgba(93,58,231)',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(93,58,231,0.1)');
          gradient.addColorStop(1, 'rgba(93,58,231,0.6)');
          return gradient;
        },
        tension: 0.4
      },
      {
        data: generateComplexWave(0.8, 1.2, phaseRef.current),
        borderColor: 'rgba(58, 95, 231, 1)',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(58, 64, 231, 0.1)');
          gradient.addColorStop(1, 'rgba(58, 78, 231, 0.6)');
          return gradient;
        },
        tension: 0.4
      },
      {
        data: generateComplexWave(0.6, 2.1, phaseRef.current),
        borderColor: 'rgba(184, 75, 192, 1)',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(188, 75, 192, 0.1)');
          gradient.addColorStop(1, 'rgba(169, 75, 192, 0.6)');
          return gradient;
        },
        tension: 0.4
      }
    ]
  };

  useEffect(() => {
    let animationFrameId;
    
    const animate = () => {
      phaseRef.current += 0.005;
      if (chartRef.current) {
        chartRef.current.data.datasets = data.datasets.map((dataset, i) => ({
          ...dataset,
          data: generateComplexWave(
            i === 0 ? 1 : i === 1 ? 0.8 : 0.6,
            i === 0 ? 0.5 : i === 1 ? 1.2 : 2.1,
            phaseRef.current * (i === 0 ? 1 : i === 1 ? 1.5 : 0.7)
          )
        }));
        chartRef.current.update('none');
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false, min: -1.2, max: 1.2 }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="absolute inset-0">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default FooterBackground;