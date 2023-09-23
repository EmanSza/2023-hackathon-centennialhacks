import React from "react";

const ErrorMessage = ({ error = "" }: { error?: string }) => {
  return <p className="text-red-400 w-[90%] font-normal text-12 mt-2">{error}</p>;
};

export default ErrorMessage;
