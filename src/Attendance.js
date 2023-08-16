import React, { useState } from 'react';

const Attendance = () => {
  
  const [sessions, setSessions] = useState([
    { id: 1, sessionName: 'Session 1', attended: false },
    { id: 2, sessionName: 'Session 2', attended: false },
    { id: 3, sessionName: 'Session 3', attended: false },
    
  ]);

  const markAttendance = (sessionId) => {
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === sessionId ? { ...session, attended: true } : session
      )
    );
  };

  return (
    <div>
      <h1>Attendance Recording</h1>
      <table>
        <thead>
          <tr>
            <th>Session Name</th>
            <th>Attended</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.sessionName}</td>
              <td>{session.attended ? 'Yes' : 'No'}</td>
              <td>
                {!session.attended && (
                  <button onClick={() => markAttendance(session.id)}>
                    Mark Attendance
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;