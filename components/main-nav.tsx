"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0a1e5e] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        <Link href="/" className="flex-shrink-0">
            <Image 
              src="/managifyhr.jpeg" 
              alt="247HRM Logo" 
              width={240} 
              height={80} 
              className="h-14 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <Link
                href="/features"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80 flex items-center"
              >
                Features
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {/* <Link href="/features/hrms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    HRMS
                  </Link> */}
                  {/* <Link href="/features/payroll" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Payroll Management
                  </Link> */}
                  {/* <Link href="/features/attendance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Attendance Management
                  </Link> */}
                  {/* <Link href="/features/leave" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Leave Management
                  </Link> */}
                  {/* <Link
                    href="/features/time-tracking"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Time Tracking
                  </Link> */}
                </div>
              </div>
            </div>

            <Link href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80">
              Pricing
            </Link>

            <Link href="/clients" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80">
              Clients
            </Link>

            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80">
              About
            </Link>

            <Link href="/partners" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80">
              Partners
            </Link>

            <Link href="/mobile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80">
              Mobile
            </Link>

            <div className="relative group">
              <Link
                href="/resources"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#0a1e5e]/80 flex items-center"
              >
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                  <Link
                    href="/resources/case-studies"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Case Studies
                  </Link>
                  <Link href="/resources/webinars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Webinars
                  </Link>
                  <Link href="/resources/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Guides & E-books
                  </Link>
                  <Link href="/resources/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            
          </nav>

          <div className="hidden md:block">
            <Link href="/request-demo">
              <button className="bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-2 px-4 rounded-full transition-colors">
                Request Demo
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#0a1e5e]/80 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1e5e] border-t border-[#1a2e6e]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
                onClick={() => {
                  const submenu = document.getElementById("features-submenu")
                  if (submenu) {
                    submenu.classList.toggle("hidden")
                  }
                }}
              >
                Features
                <svg className="ml-1 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="features-submenu" className="hidden pl-4 space-y-1">
                <Link
                  href="/features/hrms"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  HRMS
                </Link>
                <Link
                  href="/features/payroll"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Payroll Management
                </Link>
                <Link
                  href="/features/attendance"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Attendance Management
                </Link>
                <Link
                  href="/features/leave"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Leave Management
                </Link>
                <Link
                  href="/features/time-tracking"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Time Tracking
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
            >
              Pricing
            </Link>

            <Link
              href="/clients"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
            >
              Clients
            </Link>

            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
            >
              About
            </Link>

            <Link
              href="/partners"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
            >
              Partners
            </Link>

            <div>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
                onClick={() => {
                  const submenu = document.getElementById("resources-submenu")
                  if (submenu) {
                    submenu.classList.toggle("hidden")
                  }
                }}
              >
                Resources
                <svg className="ml-1 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="resources-submenu" className="hidden pl-4 space-y-1">
                <Link
                  href="/resources/blog"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Blog
                </Link>
                <Link
                  href="/resources/case-studies"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Case Studies
                </Link>
                <Link
                  href="/resources/webinars"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Webinars
                </Link>
                <Link
                  href="/resources/guides"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  Guides & E-books
                </Link>
                <Link
                  href="/resources/faq"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#0a1e5e]/80"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <Link
              href="/mobile"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0a1e5e]/80"
            >
              Mobile
            </Link>

            <div className="pt-4">
              <Link href="/request-demo" className="block w-full">
                <button className="w-full bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-2 px-4 rounded-full transition-colors">
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
