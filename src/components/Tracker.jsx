import React, { useEffect } from "react";
import { useRecordsContext } from "../context/RecordsProvider";

export const Tracker = () => {
  const records = useRecordsContext();

  useEffect(() => {}, [records]);

  if (!records || records.length === 0) {
    return <p>No records available.</p>;
  }

  return (
    <div className="ml-30 mt-10 mr-20 tracker">
      <h1 className="font-black text-[#00cda2] text-2xl underline decoration-[#f35b87] decoration-4"></h1>

      <div className="flex flex-row mt-10 perspective-distant tracker-main-div">
        {records.map((record) => (
          <div
            className={`h-[30rem] w-full mr-10 rounded-sm hover:-translate-y-[30px] overflow-hidden relative card ${record.person}`}
            key={record.id}
          >
            <img
              src={`/${record.person}.png`}
              alt={`${record.person} image`}
              className="w-full h-full rounded-sm hover:w-[200%]"
            />
            <div className="pt-5 pb-1 text-white w-full bottom-0 transition-all duration-500 backdrop-blur-md text-3xl text-center absolute card-heading">
              <p className="p-3 font-black text-shadow-md text-shadow-gray-900">
                {record.person.toUpperCase()}
              </p>

              <div className="text-2xl pt-5 text-center tracker-info grid grid-cols-3 text-shadow-md text-shadow-gray-600">
                <div className="p-1">
                  <p className="card-title">Completed %</p>
                  <p className="number">
                    {((record.taskCount / record.taskTotal) * 100).toFixed(2)}%
                  </p>
                </div>
                <div className="p-1 border-x border-gray-500 mb-3">
                  <p className="card-title">Completed:</p>
                  <p className="number">{record.taskCount}</p>
                </div>
                <div className=" p-1">
                  <p className="card-title">Total Task:</p>{" "}
                  <p className="number">{record.taskTotal}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
