import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo";
import Page from "../../components/Page";

const Auth = () => {
  return (
    <Page style="pt-16 flex flex-col gap-16">
      <Logo />
      <div className="w-full flex justify-center flex-1">
        <Outlet />
      </div>
    </Page>
  );
};

export default Auth;
