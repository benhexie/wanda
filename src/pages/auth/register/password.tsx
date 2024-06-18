import React, { useState } from "react";
import AuthTemplate from "../../../layout/AuthTemplate";
import AuthInput from "../../../components/AuthInput";
import { useNavigate } from "react-router-dom";

const RuleBox = ({ text, rule }: { text: string; rule: boolean }) => {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        className="size-4 accent-gray-700"
        onChange={() => {}}
        checked={rule}
      />
      <p className="">{text}</p>
    </div>
  );
};

const Password = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <AuthTemplate
      title="Create a secure password"
      image={require("../../../assets/images/rave.webp")}
      nextText="Continue"
      next={() => {
        navigate("/auth/register/welcome");
      }}
    >
      <div className="flex flex-col gap-8 text-gray-500">
        <p className="font-semibold">
          Your password must meet the following requirements:
        </p>
        <div className="flex flex-col gap-4">
          <RuleBox
            text="Minimum of eight characters"
            rule={password.length >= 8}
          />
          <RuleBox
            text="Minimum of one uppercase letter"
            rule={/[A-Z]/.test(password)}
          />
          <RuleBox
            text="Minimum of one lowercase letter"
            rule={/[a-z]/.test(password)}
          />
          <RuleBox text="Minimum of one number" rule={/[0-9]/.test(password)} />
          <RuleBox
            text="Minimum of one special character "
            rule={/[!@#\$%\^\&*\)\(+=._-]/.test(password)}
          />
        </div>
      </div>
      <AuthInput
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
        type="password"
        name="password"
      />
    </AuthTemplate>
  );
};

export default Password;
