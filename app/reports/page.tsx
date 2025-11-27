import { testimonials } from '@/constants'
import PageLayout from '../components/layout/page-layout'
import Testimonial from '../components/resuable/testimonial'
import ConnectForm from '../components/ui/connect-form'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import Button from '../components/ui/button'
import Image from 'next/image'
import { pilotCards, detailedPilots } from '@/constants/reports'

const ReportsPage = () => {
    return (
        <PageLayout title="Canton Network Pilots" description='Unlocking collateral mobility and the tokenization of real world assets' hasBgImage>
            <div className="flex py-16 flex-col gap-[100px]">
                <section className="max-w-[1440px] mx-auto px-6">
                    <div className="flex flex-col gap-4 mb-12">
                        <p className="text-lg">In 2024, 3 groundbreaking pilots were conducted on the Canton Network, showcasing the exponential power of interoperable capital markets.</p>
                        <p className="text-lg">These pilots collectively illustrate the Canton Network&#39;s capability to connect and coordinate across various blockchain systems while adhering to the high regulatory standards of global capital markets. Read on to explore more about each pilot and the next steps toward a fully interoperable financial ecosystem.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pilotCards.map((card) => (
                            <div
                                key={card.id}
                                className="rounded-3xl p-8 flex flex-col justify-between h-[300px] bg-linear-to-b from-gray-100 to-yellow-50"
                                // style={{ backgroundColor: card.backgroundColor }}
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-gray-800 leading-relaxed">{card.description}</p>
                                </div>
                                <Link
                                    href={card.linkHref}
                                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group mt-4"
                                >
                                    <span>{card.linkText}</span>
                                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full bg-[#1b1b1b] text-white py-20">
                    <div className='max-w-[1440px] mx-auto py-12 px-6 flex flex-col gap-[100px]'>
                        {detailedPilots.map((pilot, index) => (
                            <div key={pilot.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                {/* Text Content */}
                                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <h2 className="text-4xl font-bold mb-4">{pilot.title}</h2>
                                    <p className="text-lg mb-8 text-gray-400">{pilot.subtitle}</p>

                                    <div className="space-y-4 mb-8">
                                        {pilot.description.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="leading-relaxed text-gray-300">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>

                                    {pilot.bullets && (
                                        <ul className="list-disc pl-6 space-y-3 mb-8">
                                            {pilot.bullets.map((bullet, bIndex) => (
                                                <li key={bIndex} className="leading-relaxed text-gray-300">
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div>
                                        <Button variant="primary" className="bg-[#f6ffa4] text-black hover:bg-[#f6ffa4]/90">
                                            {pilot.buttonText}
                                        </Button>
                                    </div>
                                </div>

                                {/* Image/Illustration */}
                                <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div className="relative w-full max-w-[500px] aspect-square">
                                        <Image
                                            src={pilot.image}
                                            alt={pilot.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='py-20'>
                    <Testimonial testimonials={testimonials} />
                </section>

                <section className="py-20">
                    <div className="mx-auto max-w-[1440px] px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Section - Text Content */}
                            <div className="bg-white text-black p-12 rounded-lg">
                                <h1 className="text-4xl font-bold mb-6">Want to get started on the Canton Network?</h1>
                                <p className="text-lg mb-8">Please fill out the form to speak to a community expert.</p>
                            </div>

                            {/* Right Section - Form */}
                            <ConnectForm />
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}

export default ReportsPage