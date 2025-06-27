import { useNavigate } from '@remix-run/react';
import { Loading } from "@repo/preline";
import React, { useState } from 'react';
import { useMe } from '~/hooks/useMe';
import { useWorkspaceInsert, useWorkspaces } from '~/hooks/workspace';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const { data: currentUser } = useMe()
  const workspaces = useWorkspaces();
  const insertWorkspace = useWorkspaceInsert();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    type: '',
    name: '',
    campaignName: '',
    description: '',
    shortDescription: '',
    terms: '',
    discountType: 'percentage',
    discountValue: '',
    minimumPurchase: '',
    maximumDiscount: '',
    usageType: 'unlimited'
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    // Handle form submission here
  };

  const handleCancel = () => {
    navigate('/coupons');
  };

  if (workspaces.isPending) {
    return <Loading />
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleCancel}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">สร้างคูปอง</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">ข้อมูลพื้นฐาน</h2>

            {/* Coupon Type */}
            <div className="mb-4">
              <label htmlFor="dactmd" className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                ชนิดของ<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
              >
                <option value="">เลือกชนิดของ</option>
                <option value="discount">ส่วนลด</option>
                <option value="cashback">คืนเงิน</option>
                <option value="shipping">ส่งฟรี</option>
              </select>
            </div>

            {/* Coupon Name */}
            <div className="mb-4">
              <label htmlFor="dactmd" className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                ชื่อคูปอง<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ระบุชื่อคูปอง"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            {/* Campaign Name */}
            {/* <div className="mb-4">
              <label htmlFor="dactmd" className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                ชื่อแคมเปญ<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ระบุชื่อแคมเปญ"
                value={formData.campaignName}
                onChange={(e) => handleInputChange('campaignName', e.target.value)}
              />
            </div> */}

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="dactmd" className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                รายละเอียดคูปอง<span className="text-red-500">*</span>
              </label>
              <textarea id="dactmd" 
              className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" 
              rows={5} 
              placeholder="ระบุรายละเอียดคูปอง" 
              data-hs-textarea-auto-height defaultValue={""} />
            </div>


            {/* Short Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                คำอธิบายย่อ<span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 bg-gray-50">
                  <button type="button" className="p-1 hover:bg-gray-200 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                    </svg>
                  </button>
                  <select className="text-sm border-none bg-transparent">
                    <option>12</option>
                  </select>
                  <button type="button" className="p-1 hover:bg-gray-200 rounded font-bold">B</button>
                  <button type="button" className="p-1 hover:bg-gray-200 rounded italic">I</button>
                  <button type="button" className="p-1 hover:bg-gray-200 rounded underline">U</button>
                  <button type="button" className="p-1 hover:bg-gray-200 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                  <button type="button" className="p-1 hover:bg-gray-200 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <textarea
                  className="w-full px-3 py-2 min-h-[60px] border-none focus:ring-0 focus:outline-none resize-none"
                  placeholder="ระบุคำอธิบายย่อ"
                  value={formData.shortDescription}
                  onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Discount Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">เงื่อนไขการใช้งาน</h2>

            {/* Discount Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ประเภทส่วนลด<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="discountType"
                    value="percentage"
                    checked={formData.discountType === 'percentage'}
                    onChange={(e) => handleInputChange('discountType', e.target.value)}
                    className="mr-3"
                  />
                  <span>เปอร์เซ็นต์</span>
                </label>
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="discountType"
                    value="fixed"
                    checked={formData.discountType === 'fixed'}
                    onChange={(e) => handleInputChange('discountType', e.target.value)}
                    className="mr-3"
                  />
                  <span>จำนวนเงิน</span>
                </label>
              </div>
            </div>

            {/* Grid for discount settings */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  จำนวนส่วนลด<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1"
                    value={formData.discountValue}
                    onChange={(e) => handleInputChange('discountValue', e.target.value)}
                  />
                  <span className="absolute right-3 top-2 text-gray-500">
                    {formData.discountType === 'percentage' ? '%' : 'บาท'}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  จำนวนที่ซื้อขั้นต่ำ<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1"
                    value={formData.minimumPurchase}
                    onChange={(e) => handleInputChange('minimumPurchase', e.target.value)}
                  />
                  <span className="absolute right-3 top-2 text-gray-500">บาท</span>
                </div>
              </div>
            </div>

            {/* Usage Type */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                จำนวนการใช้งาน
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="usageType"
                    value="unlimited"
                    checked={formData.usageType === 'unlimited'}
                    onChange={(e) => handleInputChange('usageType', e.target.value)}
                    className="mr-3"
                  />
                  <span>ไม่จำกัด</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="usageType"
                    value="limited"
                    checked={formData.usageType === 'limited'}
                    onChange={(e) => handleInputChange('usageType', e.target.value)}
                    className="mr-3"
                  />
                  <span>จำกัด</span>
                </label>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">เงื่อนไข</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                เงื่อนไขการใช้งาน<span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                placeholder="ใส่เงื่อนไขการใช้งาน"
                value={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.value)}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">0/30</span>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">ภาพประกอบโพสต์</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  รูปภาพหลัก<span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  {previewImage ? (
                    <div className="relative">
                      <img src={previewImage} alt="Preview" className="max-w-full h-32 mx-auto rounded-lg" />
                      <button
                        onClick={() => setPreviewImage(null)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div>
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="mt-4">
                        <label htmlFor="image-upload" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">อัปโหลดไฟล์</span>
                          <span className="mt-1 block text-sm text-gray-500">PNG, JPG, GIF up to 10MB</span>
                        </label>
                        <input
                          id="image-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ลิงก์ไฟล์<span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ใส่ลิงก์ไฟล์ที่นี่"
                  />
                  <button className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                สร้างรูปภาพของคุณโพสต์
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ยกเลิกการแก้ไข
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              บันทึก
            </button>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">ตัวอย่าง</h3>
              <div className="flex gap-2">
                <span className="text-sm text-gray-500">Details</span>
                <span className="text-sm font-medium text-gray-900">Conditions</span>
              </div>
            </div>

            {/* Preview Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Preview Image */}
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="w-full h-32 object-cover" />
              ) : (
                <div className="w-full h-32 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">โปรโมชั่น</div>
                    <div className="text-sm">ลด 35%</div>
                    <div className="text-xs">ขั้นต่ำ 349.-</div>
                  </div>
                </div>
              )}

              {/* Preview Content */}
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  {formData.name || 'ชื่อคูปอง'}
                </h4>

                <div className="text-sm text-gray-600 mb-3">
                  {formData.campaignName || 'ชื่อแคมเปญ'}
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">ลูกค้าใหญ่</span> ลูกค้าที่ซื้อมากกว่า 449 บาท รวยเฟื่อง 603 บาท
                    ส่วนลด 36%
                  </div>
                  <div>
                    <span className="font-medium">ระยะเวลาใช้งาน</span>
                  </div>
                  <div>
                    <span className="font-medium">เริ่มต้น</span> x 114 ครั้ง
                  </div>
                  <div>
                    <span className="font-medium">สิ้นสุด</span> x 118 ครั้ง
                  </div>
                </div>

                <div className="mt-4">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm font-medium">
                    Button Action Name
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainContent;
