import React, { useState } from "react";
import Navbarr from "./navbarr";
import Sidebar from "./sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import axios from "axios";

function Predict() {
  const [formData, setFormData] = useState({
    Retailer: "",
    Region: "",
    State: "",
    City: "",
    Product: "",
    "Price per Unit": "",
    "Unit Sold": "",
    "Operating Profit": "",
    "Operating Margin": "",
    "Sales Method": "",
  });

  const [predictedSales, setPredictedSales] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/predict", formData)
      .then((response) => {
        setPredictedSales(response.data.predictions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbarr />
      <div className="w-full h-full flex flex-row flex-wrap bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="w-1/5 h-full sticky top-0">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full flex justify-center items-center p-8">
          <Card
            className="w-2/3 shadow-lg bg-white border-2 border-blue-100 
            hover:border-blue-300 transition-all duration-300"
          >
            <form onSubmit={handleSubmit}>
              <CardHeader className="bg-blue-600 text-white p-4 text-center">
                <h2 className="text-xl font-bold">Predict Sales</h2>
              </CardHeader>
              <Divider />
              <CardBody className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    type="text"
                    name="Retailer"
                    label="Retailer"
                    variant="bordered"
                    value={formData.Retailer}
                    onChange={handleChange}
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="Region"
                    label="Region"
                    variant="bordered"
                    value={formData.Region}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="State"
                    label="State"
                    variant="bordered"
                    value={formData.State}
                    onChange={handleChange}
                  />
                </div>
                {/* Similar grid layout for other inputs */}
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    type="number"
                    name="Predicted Sales"
                    label="Predicted Sales"
                    variant="bordered"
                    value={predictedSales}
                    readOnly
                  />
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-center p-4">
                <Button
                  type="submit"
                  className="bg-purple-600 text-white hover:bg-purple-700 w-1/2"
                >
                  Predict Sales
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Predict;
