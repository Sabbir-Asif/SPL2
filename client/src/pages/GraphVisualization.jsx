import React, { useEffect, useRef } from 'react';
import ForceGraph3D from '3d-force-graph';

const GraphVisualization = ({ data }) => {
  const graphRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;

    const links = data.map(({ topic, paper }, index) => ({
      source: topic,
      target: paper,
      id: `link-${index}`, // Ensure unique IDs for links
    }));

    const nodes = data.reduce((acc, { topic, paper }) => {
      acc.push({ id: topic });
      acc.push({ id: paper });
      return acc;
    }, []);

    const gData = { nodes, links };

    // Create 3D force-directed graph
    const Graph = ForceGraph3D()(graphRef.current)
      .graphData(gData)
      .nodeLabel('id')
      .linkWidth(2)
      .linkDirectionalArrowLength(5)
      .linkDirectionalArrowRelPos(1);

    return () => {
      // Cleanup when component unmounts
      Graph.pauseAnimation();
    };
  }, [data]);

  return (
    <div className="w-full h-full" ref={graphRef} />
  );
};

export default GraphVisualization;
