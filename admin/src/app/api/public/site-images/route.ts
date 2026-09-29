import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const mockDbPath = path.join(process.cwd(), 'mock-db.json');

export async function GET() {
  let images = [];
  if (fs.existsSync(mockDbPath)) {
    images = JSON.parse(fs.readFileSync(mockDbPath, 'utf-8'));
  } else {
    images = [
      { id: '1', slotKey: 'hero_background', imageUrl: '/hero_fashion_bg.jpg', focalPointX: 50, focalPointY: 50 },
      { id: '2', slotKey: 'floating_card_detail', imageUrl: 'https://images.unsplash.com/photo-1617391654484-9c5932a35368?q=80&w=600&auto=format&fit=crop', focalPointX: 50, focalPointY: 50 }
    ];
  }
  
  const mapping: Record<string, any> = {};
  images.forEach((img: any) => {
    mapping[img.slotKey] = {
      url: img.imageUrl,
      focalPointX: img.focalPointX,
      focalPointY: img.focalPointY
    };
  });

  return NextResponse.json(mapping, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
}
