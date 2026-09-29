import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const mockDbPath = path.join(process.cwd(), 'mock-db.json');

const getDummyImages = () => {
  if (fs.existsSync(mockDbPath)) {
    return JSON.parse(fs.readFileSync(mockDbPath, 'utf-8'));
  }
  return [
    { id: '1', slotKey: 'hero_background', sectionName: 'Nền đầu trang (Hero)', description: 'Ảnh nền lớn toàn màn hình ở đầu trang web.', recommendedSize: '1920x1080', imageUrl: '/hero_fashion_bg.jpg', focalPointX: 50, focalPointY: 50 },
    { id: '2', slotKey: 'floating_card_detail', sectionName: 'Ảnh thẻ trôi nổi (Hero)', description: 'Ảnh chi tiết sản phẩm nhỏ ở góc phải đầu trang.', recommendedSize: '400x500', imageUrl: 'https://images.unsplash.com/photo-1617391654484-9c5932a35368?q=80&w=600&auto=format&fit=crop', focalPointX: 50, focalPointY: 50 },
    { id: '3', slotKey: 'story_chapter_1', sectionName: 'Câu chuyện - Nguồn Gốc', description: 'Ảnh mô tả cánh đồng hoặc nguyên liệu.', recommendedSize: '800x1000', imageUrl: '', focalPointX: 50, focalPointY: 50 },
    { id: '4', slotKey: 'story_chapter_2', sectionName: 'Câu chuyện - Chế Tác', description: 'Ảnh mô tả xưởng may, thợ cắt may.', recommendedSize: '800x1000', imageUrl: '', focalPointX: 50, focalPointY: 50 },
    { id: '5', slotKey: 'story_chapter_3', sectionName: 'Câu chuyện - Di Sản', description: 'Ảnh mô tả thành phẩm mang tính di sản.', recommendedSize: '800x1000', imageUrl: '', focalPointX: 50, focalPointY: 50 },
    { id: '6', slotKey: 'brand_values_bg', sectionName: 'Nền phần giá trị', description: 'Ảnh nền mờ cho phần Giá Trị Cốt Lõi.', recommendedSize: '1920x1080', imageUrl: '', focalPointX: 50, focalPointY: 50 },
    { id: '7', slotKey: 'limited_drop_banner', sectionName: 'Banner BST Giới Hạn', description: 'Ảnh nền hiển thị đếm ngược.', recommendedSize: '1920x800', imageUrl: '', focalPointX: 50, focalPointY: 50 },
  ];
};

export async function GET() {
  return NextResponse.json(getDummyImages());
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    fs.writeFileSync(mockDbPath, JSON.stringify(data));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
