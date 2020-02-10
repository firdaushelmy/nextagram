import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import LoadingIndicator from "./components/images/LoadingIndicator";
// import userImages from "./components/userImages.js";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfilePage from "./components/userProfilePage"
import { Navbar } from "reactstrap";
import UploadPage from "./components/UploadPage"


// what the arsefuck is this?
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //what in the bloody arsefuck is this? get api and set the effect from getting result and change the loadingIndicator to false
  useEffect(() => {
    axios.get("https://insta.nextacademy.com/api/v1/users/").then(result => {
      setUsers(result.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  } else {
    return (
      <>
        <div className="App">
          <NavBar />
          <Navbar />

          <Route exact path="/">
            <HomePage users={users} isLoading={isLoading} />
          </Route>


          <Link to="/">UploadPage</Link>
          <Route exact path="/">
            <UploadPage isLoading={isLoading} />
          </Route>



        </div>
      </>
    )
  }
};


export default App;
