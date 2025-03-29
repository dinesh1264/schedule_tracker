import React, { useEffect } from "react";
import { useRecordsContext } from "../context/RecordsProvider";

export const Tracker = () => {
  const records = useRecordsContext();

  useEffect(() => {}, [records]);

  if (!records || records.length === 0) {
    return <p>No records available.</p>;
  }

  return (
    <div className="ml-30 mt-20 mr-20">
      <h1 className="font-black text-[#00cda2] text-2xl underline decoration-[#f35b87] decoration-4"></h1>

      <div className="flex flex-row mt-10 perspective-distant">
        {records.map((record) => (
          <div
            className="relative bg-[#302c2c] h-full w-full mr-10 ring-4 ring-black rounded-sm -skew-y-5  card shadow-2xl shadow-green-400"
            key={record.id}
          >
            <img
              src={`../public/${record.person}.png`}
              alt={`${record.person} image`}
              className=" w-full h-full rounded-sm"
            />
            <div className="text-white font-black text-center py-5 bg-indigo-900 card-heading">
              <p>{record.person.toUpperCase()}</p>
            </div>
            <div className="flex font-black text-1xl text-center">
              <p className=" bg-red-600 p-3 shadow-2xl shadow-red-200">
                <span className="card-title text-xl">Completed %:</span>{" "}
                <span className="number">
                  {((record.task / (365 * 5)) * 100).toFixed(2)}%
                </span>
              </p>
              <p className="bg-cyan-500 p-3 shadow-xl shadow-cyan-300">
                <span className="card-title text-xl">Completed:</span>{" "}
                <span className="number">{record.task}</span>
              </p>
              <p className="bg-indigo-600 p-3 shadow-2xl shadow-indigo-100">
                <span className="card-title text-xl">Total Task:</span>{" "}
                <span className="number">{365 * 5}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
