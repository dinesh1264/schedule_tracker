import { useForm } from "react-hook-form";
import { increment, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";


export const Form = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", defaultValues: { person: "", task:1}});
  
  const onSubmit = async (data) => {
    const { person,task } = data;
    try {
      const docRef = doc(db, "progress", person);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        await setDoc(docRef, {task: increment(task)}, {merge:true});
      }else{
        await setDoc(docRef,{person, task:task});
      }
      reset();
      
    } catch(error){
      console.error("Error adding document", error);
    }
  };

  console.log(errors);

  return (
    <div className="ml-20 mt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className=" font-black text-[#00cda2] text-4xl title">
            Track Your Progress
          </legend>
          <div className="flex flex-col space-y-3 py-5 w-93 text-2xl">
            <label htmlFor="person" className="font-black">Choose a person</label>
            <select
              defaultValue={""}
              {...register("person", {
                required: "Please select a person",
              })}
              id="person"
              className="bg-white text-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none active:border-blue-600 border-2"
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

            <label htmlFor="task" className="font-black">Enter the number of task</label>
            <input
              {...register("task", {
                required: "Please enter a number of task completed",
                min: { value: 1, message: "Number must be at least 1" },
                max: { value: 10, message: "Number must be at most 10" },
              })}
              type="number"
              id="task"
              className="bg-white text-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none active:border-blue-600 border-2"
              placeholder="Task completed today"
            />
            {errors.task && (
              <p className="text-red-600">{errors.task.message}</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white font-black p-2 rounded-md active:shadow-lg active:shadow-blue-300 shadow-md shadow-blue-300 hover:bg-blue-400 active:scale-95 transition-transform duration-150"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>

    </div>
  );
};
