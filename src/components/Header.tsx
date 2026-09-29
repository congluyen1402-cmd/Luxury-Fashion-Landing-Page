import React, { useState, useEffect } from 'react';
import { Moon, Sun, SpeakerSlash, SpeakerHigh } from '@phosphor-icons/react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [soundOn, setSoundOn] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleMenu = () => setMenuActive(!menuActive);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <a href="#" className="brand-logo">Aetheria</a>
                <div className="header-controls">
                    <button className="icon-btn theme-toggle cursor-expand" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button className="icon-btn sound-toggle cursor-expand" onClick={() => setSoundOn(!soundOn)} aria-label="Toggle Sound">
                        {soundOn ? <SpeakerHigh size={20} /> : <SpeakerSlash size={20} />}
                    </button>
                    <button className="menu-toggle cursor-expand" onClick={toggleMenu}>
                        {menuActive ? 'Đóng' : 'Menu'}
                    </button>
                </div>
            </header>

            <nav className={`fs-menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="#collection" className="menu-link" onClick={toggleMenu}>Bộ Sưu Tập</a></li>
                    <li><a href="#story" className="menu-link" onClick={toggleMenu}>Câu Chuyện</a></li>
                    <li><a href="#values" className="menu-link" onClick={toggleMenu}>Giá Trị</a></li>
                    <li><a href="#membership" className="menu-link" onClick={toggleMenu}>Thành Viên</a></li>
                </ul>
            </nav>

            <div className="mobile-cta glass-panel">
                <a href="#membership" className="btn btn-primary" style={{width: '100%'}}>Xin lời mời thành viên</a>
            </div>
        </>
    );
};

export default Header;
