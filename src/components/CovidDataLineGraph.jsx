import React from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import {
  createWorldwideChartData,
  createCountryChartData,
} from '../utils/CovidDataLineGraph.utils';

const chartOptions = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRation: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: (tooltipItem, data) => {
        return numeral(tooltipItem.value).format('0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridlines: {
          display: false,
        },
        ticks: {
          callback: (value, index, values) => {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const CovidDataLineGraph = ({ country, data, type }) => {
  let chartData;
  if (country === 'Worldwide') {
    chartData = createWorldwideChartData(data, type);
  } else {
    chartData = createCountryChartData(data, type);
  }

  return (
    <div className="lineGraph">
      <Line
        options={chartOptions}
        data={{
          datasets: [
            {
              data: chartData,
              backgroundColor: 'rgba(204, 16, 52, 0.5)',
              borderColor: '#CC1034',
            },
          ],
        }}
      />
    </div>
  );
};

export default CovidDataLineGraph;
