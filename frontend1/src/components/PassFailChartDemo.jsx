import React from "react";
import PassFailChart from "./PassFailChart";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const PassFailChartDemo = () => {
  // Set passCount to 4 and failCount to 2
  const passFailData = {
    passCount: 4,
    failCount: 2,
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Pass/Fail Chart Demo
      </h2>
      <PassFailChart simulatedData={passFailData} />
    </div>
  );
};

export default PassFailChartDemo;

// import React from "react";
// import PassFailChart from "./PassFailChart";
// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);

// const PassFailChartDemo = () => {
//   // Simulated data: 4 Pass and 2 Fail
//   const passFailData = {
//     passCount: 4,
//     failCount: 2,
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">
//         Pass/Fail Chart Demo
//       </h2>
//       <PassFailChart simulatedData={passFailData} />
//     </div>
//   );
// };

// export default PassFailChartDemo;
