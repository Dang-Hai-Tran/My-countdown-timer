import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import logo_timer from "./assets/img/timer.svg";
import Form from "./components/Form";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <header className="app__header py-3">
          <img src={logo_timer} alt="logo_timer" id="logo__timer" />
          <h1 className="app__name">Countdown Timer</h1>
        </header>
        <Form />
      </div>
    </div>
  );
}

export default App;
