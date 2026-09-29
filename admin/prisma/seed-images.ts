const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const slots = [
    { slotKey: 'hero_background', sectionName: 'Nền đầu trang (Hero)', description: 'Ảnh nền lớn toàn màn hình ở đầu trang web.', recommendedSize: '1920x1080', imageUrl: '/hero_fashion_bg.jpg' },
    { slotKey: 'floating_card_detail', sectionName: 'Ảnh thẻ trôi nổi (Hero)', description: 'Ảnh chi tiết sản phẩm nhỏ ở góc phải đầu trang.', recommendedSize: '400x500' },
    { slotKey: 'story_chapter_1', sectionName: 'Câu chuyện - Nguồn Gốc', description: 'Ảnh mô tả cánh đồng hoặc nguyên liệu.', recommendedSize: '800x1000' },
    { slotKey: 'story_chapter_2', sectionName: 'Câu chuyện - Chế Tác', description: 'Ảnh mô tả xưởng may, thợ cắt may.', recommendedSize: '800x1000' },
    { slotKey: 'story_chapter_3', sectionName: 'Câu chuyện - Di Sản', description: 'Ảnh mô tả thành phẩm mang tính di sản.', recommendedSize: '800x1000' },
    { slotKey: 'brand_values_bg', sectionName: 'Nền phần giá trị', description: 'Ảnh nền mờ cho phần Giá Trị Cốt Lõi.', recommendedSize: '1920x1080' },
    { slotKey: 'membership_section_bg', sectionName: 'Nền phần thẻ thành viên', description: 'Ảnh nền cho phần Đặc Quyền Nội Bộ.', recommendedSize: '1920x1080' },
    { slotKey: 'limited_drop_banner', sectionName: 'Banner BST Giới Hạn', description: 'Ảnh nền hiển thị đếm ngược mua thẻ giới hạn.', recommendedSize: '1920x800' },
    { slotKey: 'footer_bg', sectionName: 'Nền Chân Trang', description: 'Ảnh nền cho Footer.', recommendedSize: '1920x500' },
  ];

  for (const s of slots) {
    await prisma.siteImage.upsert({
      where: { slotKey: s.slotKey },
      update: {},
      create: { ...s }
    });
  }
  console.log('Seeded site image slots successfully.');
}
main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
