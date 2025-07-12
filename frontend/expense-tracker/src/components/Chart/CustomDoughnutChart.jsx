import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomDoughnutChart = ({ data, label, totalAmount, colors }) => {
    const chartData = {
        labels: data.map((item) => item.name),
        datasets: [
            {
                data: data.map((item) => item.amount),
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: Rp${value.toLocaleString('id-ID')}`;
                    },
                },
            },
        },
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            {/* Doughnut Chart */}
            <div className="mt-7 relative w-[300px] h-[300px]">
                <Doughnut data={chartData} options={options} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="text-xl font-semibold text-gray-800">
                        Rp{Number(totalAmount).toLocaleString('id-ID')}
                    </p>
                </div>
            </div>

            {/* Legend Bar (Satu Baris) */}
            <div className="mt-16 flex justify-center flex-wrap gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: colors[index % colors.length] }}
                        />
                        <span className="text-sm text-gray-800 font-medium">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomDoughnutChart;
