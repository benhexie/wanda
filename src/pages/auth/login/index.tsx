import { useNavigate } from "react-router-dom";
import AuthTemplate from "../../../layout/AuthTemplate";
import { useState } from "react";
import AuthInput from "../../../components/AuthInput";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthTemplate
      title="Sign in"
      description="Get back to exploring"
      image={require("../../../assets/images/beach.jpeg")}
      next={() => {
        navigate("/explore/all");
      }}
      nextText="Sign In"
      secondText="I'm new to Wanda"
      secondLink="/auth/register"
    >
      <AuthInput
        value={username}
        setValue={setUsername}
        label="Username or Email Address"
        placeholder="e.g. chopLifeDuo"
      />
      <AuthInput
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
    </AuthTemplate>
  );
};

export default Login;
