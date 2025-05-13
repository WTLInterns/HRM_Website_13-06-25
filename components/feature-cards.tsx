import { Users, CreditCard, Clock, Calendar, BarChart, FileText, Briefcase, Award } from "lucide-react"
import Link from "next/link"

export default function FeatureCards() {
  const features = [
    {
      title: "HRMS",
      description: "Comprehensive employee database management system",
      icon: Users,
      link: "/features/hrms",
    },
    {
      title: "Payroll Management",
      description: "Automated payroll processing with tax calculations",
      icon: CreditCard,
      link: "/features/payroll",
    },
    {
      title: "Time Tracking",
      description: "Track employee work hours and productivity",
      icon: Clock,
      link: "/features/time-tracking",
    },
    {
      title: "Leave Management",
      description: "Streamlined leave application and approval process",
      icon: Calendar,
      link: "/features/leave",
    },
    {
      title: "Performance Management",
      description: "Set goals, track progress, and conduct reviews",
      icon: BarChart,
      link: "/features/performance",
    },
    {
      title: "Document Management",
      description: "Secure storage and management of employee documents",
      icon: FileText,
      link: "/features/documents",
    },
    {
      title: "Recruitment",
      description: "Streamline your hiring process from start to finish",
      icon: Briefcase,
      link: "/features/recruitment",
    },
    {
      title: "Employee Recognition",
      description: "Recognize and reward employee achievements",
      icon: Award,
      link: "/features/recognition",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Link key={index} href={feature.link} className="group">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-[#0a1e5e]/20">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-[#0a1e5e]/10 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-[#0a1e5e]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#0a1e5e]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
