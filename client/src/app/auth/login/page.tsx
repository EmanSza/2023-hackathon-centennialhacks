import LoginComponent from "@/app/components/organisms/LoginComponent/LoginComponent";
import React from "react";

export const metadata = {
  title: "Jobanaut - Login",
};

const LoginPage = () => {
  return (
    <div className="smallLaptop:w-[414px] mx-auto">
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
