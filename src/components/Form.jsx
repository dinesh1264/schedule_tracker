import { useForm } from "react-hook-form";
import {
  increment,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { Alert } from "./Alert";

export const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", defaultValues: { person: "", task: "" } });

  const onSubmit = async (data) => {
    data.task = data.task.toLowerCase();
    const { person, task } = data;

    try {
      const docRef = doc(db, "progress", person);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          tasks: arrayUnion({ task }),
          taskTotal: increment(1),
        });
      } else {
        await setDoc(docRef, {
          person,
          tasks: [{ task }],
          taskCount: 1,
          taskTotal: 1,
        });
      }
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000)
      reset();
    } catch (error) {
      console.error("Error adding document", error);
    }
  };

  

  return (
    <div className="mt-30 flex justify-center-safe relative form-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className="font-black text-[#39FF14] text-shadow-sm text-shadow-white text-4xl title pb-10 form-legend">
            Track Your Progress
          </legend>
          <div className="flex flex-col space-y-3 py-5 w-93 text-2xl form-inner-div">
            <label htmlFor="person" className="font-black">
              Choose a person
            </label>
            <select
              defaultValue={""}
              {...register("person", {
                required: "Please select a person",
              })}
              id="person"
              className="bg-white cursor-pointer text-black p-2 rounded-md shadow-sm caret-pink-500 focus:ring-2 focus:ring-orange-500 focus:outline-none active:border-orange-600 border-2"
            >
              <option value="" disabled>
                Choose a person
              </option>
              <option value="dinesh">Dinesh</option>
              <option value="roshan">Roshan</option>
            </select>
            {errors.person && (
              <p className="text-red-600">{errors.person.message}</p>
            )}

            <label htmlFor="task" className="font-black">
              Enter the task
            </label>
            <input
              {...register("task", {
                required: "Please enter a task",
                validate: (value) => {
                  if (value.length < 3) {
                    return "Please enter at least 3 letters";
                  }
                  if (value.length > 12) {
                    return "Please enter no more than 10 letters";
                  }
                  return true;
                },
              })}
              type="text"
              id="task"
              className="bg-white text-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none active:border-orange-500 border-2"
              placeholder="Enter the task"
            />
            {errors.task && (
              <p className="text-red-600">{errors.task.message}</p>
            )}

            <button
              type="submit"
              className="cursor-pointer text-black bg-[#FFFF33] font-black p-2 rounded-md active:shadow-lg active:shadow-[#ffff33ce] shadow-md shadow-blue-300 hover:bg-[#ffff33dd] active:scale-95 transition-transform duration-150 "
            >
              Add Task
            </button>
          </div>
        </fieldset>
      </form>
      <div className="absolute top-14">
        <Alert
          show={showModal}
          type={"submit"}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};
