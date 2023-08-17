import Link from "next/link";
import React from "react";

export default function Traincard() {
  const train = [
    {
      id: 1,
      name: "SearchStation",
      route: "/SearchStation",
    },
    {
      id: 2,
      name: "GetFare",
      route: "/Fare",
    },
    {
      id: 3,
      name: "Train Between Stations ",
      route: "/TrainsBetweenStations ",
    },
    {
      id: 4,
      name: "Get Train Live Status",
      route: "/GetTrainLiveStatus",
    },
    {
      id: 5,
      name: "Get Train Schedule",
      route: "/GetTrainSchedule",
    },
    {
      id: 6,
      name: "Get PNR Status ",
      route: "/GetPNRStatus ",
    },
    {
      id: 7,
      name: "Check Seat Availability",
      route: "/CheckSeatAvailability",
    },
    {
      id: 8,
      name: "GetTrainClasses",
      route: "/GetTrainClasses",
    },
    {
      id: 9,
      name: "Get Trains By Station",
      route: "/GetTrainsByStation",
    },
    {
      id: 10,
      name: "Get Live Station",
      route: "/GetLiveStation",
    },
    {
      id: 11,
      name: "SearchTrain",
      route: "/SearchTrain",
    },
  ];

  return (
    <div className="card px-56 py-12">
      {train.map((item) => {
        return (
          <div className="card-list">
            <Link key={item.id} href={item.route}>
              <h5>{item.name}</h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
