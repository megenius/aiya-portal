const MONTHS_TH = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];
const MONTHS_EN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export function formatDateTime(
  dateInput: Date | string,
  lang: "th" | "en" = "th",
): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  if (lang === "th") {
    // พ.ศ. year
    const buddhistYear = year + 543;
    const shortYear = buddhistYear.toString().slice(-2);
    return `${day} ${MONTHS_TH[month]} ${shortYear} เวลา ${pad(hour)}:${pad(minute)} น.`;
  } else {
    const shortYear = year.toString().slice(-2);
    return `${day} ${MONTHS_EN[month]} ${shortYear} at ${pad(hour)}:${pad(minute)}`;
  }
}

export function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// ใช้สำหรับ UI ที่ต้องการรูปแบบปีเต็ม และไม่มีคำว่า "เวลา/at"
export function formatDateTimeShort(
  dateStr?: string,
  lang: "th" | "en" = "th",
  options?: { includeTime?: boolean },
): string {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear() + (lang === "th" ? 543 : 0);
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const monthName = lang === "th" ? MONTHS_TH[month] : MONTHS_EN[month];
  const timeSuffix = lang === "th" ? " น." : "";

  const includeTime = options?.includeTime ?? true;
  if (!includeTime) {
    return `${day} ${monthName} ${year}`;
  }
  return `${day} ${monthName} ${year} - ${hour}:${minute}${timeSuffix}`;
}

// สร้างฟังก์ชัน generateProfileId เพื่อใช้ใน fetchProfile และ createProfile
export async function generateProfileId(
  liff_id: string,
  uid: string,
): Promise<string> {
  // สร้าง hash ด้วย Web Crypto API เหมือนกับที่ทำใน API
  const hashString = `${liff_id}${uid}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(hashString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // แปลง buffer เป็น hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // จัดรูปแบบ ID เป็น UAxxx โดยที่ xxx คือ 32 ตัวอักษรแรกของ hash
  return `UA${hashHex.substring(0, 32)}`;
}
