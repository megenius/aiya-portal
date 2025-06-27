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

  const [activeTab, setActiveTab] = useState<'details' | 'conditions'>('details');
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    campaignName: '',
    description: '',
    condition: '',
    terms: '',
    discountType: 'percentage',
    discountValue: '',
    minimumPurchase: '',
    maximumDiscount: '',
    usageType: 'unlimited',
    bannerImage: null as File | null,
    coverImage: null as File | null
  });

  const [previewBannerImage, setPreviewBannerImage] = useState<string | null>(null);
  const [previewCoverImage, setPreviewCoverImage] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBannerImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, bannerImage: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewBannerImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, coverImage: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewCoverImage(e.target?.result as string);
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
        <div className="lg:col-span-2">
          {/* Single Form Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
            {/* Coupon Type */}
            <div>
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
            <div>
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
            {/* <div>
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
            <div>
              <label htmlFor="dactmd" className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                รายละเอียดคูปอง<span className="text-red-500">*</span>
              </label>
              <textarea id="dactmd" 
              className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" 
              rows={5} 
              placeholder="ระบุรายละเอียดคูปอง" 
              data-hs-textarea-auto-height 
              defaultValue={""} 
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            {/* Condition */}
            <div>
              <label htmlFor="condition" className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                เงื่อนไข<span className="text-red-500">*</span>
              </label>
              <textarea id="condition" 
              className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" 
              rows={5} 
              placeholder="ระบุเงื่อนไขการใช้คูปอง" 
              value={formData.condition}
              onChange={(e) => handleInputChange('condition', e.target.value)}
              />
            </div>


            {/* Discount Type */}
            {/* <div>
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
            </div> */}

            {/* Grid for discount settings */}
            {/* <div className="grid grid-cols-2 gap-4">
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
            </div> */}

            {/* Usage Type */}
            {/* <div>
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
            </div> */}

            {/* Terms and Conditions */}
            {/* <div>
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
            </div> */}

            {/* Banner Image (16:9) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รูปภาพ Banner (16:9)<span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                {previewBannerImage ? (
                  <div className="relative">
                    <img src={previewBannerImage} alt="Banner Preview" className="w-full rounded-lg object-cover" style={{aspectRatio: '16/9'}} />
                    <button
                      onClick={() => setPreviewBannerImage(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="mt-4">
                      <label htmlFor="banner-upload" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">อัปโหลดรูป Banner</span>
                        <span className="mt-1 block text-sm text-gray-500">PNG, JPG, GIF up to 10MB (แนะนำขนาด 16:9)</span>
                      </label>
                      <input
                        id="banner-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleBannerImageUpload}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cover Image (1:1) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รูปภาพ Cover (1:1)<span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                {previewCoverImage ? (
                  <div className="relative">
                    <img src={previewCoverImage} alt="Cover Preview" className="max-w-full h-32 w-32 mx-auto rounded-lg object-cover" style={{aspectRatio: '1/1'}} />
                    <button
                      onClick={() => setPreviewCoverImage(null)}
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
                      <label htmlFor="cover-upload" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">อัปโหลดรูป Cover</span>
                        <span className="mt-1 block text-sm text-gray-500">PNG, JPG, GIF up to 10MB (แนะนำขนาด 1:1)</span>
                      </label>
                      <input
                        id="cover-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleCoverImageUpload}
                      />
                    </div>
                  </div>
                )}
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
        </div>

        {/* Right Column - Preview */}
        <div className="lg:col-span-1 space-y-6">
          {/* Coupon Card Preview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-15">
            <div className="mb-4">
              <h3 className="font-medium text-gray-900">ตัวอย่าง Coupon Card</h3>
            </div>

            {/* Coupon Card - Before Click */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Card Background - Using Cover Image */}
              <div className="w-full h-48 bg-gradient-to-br from-pink-500 to-red-600 relative overflow-hidden">
                {previewCoverImage ? (
                  <img 
                    src={previewCoverImage} 
                    alt="Coupon Cover" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-400">
                    {/* Shopping Bag Icon */}
                    <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white">
                        <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"/>
                      </svg>
                    </div>
                    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 -rotate-12 bg-yellow-400 text-black px-2 py-1 rounded-md font-bold text-sm">
                      HOT DEAL
                    </div>
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="font-bold text-white text-2xl">GIFT <span className="block">VOUCHER</span></div>
                      <div className="text-sm text-white mt-1">DISCOUNT</div>
                    </div>
                  </div>
                )}
                
                {/* Brand Logo Overlay - Bottom Right */}
                <div className="absolute bottom-2 right-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AIYA</span>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4">
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {formData.name || 'Gift Voucher'}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {formData.description ? (formData.description.substring(0, 50) + (formData.description.length > 50 ? '...' : '')) : 'ส่วนลดพิเศษสำหรับคุณ'}
                  </p>
                  {/* Discount amount badge */}
                  <div className="mt-2 inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {formData.type === 'discount' ? `ส่วนลด ${formData.discountValue || 10}%` : 
                     formData.type === 'cashback' ? `คืนเงิน ${formData.discountValue || 10}%` : 
                     'ส่งฟรีทั่วประเทศ'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Preview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-15">
            <div className="mb-4">
              <h3 className="font-medium text-gray-900">ตัวอย่าง Coupon Detail</h3>
            </div>

            {/* Preview Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Preview Image - Using Banner Image */}
              <div className="relative">
                {previewBannerImage ? (
                  <img src={previewBannerImage} alt="Banner Preview" className="w-full object-cover" style={{aspectRatio: '16/9'}} />
                ) : (
                  <div className="w-full bg-gradient-to-br from-pink-500 to-red-600 relative" style={{aspectRatio: '16/9'}}>
                    {/* Shopping elements */}
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="white">
                        <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"/>
                      </svg>
                    </div>
                    <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2 rotate-12 bg-yellow-400 text-black px-3 py-2 rounded-md font-bold">
                      HOT DEAL
                    </div>
                  </div>
                )}
                
                {/* Brand logo and Gift Voucher text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center bg-white bg-opacity-80 px-8 py-4 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900">GIFT VOUCHER</h2>
                    <p className="text-sm text-gray-600 mt-1">SPECIAL DISCOUNT</p>
                    {/* AIYA logo */}
                    <div className="mt-2 flex justify-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AIYA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupon Name - Above Tabs */}
              <div className="pt-4">
                <h4 className="font-medium text-gray-900 mb-4 text-center px-3">
                  {formData.name || 'ชื่อคูปอง'}
                </h4>

                {/* Tabs - Below Name */}
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <button
                    className={`text-sm pb-2 border-b-2 transition-colors text-center ${
                      activeTab === 'details' 
                        ? 'text-gray-900 border-gray-900 font-medium' 
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    รายละเอียด
                  </button>
                  <button
                    className={`text-sm pb-2 border-b-2 transition-colors text-center ${
                      activeTab === 'conditions' 
                        ? 'text-gray-900 border-gray-900 font-medium' 
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                    }`}
                    onClick={() => setActiveTab('conditions')}
                  >
                    เงื่อนไข
                  </button>
                </div>
              </div>

              {/* Preview Content */}
              <div className="p-4">

                {/* Tab Content */}
                {activeTab === 'details' ? (
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">รายละเอียดคูปอง</span>
                    </div>
                    <div className="text-sm whitespace-pre-line">
                      {formData.description || 'คูปองลดราคา ราคา 449 บาท จากปกติ 693 บาท ส่วนลด 35%'}
                    </div>
                    
                    {/* <div className="mt-3">
                      <span className="font-medium">ประเภทส่วนลด</span>
                    </div>
                    <div>
                      {formData.discountType === 'percentage' ? 'เปอร์เซ็นต์' : 'จำนวนเงิน'} x {formData.discountValue || '1'} 
                      {formData.discountType === 'percentage' ? '%' : ' บาท'}
                    </div>
                    
                    <div>
                      <span className="font-medium">จำนวนที่ซื้อขั้นต่ำ</span> x {formData.minimumPurchase || '1'} บาท
                    </div>
                    
                    <div>
                      <span className="font-medium">การใช้งาน</span> x {formData.usageType === 'unlimited' ? 'ไม่จำกัด' : 'จำกัด'}
                    </div> */}
                  </div>
                ) : (
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">เงื่อนไขการใช้งาน</span>
                    </div>
                    <div className="whitespace-pre-wrap">
                      {formData.condition || 'เงื่อนไขการใช้งานคูปอง\n- สามารถใช้ได้เฉพาะการสั่งซื้อออนไลน์\n- ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่นได้\n- ใช้ได้ภายในระยะเวลาที่กำหนด'}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-red-600 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:from-pink-600 hover:to-red-700 transition-all">
                    รับคูปอง
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-2">คลิกเพื่อใช้งานส่วนลดนี้</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
