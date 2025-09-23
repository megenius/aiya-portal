export type Lang = "th" | "en";

// Simple message dictionary with dot-notated keys
export const messages = {
  th: {
    searchBar: {
      placeholder: "ค้นหาคูปอง ร้านค้า...",
      clear: "ล้างการค้นหา",
      searching: "กำลังค้นหา",
    },
    campaignRegister: {
      pageTitle: "ลงทะเบียนเข้าร่วมแคมเปญ",
      introDesc: "กรุณากรอกข้อมูลเพื่อลงทะเบียนเข้าร่วมแคมเปญ",
      formTitle: "ข้อมูลสำหรับลงทะเบียน",
      errorsSummary: "กรุณาแก้ไขข้อผิดพลาดต่อไปนี้:",
      joinNow: "เข้าร่วมเลย",
      useStore: "ใช้บริการร้าน",
      shareTitle: "ชวนเพื่อนใช้ {pageName}",
      shareText: "{displayName} ชวนคุณมาใช้แอปพลิเคชัน {pageName}!",
      inviteLinkError: "ไม่สามารถสร้างลิงก์ชวนเพื่อนได้ กรุณาลองใหม่อีกครั้ง",
      defaultDescription:
        "แอปพลิเคชันใหม่ที่น่าสนใจ พร้อมโปรโมชันและสิทธิพิเศษมากมาย!",
      inviteHeadline: "{displayName} ชวนคุณมาร่วมสนุก!",
    },
    mission: {
      pageTitle: "รายละเอียดภารกิจ",
      instructions: "คำแนะนำ",
      submit: "ส่งภารกิจ",
      submitting: "กำลังส่ง...",
      completedTitle: "🎉 ภารกิจเสร็จสิ้น!",
      earnedCredits: "✨ คุณได้รับ {credits} สิทธิ์!",
      returning: "กลับสู่แดชบอร์ดในอีกสักครู่...",
      errors: {
        notAvailable: "ภารกิจนี้ยังไม่เปิดให้ทำ",
        notFound: "ไม่พบภารกิจที่ต้องการ",
        generic: "เกิดข้อผิดพลาด",
        unexpected: "เกิดข้อผิดพลาดที่ไม่คาดคิด",
        required: "กรุณากรอกข้อมูล",
        invalidEmail: "รูปแบบอีเมลไม่ถูกต้อง",
        invalidPhone: "รูปแบบเบอร์โทรไม่ถูกต้อง",
        fixFollowing: "กรุณาแก้ไขข้อผิดพลาดต่อไปนี้:",
        tryAgain: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      },
    },
    campaignDashboard: {
      title: "สิทธิ์ที่ได้รับ",
      lastUpdatedPrefix: "อัปเดตล่าสุด: ",
      allMissions: "ภารกิจทั้งหมด",
      notFound: "ไม่พบข้อมูลแคมเปญ",
    },
    campaignConsent: {
      title: "ข้อกำหนดและเงื่อนไขการใช้บริการมีจีเนียส",
      subtitle: "กรุณาอ่านและยอมรับเงื่อนไขก่อนเข้าร่วมแคมเปญ",
      agreeText: "ข้าพเจ้ายอมรับเงื่อนไขการใช้ข้อมูลส่วนบุคคล",
      continueButton: "ยอมรับ",
      saving: "กำลังบันทึก...",
      errors: {
        mustAgree: "กรุณายอมรับเงื่อนไขการใช้งาน",
      },
    },
    interests: {
      errors: {
        missingUser: "ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่อีกครั้ง",
        missingLiffId: "ไม่พบ LIFF ID กรุณาลองใหม่อีกครั้ง",
        createFailed: "เกิดข้อผิดพลาดในการสร้างโปรไฟล์ [{message}]",
      },
    },
    fileUpload: {
      readFailed:
        "ไม่สามารถอ่านไฟล์จากตัวเลือกนี้ได้ อาจเป็นไฟล์จากคลาวด์\nโปรดดาวน์โหลดรูปลงเครื่องก่อนแล้วลองใหม่ หรือถ่ายรูปด้วยกล้องโดยตรง",
      invalidType: "ประเภทไฟล์ไม่ถูกต้อง",
      tooLarge: "ไฟล์ใหญ่เกินไป (สูงสุด {maxSize}MB)",
    },
    reward: {
      yourPoints: "แต้มสะสมของคุณ",
      pointLabel: "แต้ม",
      tabs: {
        history: "ประวัติแต้ม",
        rewards: "รางวัล",
      },
    },
    qrcode: {
      back: "กลับ",
      pageTitle: "QR Code สำหรับชวนเพื่อน",
      scanTitle: "สแกน QR Code เพื่อเข้าร่วมกับเรา",
    },
    coupon: {
      notices: {
        notAvailable: "คูปองยังไม่เปิดให้รับ",
      },
      errors: {
        groupQuotaFull: "คุณใช้สิทธิ์ในแคมเปญนี้ครบแล้ว",
      },
      modal: {
        fullyCollected: {
          title: "คูปองหมดแล้ว",
          message:
            "ขออภัย คูปองนี้หมดแล้ว โปรดกลับมาตรวจสอบโปรโมชั่นอื่นๆ ในภายหลัง",
        },
      },
    },
    home: {
      popularVouchers: "คูปองยอดนิยม",
      allVouchers: "คูปองทั้งหมด",
    },
    brandList: {
      title: "แบรนด์",
    },
    categoryList: {
      ariaLabel: "หมวดหมู่สินค้า",
      selectCategory: "เลือกหมวดหมู่",
      all: "ทั้งหมด",
    },
    search: {
      resultsFor: 'ผลการค้นหาสำหรับ "{query}"',
      resultsCount: "พบ {count} รายการ",
      vouchers: "คูปอง",
      emptyTitle: "ไม่พบผลการค้นหา",
      emptySuggestion: "ลองใช้คำค้นหาอื่น หรือเลือกดูตามหมวดหมู่",
    },
    comingSoon: {
      comingSoon: "เร็วๆ นี้",
      noVouchers: "ขณะนี้ยังไม่มีคูปอง",
      checkBack: "กรุณาตรวจสอบอีกครั้งในภายหลัง",
    },
    promotion: {
      couponExclusive: "คูปองพิเศษ",
    },
    shopSummary: {
      myCoupons: "คูปองของฉัน",
      couponsCollected: "คูปองที่ได้รับ",
      available: "คงเหลือ",
      used: "ใช้แล้ว",
      viewAll: "ดูทั้งหมด",
      couponsAvailable: "คูปองที่ใช้งานได้",
    },
    shopHeader: {
      invite: "เชิญ",
      inviteFriends: "เชิญเพื่อน",
      coupon: "คูปอง",
      inviteFriendsInLINE: "เชิญเพื่อนใน LINE",
      scanQrToJoin: "สแกน QR Code เพื่อเข้าร่วม",
      joinNow: "เข้าร่วมเลย",
      useStore: "ใช้บริการร้าน",
      shareTitle: "ชวนเพื่อนใช้ {pageName}",
      shareText: "{displayName} ชวนคุณมาใช้ {pageName}!",
      inviteLinkError: "ไม่สามารถสร้างลิงก์เชิญได้ กรุณาลองใหม่",
      defaultDescription: "แอปใหม่ที่น่าสนใจ พร้อมโปรโมชันและสิทธิพิเศษมากมาย!",
      inviteHeadline: "{displayName} ชวนคุณมาร่วมสนุก!",
    },
    common: {
      back: "กลับ",
      creditsLabel: "เครดิต",
      cancel: "ยกเลิก",
      close: "ปิด",
      confirm: "ยืนยัน",
      submitting: "กำลังส่ง...",
      details: "รายละเอียด",
      conditions: "เงื่อนไข",
      copied: "คัดลอกแล้ว",
      copyLink: "คัดลอกลิงก์",
      copyFailed: "คัดลอกลิงก์ไม่สำเร็จ",
      shareViaOtherApps: "แชร์ผ่านแอปอื่น",
    },
  },
  en: {
    searchBar: {
      placeholder: "Find Voucher, Shop...",
      clear: "Clear search",
      searching: "Searching",
    },
    qrcode: {
      back: "Back",
      pageTitle: "QR Code for inviting friends",
      scanTitle: "Scan the QR Code to join us",
    },
    shopSummary: {
      myCoupons: "My Coupons",
      couponsCollected: "Coupons collected",
      available: "Available",
      used: "Used",
      viewAll: "View All",
      couponsAvailable: "Coupons available",
    },
    comingSoon: {
      comingSoon: "Coming Soon",
      noVouchers: "No vouchers available at the moment",
      checkBack: "Please check back later",
    },
    promotion: {
      couponExclusive: "Exclusive Coupons",
    },
    myCoupons: {
      card: {
        tapToRedeem: "Tap to redeem",
        redeemed: "Redeemed",
        expired: "Expired",
        untilPrefix: "Until: ",
      },
      empty: {
        available: "No available Coupons",
        used: "No used Coupons",
        expired: "No expired Coupons",
      },
    },
    brandVoucher: {
      collectUntil: "Collect Until",
    },
    brandList: {
      title: "Brands",
    },
    categoryList: {
      ariaLabel: "Product categories",
      selectCategory: "Select category",
      all: "All",
    },
    search: {
      resultsFor: 'Search results for "{query}"',
      resultsCount: "Found {count} results",
      vouchers: "Vouchers",
      emptyTitle: "No results found",
      emptySuggestion:
        "Try searching with different keywords or browse by category",
    },
    home: {
      popularVouchers: "Popular Coupons",
      allVouchers: "All Vouchers",
    },
    ranking: {
      title: "Player Ranking",
      subtitle: "See your rank compared to other players",
      yourRank: "Your Rank",
      you: "You",
      topPlayers: "Top Players",
    },
    credits: {
      pageTitle: "Credit History",
      currentBalance: "Current Balance",
      totalEarned: "Total Earned",
      thisMonth: "This Month",
      level: "Level",
      filters: "Filters",
      all: "All",
      earned: "Earned",
      spent: "Spent",
      newest: "Newest",
      oldest: "Oldest",
      transactionHistory: "Transaction History",
      transactions: "transactions",
      noTransactions: "No transactions found",
      backToDashboard: "Back to Dashboard",
      transactionTypes: {
        missionReward: "Mission Reward",
        bonus: "Bonus",
        redemption: "Redemption",
        refund: "Refund",
        other: "Other Transaction",
      },
      loadError: "Unable to load credits data",
    },
    footer: {
      status: {
        instant: "Collect",
        form: "Register",
        collected: "Redeem",
        pending_confirmation: "Tap to Use",
        used: "Redeemed",
        expired: "Expired",
        ended: "Collection ended",
        fully_collected: "Fully Collected",
        not_started: "Not started",
        submitting: "Collecting...",
      },
    },
    common: {
      back: "Back",
      creditsLabel: "credits",
      cancel: "Cancel",
      close: "Close",
      confirm: "Confirm",
      submitting: "Submitting...",
      details: "Details",
      conditions: "Conditions",
      copied: "Copied",
      copyLink: "Copy link",
      copyFailed: "Failed to copy link",
      shareViaOtherApps: "Share via other apps",
    },
    limitedTime: {
      back: "Back",
      collecting: "Collecting...",
      endedOverlay: "Sorry, coupon collection time has ended!",
      allCollected: "All vouchers have been collected.",
      redeem: "Redeem",
      expired: "Expired",
      startsAt: "Starts at\n{time}",
      collectDescription:
        "After clicking the collect button, the voucher will expire in {duration}.",
    },
    redeemModal: {
      tabs: {
        details: "Details",
        conditions: "Conditions",
      },
      afterCollect: {
        successTitle: "Coupons collected successfully",
        description:
          "If you redeem now, the coupon will start a countdown with {minutes} minutes to use it.",
        seeMyVouchers: "See My Coupons",
      },
      confirm: {
        title: "Do you want to redeem this coupon?",
        description:
          "If you redeem this coupon, it will start a countdown with {minutes} minutes to use it.",
        warning: "Coupon will expire in {minutes} minutes after redeem",
        redeemNow: "Redeem Now",
      },
      codePage: {
        willExpireIn: "This coupon will expire in",
        expireWarning: "Coupon is about to expire! Please use it immediately",
        suggestionForStaff: "For POS staff only",
        confirmButton: "Confirm redeem",
      },
      confirmRedeem: {
        title: "Do you confirm that this coupon has been redeemed?",
        description:
          "Please ensure that you have scanned this coupon to prevent customer rights from being lost.",
        button: "Confirm",
      },
      expired: {
        title: "This coupon has expired",
      },
    },
    shopHeader: {
      invite: "Invite",
      inviteFriends: "Invite friends",
      coupon: "coupon",
      inviteFriendsInLINE: "Invite friends in LINE",
      scanQrToJoin: "Scan this QR Code to join the application",
      joinNow: "Join now",
      useStore: "Use store",
      shareTitle: "Invite friends to use {pageName}",
      shareText: "{displayName} invited you to use {pageName}!",
      inviteLinkError: "Unable to create invite link. Please try again.",
      defaultDescription:
        "A new exciting application with lots of promotions and privileges!",
      inviteHeadline: "{displayName} invited you to join!",
    },
    mission: {
      pageTitle: "Mission Details",
      instructions: "Instructions",
      submit: "Submit Mission",
      submitting: "Submitting...",
      completedTitle: "🎉 Mission Completed!",
      earnedCredits: "✨ You earned {credits} credits!",
      returning: "Returning to dashboard...",
      errors: {
        notAvailable: "This mission is not available yet",
        notFound: "Requested mission not found",
        generic: "An error occurred",
        unexpected: "An unexpected error occurred",
        required: "This field is required",
        invalidEmail: "Invalid email format",
        invalidPhone: "Invalid phone number format",
        fixFollowing: "Please fix the following errors:",
        tryAgain: "An error occurred. Please try again.",
      },
    },
    campaignConsent: {
      title: "Terms and conditions of using MEGenius services",
      subtitle:
        "Please read and agree to the terms before joining the campaign",
      agreeText: "I accept the personal data usage terms",
      continueButton: "Accept",
      saving: "Saving...",
      errors: {
        mustAgree: "Please agree to the terms and conditions",
      },
    },
    interests: {
      errors: {
        missingUser: "User information not found. Please try again.",
        missingLiffId: "LIFF ID not found. Please try again.",
        createFailed: "An error occurred while creating profile [{message}]",
      },
    },
    fileUpload: {
      readFailed:
        "Cannot read the selected file (possibly from cloud). Please download the photo locally and try again, or use camera.",
      invalidType: "Invalid file type",
      tooLarge: "File too large (max {maxSize}MB)",
    },
  },
} as const;

function getByPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, k) => {
    if (
      acc &&
      typeof acc === "object" &&
      k in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[k];
    }
    return undefined;
  }, obj);
}

function interpolate(
  template: string,
  params?: Record<string, string | number>,
) {
  if (!params) return template;
  return template.replace(/\{(.*?)\}/g, (_, key) => String(params[key] ?? ""));
}

export function t(
  lang: Lang,
  key: string,
  params?: Record<string, string | number>,
) {
  const dict = (messages as Record<string, unknown>)[lang] ?? messages.th;
  const value = getByPath(dict as Record<string, unknown>, key);
  if (typeof value === "string") return interpolate(value, params);
  // fallback to en
  const fallback = getByPath(
    messages.en as unknown as Record<string, unknown>,
    key,
  );
  if (typeof fallback === "string") return interpolate(fallback, params);
  return key; // as a last resort
}
