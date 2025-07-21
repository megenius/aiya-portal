export function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// สร้างฟังก์ชัน generateProfileId เพื่อใช้ใน fetchProfile และ createProfile
export async function generateProfileId(liff_id: string, uid: string): Promise<string> {
  // สร้าง hash ด้วย Web Crypto API เหมือนกับที่ทำใน API
  const hashString = `${liff_id}${uid}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(hashString);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
  // แปลง buffer เป็น hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  // จัดรูปแบบ ID เป็น UAxxx โดยที่ xxx คือ 32 ตัวอักษรแรกของ hash
  return `UA${hashHex.substring(0, 32)}`;
}