import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="w-4 h-12 rounded-md bg-primary animate-bounce" />
      <span className="w-4 h-16 rounded-md bg-primary animate-bounce" />
      <span className="w-4 rounded-md h-9 bg-primary animate-bounce" />
      <span className="w-4 h-16 rounded-md bg-primary animate-bounce" />
      <span className="w-4 h-12 rounded-md bg-primary animate-bounce" />
    </div>
  );
};

export default Loader;
