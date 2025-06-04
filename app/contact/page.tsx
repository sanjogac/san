import Link from "next/link"
import { ChevronLeft, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { locations } from "@/lib/data"

export default function ContactPage() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ChevronLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
          <div className="space-y-6">
            {locations.map((location) => (
              <div key={location.id} className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">{location.name}</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-pink-500 mt-0.5" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-pink-500 mt-0.5" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-pink-500 mt-0.5" />
                    <span>sagungaha224@gmail.com</span>
                  </div>
                  <div>
                    <p className="font-medium mt-2">Hours:</p>
                    <p className="text-sm text-gray-500">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-lg border p-4 bg-pink-50">
              <h3 className="text-lg font-medium">Home Service</h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">
                We offer home services within a 15-mile radius of our salon locations.
              </p>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-pink-500 mt-0.5" />
                <span>(123) 456-7890</span>
              </div>
              <div>
                <p className="font-medium mt-2">Hours:</p>
                <p className="text-sm text-gray-500">Mon-Sat: 10AM-6PM, Sun: Closed</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-pink-600">* Additional $15 fee applies for home services</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-pink-500">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
