import { Profile } from "~/types/app";

interface ProfileParams {
  uid?: string;
  id?: string;
  liff_id?: string; // เพิ่ม liff_id เพื่อใช้ในการค้นหาโปรไฟล์
}

export async function fetchProfile(params: ProfileParams) {
  try {
    if (params.id) {
      // เรียกใช้ API endpoint ด้วย ID โดยตรง
      const response = await fetch(`/api/profiles/${params.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return await response.json();
    } else if (params.uid && params.liff_id) {
      // สร้าง hash ID จาก liff_id และ uid เหมือนใน API
      const id = await generateProfileId(params.liff_id, params.uid);
      const response = await fetch(`/api/profiles/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return await response.json();
    } else if (params.uid) {
      // เรียกใช้ API endpoint ที่เหมาะสมตาม userId
      const response = await fetch(`/api/profiles/user/${params.uid}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return await response.json();
    } else {
      throw new Error('Either id, uid, or both liff_id and uid must be provided');
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
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

export async function createProfile(profileData: Partial<Profile>) {
  try {
    // ต้องมั่นใจว่ามี liff_id และ uid ในข้อมูลที่ส่งไป เพื่อให้ API สามารถสร้าง ID ได้
    if (!profileData.liff_id || !profileData.uid) {
      throw new Error('liff_id and uid are required for profile creation');
    }
    
    console.log('Creating profile with data:', profileData);
    
    const response = await fetch('/api/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    
    if (!response.ok) {
      // ตรวจสอบว่า response เป็น JSON หรือไม่
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create profile');
      } else {
        // ถ้าไม่ใช่ JSON ให้ดึงข้อความเป็น text แทน
        const errorText = await response.text();
        console.error('Non-JSON response:', errorText);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error;
  }
}
