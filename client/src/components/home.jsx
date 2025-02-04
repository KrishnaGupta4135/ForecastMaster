import React from "react";
import Sidebar from "./sidebar";
import Navbarr from "./navbarr";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <Navbarr />
      <div className="w-full h-full flex flex-row flex-wrap bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="w-1/5 h-full sticky top-0">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full flex flex-col flex-wrap justify-center items-center p-8">
          <h1 className="text-5xl text-blue-900 font-bold mb-4 text-center">
            ForecastMaster
          </h1>
          <h2 className="text-3xl text-blue-700 mb-10 text-center">
            Intelligent Sales Prediction Platform
          </h2>
          <div className="w-full flex flex-row justify-center items-center space-x-8">
            <Card
              className="py-4 w-1/3 h-[450px] shadow-lg hover:shadow-xl transition-all duration-300 
              bg-white border-2 border-blue-100 hover:border-blue-300"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <p className="text-md uppercase font-bold text-blue-800 mb-4">
                  Precision Predictions
                </p>
                <Image
                  alt="Sales Prediction"
                  className="object-cover rounded-xl mb-4"
                  src="/assets/sales.png"
                  width={300}
                />
                <h4 className="font-bold text-lg text-blue-600">
                  Advanced Regression Models
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 text-center">
                <p className="text-gray-600">
                  Leverage cutting-edge machine learning to forecast your sales
                  with unprecedented accuracy.
                </p>
              </CardBody>
            </Card>

            <Card
              className="py-4 w-1/3 h-[450px] shadow-lg hover:shadow-xl transition-all duration-300 
              bg-white border-2 border-purple-100 hover:border-purple-300"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <p className="text-md uppercase font-bold text-purple-800 mb-4">
                  Future Sales Insights
                </p>
                <Image
                  alt="Sales Forecast"
                  className="object-cover rounded-xl mb-4"
                  src="/assets/graph.png"
                  width={300}
                />
                <h4 className="font-bold text-lg text-purple-600">
                  LSTM Forecasting
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 text-center">
                <p className="text-gray-600">
                  Utilize long short-term memory networks for sophisticated time
                  series predictions.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
