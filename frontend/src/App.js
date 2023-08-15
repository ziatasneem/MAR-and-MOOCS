import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import Moocs from "./screens/Moocs/Moocs";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Credits from "./screens/Credits/Credits"
import Mar from "./screens/Mar/Mar";
function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App" style={{minHeight: "87vh"}}>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path='/credits' component={Credits}></Route>
        <Route path='/moocs' component={Moocs}></Route>
        <Route path='/mar' component={Mar}></Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
