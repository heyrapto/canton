"use client"

import { useState } from "react"
import Link from "next/link"
import Button from "../ui/button"

const ConnectSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    companyEmail: "",
    industrySegment: "",
    message: ""
  })
  const [consentChecked, setConsentChecked] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Text Content */}
          <div className="bg-white text-black p-12 rounded-lg">
            <h1 className="text-4xl font-bold mb-6">Want to get started on the Canton Network?</h1>
            <p className="text-lg mb-8">Connect with a community expert to learn how to:</p>
            <ul className="flex flex-col gap-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#f6ffa4] font-bold mt-1">•</span>
                <span>Connect a validator and start using assets and applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f6ffa4] font-bold mt-1">•</span>
                <span>Tokenize assets on Canton</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f6ffa4] font-bold mt-1">•</span>
                <span>Connect your wallet or custody services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f6ffa4] font-bold mt-1">•</span>
                <span>Create and launch new applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f6ffa4] font-bold mt-1">•</span>
                <span>
                  Join the{" "}
                  <Link href="#" className="text-purple-600 hover:underline">
                    Global Synchronizer Foundation
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#f6ffa4] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-black font-semibold">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-black font-semibold">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="text-black font-semibold">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="jobTitle" className="text-black font-semibold">
                  Job Title: *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="companyEmail" className="text-black font-semibold">
                  Company Email *
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  required
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="industrySegment" className="text-black font-semibold">
                  Industry Segment: *
                </label>
                <select
                  id="industrySegment"
                  name="industrySegment"
                  required
                  value={formData.industrySegment}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select...</option>
                  <option value="banking">Banking</option>
                  <option value="asset-management">Asset Management</option>
                  <option value="trading">Trading</option>
                  <option value="crypto">Crypto</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-black font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white border border-black rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <div className="flex flex-col gap-4 text-sm text-black">
                <p>
                  Digital Asset is committed to protecting and respecting your privacy, and we&apos;ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we may also contact you about our products, services, and other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below.
                </p>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1"
                  />
                  <span>*I agree to receive communications from Digital Asset</span>
                </label>

                <p>
                  You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our{" "}
                  <Link href="#" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </Link>
                  . By clicking &quot;Submit&quot; below, you consent to allow Digital Asset to store and process the personal information submitted above to provide you the content requested.
                </p>
              </div>

              <Button variant="secondary">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection

