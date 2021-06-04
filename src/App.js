import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar/NavigationBar";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import AboutUs1 from "./pages/AboutUs1";
import Footer from "./pages/Footer/Footer";
import Webteam from "./pages/WebTeam/WebTeam";
import Events from "./pages/Events/Events";
import "./styles.css";
import RegisterLogin1 from "./components/RegisterLogin1";
import PrivateRoute from "./components/utils/PrivateRoute";
import PublicRoute from "./components/utils/PublicRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={RegisterLogin1} />
        <PublicRoute exact path="/register" component={RegisterLogin1} />
        <PublicRoute path="/my-profile" component={Profile} />
        <PublicRoute path="/ContactUs" component={ContactUs} />
        <PublicRoute path="/AboutUs" component={AboutUs1} />
        <PublicRoute path="/team" component={Webteam} />
        <PublicRoute path="/events" component={Events} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
