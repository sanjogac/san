import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Sagun</span>
            <span className="text-sm text-pink-500 font-medium">Nail Artist</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-pink-500 transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Portfolio
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#portfolio" className="hidden md:block">
              <Button>View Portfolio</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            <Image
              src="/images/nail-tech-1.png"
              alt="Sagun working on client's nails"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="container relative z-20 py-24 md:py-32 lg:py-40">
            <div className="max-w-lg space-y-6">
              <Badge className="bg-pink-500 hover:bg-pink-600">Nail Artist</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-pink-500">Sagun</span>
              </h1>
              <p className="text-lg text-gray-700">
                Professional nail technician specializing in beautiful, long-lasting nail designs for "Press me Pretty".
                I bring creativity and precision to every nail service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#portfolio">
                  <Button size="lg" className="w-full sm:w-auto">
                    View My Work
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden rounded-2xl">
                <Image src="/images/nail-tech-3.png" alt="Sagun at work" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <Badge className="bg-pink-500 hover:bg-pink-600">About Me</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Sagun</h2>
                <p className="text-gray-600">
                  I'm a passionate nail technician with a keen eye for detail and a love for creating beautiful nail
                  art. My journey began with a simple love for nail aesthetics and has evolved into a professional
                  career dedicated to helping clients express themselves through stunning nail designs.
                </p>
                <p className="text-gray-600">
                  With specialized training and years of practice, I've developed techniques that ensure long-lasting,
                  high-quality results. I take pride in using premium products and maintaining the highest standards of
                  hygiene and safety in all my services.
                </p>
                <p className="text-gray-600">
                  Whether you're looking for elegant simplicity or bold artistic designs, I'm committed to bringing your
                  vision to life while ensuring the health and strength of your natural nails.
                </p>
                <div className="flex gap-4 pt-4">
                  <Link href="#portfolio">
                    <Button variant="outline">See My Portfolio</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge className="mb-4 bg-pink-500 hover:bg-pink-600">Portfolio</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">My Work</h2>
              <p className="max-w-2xl text-gray-600">
                Browse through a selection of my nail designs and services. Each piece showcases my attention to detail
                and passion for nail artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/images/nail-tech-1.png"
                  alt="Detailed nail work"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Precision nail detailing</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/images/nail-tech-2.png"
                  alt="Nail art application"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Artistic nail design</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/images/nail-tech-3.png"
                  alt="Focused nail work"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Detailed craftsmanship</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/images/nail-tech-4.png"
                  alt="Nail filing technique"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Perfect shaping technique</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/images/nail-tech-5.png"
                  alt="Precision nail art"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Artistic precision</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
