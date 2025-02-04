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
  Spinner,
} from "@nextui-org/react";
import { TrendingUp, Calculator } from "lucide-react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios
      .post("/predict", formData)
      .then((response) => {
        setPredictedSales(response.data.predictions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to predict sales");
        setLoading(false);
      });
  };

  return (
    <>
      <Navbarr />
      <div className="w-full min-h-screen flex flex-row bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="w-1/5 h-full sticky top-0">
          <Sidebar />
        </div>
        <div className="w-4/5 flex justify-center items-center p-8">
          <Card
            className="w-full max-w-4xl shadow-lg hover:shadow-xl 
            transition-all duration-300 border-2 border-blue-200 
            hover:border-blue-300"
          >
            <form onSubmit={handleSubmit}>
              <CardHeader className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Calculator className="text-blue-600" size={32} />
                  <h2 className="text-2xl font-bold text-blue-900">
                    Sales Prediction
                  </h2>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    type="text"
                    name="Retailer"
                    label="Retailer"
                    placeholder="Walmart"
                    value={formData.Retailer}
                    onChange={handleChange}
                    variant="bordered"
                  />
                  <Input
                    type="text"
                    name="Region"
                    label="Region"
                    placeholder="Northeast"
                    value={formData.Region}
                    onChange={handleChange}
                    variant="bordered"
                  />
                  <Input
                    type="text"
                    name="State"
                    label="State"
                    placeholder="New York"
                    value={formData.State}
                    onChange={handleChange}
                    variant="bordered"
                  />
                </div>
                {/* Similar grid layouts for other input groups */}
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    type="text"
                    name="City"
                    label="City"
                    placeholder="New York"
                    value={formData.City}
                    onChange={handleChange}
                    variant="bordered"
                  />
                  <Input
                    type="text"
                    name="Product"
                    label="Product"
                    placeholder="Men's Apparel"
                    value={formData.Product}
                    onChange={handleChange}
                    variant="bordered"
                  />
                  <Input
                    type="number"
                    name="Price per Unit"
                    label="Price per Unit"
                    placeholder="60.00"
                    value={formData["Price per Unit"]}
                    onChange={handleChange}
                    variant="bordered"
                  />
                </div>
                {/* Additional input groups... */}
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    type="number"
                    name="Predicted Sales"
                    label="Predicted Sales"
                    value={predictedSales}
                    placeholder="Prediction Result"
                    variant="bordered"
                    endContent={
                      loading ? <Spinner size="sm" /> : <TrendingUp />
                    }
                    readOnly
                  />
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-end p-6">
                <Button
                  type="submit"
                  color="primary"
                  variant="solid"
                  size="lg"
                  startContent={<TrendingUp />}
                  disabled={loading}
                >
                  {loading ? "Predicting..." : "Predict Sales"}
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
