"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/images/nail-tech-1.png",
      alt: "Nail technician working on client's nails",
    },
    {
      src: "/images/nail-tech-2.png",
      alt: "Close-up of nail art application",
    },
    {
      src: "/images/nail-tech-3.png",
      alt: "Nail technician focused on detailed work",
    },
    {
      src: "/images/nail-tech-4.png",
      alt: "Nail filing and shaping process",
    },
    {
      src: "/images/nail-tech-5.png",
      alt: "Precision nail art application",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge className="mb-4 bg-pink-500 hover:bg-pink-600">Gallery</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Work</h2>
          <p className="max-w-2xl text-gray-600">
            Browse through our gallery to see examples of our nail artistry and services. Each image showcases our
            commitment to quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full p-1 bg-transparent border-none">
                <div className="relative aspect-[3/4] w-full">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="gap-2">
              View Full Gallery
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
