import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Users from "./components/users";
import Main from "./components/main";
import Login from "./components/login";
import NavUsers from "./components/navUsers";

function App() {
    return (
        <>
            <NavBar />
            <Route path="/navUsers" component={NavUsers} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Main} />

            <Users />
        </>
    );
}

export default App;
