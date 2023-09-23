"use client";
import { useField } from "formik";
import React, { useState } from "react";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Icon from "../Icons";
import { classNames } from "@/app/libs/helpers";

const FormikCustomInput = ({ className = "", container = "", type, iconClass = "", iconPosition = "start", disabled = false, icon = "", inputClassName = "", ...props }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [field, meta] = useField<{}>(props);
  return (
    <div className="w-full">
      <div
        className={classNames(
          "flex items-center h-[3.571rem] w-full",
          className,
          meta.touched && meta.error ? "!border-red-500" : meta.touched && !meta.error ? "!border-green-600" : ""
        )}
      >
        <div className={classNames("flex px-5 bg-white text-black items-center justify-start h-full w-full rounded-[0.313rem] border-gray-100", container)}>
          {icon && iconPosition === "start" && <Icon className={iconClass} name={icon} />}
          <input
            className={`${inputClassName} focus:outline-none border-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full`}
            disabled={disabled}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            {...field}
            {...props}
          />

          {icon && iconPosition === "end" && <Icon className={iconClass} name={icon} />}
          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eyeSlash" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
    </div>
  );
};

export default FormikCustomInput;
