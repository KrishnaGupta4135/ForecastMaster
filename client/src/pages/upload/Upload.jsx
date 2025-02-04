import React, { useState } from "react";
import axios from "axios";
import Navbarr from "../../components/navbarr";
import Sidebar from "../../components/sidebar";
// import { Card } from "@nextui-org/react";
import { Card, Button } from "@nextui-org/react";
import { Upload as UploadIcon } from "lucide-react";
const Upload = () => {
  const [csv, setCsv] = useState();

  const apiUrl = process.env.REACT_APP_API_URL;

  const uploadCSV = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", csv);

    try {
      const response = await axios.post(
        // "http://localhost:5000/upload",
        `${apiUrl}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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
            className="w-1/2 p-8 shadow-lg bg-white border-2 border-teal-100 
            hover:border-teal-300 transition-all duration-300"
          >
            <form
              className="flex flex-col items-center space-y-6"
              onSubmit={uploadCSV}
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Upload Data File
              </h2>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
                onChange={(e) => setCsv(e.target.files[0])}
              />
              <Button
                type="submit"
                className="bg-teal-600 text-white hover:bg-teal-700 w-full"
                startContent={<UploadIcon />}
              >
                Upload File
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Upload;
