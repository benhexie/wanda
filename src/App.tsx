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
import Hero from "./pages/hero";
import EmailVerify from "./pages/auth/register/verify";
import Password from "./pages/auth/register/password";
import Welcome from "./pages/auth/register/welcome";
import ProfileMain from "./pages/home/profile/main";
import NewTrip from "./pages/home/trips/new";
import NewFriend from "./pages/home/crew/new";
import NoChatSelected from "./pages/home/crew/main";
import Chat from "./pages/home/crew/chat";

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
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Home />}>
            <Route path="explore" />
            <Route path="explore/:tag" element={<Explore />}>
              <Route index element={<ExploreMain />} />
              <Route path=":place" element={<ExplorePlace />} />
            </Route>
            <Route path="trips" element={<Trips />}>
              <Route path=":trip" element={<Trip />} />
              <Route path="new" element={<NewTrip />} />
            </Route>
            <Route path="crew" element={<Crew />}>
              <Route index element={<NoChatSelected />} />
              <Route path="new" element={<NewFriend />} />
              <Route path="chat/:chat" element={<Chat />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route index element={<ProfileMain />} />
            </Route>
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register">
              <Route index element={<Register />} />
              <Route path="verify" element={<EmailVerify />} />
              <Route path="password" element={<Password />} />
              <Route path="welcome" element={<Welcome />} />
            </Route>
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
