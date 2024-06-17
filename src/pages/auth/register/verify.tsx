import { useState } from "react";
import AuthInput from "../../../components/AuthInput";
import AuthTemplate from "../../../layout/AuthTemplate";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  return (
    <AuthTemplate
      title="Just to be sure"
      image={require("../../../assets/images/rave.jpeg")}
      nextText="Continue"
      next={() => {
        navigate("/auth/register/password");
      }}
    >
      <AuthInput
        value={code}
        setValue={setCode}
        placeholder="x--x--x--x--x--x"
        label="Enter the verification code that was sent to the Email address provided."
        name="code"
      />
    </AuthTemplate>
  );
};

export default EmailVerify;
