import React, { useEffect } from "react";
import { useRecordsContext } from "../context/RecordsProvider";

export const Tracker = () => {
  const records = useRecordsContext();

  useEffect(() => {
    console.log("Updated records:", records);
  }, [records]);

  if (!records || records.length === 0) {
    return <p>No records available.</p>;
  }

  return (
    <div className="ml-20 mt-20">
      <h1 className="font-black text-[#00cda2] text-2xl">
        Progress made this year so far...
      </h1>

      <div className="mt-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4">Name</th>
              <th className="border border-gray-300 p-4">% completed</th>
              <th className="border border-gray-300 p-4">Task Completed</th>
              <th className="border border-gray-300 p-4">Total Task</th>
            </tr>
          </thead>
          <tbody className="border">
            {records.map((record) => (
              <tr key={record.id}>
                <td className="border p-4">{record.person}</td>
                <td className="border p-4">
                  {(record.task / (365 * 5)) * 100}%
                </td>
                <td className="border p-4">{record.task}</td>
                <td className="border p-4">{365 * 5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
