// 'use client'
import { PieChart } from '@/components/Pie'
// import {Chart, ArcElement} from 'chart.js'
// Chart.register(ArcElement);

const data = {
    labels: ['3x3x3', '2x2x2', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function SolvesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="size-1/4 flex items-center flex-col">
          <p>Ułożenia</p>
          <PieChart data={data}/>    
        </div>
      </main>
    )
}
