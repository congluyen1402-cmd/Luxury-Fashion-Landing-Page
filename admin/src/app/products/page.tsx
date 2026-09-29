'use client'

import { useState, useEffect } from 'react';
import { MagnifyingGlass, Plus, PencilSimple, Trash } from '@phosphor-icons/react';

type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  status: string;
  isLimited: boolean;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/products?search=${search}`);
      const data = await res.json();
      if(Array.isArray(data)) setProducts(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Sản Phẩm</h1>
        <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', background: 'var(--gold)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          <Plus size={16} />
          Thêm Sản Phẩm
        </button>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <MagnifyingGlass size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo Tên hoặc SKU..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border)', borderRadius: '4px', color: 'inherit', outline: 'none' }}
            />
          </div>
          <select style={{ padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border)', borderRadius: '4px', color: 'inherit', outline: 'none' }}>
            <option value="all">Tất cả trạng thái</option>
            <option value="PUBLISHED">Đang bán (Published)</option>
            <option value="DRAFT">Bản nháp (Draft)</option>
          </select>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>Đang tải dữ liệu...</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá Bán</th>
                  <th>Trạng Thái</th>
                  <th>Bộ Sưu Tập</th>
                  <th style={{ textAlign: 'right' }}>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>Không tìm thấy sản phẩm nào.</td>
                  </tr>
                ) : (
                  products.map(p => (
                    <tr key={p.id}>
                      <td style={{ fontFamily: 'monospace', opacity: 0.8 }}>{p.sku}</td>
                      <td style={{ fontWeight: 500 }}>
                        {p.name}
                        {p.isLimited && <span className="status-badge" style={{ marginLeft: '0.5rem', background: '#333', color: '#fff' }}>Limited</span>}
                      </td>
                      <td>{formatPrice(p.price)}</td>
                      <td>
                        <span className="status-badge" style={{ 
                          background: p.status === 'PUBLISHED' ? 'rgba(31, 61, 54, 0.2)' : 'rgba(0,0,0,0.1)',
                          color: p.status === 'PUBLISHED' ? 'var(--emerald)' : 'inherit'
                        }}>
                          {p.status}
                        </span>
                      </td>
                      <td style={{ opacity: 0.6 }}>Chưa phân loại</td>
                      <td style={{ textAlign: 'right' }}>
                        <button style={{ padding: '0.4rem', opacity: 0.6, cursor: 'pointer' }} title="Sửa"><PencilSimple size={18} /></button>
                        <button style={{ padding: '0.4rem', opacity: 0.6, cursor: 'pointer', color: '#ff4d4f' }} title="Xóa"><Trash size={18} /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
