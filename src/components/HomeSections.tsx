import React, { useEffect, useState, useRef } from 'react';
import { Plant, Scissors, HourglassHigh, HandPalm, Leaf, Fingerprint, ShieldCheck, InstagramLogo, FacebookLogo, PinterestLogo } from '@phosphor-icons/react';
import './HomeSections.css';

import { SiteImageContext } from '../App';

export const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const images = React.useContext(SiteImageContext);
    const heroBg = images['hero_background']?.url || '/hero_fashion_bg.jpg';
    const heroPos = images['hero_background'] ? `${images['hero_background'].focalPointX}% ${images['hero_background'].focalPointY}%` : 'center';

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };
        document.addEventListener('mousemove', onMouseMove);
        return () => document.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-img-container" id="hero-parallax" ref={heroRef} style={{ background: `radial-gradient(circle at center, rgba(31, 61, 54, 0.2) 0%, rgba(11, 11, 12, 0.5) 100%), linear-gradient(to bottom, transparent 60%, var(--bg-color) 100%), url('${heroBg}') ${heroPos}/cover no-repeat` }}></div>
            
            <div className="hero-content">
                <p className="subtitle reveal-up">Định chuẩn sự tinh tế</p>
                <h1 className="hero-title">
                    <span className="word">Nghệ</span>
                    <span className="word">Thuật</span>
                    <span className="word">Của</span>
                    <span className="word">Sự</span>
                    <span className="word">Tĩnh</span>
                    <span className="word">Lặng.</span>
                </h1>
                <div className="hero-actions">
                    <a href="#collection" className="btn btn-glass cursor-expand">Khám phá bộ sưu tập</a>
                    <a href="#membership" className="btn btn-primary hide-mobile cursor-expand">Xin lời mời thành viên</a>
                </div>
            </div>

            <div className="floating-card glass-panel hide-mobile">
                <div className="floating-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617391654484-9c5932a35368?q=80&w=600&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="floating-card-text">Áo Khoác Cashmere 01 — Dệt tay tại Ý.</div>
            </div>

            <div className="scroll-indicator">
                <span className="subtitle" style={{ fontSize: '0.55rem' }}>Cuộn để trải nghiệm</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export const Collection = () => {
    return (
        <section className="collection" id="collection">
            <div className="collection-header reveal-up">
                <div>
                    <p className="subtitle">Mùa Thu/Đông 2026</p>
                    <h2 className="section-title">Di Sản Đương Đại</h2>
                </div>
                <a href="#" className="cursor-expand" style={{ borderBottom: '1px solid var(--c-gold)', paddingBottom: '4px', fontSize: '0.85rem' }}>Xem tất cả thiết kế</a>
            </div>

            <div className="gallery-container">
                <article className="product-card cursor-expand">
                    <div className="product-img-wrap">
                        <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <button className="quick-view-btn">Xem nhanh</button>
                    </div>
                    <div className="product-info">
                        <div>
                            <h3 className="product-name">Áo Khoác Noir Manteau</h3>
                            <p className="product-price">Liên hệ</p>
                        </div>
                        <div className="swatches">
                            <div className="swatch" style={{ background: '#111' }}></div>
                            <div className="swatch" style={{ background: '#3A2E1A' }}></div>
                        </div>
                    </div>
                </article>

                <article className="product-card cursor-expand" style={{ transform: 'scale(1.05)', zIndex: 1 }}>
                    <div className="product-img-wrap">
                        <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <button className="quick-view-btn">Xem nhanh</button>
                    </div>
                    <div className="product-info">
                        <div>
                            <h3 className="product-name">Vest lụa Emerald</h3>
                            <p className="product-price">Liên hệ</p>
                        </div>
                        <div className="swatches">
                            <div className="swatch" style={{ background: '#1F3D36' }}></div>
                        </div>
                    </div>
                </article>

                <article className="product-card cursor-expand">
                    <div className="product-img-wrap">
                        <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <button className="quick-view-btn">Xem nhanh</button>
                    </div>
                    <div className="product-info">
                        <div>
                            <h3 className="product-name">Áo len Cashmere cổ lọ</h3>
                            <p className="product-price">Liên hệ</p>
                        </div>
                        <div className="swatches">
                            <div className="swatch" style={{ background: '#F4EFE6' }}></div>
                            <div className="swatch" style={{ background: '#888' }}></div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export const LimitedDrop = () => {
    return (
        <section className="limited-drop reveal-up">
            <div className="drop-card glass-panel">
                <span className="badge">Chỉ 120 thiết kế</span>
                <p className="subtitle" style={{ marginTop: '1rem' }}>Bộ Sưu Tập Giới Hạn</p>
                <h2 className="section-title" style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Túi xách da bê Epsom</h2>
                <div className="edition-number">No. 037 / 120</div>
                
                <div className="timer">
                    <div className="timer-block"><span>02</span><span className="timer-label">Ngày</span></div>:
                    <div className="timer-block"><span>14</span><span className="timer-label">Giờ</span></div>:
                    <div className="timer-block"><span>45</span><span className="timer-label">Phút</span></div>
                </div>
                
                <button className="btn btn-primary cursor-expand">Đăng ký mua trước</button>
            </div>
        </section>
    );
};

export const Story = () => {
    const images = React.useContext(SiteImageContext);
    const s1 = images['story_chapter_1']?.url || 'https://images.unsplash.com/photo-1612423284934-2850a4eaead4?q=80&w=800&auto=format&fit=crop';
    const s1Pos = images['story_chapter_1'] ? `${images['story_chapter_1'].focalPointX}% ${images['story_chapter_1'].focalPointY}%` : 'center';
    
    const s2 = images['story_chapter_2']?.url || 'https://images.unsplash.com/photo-1598228723653-e5fb6fc923ee?q=80&w=800&auto=format&fit=crop';
    const s2Pos = images['story_chapter_2'] ? `${images['story_chapter_2'].focalPointX}% ${images['story_chapter_2'].focalPointY}%` : 'center';
    
    const s3 = images['story_chapter_3']?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop';
    const s3Pos = images['story_chapter_3'] ? `${images['story_chapter_3'].focalPointX}% ${images['story_chapter_3'].focalPointY}%` : 'center';

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const storySection = document.getElementById('story');
            if(storySection) {
                const storyRect = storySection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (storyRect.top < windowHeight / 2 && storyRect.bottom > 0) {
                    let p = ((windowHeight / 2 - storyRect.top) / storyRect.height) * 100;
                    setProgress(Math.min(100, Math.max(0, p)));
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="storytelling" id="story">
            <div className="timeline hide-mobile">
                <div className="timeline-progress" style={{ height: `${progress}%` }}></div>
            </div>

            <div className="chapter reveal-up">
                <div className="chapter-content">
                    <div className="chapter-num">I</div>
                    <h2 className="chapter-title section-title">Nguồn Gốc</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Mọi thiết kế của Aetheria bắt đầu từ những chất liệu thượng hạng nhất, được tuyển chọn kỹ lưỡng từ những nhà máy dệt lâu đời tại Ý và Scotland.</p>
                    <div className="stat-counters">
                        <div className="stat">
                            <div className="stat-num">100</div>
                            <div className="stat-desc">% Chất liệu tự nhiên</div>
                        </div>
                    </div>
                </div>
                <div className="chapter-media glass-panel">
                     <div className="video-placeholder" style={{ backgroundImage: `url("${s1}")`, backgroundSize: 'cover', backgroundPosition: s1Pos }}>
                         <Plant className="video-icon" style={{ color: '#fff' }} />
                     </div>
                </div>
            </div>

            <div className="chapter reveal-up">
                <div className="chapter-content">
                    <div className="chapter-num">II</div>
                    <h2 className="chapter-title section-title">Chế Tác</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Nghệ thuật cắt may thủ công là trái tim của thương hiệu. Từng đường kim mũi chỉ được thực hiện bởi những nghệ nhân lành nghề.</p>
                    <div className="stat-counters">
                        <div className="stat">
                            <div className="stat-num">42</div>
                            <div className="stat-desc">Giờ chế tác trung bình</div>
                        </div>
                    </div>
                </div>
                <div className="chapter-media glass-panel">
                     <div className="video-placeholder" style={{ backgroundImage: `url("${s2}")`, backgroundSize: 'cover', backgroundPosition: s2Pos }}>
                         <Scissors className="video-icon" style={{ color: '#fff' }} />
                     </div>
                </div>
            </div>
            
            <div className="chapter reveal-up">
                <div className="chapter-content">
                    <div className="chapter-num">III</div>
                    <h2 className="chapter-title section-title">Di Sản</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Chúng tôi không tạo ra xu hướng nhất thời. Aetheria thiết kế những kiệt tác vượt thời gian.</p>
                </div>
                <div className="chapter-media glass-panel">
                     <div className="video-placeholder" style={{ backgroundImage: `url("${s3}")`, backgroundSize: 'cover', backgroundPosition: s3Pos }}>
                         <HourglassHigh className="video-icon" style={{ color: '#fff' }} />
                     </div>
                </div>
            </div>
        </section>
    );
};

export const Values = () => {
    return (
        <section className="values" id="values">
            <div className="text-center reveal-up">
                <p className="subtitle">Triết Lý</p>
                <h2 className="section-title">Giá Trị Cốt Lõi</h2>
            </div>
            <div className="values-grid">
                <div className="value-card glass-panel reveal-up">
                    <HandPalm className="value-icon" />
                    <h4 className="value-title">Thủ Công</h4>
                    <p className="value-desc">Hoàn thiện tỉ mỉ bằng tay.</p>
                </div>
                <div className="value-card glass-panel reveal-up" style={{ transitionDelay: '0.1s' }}>
                    <Leaf className="value-icon" />
                    <h4 className="value-title">Bền Vững</h4>
                    <p className="value-desc">Trách nhiệm với môi trường.</p>
                </div>
                <div className="value-card glass-panel reveal-up" style={{ transitionDelay: '0.2s' }}>
                    <Fingerprint className="value-icon" />
                    <h4 className="value-title">Độc Bản</h4>
                    <p className="value-desc">Thiết kế theo số đo riêng.</p>
                </div>
                <div className="value-card glass-panel reveal-up" style={{ transitionDelay: '0.3s' }}>
                    <ShieldCheck className="value-icon" />
                    <h4 className="value-title">Bảo Hành</h4>
                    <p className="value-desc">Cam kết chỉnh sửa trọn đời.</p>
                </div>
            </div>
        </section>
    );
};

export const SocialProof = () => (
    <section className="social-proof">
        <div className="marquee">
            <span className="marquee-item">Vogue</span> • <span className="marquee-item">Harper's Bazaar</span> • <span className="marquee-item">GQ</span> • <span className="marquee-item">Elle</span> • 
            <span className="marquee-item">Vogue</span> • <span className="marquee-item">Harper's Bazaar</span> • <span className="marquee-item">GQ</span> • <span className="marquee-item">Elle</span>
        </div>
        <div className="testimonials reveal-up">
            <div className="testimonial-card glass-panel">
                <div className="quote-mark">"</div>
                <p className="quote-text">Chất lượng cashmere của Aetheria không thua kém bất kỳ nhà mốt lâu đời nào tại Ý.</p>
                <p className="quote-author">M. T.</p>
            </div>
            <div className="testimonial-card glass-panel" style={{ transform: 'translateY(-20px)' }}>
                <div className="quote-mark">"</div>
                <p className="quote-text">Một định nghĩa mới về quiet luxury tại Việt Nam.</p>
                <p className="quote-author">V. Đ.</p>
            </div>
        </div>
    </section>
);

export const Membership = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const wrap = e.currentTarget;
        const card = wrap.querySelector('.card-3d') as HTMLElement;
        if(!card) return;
        
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget.querySelector('.card-3d') as HTMLElement;
        if(card) card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <section className="membership" id="membership">
            <div className="reveal-up text-center">
                <p className="subtitle">Đặc Quyền</p>
                <h2 className="section-title">Câu Lạc Bộ Nội Bộ</h2>
            </div>

            <div className="tiers reveal-up">
                <div className="tier-card highlight glass-panel">
                    <div className="card-3d-wrap cursor-expand" onMouseMove={handleHover} onMouseLeave={handleLeave}>
                        <div className="card-3d">
                            <div className="card-logo">AETHERIA</div>
                            <div className="card-chip"></div>
                            <div className="card-tier-name">Black VIP</div>
                        </div>
                    </div>
                    <h3 className="tier-name" style={{textAlign: 'center'}}>Black</h3>
                    <ul className="tier-features">
                        <li>Truy cập sớm bộ sưu tập 7 ngày</li>
                        <li>Stylist riêng tư tại nhà</li>
                        <li>Dịch vụ may đo theo yêu cầu (MTM)</li>
                    </ul>
                </div>
            </div>

            <div className="reveal-up form-container">
                {submitted ? (
                    <div style={{ padding: '2rem', background: 'rgba(var(--glass-bg))', borderRadius: '1rem', border: '1px solid var(--c-gold)', textAlign: 'center' }}>
                        <p className="subtitle">Thành công</p>
                        <p>Yêu cầu của bạn (No. 4092) đã được ghi nhận.</p>
                    </div>
                ) : (
                    <form className="invite-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                        <div className="input-group">
                            <input type="email" className="invite-input cursor-expand" placeholder="Email của bạn để xin lời mời" required />
                        </div>
                        <button type="submit" className="btn btn-primary cursor-expand" style={{marginTop: '1rem'}}>Gửi Yêu Cầu</button>
                        <p className="spots-left" style={{textAlign: 'center'}}>Còn 27 suất trong đợt xét duyệt tháng này.</p>
                    </form>
                )}
            </div>
        </section>
    );
};
