import Image from "next/image"
import Link from "next/link"
import MainNav from "@/components/main-nav"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-[#0a1e5e] mb-6">About Managifyhr</h1>
              <p className="text-lg text-gray-700 mb-8">
                Managifyhr is a leading provider of innovative HR technology solutions, empowering organizations to
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
                src="/images/HRM New dahbord.png"
                alt="About 247HRM"
                width={700}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
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
                image: "/images/client 8.webp",
              },
              {
                name: "Priya Sharma",
                position: "Chief Technology Officer",
                bio: "Priya brings 15+ years of software development expertise, driving our product innovation and ensuring we deliver cutting-edge HR technology solutions.",
                image: "/images/client 4.jpeg",
              },
              {
                name: "Amit Patel",
                position: "Chief Operating Officer",
                bio: "Amit oversees our day-to-day operations, ensuring we deliver exceptional service to our clients while driving operational efficiency and growth.",
                image: "/images/clinet 2.webp",
              },
              {
                name: "Neha Gupta",
                position: "Chief Marketing Officer",
                bio: "With a background in B2B marketing, Neha leads our marketing efforts, helping us connect with organizations that can benefit from our HR solutions.",
                image: "/images/client 5.jpeg",
              },
              {
                name: "Vikram Singh",
                position: "Chief Customer Officer",
                bio: "Vikram ensures our customers receive exceptional support and service, leading our customer success, support, and implementation teams.",
                image: "/images/client 9.webp",
              },
              {
                name: "Ananya Reddy",
                position: "Chief Product Officer",
                bio: "Ananya drives our product strategy, working closely with customers and our development team to build HR solutions that meet evolving market needs.",
                image: "/images/client 6.jpeg",
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-80">
                  <Image 
                    src={leader.image || "/placeholder.svg"} 
                    alt={leader.name} 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={100}
                    style={{
                      objectPosition: leader.name === "Amit Patel" ? "top center" : "center"
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={leader.image || "/placeholder-user.jpg"}
                        alt={leader.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                        style={{
                          objectPosition: leader.name === "Amit Patel" ? "top center" : "center"
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a1e5e]">{leader.name}</h3>
                      <p className="text-[#f26b3f] font-medium">{leader.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Screenshots Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a1e5e] mb-12">Our Platform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[400px]">
                <Image
                  src="/images/HRM New dahbord.png"
                  alt="HRM Dashboard"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1e5e]">HRM Dashboard</h3>
                <p className="text-gray-600 mt-2">Modern HR management dashboard with advanced analytics and real-time insights.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[400px]">
                <Image
                  src="/images/mark attdance dashbord.png"
                  alt="Attendance Dashboard"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1e5e]">Attendance Dashboard</h3>
                <p className="text-gray-600 mt-2">Advanced attendance tracking and management system.</p>
              </div>
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
