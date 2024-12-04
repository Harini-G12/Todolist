import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Filters from "./components/Dashboard/Filters";
import TaskEditor from "./components/Dashboard/TaskEditor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/taskeditor" element={<TaskEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
