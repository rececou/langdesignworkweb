'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from './ContactModal';

function ContactButton({ text }: { text: string }) {
  const open = useContactModal((state) => state.open);
  return (
    <button
      onClick={open}
      className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
    >
      {text}
    </button>
  );
}

interface HeaderProps {
  locale: 'en' | 'zh';
}

export default function Header({ locale }: HeaderProps) {
  const [createOpen, setCreateOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    homepage: locale === 'en' ? 'Homepage' : '主页',
    create: locale === 'en' ? 'Create' : '创作',
    discover: locale === 'en' ? 'Discover' : '发现',
    brands: locale === 'en' ? 'Brands' : '品牌',
    contact: locale === 'en' ? 'Get in touch' : '联系我们',
    lang: locale === 'en' ? 'English' : '简体中文',
    lilianeCreate: locale === 'en' ? 'Liliane Xiaoxu Lang' : '莉莉安·郎',
    elizabethCreate: locale === 'en' ? 'Elizabeth Xiaoyue Lang' : '伊丽莎白·郎',
    partnerWithUs: locale === 'en' ? 'Partner with us' : '与我们合作',
    selectLang: locale === 'en' ? 'Select a language' : '选择语言',
    closeLang: locale === 'en' ? 'Close language selector' : '关闭语言选择器',
    menu: locale === 'en' ? 'Menu' : '菜单',
    close: locale === 'en' ? 'Close' : '关闭',
  };

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setCreateOpen(false);
    setBrandsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={locale === 'en' ? '/' : '/zh-cn/'} className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/images/logo.svg"
                alt="LangDesignWork"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Create dropdown */}
            <div className="relative">
              <button
                onClick={() => setCreateOpen(!createOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
              >
                {t.create}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {createOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px]">
                  <Link href={locale === 'en' ? '/liliane' : '/zh-cn/liliane'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t.lilianeCreate}
                  </Link>
                  <Link href={locale === 'en' ? '/elizabeth' : '/zh-cn/elizabeth'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t.elizabethCreate}
                  </Link>
                </div>
              )}
            </div>

            <Link href={locale === 'en' ? '/en/home/blog' : '#'} className="text-sm font-medium text-gray-700 hover:text-black">
              {t.discover}
            </Link>

            {/* Brands dropdown */}
            <div className="relative">
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
              >
                {t.brands}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {brandsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px]">
                  <Link href="/partner/kidslabuk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Kidlab UK
                  </Link>
                  <Link href="/partner/velvetessencedesign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Velvet Essence Design
                  </Link>
                  <Link href={locale === 'en' ? '/remecou' : '/zh-cn/remecou'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t.partnerWithUs}
                  </Link>
                </div>
              )}
            </div>

            <Link href={locale === 'en' ? '/' : '/zh-cn/'} className="text-sm font-medium text-gray-700 hover:text-black">
              {t.homepage}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language selector (desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {t.lang}
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[160px]">
                  <div className="px-4 py-1 text-xs text-gray-400 uppercase">{t.selectLang}</div>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    English
                  </Link>
                  <Link href="/zh-cn/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    简体中文
                  </Link>
                </div>
              )}
            </div>

            <ContactButton text={t.contact} />

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black"
              aria-label={mobileMenuOpen ? t.close : t.menu}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {/* Create section */}
            <div>
              <button
                onClick={() => setCreateOpen(!createOpen)}
                className="flex items-center justify-between w-full text-left text-base font-medium text-gray-700 hover:text-black py-2"
              >
                {t.create}
                <svg className={`w-4 h-4 transition-transform ${createOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {createOpen && (
                <div className="ml-4 space-y-2">
                  <Link href={locale === 'en' ? '/liliane' : '/zh-cn/liliane'} onClick={handleNavClick} className="block py-2 text-sm text-gray-600 hover:text-black">
                    {t.lilianeCreate}
                  </Link>
                  <Link href={locale === 'en' ? '/elizabeth' : '/zh-cn/elizabeth'} onClick={handleNavClick} className="block py-2 text-sm text-gray-600 hover:text-black">
                    {t.elizabethCreate}
                  </Link>
                </div>
              )}
            </div>

            <Link href={locale === 'en' ? '/en/home/blog' : '#'} onClick={handleNavClick} className="block text-base font-medium text-gray-700 hover:text-black py-2">
              {t.discover}
            </Link>

            {/* Brands section */}
            <div>
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                className="flex items-center justify-between w-full text-left text-base font-medium text-gray-700 hover:text-black py-2"
              >
                {t.brands}
                <svg className={`w-4 h-4 transition-transform ${brandsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {brandsOpen && (
                <div className="ml-4 space-y-2">
                  <Link href="/partner/kidslabuk" onClick={handleNavClick} className="block py-2 text-sm text-gray-600 hover:text-black">
                    Kidlab UK
                  </Link>
                  <Link href="/partner/velvetessencedesign" onClick={handleNavClick} className="block py-2 text-sm text-gray-600 hover:text-black">
                    Velvet Essence Design
                  </Link>
                  <Link href={locale === 'en' ? '/remecou' : '/zh-cn/remecou'} onClick={handleNavClick} className="block py-2 text-sm text-gray-600 hover:text-black">
                    {t.partnerWithUs}
                  </Link>
                </div>
              )}
            </div>

            <Link href={locale === 'en' ? '/' : '/zh-cn/'} onClick={handleNavClick} className="block text-base font-medium text-gray-700 hover:text-black py-2">
              {t.homepage}
            </Link>

            {/* Language switcher for mobile */}
            <div className="pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-400 uppercase mb-2">{t.selectLang}</div>
              <div className="flex gap-4">
                <Link href="/" onClick={handleNavClick} className="text-sm text-gray-600 hover:text-black py-1">
                  English
                </Link>
                <Link href="/zh-cn/" onClick={handleNavClick} className="text-sm text-gray-600 hover:text-black py-1">
                  简体中文
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
