# AETHERIA Admin Dashboard & Backend

Hệ thống quản trị cao cấp dành cho thương hiệu thời trang Aetheria. Thiết kế theo phong cách "Quiet Luxury", tối giản, trực quan và tốc độ cao.

## Công nghệ sử dụng (Tech Stack)
- **Framework**: Next.js 14 (App Router) cho cả API Backend và Frontend Admin.
- **Database**: PostgreSQL quản lý qua Prisma ORM.
- **Validation**: Zod.
- **Bảo mật**: JWT (httpOnly cookies), bcrypt.

## Hướng dẫn cài đặt (Setup Guide)

1. **Cài đặt Node.js và PostgreSQL**:
   Hãy đảm bảo máy tính của bạn đã cài Node.js (v18+) và PostgreSQL.

2. **Cài đặt thư viện**:
   Mở terminal tại thư mục `admin` và chạy:
   ```bash
   npm install
   ```

3. **Cấu hình môi trường**:
   Copy file `.env.example` thành `.env` và điền thông tin Database URL của bạn.

4. **Khởi tạo Database & Seed dữ liệu**:
   Đẩy cấu trúc bảng lên database:
   ```bash
   npm run db:push
   ```
   Tạo 12 sản phẩm mẫu vào database:
   ```bash
   npm run db:seed
   ```

5. **Chạy Server**:
   ```bash
   npm run dev
   ```
   Truy cập `http://localhost:3000` để xem trang quản trị.

## Hướng dẫn sử dụng cho Chủ Cửa Hàng
- **Khách hàng (CRM)**: Xem lịch sử mua hàng, nâng hạng thẻ (Silver/Gold/Black), duyệt yêu cầu "Xin lời mời" từ trang chủ.
- **Sản phẩm**: Quản lý kho, phiên bản màu/size, gắn tag giới hạn (VD: 037/120). Giao diện tối giản giúp bạn chỉnh sửa giá/kho chỉ bằng 1 click.
- **Hình ảnh**: Quản lý ảnh tập trung. Ảnh tự động tối ưu hóa (WebP) để web tải nhanh.
