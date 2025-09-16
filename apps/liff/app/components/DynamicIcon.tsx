// DynamicIcon.tsx
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

// บังคับมอง Icons เป็น map ของ component เท่านั้น
const IconMap = Icons as unknown as Record<string, ComponentType<LucideProps>>;

export type IconName = keyof typeof Icons; // สำหรับ autocomplete ชื่อไอคอน

export function DynamicIcon({
  name,
  ...props
}: { name?: string } & LucideProps) {
  if (!name) return null;

  const C = IconMap[name]; // หยิบ component ตามชื่อ
  if (!C) return null; // กันกรณีชื่อไม่ถูกต้อง

  return <C {...props} />; // ใช้งานเป็น JSX component ได้เลย
}
