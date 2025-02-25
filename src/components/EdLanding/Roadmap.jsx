import 'reactflow/dist/style.css';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, { Background, Handle, Position, useReactFlow } from 'reactflow';

const initialEdges = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2',
    sourceHandle: 'right',
    targetHandle: 'left',
    animated: true,
    type: 'smoothstep',
    style: { 
      stroke: '#9B59B6',
      strokeDasharray: '5 5',
      strokeWidth: 2
    }
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3',
    sourceHandle: 'right',
    targetHandle: 'left', 
    animated: true,
    type: 'smoothstep',
    style: { 
      stroke: '#0ea5e9',
      strokeDasharray: '5 5',
      strokeWidth: 2
    }
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4',
    sourceHandle: 'right',
    targetHandle: 'left',
    animated: true,
    type: 'smoothstep',
    style: { 
      stroke: '#9B59B6',
      strokeDasharray: '5 5',
      strokeWidth: 2
    }
  }
];

const CustomNode = ({ data, id }) => {
  return (
    <div className="group w-[250px] h-[100px]">
      <div
        className={`bg-neutral-900/80 backdrop-blur-sm p-6 rounded-xl border transition-all 
        duration-300 ${
          id % 2 === 0
            ? "border-lPurple/30 shadow-[0_0_15px_rgba(155,89,182,0.2)]"
            : "border-sky-500/30 shadow-[0_0_15px_#0ea5e920]"
        }`}
      >
        {id !== "1" && (
          <Handle
            type="target"
            position={Position.Left}
            id="left"
            style={{ cursor: "default" }}
          />
        )}
        {id !== "4" && (
          <Handle
            type="source"
            position={Position.Right}
            id="right"
            style={{ cursor: "default" }}
          />
        )}
        <div className="flex items-center gap-2">
          <Icon icon={data.icon} className="w-5 h-5" />
          <h3 className="font-bold text-white transition-colors">
            {data.label}
          </h3>
        </div>
        <div className="flex items-start flex-col">
          <p className="text-sm text-gray-300 mt-2">{data.description}</p>
          <div>
            <span className="text-xs text-white mt-2 block px-4 pt-1 pb-0.5 bg-sky-700/40 rounded-full">
              {data.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode
};

const RoadmapFlow = ({ roadmap }) => {
  const [nodes, setNodes] = useState(roadmap);
  const [edges, setEdges] = useState(initialEdges);
  const reactFlowWrapper = useRef(null);
  const reactFlowInstance = useRef(null);

  // flow size
  const fitFlowView = useCallback(() => {
    if (reactFlowInstance.current) {
      reactFlowInstance.current.fitView();
    }
  }, []);

  // fitview after first render
  useEffect(() => {
    setTimeout(fitFlowView, 100);
  }, [fitFlowView]);

  // fitview on resize
  useEffect(() => {
    const handleResize = () => {
      fitFlowView();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fitFlowView]);

  useEffect(() => {
    const updateLayout = () => {
      const isMobile = window.innerWidth < 768;
      const newNodes = roadmap.map((node, index) => ({
        ...node,
        position: isMobile
          ? { x: 200, y: index * 200 }
          : roadmap[index].position, 
      }));

      setNodes(newNodes);
      
      if (reactFlowInstance.current) {
        setTimeout(() => {
          reactFlowInstance.current.fitView();
        }, 100);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [roadmap]);


  return (
    <section
      ref={reactFlowWrapper}
      className="relative min-h-screen w-full pointer-events-none reverse-invert-grid-pattern flex flex-col gap-5"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-28 z-10"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          در تمام مسیر همراه شما هستیم
        </h2>
        <div className="h-1 w-2/6 md:w-1/6 skew-x-12 bg-gradient-to-r from-lPurple to-sky-500 mx-auto mt-4" />
      </motion.div>
      <div className="relative w-full h-full flex-1 mt-32 md:mt-16">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onInit={(instance) => (reactFlowInstance.current = instance)}
          className="bg-transparent"
          fitView
          ref={reactFlowInstance}
          defaultViewport={{ x: 0, y: 0 }}
          snapToGrid={true}
          snapGrid={[16, 16]}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          panOnDrag={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background gap={12} size={1} style={{ opacity: 0.1 }} />
        </ReactFlow>
      </div>
    </section>
  );
};

export default RoadmapFlow;