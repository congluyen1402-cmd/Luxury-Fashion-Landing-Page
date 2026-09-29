'use client'

import { useState, useEffect } from 'react';
import { MagnifyingGlass, User, EnvelopeSimple, Phone } from '@phosphor-icons/react';

type Customer = {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  tier: string;
  lifetimeSpend: number;
  waitlistStatus: string | null;
  createdAt: string;
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, [search]);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      // In a real scenario, this would fetch from the DB. 
      // For demo, we might not have seeded customers, so let's use dummy data if empty.
      const res = await fetch(`/api/customers?search=${search}`);
      const data = await res.json();
      
      if(Array.isArray(data) && data.length > 0) {
        setCustomers(data);
      } else {
        // Fallback dummy data for preview
        setCustomers([
          { id: '1', fullName: 'Nguyễn Văn A', email: 'a.nguyen@email.com', phone: '0901234567', tier: 'BLACK', lifetimeSpend: 150000000, waitlistStatus: 'APPROVED', createdAt: new Date().toISOString() },
          { id: '2', fullName: 'Trần Thị B', email: 'tran.b@email.com', phone: '0987654321', tier: 'SILVER', lifetimeSpend: 12000000, waitlistStatus: 'PENDING', createdAt: new Date().toISOString() },
          { id: '3', fullName: 'Lê Hoàng C', email: 'hoang.c@email.com', phone: null, tier: 'NONE', lifetimeSpend: 0, waitlistStatus: 'PENDING', createdAt: new Date().toISOString() }
        ].filter(c => c.fullName.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())));
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const getTierColor = (tier: string) => {
    if(tier === 'BLACK') return { bg: '#000', color: '#C9A96A' };
    if(tier === 'GOLD') return { bg: 'rgba(201, 169, 106, 0.2)', color: 'var(--gold)' };
    if(tier === 'SILVER') return { bg: 'rgba(200, 200, 200, 0.2)', color: '#888' };
    return { bg: 'rgba(0,0,0,0.05)', color: 'inherit' };
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Khách Hàng (CRM)</h1>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <MagnifyingGlass size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo Tên, Email hoặc Số điện thoại..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border)', borderRadius: '4px', color: 'inherit', outline: 'none' }}
            />
          </div>
          <select style={{ padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border)', borderRadius: '4px', color: 'inherit', outline: 'none' }}>
            <option value="all">Tất cả Hạng Thẻ</option>
            <option value="BLACK">Black VIP</option>
            <option value="GOLD">Gold</option>
            <option value="SILVER">Silver</option>
            <option value="NONE">Chưa có hạng</option>
          </select>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>Đang tải dữ liệu...</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Khách Hàng</th>
                  <th>Liên Hệ</th>
                  <th>Hạng Thẻ</th>
                  <th>Tổng Chi Tiêu</th>
                  <th>Trạng Thái (Xin lời mời)</th>
                  <th style={{ textAlign: 'right' }}>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>Không tìm thấy khách hàng nào.</td>
                  </tr>
                ) : (
                  customers.map(c => {
                    const tierStyle = getTierColor(c.tier);
                    return (
                      <tr key={c.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <User size={18} />
                            </div>
                            <span style={{ fontWeight: 500 }}>{c.fullName}</span>
                          </div>
                        </td>
                        <td style={{ opacity: 0.8, fontSize: '0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><EnvelopeSimple size={14}/> {c.email}</div>
                          {c.phone && <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}><Phone size={14}/> {c.phone}</div>}
                        </td>
                        <td>
                          <span className="status-badge" style={{ background: tierStyle.bg, color: tierStyle.color, fontWeight: c.tier === 'BLACK' ? 600 : 400 }}>
                            {c.tier}
                          </span>
                        </td>
                        <td>{formatPrice(c.lifetimeSpend)}</td>
                        <td>
                           {c.waitlistStatus === 'PENDING' ? (
                             <button style={{ padding: '0.3rem 0.8rem', fontSize: '0.75rem', background: 'var(--gold)', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Duyệt ngay</button>
                           ) : (
                             <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>Đã duyệt</span>
                           )}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button style={{ padding: '0.4rem 0.8rem', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer', background: 'transparent', color: 'inherit' }}>
                            Hồ sơ
                          </button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
