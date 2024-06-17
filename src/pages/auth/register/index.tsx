import { useState } from "react";
import AuthInput from "../../../components/AuthInput";
import AuthTemplate from "../../../layout/AuthTemplate";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <AuthTemplate
      title="Welcome to Wanda"
      description="Discover. Plan. Explore"
      image={require("../../../assets/images/rave.jpeg")}
      nextText="Sign up"
      next={() => {
        navigate("verify");
      }}
      secondText="Take me to Sign in"
      secondLink="/auth/login"
    >
      <AuthInput
        value={username}
        setValue={setUsername}
        label="Username"
        placeholder="e.g. chopLifeDuo"
      />
      <AuthInput
        value={email}
        setValue={setEmail}
        label="Email address"
        placeholder="johnsmith@gmail.com"
      />
    </AuthTemplate>
  );
};

export default Register;
