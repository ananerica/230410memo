import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LandingPage = () => {
  const [myInfo, setMyInfo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { data: info }
        } = await axios.get("http://localhost:3001/my/info");

        setMyInfo(info);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const fireAlert = async () => {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool"
    });
  };

  const infoSection = myInfo?.name ? (
    <li>{myInfo.name}</li>
  ) : (
    <button
      className="px-6 py-2 rounded-lg text-gray-300 font-medium hover:bg-yellow"
      onClick={fireAlert}
    >
      登入
    </button>
  );

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 flex justify-center items-center bg-yellow">
        <div className="text-center">
          <h1 className="text-7xl text-white mb-4">
            Tripllo
            <span className="text-5xl block transform scale-y-(-0.5) text-opacity-50 text-white">
              Tripllo
            </span>
          </h1>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center bg-blue">
        <div className="text-center">
          <h2 className="text-4xl text-white mb-2">讓旅程更自由</h2>
          {/* <button className="px-6 py-2 rounded-lg text-gray-300 font-medium hover:bg-yellow">Login</button> */}
          <div>{infoSection}</div>
          <button className="px-6 py-2 rounded-lg text-gray-300 font-medium hover:bg-yellow">
            註冊
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
