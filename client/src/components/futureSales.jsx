import React, { useState, useEffect } from "react";
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
import { AlertTriangle } from "lucide-react";

const FutureSales = ({ showFutureSales }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showFutureSales) {
      setLoading(true);
      setError(null);

      axios
        .get("/forecast")
        .then((response) => {
          const jsonString = response.data;
          const parsedData = JSON.parse(jsonString);
          const salesData = parsedData.Predictions;

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
          setError("Failed to load forecast data");
          setLoading(false);
        });
    }
  }, [showFutureSales]);

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
          <AlertTriangle size={48} />
          <p className="text-lg">{error}</p>
        </div>
      );
    }

    if (!data) {
      return (
        <p className="text-center text-gray-500">
          Click the Forecast button to view future sales
        </p>
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
          stroke="#FFA500"
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

export default FutureSales;
