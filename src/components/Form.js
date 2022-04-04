import React, { useRef, useState } from "react";

const Form = () => {
  const [timer, setTimer] = useState({
    hours: 0,
    mins: 0,
    seconds: 0,
  });

  const strHours = timer.hours >= 10 ? `${timer.hours}` : `0${timer.hours}`;
  const strMins = timer.mins >= 10 ? `${timer.mins}` : `0${timer.mins}`;
  const strSeconds = timer.seconds >= 10 ? `${timer.seconds}` : `0${timer.seconds}`;

  let timeleftInSeconds = timer.hours * 3600 + timer.mins * 60 + timer.seconds;
  const resetInput = () => {
    const inputArr = document.querySelectorAll("input");
    inputArr.forEach((item) => {
      item.value = "";
    });
  };
  const logo = document.getElementById("logo__timer");
  const startRotate = () => {
    logo.style.animationPlayState = "running";
  };
  const pausedRotate = () => {
    logo.style.animationPlayState = "paused";
  };

  const intervalId = useRef(null);
  const start = () => {
    if (timeleftInSeconds === 0) {
      return alert("Please enter a number!");
    }
    resetInput();
    startRotate();
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      timeleftInSeconds -= 1;
      const hours = Math.floor(timeleftInSeconds / 3600);
      const mins = Math.floor((timeleftInSeconds - hours * 3600) / 60);
      const seconds = timeleftInSeconds - hours * 3600 - mins * 60;
      setTimer(() => {
        return {
          hours: hours,
          mins: mins,
          seconds: seconds,
        };
      });
    }, 1000);
  };
  const stop = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    pausedRotate();
  };
  const reset = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setTimer({
      hours: 0,
      mins: 0,
      seconds: 0,
    });
  };

  return (
    <div className="container-fluid">
      <div className="row py-3">
        <div className="form__number col-md-4">
          <input
            type="number"
            name="hours"
            id="hours__input"
            placeholder="Enter your hours"
            min={0}
            onChange={(e) => setTimer({ ...timer, hours: Number(e.target.value) })}
          />
        </div>
        <div className="form__number col-md-4">
          <input
            type="number"
            name="mins"
            id="mins__input"
            placeholder="Enter your mins"
            min={0}
            onChange={(e) => setTimer({ ...timer, mins: Number(e.target.value) })}
          />
        </div>
        <div className="form__number col-md-4">
          <input
            type="number"
            name="seconds"
            id="seconds__input"
            placeholder="Enter your seconds"
            min={0}
            onChange={(e) => setTimer({ ...timer, seconds: Number(e.target.value) })}
          />
        </div>
      </div>
      <div className=" row py-3 justify-content-around">
        <div className="col-md-4 digital__timer">
          <h1>{strHours}</h1>
        </div>
        <div className="col-md-4 digital__timer">
          <h1>{strMins}</h1>
        </div>
        <div className="col-md-4 digital__timer">
          <h1>{strSeconds}</h1>
        </div>
      </div>
      <div className="py-3">
        <button className="btn bg-primary px-3 mx-3" onClick={start}>
          Start
        </button>
        <button className="btn bg-primary px-3 mx-3" onClick={stop}>
          Stop
        </button>
        <button className="btn bg-primary px-3 mx-3" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Form;
