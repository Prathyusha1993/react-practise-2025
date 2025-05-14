import React, { useEffect, useState } from 'react';

let intervalId;

function StopwatchApp() {
    const [time, setTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(isRunning){
            intervalId = setInterval(() => {
                setTime((prevTIme) => prevTIme + 1);
            }, 10)
        }else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        }
    }, [isRunning]);

    const hanldeStartStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = () => {
        const minutes = Math.floor(time / 6000);
        const seconds = Math.floor((time % 6000) / 100);
        const hours = Math.floor(minutes / 60);
        return `${String(hours).padStart(2, '0')}: ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    }
  return (
    <div>
        <h2>StopwatchApp</h2>
        <p>Time: {formatTime()}</p>
        <button onClick={hanldeStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopwatchApp