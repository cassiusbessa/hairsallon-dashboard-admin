import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Clientes/Ano',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Clientes',
      data: labels.map(() => Math.round(Math.random() * 500)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      fill: true,
      label: 'Agendamentos',
      data: labels.map(() => Math.round(Math.random() * 1000)),
      borderColor: 'rgb(235, 162, 53)',
      backgroundColor: 'rgba(235, 162, 53, 0.5)',
    },
    {
      fill: true,
      label: 'Renda',
      data: labels.map(() => Math.round(Math.random() * 1000)),
      borderColor: 'rgb(162, 235, 53)',
      backgroundColor: 'rgba(162, 235, 53, 0.5)',
    },
  ],
};

export default function LineChart() {
  return (

    <Line options={options} data={data} />

  );
}
