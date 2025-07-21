import { Profile } from "~/types/app";

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
