import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Aetheria Admin',
  description: 'Quiet Luxury Admin Dashboard',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="admin-layout">
          <aside className="sidebar">
            <div className="sidebar-logo">AETHERIA</div>
            <ul className="nav-menu">
              <li><a href="/" className="nav-link active"><span className="nav-icon">📊</span><span className="nav-text">Tổng quan</span></a></li>
              <li><a href="/orders" className="nav-link"><span className="nav-icon">📦</span><span className="nav-text">Đơn hàng</span></a></li>
              <li><a href="/products" className="nav-link"><span className="nav-icon">🛍️</span><span className="nav-text">Sản phẩm</span></a></li>
              <li><a href="/customers" className="nav-link"><span className="nav-icon">👥</span><span className="nav-text">Khách hàng</span></a></li>
              <li><a href="/content" className="nav-link"><span className="nav-icon">🖼️</span><span className="nav-text">Hình ảnh</span></a></li>
            </ul>
          </aside>
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
