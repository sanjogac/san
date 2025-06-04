"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Home, MapPin } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

const locations = [
  {
    id: "downtown",
    name: "Downtown Salon",
    address: "123 Main Street, Downtown",
  },
  {
    id: "uptown",
    name: "Uptown Salon",
    address: "456 Park Avenue, Uptown",
  },
  {
    id: "home",
    name: "Home Service",
    address: "Your location",
  },
]

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [isHomeService, setIsHomeService] = useState(false)
  const [address, setAddress] = useState("")

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value)
    setIsHomeService(value === "home")
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    alert("Appointment booked successfully!")
  }

  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ChevronLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold tracking-tight mb-6">Book Your Appointment</h1>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
              step >= 1 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500",
            )}
          >
            1
          </div>
          <span className={step >= 1 ? "text-gray-900" : "text-gray-500"}>Service</span>
        </div>
        <div className="h-px flex-1 bg-gray-200 mx-2" />
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
              step >= 2 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500",
            )}
          >
            2
          </div>
          <span className={step >= 2 ? "text-gray-900" : "text-gray-500"}>Date & Time</span>
        </div>
        <div className="h-px flex-1 bg-gray-200 mx-2" />
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
              step >= 3 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500",
            )}
          >
            3
          </div>
          <span className={step >= 3 ? "text-gray-900" : "text-gray-500"}>Location</span>
        </div>
        <div className="h-px flex-1 bg-gray-200 mx-2" />
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
              step >= 4 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500",
            )}
          >
            4
          </div>
          <span className={step >= 4 ? "text-gray-900" : "text-gray-500"}>Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Select a Service</CardTitle>
              <CardDescription>Choose the service you'd like to book</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="manicure" id="manicure" />
                    <Label htmlFor="manicure" className="flex flex-col">
                      <span>Manicure</span>
                      <span className="text-sm text-gray-500">Basic nail care for your hands</span>
                    </Label>
                    <span className="ml-auto font-medium">$30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pedicure" id="pedicure" />
                    <Label htmlFor="pedicure" className="flex flex-col">
                      <span>Pedicure</span>
                      <span className="text-sm text-gray-500">Basic nail care for your feet</span>
                    </Label>
                    <span className="ml-auto font-medium">$40</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gel-manicure" id="gel-manicure" />
                    <Label htmlFor="gel-manicure" className="flex flex-col">
                      <span>Gel Manicure</span>
                      <span className="text-sm text-gray-500">Long-lasting gel polish for your hands</span>
                    </Label>
                    <span className="ml-auto font-medium">$45</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gel-pedicure" id="gel-pedicure" />
                    <Label htmlFor="gel-pedicure" className="flex flex-col">
                      <span>Gel Pedicure</span>
                      <span className="text-sm text-gray-500">Long-lasting gel polish for your feet</span>
                    </Label>
                    <span className="ml-auto font-medium">$55</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nail-art" id="nail-art" />
                    <Label htmlFor="nail-art" className="flex flex-col">
                      <span>Nail Art</span>
                      <span className="text-sm text-gray-500">Custom designs for your nails</span>
                    </Label>
                    <span className="ml-auto font-medium">$20+</span>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled>
                Back
              </Button>
              <Button onClick={handleNextStep} disabled={!selectedService} className="bg-pink-500 hover:bg-pink-600">
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose when you'd like your appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <div className="border rounded-md p-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {date && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-md">
                      <p className="text-sm font-medium">Selected Date:</p>
                      <p className="text-sm text-gray-500">{date ? format(date, "PPPP") : "No date selected"}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={!date || !selectedTime}
                className="bg-pink-500 hover:bg-pink-600"
              >
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Location</CardTitle>
              <CardDescription>Choose where you'd like your service</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedLocation} onValueChange={handleLocationChange}>
                <div className="grid gap-4">
                  {locations.map((location) => (
                    <div key={location.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={location.id} id={location.id} />
                      <Label htmlFor={location.id} className="flex flex-col">
                        <span className="flex items-center gap-1">
                          {location.id === "home" ? (
                            <Home className="h-4 w-4 text-pink-500" />
                          ) : (
                            <MapPin className="h-4 w-4 text-pink-500" />
                          )}
                          {location.name}
                        </span>
                        <span className="text-sm text-gray-500">{location.address}</span>
                      </Label>
                      {location.id === "home" && (
                        <span className="ml-auto text-sm font-medium text-pink-500">+$15 fee</span>
                      )}
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {isHomeService && (
                <div className="mt-6 space-y-2">
                  <Label htmlFor="address">Your Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your full address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={!selectedLocation || (isHomeService && !address)}
                className="bg-pink-500 hover:bg-pink-600"
              >
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
              <CardDescription>Fill in your contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests</Label>
                  <Textarea id="notes" placeholder="Any special requests or notes for your appointment" />
                </div>
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and understand the cancellation policy
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button type="submit" className="bg-pink-500 hover:bg-pink-600">
                Book Appointment
              </Button>
            </CardFooter>
          </Card>
        )}
      </form>

      {step === 4 && (
        <div className="mt-8 p-6 bg-pink-50 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Appointment Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="font-medium">Service:</div>
              <div>{selectedService.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">Date:</div>
              <div>{date ? format(date, "PPP") : ""}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">Time:</div>
              <div>{selectedTime}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-medium">Location:</div>
              <div>
                {locations.find((loc) => loc.id === selectedLocation)?.name}
                {isHomeService && address ? ` - ${address}` : ""}
              </div>
            </div>
            {isHomeService && (
              <div className="flex items-center gap-2 text-pink-600">
                <div className="font-medium">Home Service Fee:</div>
                <div>$15.00</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
