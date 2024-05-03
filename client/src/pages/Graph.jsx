import React, { useState, useEffect } from 'react';
import GraphVisualization from './GraphVisualization';

const Graph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-5xl font-bold text-center">Graph Visualization</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero in dui vestibulum eleifend nec non felis. Fusce sed nisi quis justo interdum commodo.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-xl shadow-2xl">
            <div className="card-body">
              <div className="w-full max-w-xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <GraphVisualization data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
