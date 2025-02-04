import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import { BarChart } from "lucide-react";

const PastSalesChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/past")
      .then((response) => {
        const jsonString = response.data;
        const parsedData = JSON.parse(jsonString);
        const salesData = parsedData.y;

        const formattedData = Object.entries(salesData).map(
          ([date, sales]) => ({
            Date: new Date(parseInt(date)).toLocaleDateString(),
            Sales: sales,
          })
        );

        setData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load past sales data");
        setLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner size="lg" color="primary" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="w-full h-full flex flex-col justify-center items-center text-red-500 space-y-4">
          <BarChart size={48} />
          <p className="text-lg">{error}</p>
        </div>
      );
    }

    return (
      <LineChart width={600} height={300} data={data}>
        <YAxis dataKey="Sales" />
        <XAxis dataKey="Date" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Sales"
          stroke="#006FEE"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      {renderContent()}
    </ResponsiveContainer>
  );
};

export default PastSalesChart;
