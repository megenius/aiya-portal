import { useEffect, useRef, useState } from "react";

const DateRangePicker = ({
  label = "เลือกวันที่",
  onChange,
  className = "",
  initialStartDate = "",
  initialEndDate = "",
  size = "md",
  disabled = false, 
}) => {
  const getBkkTime = (date) => {
    const d = new Date(date);
    d.setHours(12, 0, 0, 0);
    return d;
  };

  const getDateOnly = (date) => {
    const d = new Date(date);
    d.setHours(12, 0, 0, 0);
    return d.toISOString().split("T")[0];
  };


  const parseInitialDate = (dateStr: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : getBkkTime(date);
  };

  const initialStartDateTime = parseInitialDate(initialStartDate);
  const initialEndDateTime = parseInitialDate(initialEndDate);
  const initialCurrentMonth = initialStartDateTime || getBkkTime(new Date());

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    initialStartDateTime
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(
    initialEndDateTime
  );
  const [currentStartMonth, setCurrentStartMonth] =
    useState(initialCurrentMonth);
  const [currentEndMonth, setCurrentEndMonth] = useState(initialCurrentMonth);
  const [tempSelectedStartDate, setTempSelectedStartDate] =
    useState<Date | null>(initialStartDateTime);
  const [tempSelectedEndDate, setTempSelectedEndDate] = useState<Date | null>(
    initialEndDateTime
  );
  const [dropdownDirection, setDropdownDirection] = useState("down");
  const [horizontalDirection, setHorizontalDirection] = useState("right");
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const [showStartMonthDropdown, setShowStartMonthDropdown] = useState(false);
  const [showStartYearDropdown, setShowStartYearDropdown] = useState(false);
  const [showEndMonthDropdown, setShowEndMonthDropdown] = useState(false);
  const [showEndYearDropdown, setShowEndYearDropdown] = useState(false);

  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  const generateYearRange = () => {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
      years.push(i);
    }
    return years;
  };

  const years = generateYearRange();

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (calendarRef.current && !calendarRef.current.contains(event.target)) {
  //       setShowCalendar(false);
  //       setTempSelectedStartDate(selectedStartDate);
  //       setTempSelectedEndDate(selectedEndDate);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [selectedStartDate, selectedEndDate]);

  useEffect(() => {
    const updatePosition = () => {
      if (showCalendar && inputRef.current) {
        const inputRect = inputRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const spaceBelow = viewportHeight - inputRect.bottom;
        const spaceAbove = inputRect.top;
        const spaceRight = viewportWidth - inputRect.right;
        const spaceLeft = inputRect.left;

        // Check if screen is small (mobile)
        const isMobileScreen = window.innerWidth < 640;

        setDropdownDirection(spaceBelow < 300 && spaceAbove > spaceBelow ? "up" : "down");

        // Center alignment only for mobile screens
        if (isMobileScreen) {
          setHorizontalDirection("center");
        } else {
          setHorizontalDirection(spaceRight < 600 && spaceLeft > spaceRight ? "left" : "right");
        }
      }
    };

    if (showCalendar) {
      // Update position initially and on resize/scroll
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [showCalendar]);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
    const bangkokTime = new Date(
      utcDate.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
    );
    return (bangkokTime.getDay() + 6) % 7;
  };

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return "";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Bangkok",
    };
    // แปลงปีให้เป็น ค.ศ. (หากเป็น พ.ศ.)
    const formattedDate = date.toLocaleDateString("th-TH", options);

    return formattedDate.replace(/\d{4}/, (year) => {
      // แสดงปี ค.ศ. โดยไม่ใช้ปี พ.ศ.
      return (parseInt(year) - 543).toString();
    });
  };

  const handleDateSelect = (day: number, month: Date, isStartDate: boolean) => {
    const newDate = new Date(
      month.getFullYear(),
      month.getMonth(),
      day,
      12,
      0,
      0,
      0
    );

    if (isStartDate) {
      // ถ้าเลือก startDate แล้ว endDate อยู่ก่อนหน้า ให้ reset endDate
      if (tempSelectedEndDate && newDate > tempSelectedEndDate) {
        setTempSelectedEndDate(null);
      }
      setTempSelectedStartDate(newDate);
    } else {
      // ถ้าเลือก endDate ที่อยู่ก่อน startDate ไม่อนุญาต
      if (tempSelectedStartDate && newDate < tempSelectedStartDate) {
        return;
      }
      setTempSelectedEndDate(newDate);
    }
  };

  const handleApply = () => {
    if (tempSelectedStartDate && tempSelectedEndDate) {
      setSelectedStartDate(tempSelectedStartDate);
      setSelectedEndDate(tempSelectedEndDate);
      setShowCalendar(false);
      if (onChange) {
        onChange({
          target: {
            value: {
              startDate: getDateOnly(tempSelectedStartDate),
              endDate: getDateOnly(tempSelectedEndDate),
            },
          },
        });
      }
    }
  };

  const handleCancel = () => {
    setTempSelectedStartDate(selectedStartDate);
    setTempSelectedEndDate(selectedEndDate);
    setShowCalendar(false);
  };

  const isDateInRange = (date: Date) => {
    if (!tempSelectedStartDate || !tempSelectedEndDate) return false;
    return date >= tempSelectedStartDate && date <= tempSelectedEndDate;
  };

  const renderCalendarDays = (
    month: Date,
    isStartCalendar: boolean
  ): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays = daysInMonth(month);
    const firstDay = firstDayOfMonth(month);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="m-px w-8 h-8" />);
    }

    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(
        month.getFullYear(),
        month.getMonth(),
        day,
        12,
        0,
        0,
        0
      );
      const isStart =
        tempSelectedStartDate?.getTime() === currentDate.getTime();
      const isEnd = tempSelectedEndDate?.getTime() === currentDate.getTime();
      const isInRange = isDateInRange(currentDate);
      const isDisabled =
        !isStartCalendar &&
        tempSelectedStartDate &&
        currentDate < tempSelectedStartDate;

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day, month, isStartCalendar)}
          disabled={!!isDisabled}
          className={`m-px w-9 h-8 flex justify-center items-center border border-transparent text-sm rounded-full
            ${
              isDisabled
                ? "text-gray-300 cursor-not-allowed"
                : isStart || isEnd
                  ? "bg-blue-600 text-white"
                  : isInRange
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-800 hover:border-blue-600 hover:text-blue-600"
            }
            focus:outline-none focus:border-blue-600`}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  const changeMonth = (month, year, isStartDate) => {
    const newDate = new Date(year, month, 1);
    
    if (isStartDate) {
      setCurrentStartMonth(newDate);
      // ถ้าเปลี่ยนเดือนเริ่มต้นไปหลังเดือนสิ้นสุด ให้ปรับเดือนสิ้นสุดด้วย
      if (currentEndMonth < newDate) {
        setCurrentEndMonth(newDate);
      }
    } else {
      // สำหรับวันที่สิ้นสุด ให้ตรวจสอบเฉพาะ tempSelectedStartDate ถ้ามี
      // และตรวจสอบเฉพาะเดือน/ปี ไม่ใช่วันเฉพาะ
      if (tempSelectedStartDate) {
        const startYearMonth = new Date(
          tempSelectedStartDate.getFullYear(),
          tempSelectedStartDate.getMonth(),
          1
        );
        if (newDate >= startYearMonth) {
          setCurrentEndMonth(newDate);
        }
      } else {
        setCurrentEndMonth(newDate);
      }
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // ป้องกันไม่ให้ calendar เปิดเมื่อกดปุ่ม clear
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setTempSelectedStartDate(null);
    setTempSelectedEndDate(null);
    if (onChange) {
      onChange({
        target: {
          value: {
            startDate: null,
            endDate: null,
          },
        },
      });
    }
  };

  const renderMonthYearSelector = (currentDate: Date, isStartDate: boolean) => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const showMonthDropdown = isStartDate
      ? showStartMonthDropdown
      : showEndMonthDropdown;
    const showYearDropdown = isStartDate
      ? showStartYearDropdown
      : showEndYearDropdown;

    return (
      <div className="col-span-3 text-center flex justify-center gap-2">
        {/* Month Dropdown */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isStartDate) {
                setShowStartMonthDropdown(!showMonthDropdown);
                setShowStartYearDropdown(false);
                setShowEndMonthDropdown(false);
                setShowEndYearDropdown(false);
              } else {
                setShowEndMonthDropdown(!showMonthDropdown);
                setShowEndYearDropdown(false);
                setShowStartMonthDropdown(false);
                setShowStartYearDropdown(false);
              }
            }}
            className="text-sm font-medium hover:bg-gray-100 px-2 py-1 rounded"
          >
            {months[currentMonth]}
          </button>
          {showMonthDropdown && (
            <div className="absolute z-10 mt-1 w-40 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {months.map((month, index) => (
                <div
                  key={month}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => {
                    changeMonth(index, currentYear, isStartDate);
                    if (isStartDate) {
                      setShowStartMonthDropdown(false);
                    } else {
                      setShowEndMonthDropdown(false);
                    }
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Year Dropdown */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isStartDate) {
                setShowStartYearDropdown(!showYearDropdown);
                setShowStartMonthDropdown(false);
                setShowEndMonthDropdown(false);
                setShowEndYearDropdown(false);
              } else {
                setShowEndYearDropdown(!showYearDropdown);
                setShowEndMonthDropdown(false);
                setShowStartMonthDropdown(false);
                setShowStartYearDropdown(false);
              }
            }}
            className="text-sm font-medium hover:bg-gray-100 px-2 py-1 rounded"
          >
            {currentYear}
          </button>
          {showYearDropdown && (
            <div className="absolute z-10 mt-1 w-24 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {years.map((year) => (
                <div
                  key={year}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => {
                    changeMonth(currentDate.getMonth(), year, isStartDate);
                    if (isStartDate) {
                      setShowStartYearDropdown(false);
                    } else {
                      setShowEndYearDropdown(false);
                    }
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`relative ${className}`} ref={inputRef}>
      <div
        onClick={() => !disabled && setShowCalendar(!showCalendar)}
        className={`py-2 px-3 flex items-center border rounded-lg bg-white text-sm text-center
          ${disabled 
            ? 'border-gray-200 bg-gray-50 cursor-not-allowed text-gray-500' 
            : 'border-gray-300 cursor-pointer hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200'
          }`}
      >
        <span className="grow text-center">
          {selectedStartDate || selectedEndDate
            ? `${selectedStartDate ? formatDate(selectedStartDate) : ""} - ${
                selectedEndDate ? formatDate(selectedEndDate) : ""
              }`
            : "เลือกวันที่"}
        </span>
        <div className="flex items-center gap-2">
          {!disabled && (selectedStartDate || selectedEndDate) && (
            <button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Clear dates"
            >
              <svg
                className="size-4 text-gray-400 hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {!disabled && showCalendar && (
        <div
          className={`absolute ${dropdownDirection === "up" ? "bottom-full mb-2" : "top-full mt-1"} 
            ${horizontalDirection === "left" 
              ? "right-0" 
              : horizontalDirection === "center" 
                ? "left-1/2 transform -translate-x-1/2" 
                : "left-0"
            } 
            bg-white border shadow-lg rounded-xl overflow-hidden z-50 
            sm:w-[638px] w-[300px]`}
          ref={calendarRef}
        >
          <div className="flex flex-col sm:flex-row">
            {/* Start Date Calendar */}
            <div className="p-3 space-y-0.5 sm:w-1/2 w-full sm:border-r border-b sm:border-b-0">
              <div className="flex justify-center pb-1.5 border-b border-gray-200">
                <span>วันที่เริ่มต้น</span>
              </div>
              <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                <div className="col-span-1">
                  <button
                    onClick={() =>
                      changeMonth(
                        currentStartMonth.getMonth() - 1,
                        currentStartMonth.getFullYear(),
                        true
                      )
                    }
                    className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                </div>

                {renderMonthYearSelector(currentStartMonth, true)}

                <div className="col-span-1 flex justify-end">
                  <button
                    onClick={() =>
                      changeMonth(
                        currentStartMonth.getMonth() + 1,
                        currentStartMonth.getFullYear(),
                        true
                      )
                    }
                    className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex pb-1.5">
                {["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"].map((day) => (
                  <span
                    key={day}
                    className="l-px w-10 block text-center text-sm text-gray-500"
                  >
                    {day}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap">
                {renderCalendarDays(currentStartMonth, true).map(
                  (day, index) => (
                    <div key={index} className="w-10">
                      {day}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* End Date Calendar */}
            <div className="p-3 space-y-0.5 sm:w-1/2 w-full">
              <div className="flex justify-center pb-1.5 border-b border-gray-200">
                <span>วันที่สิ้นสุด</span>
              </div>
              <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                <div className="col-span-1">
                  <button
                    onClick={() =>
                      changeMonth(
                        currentEndMonth.getMonth() - 1,
                        currentEndMonth.getFullYear(),
                        false
                      )
                    }
                    className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                </div>

                {renderMonthYearSelector(currentEndMonth, false)}

                <div className="col-span-1 flex justify-end">
                  <button
                    onClick={() =>
                      changeMonth(
                        currentEndMonth.getMonth() + 1,
                        currentEndMonth.getFullYear(),
                        false
                      )
                    }
                    className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex pb-1.5">
                {["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"].map((day) => (
                  <span
                    key={day}
                    className="l-px w-10 block text-center text-sm text-gray-500"
                  >
                    {day}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap">
                {renderCalendarDays(currentEndMonth, false).map(
                  (day, index) => (
                    <div key={index} className="w-10">
                      {day}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center py-3 px-4 justify-end border-t border-gray-200 gap-x-2">
            <button
              onClick={handleCancel}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-[14px] font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleApply}
              disabled={!tempSelectedStartDate || !tempSelectedEndDate}
              className={`py-2 px-3 inline-flex justify-center items-center gap-x-2 text-[14px] font-medium rounded-lg border border-transparent ${
                !tempSelectedStartDate || !tempSelectedEndDate
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }`}
            >
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
