import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HomeNav from "../../components/HomeNav";
import Page from "../../components/Page";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (["/", "/explore"].includes(location)) navigate("/explore/all");
  }, [location, navigate]);

  return (
    <Page>
      <div className="w-full flex flex-col">
        <HomeNav />
        <Outlet />
      </div>
    </Page>
  );
};

export default Home;
