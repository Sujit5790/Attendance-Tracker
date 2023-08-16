import React, { useState } from 'react';

const TimeTracker = () => {
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);

  const handlePunchIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    setPunchInTime(currentTime);
    setPunchOutTime(null);
  };

  const handlePunchOut = () => {
    const currentTime = new Date().toLocaleTimeString();
    setPunchOutTime(currentTime);
  };

  return (
    <div className="time-tracker">
      <h2>Time Tracking</h2>
      <div className="buttons">
        <button onClick={handlePunchIn} disabled={punchInTime}>
          Punch In
        </button>
        <button onClick={handlePunchOut} disabled={!punchInTime || punchOutTime}>
          Punch Out
        </button>
      </div>
      <div className="timestamps">
        {punchInTime && <p>Punch In: {punchInTime}</p>}
        {punchOutTime && <p>Punch Out: {punchOutTime}</p>}
      </div>
    </div>
  );
};

export default TimeTracker;