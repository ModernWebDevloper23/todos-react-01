import React from "react";

function App() {
  return (
    <div className="main w-full h-full bg-gray-800 flex  items-center justify-center flex-col">
      <div className="div1 flex">
        <input
          type="text"
          placeholder="enter you task"
          className="w-[40vw] h-[10vh] bg-gray-100 rounded-[60px]"
        />
        <button className="w-[10vw] h-[10vh] rounded-[40px] bg-blue-600">
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
