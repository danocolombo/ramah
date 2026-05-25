import React from 'react';
import { Link } from 'react-router-dom';

const linkSx = {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
};

export default function FooterLink({ label, to, onClick }) {
    return (
        <Link to={to} onClick={onClick} style={linkSx}>
            {label}
        </Link>
    );
}
