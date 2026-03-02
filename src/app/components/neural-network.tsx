import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  id: number;
  connections: number[];
}

export function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    // Create neural network nodes
    const layers = [4, 6, 6, 3];
    const spacing = { x: 120, y: 80 };
    const newNodes: Node[] = [];

    let nodeId = 0;
    layers.forEach((layerSize, layerIndex) => {
      const startY = (400 - (layerSize - 1) * spacing.y) / 2;
      for (let i = 0; i < layerSize; i++) {
        const connections: number[] = [];
        
        // Connect to next layer nodes
        if (layerIndex < layers.length - 1) {
          const nextLayerStart = newNodes.length + layerSize;
          const nextLayerSize = layers[layerIndex + 1];
          for (let j = 0; j < nextLayerSize; j++) {
            connections.push(nextLayerStart + j);
          }
        }

        newNodes.push({
          x: layerIndex * spacing.x + 50,
          y: startY + i * spacing.y,
          id: nodeId++,
          connections,
        });
      }
    });

    setNodes(newNodes);

    // Pulse animation
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % newNodes.length);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 500 400">
        {/* Draw connections */}
        {nodes.map(node =>
          node.connections.map(targetId => {
            const target = nodes[targetId];
            if (!target) return null;
            
            const isActive = pulseIndex === node.id;
            
            return (
              <motion.line
                key={`${node.id}-${targetId}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke={isActive ? '#2E5BFF' : 'rgba(168, 230, 207, 0.2)'}
                strokeWidth={isActive ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  stroke: isActive ? '#2E5BFF' : 'rgba(168, 230, 207, 0.2)',
                }}
                transition={{ duration: 0.5 }}
              />
            );
          })
        )}

        {/* Draw nodes */}
        {nodes.map(node => {
          const isActive = pulseIndex === node.id;
          
          return (
            <g key={node.id}>
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={12}
                  fill="none"
                  stroke="#2E5BFF"
                  strokeWidth={2}
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={6}
                fill={isActive ? '#2E5BFF' : '#A8E6CF'}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: node.id * 0.05 }}
                style={{
                  filter: isActive ? 'drop-shadow(0 0 8px rgba(46, 91, 255, 0.8))' : 'none',
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Floating labels */}
      <div className="absolute top-0 left-0 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
        <span className="text-[#A8E6CF]">INPUT</span>
      </div>
      <div className="absolute top-0 right-0 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
        <span className="text-[#2E5BFF]">OUTPUT</span>
      </div>
    </div>
  );
}
