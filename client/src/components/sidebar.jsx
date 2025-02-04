import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { WandSparkles, Home, Upload, TrendingUp } from "lucide-react";

function Sidebar() {
  return (
    <div className="h-screen w-full">
      <Card className="w-full h-[95vh] bg-gradient-to-b from-blue-50 to-blue-100 shadow-lg">
        <CardHeader className="bg-blue-600 text-white p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="w-full flex flex-col justify-center items-center space-y-6 pt-10">
            <Link to="/" className="w-full">
              <Button
                className="w-full h-[50px] bg-blue-600 text-white hover:bg-blue-700"
                startContent={<Home className="mr-2" />}
              >
                Home
              </Button>
            </Link>
            <Link to="/upload" className="w-full">
              <Button
                className="w-full h-[50px] bg-teal-500 text-white hover:bg-teal-600"
                startContent={<Upload className="mr-2" />}
              >
                Upload Data
              </Button>
            </Link>
            <Link to="/xgb" className="w-full">
              <Button
                className="w-full h-[50px] bg-purple-600 text-white hover:bg-purple-700"
                startContent={<WandSparkles className="mr-2" />}
              >
                Predict
              </Button>
            </Link>
            <Link to="/lstm" className="w-full">
              <Button
                className="w-full h-[50px] bg-indigo-600 text-white hover:bg-indigo-700"
                startContent={<TrendingUp className="mr-2" />}
              >
                Forecast
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Sidebar;
