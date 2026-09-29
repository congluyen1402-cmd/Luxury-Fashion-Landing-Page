import React from 'react';
import { InstagramLogo, FacebookLogo, PinterestLogo } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-col">
                    <div className="footer-logo">AETHERIA</div>
                    <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '250px'}}>
                        Định chuẩn sự tinh tế qua kỹ thuật thủ công và thẩm mỹ tĩnh lặng.
                    </p>
                </div>
                <div className="footer-col">
                    <h5 className="footer-title">Khám Phá</h5>
                    <ul className="footer-links">
                        <li><a href="#collection" className="cursor-expand">Bộ Sưu Tập Mới</a></li>
                        <li><a href="#" className="cursor-expand">Bespoke & MTM</a></li>
                        <li><a href="#story" className="cursor-expand">Di Sản</a></li>
                        <li><a href="#" className="cursor-expand">Tạp chí nghệ thuật</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h5 className="footer-title">Hỗ Trợ</h5>
                    <ul className="footer-links">
                        <li><a href="#" className="cursor-expand">Liên Hệ Cố Vấn</a></li>
                        <li><a href="#" className="cursor-expand">Chính Sách Giao Hàng</a></li>
                        <li><a href="#" className="cursor-expand">Chăm Sóc Sản Phẩm</a></li>
                        <li><a href="#" className="cursor-expand">Bảo Hành Trọn Đời</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h5 className="footer-title">Cửa Hàng</h5>
                    <ul className="footer-links">
                        <li>Flagship: 01 Dong Khoi, D.1, HCMC</li>
                        <li>Atelier: 15 Trang Tien, Hoan Kiem, HN</li>
                        <li>Hotline: +84 90 000 0000</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Aetheria. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="cursor-expand"><InstagramLogo size={24} /></a>
                    <a href="#" className="cursor-expand"><FacebookLogo size={24} /></a>
                    <a href="#" className="cursor-expand"><PinterestLogo size={24} /></a>
                </div>
                <p style={{display: 'flex', gap: '1rem'}}>
                    <a href="#" className="cursor-expand">Privacy Policy</a>
                    <a href="#" className="cursor-expand">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
