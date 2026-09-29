export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Tổng Quan</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div className="glass-card">
          <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>Doanh thu tháng</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', margin: '0.5rem 0' }}>450.000.000 đ</h2>
          <p style={{ color: 'var(--emerald)', fontSize: '0.85rem' }}>+12% so với tháng trước</p>
        </div>
        
        <div className="glass-card">
          <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>Xin lời mời chờ duyệt</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', margin: '0.5rem 0' }}>27</h2>
          <p style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>Cần xử lý ngay</p>
        </div>

        <div className="glass-card">
          <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>Cảnh báo kho</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', margin: '0.5rem 0' }}>3</h2>
          <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>Sản phẩm sắp hết</p>
        </div>
      </div>
    </div>
  )
}
