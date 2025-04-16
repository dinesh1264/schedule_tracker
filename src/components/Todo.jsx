import React, { useEffect, useRef, useState } from "react";
import { useRecordsContext } from "../context/RecordsProvider";
import { db } from "../firebase";
import { arrayRemove, increment, updateDoc, doc } from "firebase/firestore";
import { TiTickOutline } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";
import { RxDragHandleDots2 } from "react-icons/rx";
import Sortable from "sortablejs";

export const Todo = () => {
  const [hide, setHide] = useState(false)

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
    } catch (error) {
      console.error("Error marking task as completed", error);
    }
  };

  const [items, setItems] = useState(records)

  const listRef = useRef(null)

  const itemsRef = useRef(items)

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    let sortable;
    if (listRef.current) {
      sortable = Sortable.create(listRef.current, {
        animation: 300,
        handle: '.drag-handle',
        onEnd: function (evt) {
          const newItems = [...itemsRef.current];
          const [removed] = newItems.splice(evt.newIndex, 1);
          newItems.splice(evt.newIndex, 0, removed);
          setItems(newItems);
        },
      });
    }
    return () => {
      if (sortable) {
        sortable.destroy();
      }
    };
  }, []);
  



  return (
    <div
      className="mx-10 flex flex-row py-10 pt-0 text-center todo-div"
      ref={listRef}
    >
      {records.map((task) => (
        <div key={task.id} className="mt-10 mr-10 h-104 w-2xl todo-card">
          <div className="flex pl-[20%] gap-[10%] pt-10 shadow-2xl shadow-[#393939] text-4xl todo-header">
            <RxDragHandleDots2 className="drag-handle cursor-move" />
            <h1 className=" text-[#00BFFF] font-black task-title text-shadow-2xs text-shadow-white rounded-md">
              {task.person.toUpperCase()}
            </h1>
          </div>

          {task.tasks.length > 0 ? (
            ""
          ) : (
            <div className="text-5xl mt-35 ml-20 text-center font-black todo-notask">
              No task 😒
            </div>
          )}

          {task.tasks.map((taskObj, index) => (
            <div key={index} className="flex mt-9 gap-5 todo-task-div">
              <div className="w-[25rem] task-text">
                <p className="text-4xl font-bold todo-list">{taskObj.task}</p>
              </div>
              <div>
                <button
                  className="px-5 cursor-pointer"
                  onClick={() => handleComplete(task.person, taskObj)}
                >
                  <TiTickOutline className="todo-icon text-5xl hover:text-green-500 rounded-lg active:translate-y-1 shadow-2xs shadow-white active:shadow-lg active:shadow-green-500" />
                </button>
                <button
                  onClick={() => handleDelete(task.person, taskObj)}
                  className="cursor-pointer "
                >
                  <TiTrash className="todo-icon text-5xl rounded-lg active:translate-y-1 hover:text-red-700 shadow-2xs shadow-white active:shadow-lg active:shadow-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
