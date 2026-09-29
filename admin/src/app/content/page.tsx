'use client'

import { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Crosshair, ArrowCounterClockwise, UploadSimple } from '@phosphor-icons/react';

type SiteImage = {
  id: string;
  slotKey: string;
  sectionName: string;
  description: string;
  imageUrl: string;
  recommendedSize: string;
  focalPointX: number;
  focalPointY: number;
};

export default function ContentPage() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  useEffect(() => {
    fetch('/api/site-images')
      .then(r => r.json())
      .then(data => {
        if(Array.isArray(data)) setImages(data);
        setLoading(false);
      });
  }, []);

  const saveToServer = (newImages: SiteImage[]) => {
    fetch('/api/site-images', {
      method: 'POST',
      body: JSON.stringify(newImages),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const handleFocalPoint = (id: string, e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setImages(prev => {
      const next = prev.map(img => img.id === id ? { ...img, focalPointX: x, focalPointY: y } : img);
      saveToServer(next);
      return next;
    });
  };

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Ảnh quá lớn. Vui lòng chọn ảnh dưới 5MB.');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const newUrl = event.target?.result as string;
        setImages(prev => {
          const next = prev.map(img => img.id === id ? { ...img, imageUrl: newUrl } : img);
          saveToServer(next);
          return next;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (id: string) => {
    if (fileInputRefs.current[id]) {
      fileInputRefs.current[id]?.click();
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Quản Lý Hình Ảnh Website</h1>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', opacity: 0.5 }}>Đang tải danh sách ảnh...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {images.map(img => (
            <div key={img.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '1.25rem' }}>{img.sectionName}</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{img.description}</p>
                <span style={{ fontSize: '0.7rem', color: 'var(--gold)', marginTop: '0.2rem', display: 'inline-block' }}>Khuyến nghị: {img.recommendedSize}</span>
              </div>
              
              <div 
                style={{ 
                  width: '100%', aspectRatio: '16/9', background: '#111', borderRadius: '0.5rem', 
                  position: 'relative', overflow: 'hidden', marginBottom: '1rem', cursor: 'crosshair',
                  backgroundImage: img.imageUrl ? `url(${img.imageUrl})` : 'none',
                  backgroundSize: 'cover', backgroundPosition: 'center'
                }}
                onClick={(e) => handleFocalPoint(img.id, e)}
                title="Click để chọn Focal Point (Điểm tụ)"
              >
                {!img.imageUrl && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3 }}><ImageIcon size={32} /></div>}
                
                {img.imageUrl && (
                  <div style={{ 
                    position: 'absolute', left: `${img.focalPointX}%`, top: `${img.focalPointY}%`,
                    transform: 'translate(-50%, -50%)', color: 'var(--gold)', pointerEvents: 'none',
                    filter: 'drop-shadow(0 0 2px black)'
                  }}>
                    <Crosshair size={24} weight="bold" />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <input 
                  type="file" 
                  accept="image/jpeg, image/png, image/webp" 
                  style={{ display: 'none' }}
                  ref={el => { fileInputRefs.current[img.id] = el; }}
                  onChange={(e) => handleFileChange(img.id, e)}
                />
                <button 
                  className="btn btn-primary" 
                  onClick={() => triggerUpload(img.id)}
                  style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', cursor: 'pointer' }}
                >
                  <UploadSimple size={16} style={{ marginRight: '0.3rem', display: 'inline' }} /> Thay ảnh
                </button>
                <button className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '4px', opacity: 0.7, cursor: 'pointer' }} title="Khôi phục ảnh cũ">
                  <ArrowCounterClockwise size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
