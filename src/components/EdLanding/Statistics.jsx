import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler 
} from 'chart.js';

// necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler  // required for doughnut chart
);

const Statistics = () => {
  const [studentCount, setStudentCount] = useState(0);

  const lineData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [{
      label: 'رشد دانشجویان',
      data: [1200, 1600, 2000, 2200, 2400, 2500],
      borderColor: 'rgb(93,58,231)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        
        if (!chartArea) {
          return null;
        }
        
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(93,58,231,0)');
        gradient.addColorStop(0.5, 'rgba(93,58,231,0.1)');
        gradient.addColorStop(1, 'rgba(93,58,231,0.3)');
        return gradient;
      },
      pointBackgroundColor: 'rgb(0, 0, 0)'
    }]
  };
  
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: 'white' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: 'white' },
        grid: { color: 'rgba(76, 148, 255, 0.1)' }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(76, 148, 255, 0.1)' }
      }
    }
  };

  const doughnutData = {
    labels: ['راضی', 'خنثی', 'ناراضی'],
    datasets: [{
      data: [85, 5, 2],
      backgroundColor: [
        'rgb(34, 197, 94)',
        'rgb(234, 179, 8)',
        'rgb(239, 68, 68)'
      ]
    }]
  };

const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: 'white' }
    }
  },
  animation: {
    animateScale: true,
    animateRotate: true,
    duration: 300
  }
};

  useEffect(() => {
    const timer = setInterval(() => {
      setStudentCount(prev => {
        if (prev < 2500) return prev + 10;
        clearInterval(timer);
        return 2500;
      });
    }, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-screen py-16 px-4 grid-pattern-no-mask">
      <div className="container flex flex-col items-center mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">
            آمار و دستاوردها
          </h2>
          <div className="w-24 skew-x-[30deg] h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
        </div>

        {/* Charts */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center w-[100%] lg:w-[40%] max-h-[400px] bg-clrCoal/50">
            <h3 className="text-xl text-white mb-4">رشد دانشجویان</h3>
            <Line
              id="studentGrowthChart"
              data={lineData}
              options={lineOptions}
            />
          </div>
          <div className="flex flex-col items-center w-[90%] lg:w-[40%] h-[400px] bg-clrCoal/50">
            <h3 className="text-xl text-white mb-4">رضایت دانشجویان</h3>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>

        {/* boxes */}
        <div className="w-full lg:w-10/12 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-6 xs:mt-10 lg:mt-20 rounded-t-xl bg-gradient-to-t from-indigo-500/5 p-6 backdrop-blur">
          <div className="flex flex-col items-center">
            <Icon icon="ph:users" className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl md:text-3xl font-bold text-white">+{studentCount}</h3>
            <p className="text-gray-300">دانشجو</p>
          </div>

          <div className="flex flex-col items-center">
            <Icon
              icon="ph:graduation-cap"
              className="w-8 h-8 text-indigo-400 mb-4"
            />
            <h3 className="text-xl md:text-3xl font-bold text-white">+150</h3>
            <p className="text-gray-300">دوره آموزشی</p>
          </div>

          <div className="flex flex-col items-center">
            <Icon icon="ph:star" className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl md:text-3xl font-bold text-white">85%</h3>
            <p className="text-gray-300">رضایت دانشجویان</p>
          </div>

          <div className="flex flex-col items-center">
            <Icon icon="ph:clock" className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl md:text-3xl font-bold text-white">+1000</h3>
            <p className="text-gray-300">ساعت آموزش</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;