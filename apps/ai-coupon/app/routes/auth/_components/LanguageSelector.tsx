import React, { useEffect } from 'react';
import { label } from 'yet-another-react-lightbox';
import { useLanguage } from '~/hooks/useLanguage';

interface LanguageSelectorProps {
}

const Languages = [
  {
    label: "ไทย",
    value: "th",
    icon: `<svg class=\\"shrink-0 size-4 rounded-full\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 900 600\\"><rect fill=\\"#A51931\\" width=\\"900\\" height=\\"600\\"/><rect fill=\\"#F4F5F8\\" y=\\"100\\" width=\\"900\\" height=\\"400\\"/><rect fill=\\"#2D2A4A\\" y=\\"200\\" width=\\"900\\" height=\\"200\\"/></svg>`
  },
  {
    label: "English (US)",
    value: "en",
    icon: `<svg class=\\"shrink-0 size-4 rounded-full\\" xmlns=\\"http://www.w3.org/2000/svg\\" id=\\"flag-icon-css-gb\\" viewBox=\\"0 0 512 512\\"><path fill=\\"#012169\\" d=\\"M0 0h512v512H0z\\"/><path fill=\\"#FFF\\" d=\\"M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z\\"/><path fill=\\"#C8102E\\" d=\\"M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z\\"/><path fill=\\"#FFF\\" d=\\"M176 0v512h160V0H176zM0 176v160h512V176H0z\\"/><path fill=\\"#C8102E\\" d=\\"M0 208v96h512v-96H0zM208 0v512h96V0h-96z\\"/></svg>`
  }
]

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { changeLanguage, currentLanguage } = useLanguage()


  useEffect(() => {
    async function initializePreline() {
      const { HSSelect } = await import('preline/preline');
      setTimeout(() => {
        HSSelect.autoInit();
      }, 100);
    }

    initializePreline();
  }, []);

  return (
    <>
      <div className="relative">
        <select id="hs-pro-select-language" data-hs-select="{
        &quot;placeholder&quot;: &quot;Select country&quot;,
        &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;><div data-icon></div></button>&quot;,
        &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-7 flex items-center gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm text-gray-800 hover:border-gray-300 focus:outline-hidden focus:border-gray-300&quot;,
        &quot;dropdownClasses&quot;: &quot;end-0 w-full min-w-[180px] max-h-72 p-1 space-y-0.5 z-50 w-full overflow-hidden overflow-y-auto bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300&quot;,
        &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100&quot;,
        &quot;optionTemplate&quot;: &quot;<div><div class=\&quot;flex items-center gap-x-2\&quot;><div data-icon></div><div class=\&quot;text-gray-800 \&quot; data-title></div><span class=\&quot;hidden hs-selected:block ms-auto\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 \&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div></div>&quot;
      }"
          className="hidden"
          onChange={(e) => changeLanguage(e.target.value)}
          value={currentLanguage}
        >
          {Languages.map((lang, index) => (
            <option key={index} value={lang.value} data-hs-select-option={`{
              "icon": "${lang.icon}"
            }`}
            >
              {lang.label}
            </option>
          ))}
        </select>
        <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
          <svg className="shrink-0 size-3.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
        </div>
        {/* End Header */}
      </div >

    </>
  );
};

export default LanguageSelector;