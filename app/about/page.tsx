import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-[#0a1e5e] mb-6">About 247HRM</h1>
              <p className="text-lg text-gray-700 mb-8">
                247HRM is a leading provider of innovative HR technology solutions, empowering organizations to
                streamline their HR processes, enhance employee engagement, and drive business success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/request-demo">
                  <button className="bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-3 px-8 rounded-full transition-colors">
                    Request Demo
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-transparent hover:bg-[#0a1e5e]/10 border-2 border-[#0a1e5e] text-[#0a1e5e] font-medium py-3 px-8 rounded-full transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/about-hero.svg"
                alt="About 247HRM"
                width={700}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a1e5e] mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We are committed to pushing the boundaries of HR technology, constantly seeking new and innovative ways to improve our products and services.",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#0a1e5e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 15v2m-1.023-9.355A11.382 11.382 0 0121 11.206m-14 0H3m6.637-9.355a11.382 11.382 0 00-19.312 0m19.312 0a11.382 11.382 0 01-1.594 6.427m-15.718 0a11.382 11.382 0 001.594 6.427"
                    />
                  </svg>
                ),
              },
              {
                title: "Customer Focus",
                description:
                  "Our customers are at the heart of everything we do. We strive to understand their needs and exceed their expectations in every interaction.",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#0a1e5e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21h6v-1a6 6 0 01-9-5.197m0 0a6 6 0 01-3-4.803"
                    />
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, both within our organization and with our customers and partners, to achieve shared goals and drive innovation.",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#0a1e5e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Continuous Improvement",
                description:
                  "We are committed to continuous learning and improvement, constantly refining our products, processes, and services to deliver greater value to our customers.",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#0a1e5e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#0a1e5e]/10 rounded-full mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#0a1e5e]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a1e5e] mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "Founder & CEO",
                bio: "With over 20 years of experience in HR technology, Rajesh leads our company with a vision to transform how organizations manage their human resources.",
                image: "/images/leader-1.png",
              },
              {
                name: "Priya Sharma",
                position: "Chief Technology Officer",
                bio: "Priya brings 15+ years of software development expertise, driving our product innovation and ensuring we deliver cutting-edge HR technology solutions.",
                image: "/images/leader-2.png",
              },
              {
                name: "Amit Patel",
                position: "Chief Operating Officer",
                bio: "Amit oversees our day-to-day operations, ensuring we deliver exceptional service to our clients while driving operational efficiency and growth.",
                image: "/images/leader-3.png",
              },
              {
                name: "Neha Gupta",
                position: "Chief Marketing Officer",
                bio: "With a background in B2B marketing, Neha leads our marketing efforts, helping us connect with organizations that can benefit from our HR solutions.",
                image: "/images/leader-4.png",
              },
              {
                name: "Vikram Singh",
                position: "Chief Customer Officer",
                bio: "Vikram ensures our customers receive exceptional support and service, leading our customer success, support, and implementation teams.",
                image: "/images/leader-5.png",
              },
              {
                name: "Ananya Reddy",
                position: "Chief Product Officer",
                bio: "Ananya drives our product strategy, working closely with customers and our development team to build HR solutions that meet evolving market needs.",
                image: "/images/leader-6.png",
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1e5e]">{leader.name}</h3>
                  <p className="text-[#f26b3f] font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a1e5e] mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Foundation",
                  description:
                    "247HRM was founded with a vision to transform HR management through innovative technology solutions.",
                },
                {
                  year: "2012",
                  title: "First Major Client",
                  description:
                    "Secured our first enterprise client, marking a significant milestone in our growth journey.",
                },
                {
                  year: "2014",
                  title: "Product Expansion",
                  description:
                    "Expanded our product suite to include comprehensive payroll and attendance management features.",
                },
                {
                  year: "2016",
                  title: "Mobile App Launch",
                  description: "Launched our mobile application, enabling HR management on-the-go for our clients.",
                },
                {
                  year: "2018",
                  title: "International Expansion",
                  description: "Expanded our operations to serve clients across Southeast Asia and the Middle East.",
                },
                {
                  year: "2020",
                  title: "AI Integration",
                  description:
                    "Integrated AI capabilities into our platform, enhancing analytics and predictive insights.",
                },
                {
                  year: "2022",
                  title: "Cloud Transformation",
                  description:
                    "Completed our cloud transformation, offering enhanced scalability and performance to our clients.",
                },
                {
                  year: "2024",
                  title: "Next-Gen Platform",
                  description:
                    "Launched our next-generation platform with advanced features and improved user experience.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="bg-[#0a1e5e] text-white font-bold py-2 px-4 rounded-lg">{milestone.year}</div>
                    <div className="h-full w-0.5 bg-[#0a1e5e]/20 my-2"></div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-[#0a1e5e]">{milestone.title}</h3>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a1e5e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the difference of working with a team dedicated to transforming HR management through innovative
            technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-demo">
              <button className="bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-3 px-8 rounded-full transition-colors">
                Request Demo
              </button>
            </Link>
            <Link href="/careers">
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-8 rounded-full transition-colors">
                Join Our Team
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
