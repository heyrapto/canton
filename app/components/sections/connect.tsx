"use client"

import Link from "next/link"
import ConnectForm from "../ui/connect-form"

const ConnectSection = () => {
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
          <ConnectForm />
        </div>
      </div>
    </section>
  )
}

export default ConnectSection

