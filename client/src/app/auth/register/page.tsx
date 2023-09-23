import RegisterComponent from "@/app/components/organisms/RegisterComponent/RegisterComponent";
import React from "react";

export const metadata = {
  title: "Jobanaut - Register",
};

const RegisterPage = () => {
  return (
    <div className="smallLaptop:w-[414px] mx-auto">
      <RegisterComponent />
    </div>
  );
};

export default RegisterPage;
