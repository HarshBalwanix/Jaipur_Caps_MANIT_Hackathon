import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const PassFailChart = () => {
  const [passCount, setPassCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPassFailData = async () => {
      try {
        // Fetch pass/fail data from your backend API
        const response = await fetch("http://your-backend-api/passFailData");

        if (!response.ok) {
          throw new Error("Failed to fetch pass/fail data");
        }

        const data = await response.json();

        setPassCount(data.passCount);
        setFailCount(data.failCount);
      } catch (error) {
        console.error("Error during data fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPassFailData();
  }, []);

  const data = {
    labels: ["Pass", "Fail"],
    datasets: [
      {
        label: "Result Counts",
        data: [passCount, failCount],

        backgroundColor: ["#4CAF50", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p className="text-center mt-4 text-gray-700">Loading...</p>
      ) : (
        <div>
          <p className="text-xl font-bold mb-2 text-green-500 mx-auto text-center">
            Pass/Fail Data Visualization
          </p>

          <Doughnut
            className="max-h-96 max-w-96"
            data={data}
            options={chartOptions}
          />
        </div>
      )}
    </div>
  );
};

export default PassFailChart;

// import React, { useEffect, useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);

// const PassFailChart = ({ simulatedData }) => {
//   const [passCount, setPassCount] = useState(0);
//   const [failCount, setFailCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulated data from props
//     setPassCount(simulatedData.passCount);
//     setFailCount(simulatedData.failCount);
//     setLoading(false);
//   }, [simulatedData]);

//   const data = {
//     labels: ["Pass", "Fail"],
//     datasets: [
//       {
//         label: "Result Counts",
//         data: [passCount, failCount],
//         backgroundColor: ["#4CAF50", "#FF6384"],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         display: true,
//         position: "right",
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {loading ? (
//         <p className="text-center mt-4 text-gray-700">Loading...</p>
//       ) : (
//         <div>
//           <p className="text-xl font-bold mb-2 text-green-500 mx-auto text-center">
//             Pass/Fail Data Visualization
//           </p>
//           <Doughnut
//             className="max-h-96 max-w-96"
//             data={data}
//             options={chartOptions}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PassFailChart;
