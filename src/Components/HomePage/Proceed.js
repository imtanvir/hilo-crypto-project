import React from "react";
import { Container } from "react-bootstrap";
import "../../Styles/HomePage/Proceeds.css";
import simpleHexogon from "../../Assets/Avatar/simpleHexogon.svg";
import ChartImg from "../../Assets/Images/Chart.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    title: {
      display: true,
      text: 'Doughnut Chart',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      enabled: true,
      callbacks: {
        label: function (tooltipItem, data) {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[0].data[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
    },
  },
};


const data = {
  labels: [
    'Eco-system Rewards 20.00%',
    'Private sale 8.00%',
    'Presale 12.00%',
    'Public sale 20.00%',
    'Liquidity Pool 10.00%',
    'Development 4.00%',
    'Marketing 4.00%',
    'Team 10.00%',
    'Advisor 1.00%'
  ],
  datasets: [
    {
      data: [20, 8, 12, 20, 10, 4, 4, 10, 1],
      backgroundColor: [
        '#FCFF7A',
        '#84FF90',
        '#84FFE9',
        '#84D3FF',
        '#849FFF',
        '#FFB884',
        '#FF8B84',
        '#FFDADA',
        '#FA7800'
      ],
    },
  ],
};

const Proceeds = () => {
  const operations = [
    { title: 'Marketing', percentage: '4.00', color: '#FC82C3' },
    { title: 'Development', percentage: '4.00', color: '#EBFF6D' },
    { title: 'Team', percentage: '4.00', color: '#EBFF6D' },
    { title: 'Advisor', percentage: '1.00', color: '#63E170E9' },
    { title: 'Burn', percentage: '2.00', color: '' },
  ]

  return (
    <Container>
      <div className="mainView mt-5 row">
        <div className="d-flex flex-column align-items-center justify-content-center col-md-6">
          <img src={ChartImg} className="chartImg" alt="" />
        </div>
        <div className="d-flex flex-column align-items-center col-md-6">
          <p className="title mt-3">Use of Proceeds</p>
          <p className="subtitle">Use the token fee accross Operations</p>
          <div className="d-flex flex-column justify-content-left sliders">
            {operations.map((operation, i) =>
              <div key={i} className="mt-3">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src={simpleHexogon}
                    width={20}
                    height={20}
                    alt="simpleHexogon"
                    className=""
                  />
                  <p className="ms-3 mb-0" style={{ color: operation.color }}>{operation.title}</p>
                  <p className="ms-1 mb-0">{operation.percentage}%</p>
                </div>
                <div className="progressBar">
                  <div style={{ width: `${operation.percentage}%`, height: 7, backgroundColor: operation.color, borderRadius: 6 }} />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Proceeds;
