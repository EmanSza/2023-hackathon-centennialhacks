import ResetPasswordComponent from "@/app/components/organisms/ResetPasswordComponent/ResetPasswordComponent";
import React from "react";

export const metadata = {
  title: "Jobanaut - Reset Password",
};

const ReserPasswordPage = () => {
  return (
    <div className="smallLaptop:w-[414px] mx-auto">
      <ResetPasswordComponent />
    </div>
  );
};

export default ReserPasswordPage;
