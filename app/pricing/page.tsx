import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import MainNav from "@/components/main-nav"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "₹1999",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 15 employees",
        "Core HRMS features",
        "Employee self-service",
        "Basic attendance management",
        "Leave management",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹2999",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 35 employees",
        "All Starter features",
        "Advanced payroll management",
        "Performance management",
        "Time tracking",
        "Custom reports",
        "Priority email & chat support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited employees",
        "All Professional features",
        "Custom workflows",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      {/* Hero Section */}
      <section className="bg-[#0a1e5e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose the plan that works best for your organization. All plans include core HR features with no hidden
            costs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? "border-[#f26b3f] shadow-lg" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#f26b3f] text-white text-center py-2 font-medium">Most Popular</div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-[#0a1e5e]">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="ml-1 text-xl font-medium text-gray-500">/month per employee</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>

                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-[#f26b3f] flex-shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/request-demo"}>
                      <button
                        className={`w-full py-3 px-4 rounded-full font-medium ${
                          plan.popular
                            ? "bg-[#f26b3f] hover:bg-[#e05a2f] text-white"
                            : "bg-[#0a1e5e] hover:bg-[#0a1e5e]/90 text-white"
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a1e5e] mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  question: "Can I change plans as my business grows?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
                },
                {
                  question: "Is there a setup fee?",
                  answer:
                    "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, debit cards, and bank transfers for annual plans.",
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer:
                    "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0a1e5e]">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a1e5e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team is here to help you find the perfect plan for your organization's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#f26b3f] hover:bg-[#e05a2f] text-white font-medium py-3 px-8 rounded-full transition-colors">
                Contact Sales
              </button>
            </Link>
            <Link href="/request-demo">
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-8 rounded-full transition-colors">
                Request Demo
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
