import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPage from "./pages/AddExercisePage";
import EditPage from "./pages/EditExercisePage";
import HomePage from "./pages/HomePage";
import Navigation from './components/Navigation';
import Bells from './images/bells.png';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={Bells} alt="Bells" width="90px"></img>
        <h1>Fitness Daddy</h1>
        <p>This exercise tracking app will help you get beach bum ready!</p>
      </header>
      
      <div className="App-body">
        <Router>
          <Navigation />
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddPage />
          </Route>
          <Route path="/edit-exercise">
            <EditPage exerciseToEdit={exerciseToEdit} />
          </Route>
        </Router>
      </div>
      
      <footer className="App-footer">
        <p>© 2022 Matthew Armstrong, CS 290</p>
      </footer>
    </div>
  );
}

export default App;
