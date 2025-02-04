import React, { useState } from "react";
import Navbarr from "./navbarr";
import Sidebar from "./sidebar";
import PastSalesChart from "./pastSalesChart";
import FutureSales from "./futureSales";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { Sparkles, TrendingUp, BarChart } from "lucide-react";

function ForecastPage() {
  const [showFutureSales, setShowFutureSales] = useState(false);

  const handleForecastButtonClick = () => {
    setShowFutureSales(true);
  };

  return (
    <>
      <Navbarr />
      <div className="w-full min-h-screen flex flex-row bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="w-1/5 h-full sticky top-0">
          <Sidebar />
        </div>
        <div className="w-4/5 flex flex-col items-center p-8 space-y-8">
          <Card
            className="w-full max-w-5xl shadow-lg hover:shadow-xl transition-all duration-300 
            border-2 border-blue-200 hover:border-blue-300"
          >
            <CardHeader className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <BarChart className="text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-blue-900">
                  Current Sales Performance
                </h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <PastSalesChart />
            </CardBody>
          </Card>

          <Button
            onClick={handleForecastButtonClick}
            startContent={<Sparkles className="text-pink-500" />}
            endContent={<TrendingUp className="text-yellow-500" />}
            className="h-16 w-64 text-white text-xl 
            bg-gradient-to-tr from-pink-500 to-yellow-500 
            hover:scale-110 transition-transform shadow-lg 
            hover:shadow-xl"
          >
            Generate Forecast
          </Button>

          <Card
            className="w-full max-w-5xl shadow-lg hover:shadow-xl transition-all duration-300 
            border-2 border-blue-200 hover:border-blue-300"
          >
            <CardHeader className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <TrendingUp className="text-green-600" size={32} />
                <h2 className="text-2xl font-bold text-blue-900">
                  Future Sales Projection
                </h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <FutureSales showFutureSales={showFutureSales} />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ForecastPage;
