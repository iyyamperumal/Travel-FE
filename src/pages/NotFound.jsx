import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" style={styles.homeLink}>
                Go to Home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        color: '#333',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
    },
    message: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    homeLink: {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
    },
};

export default NotFound;
