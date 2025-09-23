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
      errors: {
        required: "กรุณากรอกข้อมูล",
        emailInvalid: "รูปแบบอีเมลไม่ถูกต้อง",
        phoneInvalid: "รูปแบบเบอร์โทรไม่ถูกต้อง",
        checkboxRequired: "กรุณาติ๊กยอมรับ",
        selectRequired: "กรุณาเลือกข้อมูล",
      },
      submitting: "กำลังลงทะเบียน...",
      submit: "ลงทะเบียน",
      notFound: "ไม่พบแคมเปญที่ต้องการ",
    },
    shopSummary: {
      myCoupons: "คูปองของฉัน",
      couponsCollected: "คูปองที่เก็บ",
      available: "พร้อมใช้งาน",
      used: "ใช้แล้ว",
      viewAll: "ดูทั้งหมด",
      couponsAvailable: "คูปองที่พร้อมใช้งาน",
    },
    comingSoon: {
      comingSoon: "เร็วๆ นี้",
      noVouchers: "ไม่มีคูปองในขณะนี้",
      checkBack: "โปรดกลับมาตรวจสอบในภายหลัง",
    },
    promotion: {
      couponExclusive: "คูปองเฉพาะคุณ",
    },
    myCoupons: {
      card: {
        tapToRedeem: "แตะเพื่อใช้คูปอง",
        redeemed: "ใช้แล้ว",
        expired: "หมดอายุแล้ว",
        untilPrefix: "ถึง: ",
      },
      empty: {
        available: "ไม่มีคูปองที่สามารถใช้งานได้",
        used: "ไม่มีคูปองที่ใช้งานแล้ว",
        expired: "ไม่มีคูปองที่หมดอายุ",
      },
    },
    brandVoucher: {
      collectUntil: "เก็บได้ถึง",
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
      resultsFor: "ผลการค้นหา \"{query}\"",
      resultsCount: "พบ {count} รายการ",
      vouchers: "คูปอง",
      emptyTitle: "ไม่พบผลการค้นหา",
      emptySuggestion: "ลองค้นหาด้วยคำอื่น หรือเลือกดูตามหมวดหมู่",
    },
    home: {
      popularVouchers: "คูปองยอดนิยม",
    },
    ranking: {
      title: "อันดับผู้เล่น",
      subtitle: "ดูอันดับของคุณเทียบกับผู้เล่นคนอื่น",
      yourRank: "อันดับของคุณ",
      you: "คุณ",
      topPlayers: "ผู้เล่นอันดับต้น",
    },
    credits: {
      pageTitle: "ประวัติเครดิต",
      currentBalance: "เครดิตปัจจุบัน",
      totalEarned: "รวมที่ได้รับ",
      thisMonth: "เดือนนี้",
      level: "ระดับ",
      filters: "ตัวกรอง",
      all: "ทั้งหมด",
      earned: "ได้รับ",
      spent: "ใช้ไป",
      newest: "ใหม่สุด",
      oldest: "เก่าสุด",
      transactionHistory: "รายการธุรกรรม",
      transactions: "รายการ",
      noTransactions: "ไม่มีรายการธุรกรรม",
      backToDashboard: "กลับสู่แดชบอร์ด",
      transactionTypes: {
        missionReward: "รางวัลจากภารกิจ",
        bonus: "โบนัส",
        redemption: "แลกรางวัล",
        refund: "เงินคืน",
        other: "ธุรกรรมอื่นๆ",
      },
      loadError: "ไม่สามารถโหลดข้อมูลเครดิตได้",
    },
    footer: {
      status: {
        instant: "เก็บคูปอง",
        form: "ลงทะเบียน",
        collected: "ใช้คูปอง",
        pending_confirmation: "แตะเพื่อใช้",
        used: "ใช้แล้ว",
        expired: "หมดอายุแล้ว",
        ended: "หมดเวลารับแล้ว",
        fully_collected: "หมดแล้ว",
        not_started: "ยังไม่เริ่ม",
        submitting: "กำลังรับคูปอง...",
      },
    },
    common: {
      back: "กลับ",
      creditsLabel: "สิทธิ์",
      cancel: "ยกเลิก",
      close: "ปิด",
      confirm: "ยืนยัน",
      submitting: "กำลังส่ง...",
      details: "รายละเอียด",
      conditions: "เงื่อนไข",
      copied: "คัดลอกแล้ว",
      copyLink: "คัดลอกลิงก์",
      copyFailed: "ไม่สามารถคัดลอกลิงก์ได้",
      shareViaOtherApps: "แชร์ผ่านแอปอื่น",
    },
    limitedTime: {
      back: "กลับหน้าหลัก",
      collecting: "กำลังรับคูปอง...",
      endedOverlay: "ขออภัย ขณะนี้หมดเวลารับคูปองแล้ว!",
      allCollected: "คูปองถูกเก็บครบแล้ว",
      redeem: "ใช้คูปอง",
      expired: "หมดอายุแล้ว",
      startsAt: "เริ่มแจกพร้อมกัน\n{time}",
      collectDescription: "หลังกดรับคูปองมีอายุ {duration}",
    },
    redeemModal: {
      tabs: {
        details: "รายละเอียด",
        conditions: "เงื่อนไข",
      },
      afterCollect: {
        successTitle: "เก็บคูปองสำเร็จ",
        description: "หากกดใช้งานทันที คูปองจะนับถอยหลังโดยมีเวลาใช้งาน {minutes} นาที",
        seeMyVouchers: "ดูคูปองของฉัน",
      },
      confirm: {
        title: "ยืนยันการใช้คูปองไหม",
        description: "หากกดใช้คูปองแล้ว คูปองจะนับถอยหลังโดยมีเวลาใช้งาน {minutes} นาที",
        warning: "คูปองมีอายุ {minutes} นาทีหลังจากกดใช้คูปอง",
        redeemNow: "ใช้คูปองทันที",
      },
      codePage: {
        willExpireIn: "คูปองนี้จะหมดอายุในอีก",
        expireWarning: "คูปองกำลังจะหมดอายุ! กรุณาใช้งานทันที",
        suggestionForStaff: "สำหรับพนักงานจุดขายเท่านั้น",
        confirmButton: "ยืนยันว่าใช้แล้ว",
      },
      confirmRedeem: {
        title: "ยืนยันใช่ไหมว่าคูปองนี้ใช้งานแล้ว",
        description:
          "กรุณาตรวจสอบให้แน่ใจว่าคุณได้แสกนคูปองนี้แล้ว เพื่อป้องกันการเสียสิทธิ์ของลูกค้า",
        button: "ยืนยัน",
      },
      expired: {
        title: "คูปองหมดเวลาแลกแล้ว",
      },
    },
    shopHeader: {
      invite: "ชวน",
      inviteFriends: "ชวนเพื่อน",
      coupon: "คูปอง",
      inviteFriendsInLINE: "ชวนเพื่อนใน LINE",
      scanQrToJoin: "สแกน QR Code นี้เพื่อเข้าร่วมใช้งานแอปพลิเคชัน",
      joinNow: "เข้าร่วมเลย",
      useStore: "ใช้บริการร้าน",
      shareTitle: "ชวนเพื่อนใช้ {pageName}",
      shareText: "{displayName} ชวนคุณมาใช้แอปพลิเคชัน {pageName}!",
      inviteLinkError: "ไม่สามารถสร้างลิงก์ชวนเพื่อนได้ กรุณาลองใหม่อีกครั้ง",
      defaultDescription: "แอปพลิเคชันใหม่ที่น่าสนใจ พร้อมโปรโมชันและสิทธิพิเศษมากมาย!",
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
      resultsFor: "Search results for \"{query}\"",
      resultsCount: "Found {count} results",
      vouchers: "Vouchers",
      emptyTitle: "No results found",
      emptySuggestion: "Try searching with different keywords or browse by category",
    },
    home: {
      popularVouchers: "Popular Coupons",
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
      defaultDescription: "A new exciting application with lots of promotions and privileges!",
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

function interpolate(template: string, params?: Record<string, string | number>) {
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
  const fallback = getByPath(messages.en as unknown as Record<string, unknown>, key);
  if (typeof fallback === "string") return interpolate(fallback, params);
  return key; // as a last resort
}
