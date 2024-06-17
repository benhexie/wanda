import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HomeNav from "../../components/HomeNav";
import Page from "../../components/Page";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/explore") navigate("/explore/all");
  }, [location, navigate]);

  return (
    <Page style="flex-1">
      <div className="w-full flex flex-col min-h-[calc(100vh-2rem)]">
        <HomeNav />
        <Outlet />
      </div>
    </Page>
  );
};

export default Home;
