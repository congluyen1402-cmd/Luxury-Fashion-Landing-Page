const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');
  
  // 12 products
  const products = [
    { name: 'Áo Khoác Noir Manteau', sku: 'AET-COAT-01', price: 15000000, isLimited: true, editionSize: 120, status: 'PUBLISHED' },
    { name: 'Vest lụa Emerald', sku: 'AET-VEST-01', price: 8500000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Áo len Cashmere cổ lọ', sku: 'AET-KNIT-01', price: 12000000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Đầm lụa xếp nếp', sku: 'AET-DRESS-01', price: 18000000, isLimited: true, editionSize: 50, status: 'PUBLISHED' },
    { name: 'Túi xách da bê Epsom', sku: 'AET-BAG-01', price: 25000000, isLimited: true, editionSize: 120, status: 'PUBLISHED' },
    { name: 'Blazer Len Lông Cừu', sku: 'AET-BLZ-02', price: 11000000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Quần u Ống Rộng', sku: 'AET-PANT-01', price: 6500000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Khăn Choàng Cashmere', sku: 'AET-SCARF-01', price: 4000000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Sơ mi Lụa Tơ Tằm', sku: 'AET-SHIRT-01', price: 5500000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Áo măng tô Classic', sku: 'AET-COAT-02', price: 19500000, isLimited: false, status: 'PUBLISHED' },
    { name: 'Thắt lưng Da Đà Điểu', sku: 'AET-BELT-01', price: 7500000, isLimited: true, editionSize: 200, status: 'PUBLISHED' },
    { name: 'Găng tay Da Dê', sku: 'AET-GLOVE-01', price: 3500000, isLimited: false, status: 'PUBLISHED' },
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { sku: p.sku },
      update: {},
      create: {
        name: p.name,
        slug: p.sku.toLowerCase(),
        sku: p.sku,
        price: p.price,
        status: p.status,
        isLimited: p.isLimited,
        editionSize: p.editionSize
      }
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
