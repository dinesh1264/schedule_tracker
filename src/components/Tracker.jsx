import React, { useEffect } from "react";
import { useRecordsContext } from "../context/RecordsProvider";

export const Tracker = () => {
  const records = useRecordsContext();

  useEffect(() => {}, [records]);

  if (!records || records.length === 0) {
    return <p>No records available.</p>;
  }

  return (
    <div className="ml-30 mt-20 mr-20 tracker">
      <h1 className="font-black text-[#00cda2] text-2xl underline decoration-[#f35b87] decoration-4"></h1>

      <div className="flex flex-row mt-10 perspective-distant tracker-main-div">
        {records.map((record) => (
          <div
            className={`bg-[#302c2c] h-full w-full mr-10 rounded-sm card ${record.person}`}
            key={record.id}
          >
            <img
              src={`/${record.person}.png`}
              alt={`${record.person} image`}
              className="w-full h-[20rem] rounded-sm"
            />
            <div className="text-white text-4xl font-black text-center py-5 bg-indigo-900 card-heading">
              <p>{record.person.toUpperCase()}</p>
            </div>
            <div className="flex font-black text-3xl text-center tracker-info">
              <p className=" bg-red-600">
                <span className="card-title">Completed %:</span>{" "}
                <span className="number">
                  {((record.taskCount / record.taskTotal) * 100).toFixed(2)}%
                </span>
              </p>
              <p className="bg-cyan-500 p-1">
                <span className="card-title">Completed:</span>{" "}
                <span className="number">{record.taskCount}</span>
              </p>
              <p className="bg-indigo-600 p-1">
                <span className="card-title">Total Task:</span>{" "}
                <span className="number">{record.taskTotal}</span>
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};
