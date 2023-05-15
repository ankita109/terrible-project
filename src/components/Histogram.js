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
            backgroundColor: 'rgba(215, 86, 144, 0.42)',
            borderColor: 'rgba(245, 40, 145, 0.43)',
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
