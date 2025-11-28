

import { cryptoQuickFeatures, onchainFinancingConnections, resourcesData } from '@/constants/crypto'
import PageLayout from '../components/layout/page-layout'
import ConnectForm from '../components/ui/connect-form'
import Image from 'next/image'
import { testimonials } from '@/constants'
import Testimonial from '../components/resuable/testimonial'
import Button from '../components/ui/button'
import ConnectionsShowcase from '../components/resuable/showcase'

const OnchainFinancingPage = () => {
    const items = [
        "Connect a validator and start using assets and applications",
        "Tokenize assets on Canton",
        "Connect your wallet or custody services",
        "Create and launch new applications",
    ]
    const brandImages = [
        "/images/Circle3.webp",
        "/images/Flowdesk4.webp",
        "/images/Hashnote.webp",
        "/images/ibtc6.webp",
        "/images/QCP.webp",
    ]
    return (
        <PageLayout title="Mobilize Assets for Real-time Financing On-chain" description='Instant liquidity across traditional and crypto capital markets with high-utility tokenized assets and instant convertibility for 24/7 onchain financing - on the only public network with privacy.' btnText='Book a demo' hasFlexImage flexImage=''>
            <section className="bg-[#1b1b1b] text-white py-16">
                <div className="mx-auto max-w-[1440px] px-6 gap-10">
                    <h1 className='text-5xl text-[#f6ffa4]'>Instant liquidity</h1>

                    <p className='max-w-[700px] pt-5 pb-10'>
                        Whether you’re a fund manager, issuer, FMI, trading house or treasury team Canton is where you mobilize assets as collateral, settle instantly and unlock 24/7 financing.
                    </p>

                    <p>
                        Dynamically redeploy capital, seize new opportunities and manage risk with unmatched efficiency.
                    </p>

                    {/* Center only the image */}
                    <div className="flex justify-center mt-20">
                        <Image
                            src="/images/Instant-Liquidity-Diagram.webp"
                            alt="instant image"
                            width={900}
                            height={900}
                        />
                    </div>

                </div>
            </section>
            <section className='flex flex-col gap-10 w-full max-w-[1440px] mx-auto py-16 px-6'>
                <ConnectionsShowcase connections={onchainFinancingConnections} />
            </section>
            <section className='max-w-[1440px] mx-auto py-16 flex flex-col gap-20'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-5xl font-medium max-w-[550px]'>Why Canton</h1>
                    <div className="grid grid-cols-2 gap-6 w-full">
                        {cryptoQuickFeatures.map((q, i) => (
                            <div className="flex flex-col h-[200px] bg-gray-100 w-full rounded-3xl p-6" key={i}>
                                <h1 className='text-3xl font-semibold text-purple-500'>{q.title}</h1>
                                <p className='pt-3'>{q.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between w-full">
                </div>

                <div className="flex flex-col gap-4 bg-[#A8E2FA] rounded-[30px] w-full p-12 justify-center items-center text-center">
                    <h1 className="font-semibold text-3xl">Get Started</h1>
                    <p className="">Bring your assets to Canton easily, or start using assets and applications on the network today.
                    </p>
                    <p className=''>Seamlessly mobilize collateral and enable real-time capital markets activity across the Canton Network.</p>
                    <Button variant={"secondary"} className='mt-5'>
                        Book a meeting
                    </Button>
                </div>
            </section>
            <section className="bg-[#1b1b1b] text-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 flex flex-col gap-[200px]">
                    <div className="flex flex-wrap gap-10 mt-8 justify-start md:justify-center items-center">
                        {brandImages.map((b, i) => (
                            <Image
                                key={i}
                                src={b}
                                width={200}
                                height={200}
                                alt={b}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20">
                <Testimonial testimonials={testimonials} />
            </section>
            <section className="flex flex-col gap-6 max-w-[1440px] mx-auto py-16">
                <h1 className='text-5xl'>Learn more</h1>
                <div className="flex gap-10">
                    {resourcesData.map((r, i) => (
                        <div className='h-[300px] w-full flex flex-col justify-between p-10 rounded-3xl bg-gray-200' key={i}>
                            <h1 className='text-2xl font-semibold'>{r.title}</h1>
                            <div className="flex gap-2">
                                <Image
                                    src={r.logo}
                                    alt='Logo'
                                    width={50}
                                    height={50}
                                />
                                <strong>{r.fullName}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#1b1b1b] text-white py-16">
                <div className="mx-auto max-w-[1440px] px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Section - Text Content */}
                        <div className="text-white p-12 rounded-lg">
                            <h1 className="text-4xl font-bold mb-2">
                                Ready to connect?
                            </h1>
                            <span className='text-2xl'>Book a demo with our team</span>
                            <p className="text-lg my-8">
                                We&#39;ll show you how on Canton:
                            </p>

                            <ul className="flex flex-col gap-2 text-lg">
                                {items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#f6ffa4] font-bold mt-1">•</span>
                                        {typeof item === "string" ? (
                                            <span>{item}</span>
                                        ) : (
                                            <span>
                                                {item}{" "}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section - Form */}
                        <ConnectForm />
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default OnchainFinancingPage