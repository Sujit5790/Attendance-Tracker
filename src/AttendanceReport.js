import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { CSVLink } from 'react-csv';
import { ExcelFile, ExcelSheet } from 'react-excel-workbook';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function AttendanceReport() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/attendance?_expand=user&_expand=event')
      .then(response => {
        setAttendees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const csvHeaders = [
    { label: 'User ID', key: 'user.id' },
    { label: 'Username', key: 'user.username' },
    { label: 'Email', key: 'user.email' },
    { label: 'Event Name', key: 'event.event_name' },
    { label: 'Attendance Date', key: 'attendance_date' },
  ];

  const excelHeaders = csvHeaders.map(header => ({ ...header, width: 15 }));

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ head: [excelHeaders.map(header => header.label)], body: attendees.map(attendee => excelHeaders.map(header => attendee[header.key])) });
    doc.save('attendance_report.pdf');
  };

  return (
    <div>
      <h2>Attendance Report</h2>
      <ReactTable
        data={attendees}
        columns={[
          { Header: 'User ID', accessor: 'user.id' },
          { Header: 'Username', accessor: 'user.username' },
          { Header: 'Email', accessor: 'user.email' },
          { Header: 'Event Name', accessor: 'event.event_name' },
          { Header: 'Attendance Date', accessor: 'attendance_date' },
        ]}
        defaultPageSize={10}
      />
      <CSVLink data={attendees} headers={csvHeaders} filename="attendance_report.csv">
        Export CSV
      </CSVLink>
      <ExcelFile element={<button>Export Excel</button>}>
        <ExcelSheet dataSet={attendees} name="Attendance" columns={excelHeaders} />
      </ExcelFile>
      <button onClick={generatePDF}>Export PDF</button>
    </div>
  );
}

export default AttendanceReport;