import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "tailwindcss/tailwind.css";
import { Helmet } from "react-helmet-async";

ChartJS.register(ArcElement, Tooltip, Legend);
const HrHome = () => {
  const pendingRequests = [
    "Request 1",
    "Request 2",
    "Request 3",
    "Request 4",
    "Request 5",
  ];
  const topRequests = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const limitedStock = [
    { name: "Item A", quantity: 5 },
    { name: "Item B", quantity: 3 },
    { name: "Item C", quantity: 8 },
  ];

  const pieData = {
    labels: ["Returnable", "Non-returnable"],
    datasets: [
      {
        data: [300, 200],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };
  return (
    <div>
      <Helmet>
        <title>Asset-Each |HR Home Page</title>
      </Helmet>
      <div className="p-4">
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Pending Requests</h2>
          <ul className="list-disc pl-5">
            {pendingRequests.map((request, index) => (
              <li key={index}>{request}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Topmost Requested Items</h2>
          <ul className="list-disc pl-5">
            {topRequests.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Limited Stock Items</h2>
          <ul className="list-disc pl-5">
            {limitedStock.map((item, index) => (
              <li key={index}>
                {item.name} (Quantity: {item.quantity})
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Returnable vs Non-returnable Items
          </h2>
          <div className="w-1/2 mx-auto">
            <Pie data={pieData} />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Extra Section</h2>
          <p>This is an extra section with relevant content.</p>
        </section>
      </div>
    </div>
  );
};

export default HrHome;
