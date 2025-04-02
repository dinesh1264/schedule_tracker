import React, { useEffect } from "react";
import { useRecordsContext } from "../context/RecordsProvider";
import { db } from "../firebase";
import { arrayRemove, increment, updateDoc, doc } from "firebase/firestore";
import { TiTickOutline } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";

export const Todo = () => {
  const records = useRecordsContext();

  useEffect(() => {}, [records]);

  const handleDelete = async (person, taskObj) => {
    try {
      const docRef = doc(db, "progress", person);
      await updateDoc(docRef, {
        tasks: arrayRemove(taskObj),
        taskCount: increment(-1),
      });
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleComplete = async (person, taskObj) => {
    try {
      const docRef = doc(db, "progress", person);
      await updateDoc(docRef, {
        tasks: arrayRemove(taskObj),
      });
    }catch(error){
      console.error("Error marking task as completed", error);
    }
  }

  return (
    <div className="ml-20">
      <div className="flex flex-row py-10 text-center">
        {records.map((task) => (
          <div key={task.id} className=" mr-10 h-104 w-2xl">
            <h1 className="pt-10 text-4xl text-[#3fb] font-black task-title shadow-2xl shadow-sky-300 rounded-md">
              {task.person.toUpperCase()}
            </h1>
            
            {task.tasks.length > 0 ? "" : <div className="text-5xl mt-35 font-black todo-list">No task 😒</div>}

            {task.tasks.map((taskObj, index) => (
              <div key={index} className="flex mt-9 px-10 gap-5">
                <div className="w-[25rem] ">
                  <p className="text-4xl font-bold todo-list">{taskObj.task}</p>
                </div>
                <div>
                  <button className="px-5 cursor-pointer" onClick={() => handleComplete(task.person, taskObj)}>
                    <TiTickOutline className="text-5xl hover:text-green-500 rounded-lg active:translate-y-1 shadow-2xs shadow-white active:shadow-lg active:shadow-green-500" />
                  </button>
                  <button
                    onClick={() => handleDelete(task.person, taskObj)}
                    className="cursor-pointer "
                  >
                    <TiTrash className="text-5xl rounded-lg active:translate-y-1 hover:text-red-700 shadow-2xs shadow-white active:shadow-lg active:shadow-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
