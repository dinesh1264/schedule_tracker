import React from "react";

export const Alert = ({ show, type, onClose }) => {
  if (!show) return null;

  return (
    <div>
      <div className="text-center rounded-md backdrop-blur-xl pb-2">
        {type === "submit" && (
          <>
            <img
              src="/submitted.gif"
              alt="kid might guy graphical interface"
              className="w-full h-full"
            />
            <p className="text-3xl text-green-400 text-shadow-2xs text-shadow-black font-black">
              Submitted!
            </p>
          </>
        )}
        {type === "tick" && (
          <>
            <img
              src="/madara-uchiha.gif"
              alt="hashirama and madara handshake graphical interface"
              className="w-full h-full"
            />
            <p className="text-3xl text-yellow-300 text-shadow-2xs text-shadow-black font-black">
              Great work you completed the task! 😎
            </p>
          </>
        )}
        {type === "cross" && (
          <>
            <img
              src="/weakness.gif"
              alt="madara talking about weakness graphical interface"
            />
            <p className="text-3xl text-green-400 text-shadow-2xs text-shadow-black font-black">
              Task removed successfully!👍
            </p>
          </>
        )}
        {type === "delete" && (
          <>
            <img
              src="/sad.gif"
              alt="naruto crying graphical user interface"
              className="w-full h-[15rem]"
            />
            <p className="text-3xl text-shadow-2xs text-shadow-black font-black">
              Task marked as incomplete!🤦‍♂️
            </p>
          </>
        )}
        <button
          onClick={onClose}
          className="cursor-pointer text-orange-500 text-2xl font-black bg-black px-3 py-2 rounded-md text-shadow-2xs text-shadow-gray-600 shadow-md shadow-amber-50 hover:translate-y-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};
