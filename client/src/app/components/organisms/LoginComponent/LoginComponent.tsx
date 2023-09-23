import React from "react";

import RegularSignIn from "./RegularSignIn/RegularSignIn";

const LoginComponent = () => {
  return (
    <div className="w-full py-8">
      <h1 className="text-[22px] smallLaptop:text-32 font-medium pb-[40px] text-center">Login</h1>
      <RegularSignIn />
    </div>
  );
};

export default LoginComponent;
