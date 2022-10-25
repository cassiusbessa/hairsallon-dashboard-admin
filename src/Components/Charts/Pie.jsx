import React from 'react';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const backColors = (alpha) => [
  `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${alpha})`,
  `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${alpha})`,
  `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${alpha})`,
  `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${alpha})`,
  `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${alpha})`,
  `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${alpha})`,
];

const fillColors = backColors('0.2');

const dataPie = {
  labels: ['Corte de Cabelo', 'Manicure', 'Pedicure', 'Escova', 'Alisamento', 'Hidratação'],
  datasets: [
    {
      label: '# of Votes',
      data: [
        Math.round(Math.random() * 200),
        Math.round(Math.random() * 200),
        Math.round(Math.random() * 200),
        Math.round(Math.random() * 200),
        Math.round(Math.random() * 200),
        Math.round(Math.random() * 200),
      ],
      backgroundColor: [...fillColors],
      borderColor: [...fillColors.map((color) => color.replace('0.2', '1'))],
      borderWidth: 2,
    },
  ],
};

export default function PieChart() {
  return (
    <Pie data={dataPie} options={{ maintainAspectRatio: false }} />
  );
}
