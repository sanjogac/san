import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/images/nail-tech-1.png",
      alt: "Nail technician working on client's nails",
      category: "Process",
    },
    {
      src: "/images/nail-tech-2.png",
      alt: "Close-up of nail art application",
      category: "Process",
    },
    {
      src: "/images/nail-tech-3.png",
      alt: "Nail technician focused on detailed work",
      category: "Process",
    },
    {
      src: "/images/nail-tech-4.png",
      alt: "Nail filing and shaping process",
      category: "Process",
    },
    {
      src: "/images/nail-tech-5.png",
      alt: "Precision nail art application",
      category: "Process",
    },
  ]

  return (
    <div className="container py-10 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ChevronLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex flex-col items-center text-center mb-12">
        <Badge className="mb-4 bg-pink-500 hover:bg-pink-600">Gallery</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Work</h1>
        <p className="max-w-2xl text-gray-600">
          Browse through our gallery to see examples of our nail artistry and services. Each image showcases our
          commitment to quality and attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-square relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <Badge className="mb-2 bg-pink-500">{image.category}</Badge>
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
