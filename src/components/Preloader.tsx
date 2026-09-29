import React from 'react';
import './Preloader.css';

const Preloader = ({ loading }: { loading: boolean }) => {
    if (!loading && typeof window !== 'undefined') {
        document.body.style.overflow = 'auto';
    } else if (typeof window !== 'undefined') {
        document.body.style.overflow = 'hidden';
    }

    return (
        <div className={`preloader ${!loading ? 'loaded' : ''}`}>
            <div className="preloader-brand">AETHERIA</div>
        </div>
    );
};

export default Preloader;
