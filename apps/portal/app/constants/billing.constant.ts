const getAnnualPrice = (monthlyPrice) => {
  const annual = monthlyPrice * 12;
  const discount = 0.15; // 15% discount for annual
  return Math.floor(annual * (1 - discount));
};

const getSavePrice = (monthlyPrice, annualPrice) => {
  return monthlyPrice * 12 - annualPrice;
};

export const plansEn = [
  {
    name: "Free Trial",
    price: "0",
    monthlyPriceId: "",
    annualPriceId: "",
    icon: {
      rects: [{ y: 5, fill: "fill-blue-300 dark:fill-blue-600" }],
    },
    features: [
      "150 Smart Replies/mo",
      "20 Generative Replies/mo",
      "15 Slip Recognition/mo",
      "1 Workspace",
      "1 Bot per Workspace",
      "3 Knowledge Base per Bot",
      "100MB Storage",
      "2 Team Members per Workspace",
      "Text, Image, Link",
      "Community Support",
      "Unlimited LINE integration",
      "Unlimited Facebook Page integration",
    ],
    button: {
      text: "Start Free",
      disabled: false,
      primary: false,
    },
  },
  {
    name: "Starter",
    monthlyPrice: "1,890",
    annualPrice: "15,198",
    annualSavePrice: "2,382",
    monthlyPriceId: import.meta.env.VITE_STRIPE_STARTER_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_STARTER_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { y: 5, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 5, fill: "fill-blue-500 dark:fill-blue-700" },
      ],
    },
    popular: true,
    features: (monthly) => [
      `${monthly ? "3,000" : "3,600 (+20%)"} Smart Replies/mo`,
      `${monthly ? "1,200" : "1,440 (+20%)"} Generative Replies/mo`,
      `${monthly ? "300" : "360 (+20%)"} Slip Recognition/mo`,
      "3 Workspaces",
      "3 Bots per Workspace",
      "5 Knowledge Bases per Bot",
      "2G Storage",
      "3 Team Members per Workspace",
      "Text, Image, Link, Document (PDF, Word, Excel), Video",
      "Email Support",
      "Basic Analytics",
      "Unlimited LINE integration",
      "Unlimited Facebook Page integration",
    ],
    button: {
      text: "Choose Starter",
      disabled: false,
      primary: true,
    },
  },
  {
    name: "Growth",
    monthlyPrice: "2,990",
    annualPrice: "30,498",
    annualSavePrice: "5,382",
    monthlyPriceId: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { x: 7, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
        { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 10, fill: "fill-blue-500 dark:fill-blue-700" },
      ],
    },
    features: (monthly) => [
      `${monthly ? "8,000" : "9,600"} Smart Replies/mo`,
      `${monthly ? "3,000" : "3,600"} Generative Replies/mo`,
      `${monthly ? "900" : "1,080"} Slip Recognition/mo`,
      "5 Workspaces",
      "5 Bots per Workspace",
      "10 Knowledge Bases per Bot",
      "5G Storage",
      "5 Team Members per Workspace",
      "Text, Image, Link, Document (PDF, Word, Excel), Video",
      "Priority Support",
      "Advanced Analytics",
      "Unlimited LINE integration",
      "Unlimited Facebook Page integration",
    ],
    button: {
      text: "Choose Growth",
      disabled: false,
      primary: true,
    },
  },
];

export const plansTh = [
  {
    name: "Free Trial",
    price: "0",
    monthlyPriceId: "",
    annualPriceId: "",
    icon: {
      rects: [{ y: 5, fill: "fill-blue-300 dark:fill-blue-600" }],
    },
    features: [
      "150 Smart Replies/เดือน",
      "20 Generative Replies/เดือน",
      "15 ตรวจสลิป/เดือน",
      "1 เวิร์กสเปซ",
      "1 บอทต่อเวิร์กสเปซ",
      "3 ฐานความรู้ต่อบอท",
      "พื้นที่จัดเก็บ 100MB",
      "2 สมาชิกทีมต่อเวิร์กสเปซ",
      "ข้อความ, รูปภาพ, ลิงก์",
      "การสนับสนุนผ่านชุมชน",
      "ไม่จำกัดการเชื่อมต่อ LINE",
      "ไม่จำกัดการเชื่อมต่อเพจ Facebook",
    ],
    button: {
      text: "เริ่มใช้ฟรี",
      disabled: false,
      primary: false,
    },
  },
  {
    name: "Starter",
    monthlyPrice: 1890,
    annualPrice: getAnnualPrice(1890),
    annualSavePrice: getSavePrice(1890, getAnnualPrice(1890)),
    monthlyPriceId: import.meta.env.VITE_STRIPE_STARTER_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_STARTER_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { y: 5, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 5, fill: "fill-blue-500 dark:fill-blue-700" },
      ],
    },
    popular: true,
    features: (monthly) => [
      `${monthly ? "3,000" : "3,600 (+20%)"} Smart Replies/เดือน`,
      `${monthly ? "1,200" : "1,440 (+20%)"} Generative Replies/เดือน`,
      `${monthly ? "100" : "120 (+20%)"} ตรวจสลิป/เดือน`,
      "3 เวิร์กสเปซ",
      "3 บอทต่อเวิร์กสเปซ",
      "5 ฐานความรู้ต่อบอท",
      "พื้นที่จัดเก็บ 2GB",
      "3 สมาชิกทีมต่อเวิร์กสเปซ",
      "ข้อความ, รูปภาพ, ลิงก์, เอกสาร (PDF, Word, Excel), วิดีโอ",
      "การสนับสนุนทางอีเมล",
      "การวิเคราะห์ขั้นพื้นฐาน",
      "ไม่จำกัดการเชื่อมต่อ LINE",
      "ไม่จำกัดการเชื่อมต่อเพจ Facebook",
    ],
    button: {
      text: "เลือกแพ็คเกจ Starter",
      disabled: false,
      primary: true,
    },
  },
  {
    name: "Growth",
    monthlyPrice: 3490,
    annualPrice: getAnnualPrice(3490),
    annualSavePrice: getSavePrice(3490, getAnnualPrice(3490)),
    monthlyPriceId: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { x: 7, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
        { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 10, fill: "fill-blue-500 dark:fill-blue-700" },
      ],
    },
    features: (monthly) => [
      `${monthly ? "8,000" : "9,600 (+20%)"} Smart Replies/เดือน`,
      `${monthly ? "3,000" : "3,600 (+20%)"} Generative Replies/เดือน`,
      `${monthly ? "300" : "360 (+20%)"} ตรวจสลิป/เดือน`,
      "5 เวิร์กสเปซ",
      "5 บอทต่อเวิร์กสเปซ",
      "10 ฐานความรู้ต่อบอท",
      "พื้นที่จัดเก็บ 5GB",
      "5 สมาชิกทีมต่อเวิร์กสเปซ",
      "ข้อความ, รูปภาพ, ลิงก์, เอกสาร (PDF, Word, Excel), วิดีโอ",
      "การสนับสนุนแบบเร่งด่วน",
      "การวิเคราะห์ขั้นสูง",
      "ไม่จำกัดการเชื่อมต่อ LINE",
      "ไม่จำกัดการเชื่อมต่อเพจ Facebook",
    ],
    button: {
      text: "เลือกแพ็คเกจ Growth",
      disabled: false,
      primary: true,
    },
  },
];
