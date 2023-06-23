import React from "react";

const Error = ({ children }) => {
  return (
    <div 
      className="w-4/5 max-w-xl text-center mx-auto uppercase text-red-500 font-semibold">
      {children}
    </div>
  );
};

export default Error;
