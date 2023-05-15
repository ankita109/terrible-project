import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Histogram = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = data.map((item) => item.word);
    const frequencies = data.map((item) => item.frequency);

    const chartConfig = {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Word Frequency',
            data: frequencies,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            precision: 0,
          },
        },
      },
    };

    const chart = new Chart(chartRef.current, chartConfig);

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Histogram;
