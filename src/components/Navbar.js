import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <Link to="/" style={styles.link}>PGO App</Link>
            </div>
            <ul style={styles.navLinks}>
                <li>
                    
                    <Link to="/book-pg" style={styles.link}>Book PG</Link>
                </li>
                <li>
                    <Link to="/leave-review" style={styles.link}>Leave Review</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        background: '#333',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '24px',
        color: '#fff',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Navbar;
