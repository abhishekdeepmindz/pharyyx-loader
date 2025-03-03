import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="w-4 h-12 bg-blue-500 rounded-md bg-primary animate-bounce" />
      <span className="w-4 h-16 bg-blue-500 rounded-md bg-primary animate-bounce" />
      <span className="w-4 bg-blue-500 rounded-md h-9 bg-primary animate-bounce" />
      <span className="w-4 h-16 bg-blue-500 rounded-md bg-primary animate-bounce" />
      <span className="w-4 h-12 bg-blue-500 rounded-md bg-primary animate-bounce" />
    </div>
  );
};

export default Loader;
