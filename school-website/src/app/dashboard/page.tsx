import React from 'react';

const DashboardPage: React.FC = () => {
  // Placeholder data
  const attendance = "90%";
  const classesToday = "Math, Physics, Chemistry";
  const classesThisWeek = "Monday: Math, Physics; Tuesday: Chemistry, Biology; Wednesday: Lab, English; Thursday: Math, Physics; Friday: Chemistry, Sports";
  const feesPending = "$500";
  const placementSelected = { company: "XYZ Corp", ctc: "$60,000" }; // or null if not applicable
  // const placementSelected = null;
  const examCGPA = "8.5";
  const backlogs = ["MA101", "CS203"]; // or [] if not applicable
  // const backlogs: string[] = [];

  const sectionStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle: React.CSSProperties = {
    marginTop: 0,
    marginBottom: '0.5rem',
    fontSize: '1.25rem',
    color: '#333',
  };

  const pStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#222' }}>Student Dashboard</h1>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Attendance</h2>
        <p style={pStyle}>{attendance}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Classes Today</h2>
        <p style={pStyle}>{classesToday}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Classes This Week</h2>
        <p style={pStyle}>{classesThisWeek}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Fees Pending</h2>
        <p style={pStyle}>{feesPending}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Placement Selected</h2>
        {placementSelected ? (
          <p style={pStyle}>Company: {placementSelected.company}, CTC: {placementSelected.ctc}</p>
        ) : (
          <p style={pStyle}>None</p>
        )}
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Exam CGPA</h2>
        <p style={pStyle}>{examCGPA}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Backlogs</h2>
        {backlogs.length > 0 ? (
          <p style={pStyle}>{backlogs.join(', ')}</p>
        ) : (
          <p style={pStyle}>None</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
