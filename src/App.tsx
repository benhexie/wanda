import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgot-password";
import Explore from "./pages/home/explore";
import Trips from "./pages/home/trips";
import Crew from "./pages/home/crew";
import Profile from "./pages/home/profile";
import ExploreMain from "./pages/home/explore/main";
import ExplorePlace from "./pages/home/explore/place";
import Trip from "./pages/home/trips/trip";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="explore" />
            <Route path="explore/:tag" element={<Explore />}>
              <Route index element={<ExploreMain />} />
              <Route path=":place" element={<ExplorePlace />} />
            </Route>
            <Route path="trips" element={<Trips />}>
              <Route path=":trip" element={<Trip />} />
            </Route>
            <Route path="crew" element={<Crew />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
