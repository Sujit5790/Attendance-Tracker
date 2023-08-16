import React, { useState } from 'react';

function PunchClock() {
  const [isPunchedIn, setIsPunchedIn] = useState(false);

  const handlePunch = () => {
    setIsPunchedIn(!isPunchedIn);
  };

  return (
    <div className="punch-clock">
      <h1>Punch In/Out</h1>
      <p>Status: {isPunchedIn ? 'Punched In' : 'Punched Out'}</p>
      <button onClick={handlePunch}>{isPunchedIn ? 'Punch Out' : 'Punch In'}</button>
    </div>
  );
}

export default PunchClock;