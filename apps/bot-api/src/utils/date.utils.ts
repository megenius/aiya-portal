import { format, toZonedTime } from 'date-fns-tz';

export const formatDateBangkok = (datetime: Date): string => {
  const formatDateInBangkok = (date: Date, timeZone: string): string => {
    const zonedDate = toZonedTime(date, timeZone); // Convert to Bangkok timezone
    return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss", { timeZone }); // No timezone offset
  };
  return formatDateInBangkok(datetime, 'Asia/Bangkok');
};
