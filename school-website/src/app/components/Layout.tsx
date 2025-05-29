"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const academicMenuItems = [
  { title: "Courses Offered", path: "/academic/courses-offered" },
  { title: "Departments / Faculties", path: "/academic/departments-faculties" },
  { title: "Academic Calendar", path: "/academic/academic-calendar" },
  { title: "Timetable", path: "/academic/timetable" },
  { title: "Syllabus", path: "/academic/syllabus" },
  { title: "Examination Schedule", path: "/academic/examination-schedule" },
  { title: "Results", path: "/academic/results" },
  { title: "Attendance Portal / Login", path: "/academic/attendance-portal" },
  { title: "Research & Publications", path: "/academic/research-publications" },
  { title: "E-Learning / LMS", path: "/academic/e-learning-lms" },
];

const placementMenuItems = [
  { title: "Placement Cell", path: "/placement/placement-cell" },
  { title: "Recruiters / Past Recruiters", path: "/placement/recruiters" },
  { title: "Placement Statistics", path: "/placement/placement-statistics" },
  { title: "Training Programs", path: "/placement/training-programs" },
  { title: "Internships", path: "/placement/internships" },
  { title: "Career Guidance", path: "/placement/career-guidance" },
  { title: "Resume Building Tips", path: "/placement/resume-building-tips" },
  { title: "Student Testimonials", path: "/placement/student-testimonials" },
  { title: "Contact Placement Officer", path: "/placement/contact-placement-officer" },
];

const studentLifeMenuItems = [
  { title: "Events & Fests", path: "/student-life/events-fests" },
  { title: "Clubs & Societies", path: "/student-life/clubs-societies" },
  { title: "Hostel & Mess", path: "/student-life/hostel-mess" },
  { title: "Sports", path: "/student-life/sports" },
  { title: "Student Council", path: "/student-life/student-council" },
  { title: "Alumni Network", path: "/student-life/alumni-network" },
  { title: "Grievance Redressal", path: "/student-life/grievance-redressal" },
];

const contactSupportMenuItems = [
  { title: "Contact Us", path: "/contact-support/contact-us" },
  { title: "Location / Map", path: "/contact-support/location-map" },
  { title: "Helpline", path: "/contact-support/helpline" },
  { title: "Feedback Form", path: "/contact-support/feedback-form" },
  { title: "Faculty Directory", path: "/contact-support/faculty-directory" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAcademicDropdownOpen, setIsAcademicDropdownOpen] = useState(false);
  const [isPlacementDropdownOpen, setIsPlacementDropdownOpen] = useState(false);
  const [isStudentLifeDropdownOpen, setIsStudentLifeDropdownOpen] = useState(false);
  const [isContactSupportDropdownOpen, setIsContactSupportDropdownOpen] = useState(false);

  const navLinkStyle: React.CSSProperties = {
    color: '#337ab7',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    display: 'block',
  };

  const dropdownContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const baseDropdownMenuStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '220px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    listStyle: 'none',
    padding: '0',
    margin: '0',
    border: '1px solid #ddd',
    left: '50%', 
    transform: 'translateX(-50%)', 
  };

  const academicDropdownMenuStyle: React.CSSProperties = {
    ...baseDropdownMenuStyle,
    display: isAcademicDropdownOpen ? 'block' : 'none',
  };

  const placementDropdownMenuStyle: React.CSSProperties = {
    ...baseDropdownMenuStyle,
    display: isPlacementDropdownOpen ? 'block' : 'none',
  };

  const studentLifeDropdownMenuStyle: React.CSSProperties = {
    ...baseDropdownMenuStyle,
    display: isStudentLifeDropdownOpen ? 'block' : 'none',
  };

  const contactSupportDropdownMenuStyle: React.CSSProperties = {
    ...baseDropdownMenuStyle,
    display: isContactSupportDropdownOpen ? 'block' : 'none',
  };

  const dropdownItemStyle: React.CSSProperties = {
    borderBottom: '1px solid #eee',
  };

  const dropdownButtonStyle: React.CSSProperties = {
    ...navLinkStyle,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    padding: '0.5rem 1rem',
    width: '100%',
    textAlign: 'center',
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
        <h1>My School</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <li><Link href="/dashboard" style={navLinkStyle}>Dashboard</Link></li>
            
            <li style={dropdownContainerStyle}
                onMouseEnter={() => setIsAcademicDropdownOpen(true)}
                onMouseLeave={() => setIsAcademicDropdownOpen(false)}>
              <button style={dropdownButtonStyle}>Academic</button>
              <ul style={academicDropdownMenuStyle}>
                {academicMenuItems.map((item) => (
                  <li key={item.path} style={dropdownItemStyle}>
                    <Link href={item.path} style={{ ...navLinkStyle, color: '#333' }}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li style={dropdownContainerStyle}
                onMouseEnter={() => setIsPlacementDropdownOpen(true)}
                onMouseLeave={() => setIsPlacementDropdownOpen(false)}>
              <button style={dropdownButtonStyle}>Placement</button>
              <ul style={placementDropdownMenuStyle}>
                {placementMenuItems.map((item) => (
                  <li key={item.path} style={dropdownItemStyle}>
                    <Link href={item.path} style={{ ...navLinkStyle, color: '#333' }}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li style={dropdownContainerStyle}
                onMouseEnter={() => setIsStudentLifeDropdownOpen(true)}
                onMouseLeave={() => setIsStudentLifeDropdownOpen(false)}>
              <button style={dropdownButtonStyle}>Student Life</button>
              <ul style={studentLifeDropdownMenuStyle}>
                {studentLifeMenuItems.map((item) => (
                  <li key={item.path} style={dropdownItemStyle}>
                    <Link href={item.path} style={{ ...navLinkStyle, color: '#333' }}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li style={dropdownContainerStyle}
                onMouseEnter={() => setIsContactSupportDropdownOpen(true)}
                onMouseLeave={() => setIsContactSupportDropdownOpen(false)}>
              <button style={dropdownButtonStyle}>Contact/Support</button>
              <ul style={contactSupportDropdownMenuStyle}>
                {contactSupportMenuItems.map((item) => (
                  <li key={item.path} style={dropdownItemStyle}>
                    <Link href={item.path} style={{ ...navLinkStyle, color: '#333' }}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ flexGrow: 1, padding: '1rem' }}>
        {children}
      </main>
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} My School</p>
      </footer>
    </div>
  );
};

export default Layout;
