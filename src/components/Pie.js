'use client'
import { Pie } from "react-chartjs-2";
// import {Chart} from 'chart.js/auto'
// Chart.register(ArcElement);

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

const PieChart = Pie
export {PieChart}
