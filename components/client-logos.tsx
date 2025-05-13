import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    { name: "ICAI", logo: "/images/1.png" },
    { name: "ISKCON", logo: "/images/2.png" },
    { name: "NTV", logo: "/images/3.png" },
    { name: "Vimta", logo: "/images/4.png" },
    { name: "MagSon", logo: "/images/5.png" },
    { name: "Global Aluminium", logo: "/images/6.png" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
      {clients.map((client, index) => (
        <div key={index} className="flex items-center justify-center p-4">
          <Image
            src={client.logo || "/placeholder.svg"}
            alt={client.name}
            width={150}
            height={80}
            className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all"
          />
        </div>
      ))}
    </div>
  )
}
