interface Props {
  onClick: () => void;
  primaryColor?: string;
  foreColorButton?: string;
  language: "th" | "en";
  labelOverride?: string;
  className?: string;
}

const labels = {
  th: "เลือกดูคูปองอื่นก่อน",
  en: "Choose another voucher",
};

export default function ChooseAnotherVoucherButton({
  onClick,
  primaryColor,
  foreColorButton,
  language,
  labelOverride,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 px-3 ${className ?? ""}`}
    >
      <button
        onClick={onClick}
        className="w-full rounded-xl border-0 bg-[#9AD3A8] py-4 text-lg font-bold text-[#375CA3] transition sm:text-2xl"
        style={{
          backgroundColor: primaryColor ? primaryColor : undefined,
          color: foreColorButton ? foreColorButton : undefined,
        }}
      >
        {labelOverride ?? labels[language]}
      </button>
    </div>
  );
}
