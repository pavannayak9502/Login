import React from 'react';
import { Link } from 'react-router-dom'; // Optional: To provide a link back to the home page

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.homeLink}>Go to Home</Link>
    </div>
  );
};

// Styles (Inline or you can extract to CSS)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#dc3545',
  },
  message: {
    fontSize: '20px',
    color: '#6c757d',
  },
  homeLink: {
    marginTop: '20px',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
  homeLinkHover: {
    textDecoration: 'underline',
  }
};

export default NotFound;
