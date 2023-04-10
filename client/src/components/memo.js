import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import TodoList from "./Todoapi";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      <div
        className={`bg-blue text-white h-screen transition-all duration-500 ${
          isOpen ? "w-56" : "w-5"
        }`}
      >
        <div className={`bg-yellow transition-all duration-500 `}>
          <FaBars
            onClick={toggle}
            className={`ml-0 transition-all duration-500 ${
              isOpen ? "translate-x-52" : "translate-x-0"
            }`}
          />
        </div>
        <h1
          className={`mt-2 text-lg text-center flex-1 transition-all duration-500 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Memo
        </h1>
        <div className="p-1" style={{ display: isOpen ? "block" : "none" }}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};
