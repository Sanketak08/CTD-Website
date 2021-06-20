import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar/NavigationBar";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import AboutUs1 from "./pages/AboutUs1";
import Footer from "./pages/Footer/Footer";
import Webteam from "./pages/WebTeam/WebTeam";
import Events from "./pages/Events/Events";
import "./styles.css";
import RegisterLogin1 from "./components/RegisterLogin1";
import PublicRoute from "./components/utils/PublicRoute";
import Home1 from "./pages/Home1";
import "./assets/css/Home1.css";

function App() {
  return (
    <Router>
      
      <Switch>
        <PublicRoute exact path="/" >
          <Home1></Home1>
          <AboutUs1></AboutUs1>

        </PublicRoute>
        {/* <PublicRoute exact path="/login" component={RegisterLogin1} />
        <PublicRoute exact path="/register" component={RegisterLogin1} />
        <PublicRoute path="/my-profile" component={Profile} />
        <PublicRoute path="/ContactUs" component={ContactUs} />
        <PublicRoute path="/AboutUs" component={AboutUs1} /> */}
        <PublicRoute path="/team" component={Webteam} />
        <PublicRoute path="/events" component={Events} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
