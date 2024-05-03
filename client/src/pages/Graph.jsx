import React from 'react';
import { Link } from 'react-router-dom';
import GraphVisualization from './GraphVisualization';

const Graph = () => {
  // Dummy data for testing
  const data = [
    {
      topic: 'Morphological Analysis_metadata',
      paper: 'Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language',
    },
    {
      topic: 'Morphological Analysis_metadata',
      paper: 'Incongruity Detection between Bangla News Headline and Body Content through Graph Neural Network',
    },
    {
      topic: 'Morphological Analysis_metadata',
      paper: 'On Evaluation of Bangla Word Analogies',
    },
    // Add more data as needed
  ];

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-5xl font-bold text-center">Graph Visualization</h1>
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
          <div className="text-center mt-5">
            Not what you're looking for?{' '}
            <span className="underline text-[#7AB2B2] font-bold text-lg">
              <Link to="/dashboard">Go back to dashboard.</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
