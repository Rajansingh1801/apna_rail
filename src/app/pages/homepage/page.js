import Traincard from "@/app/component/traincard";
import React from "react";
export default function Home() {
  return (
    <div className="homepage object-cover relative">
      <video autoPlay loop muted className="w-full h-screen object-cover">
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <div className="homebody w-full">
        <h1 className="text-white text-7xl">Apna Rail</h1>

        <div>
          <div className="flex">
            <div>
              <Traincard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
