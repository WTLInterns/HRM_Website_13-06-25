import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import ClientLogos from "@/components/client-logos"
import MainNav from "@/components/main-nav"
import FeatureCards from "@/components/feature-cards"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      {/* Hero Section */}
      <section className="bg-[#0a1e5e] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Empower. Engage. Enhance</h1>
            <p className="text-xl">Empowering Organisations Through Unmatched HR Tech and Solutions.</p>
            <Link href="/request-demo" className="inline-block">
              <button className="bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-3 px-6 rounded-full transition-colors">
                Request Demo
              </button>
            </Link>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Award-Winning HR Solution</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { src: "/images/1.png", alt: "High Performer Award" },
                  { src: "/images/2.png", alt: "Best Support Award" },
                  { src: "/images/3.png", alt: "Most Recommended Award" },
                  { src: "/images/4.png", alt: "Easiest to Use Award" },
                  { src: "/images/5.png", alt: "Highest User Adoption Award" },
                ].map((award, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 rounded-xl 
                    border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 
                    transform hover:-translate-y-1 flex flex-col items-center"
                  >
                    <Image
                      src={award.src}
                      alt={award.alt}
                      width={100}
                      height={120}
                      className="object-contain h-[90px]"
                    />
                    <p className="text-xs font-medium text-center mt-2 text-white/80">{award.alt.split(" ").slice(0, -1).join(" ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/1.png"
                alt="247HRM Features"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Image src="/maangifyhr.jpeg" alt="247HRM Logo" width={100} height={30} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1e5e] mb-12">
            Building Trust through holistic, flexible and scalable HR Solutions
          </h2>

          <ClientLogos />
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1e5e] mb-12">
            Empowering Modern-Day Workforces With HR Management Solutions
          </h2>

          <FeatureCards />
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1e5e] mb-6">Complete HRMS Solution</h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive HRMS platform streamlines all your HR processes in one place. From employee onboarding
                to performance management, we've got you covered with an intuitive interface designed for efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  "Employee Database Management",
                  "Performance Management",
                  "Document Management",
                  "Recruitment & Onboarding",
                  "Employee Self-Service Portal",
                  "Custom Reporting & Analytics",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-[#f26b3f] rounded-full p-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features" className="inline-block mt-6">
                <button className="bg-[#0a1e5e] hover:bg-[#0a1e5e]/90 text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/managifyhr.jpeg"
                alt="HRMS Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a1e5e] mb-12">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "247HRM has transformed our HR operations completely. The system is intuitive and the support team is exceptional.",
                name: "Rajesh Kumar",
                position: "HR Director, Global Aluminium",
              },
              {
                quote:
                  "The payroll and attendance management features have saved us countless hours every month. Highly recommended!",
                name: "Priya Sharma",
                position: "HR Manager, Vimta Labs",
              },
              {
                quote:
                  "We've seen a significant improvement in employee engagement since implementing 247HRM's self-service portal.",
                name: "Amit Patel",
                position: "CEO, MagSon Group",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a1e5e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations that trust 247HRM to streamline their HR processes and enhance employee
            experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-demo">
              <button className="bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-3 px-8 rounded-full transition-colors">
                Request Demo
              </button>
            </Link>
            <Link href="/pricing">
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-8 rounded-full transition-colors">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/managifyhr.jpeg" alt="247HRM Logo" width={150} height={45} className="mb-4" />
              <p className="text-gray-400">
                Empowering organizations with cutting-edge HR technology solutions since 2010.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="text-gray-400 hover:text-white">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/case-studies" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources/webinars" className="text-gray-400 hover:text-white">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guides" className="text-gray-400 hover:text-white">
                    Guides & E-books
                  </Link>
                </li>
                <li>
                  <Link href="/resources/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Kharadi, Pune</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@webutsav.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 8766922792</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Webutsav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
