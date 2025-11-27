import PageLayout from '../components/layout/page-layout'
import { cryptoQuickFeatures, faqData, resourcesData } from '@/constants/crypto'
import FaqAccordion from '../components/resuable/faqs'
import Button from '../components/ui/button'
import Image from 'next/image'
import ConnectForm from '../components/ui/connect-form'
import { testimonials } from '@/constants'
import Testimonial from '../components/resuable/testimonial'

const CryptoPage = () => {
    const brandImages = [
        "/images/Circle3.webp",
        "/images/Flowdesk4.webp",
        "/images/Hashnote.webp",
        "/images/ibtc6.webp",
        "/images/QCP.webp",
    ]
    const items = [
        "Connect a validator and start using assets and applications",
        "Tokenize assets on Canton",
        "Connect your wallet or custody services",
        "Create and launch new applications",
      ]
    return (
        <PageLayout title="24x7 Margin Management for Crypto Derivatives - with Privacy" description='Unlock capital efficiency, increase trading opportunities and generate new collateral revenue — without signaling moves to the market.' hasBgImage btnText='Book a demo'>
            <div className='py-16'>
                <section className='max-w-[1440px] mx-auto py-16 flex flex-col gap-20'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-5xl font-medium max-w-[550px]'>Confidential collateral. Institutional scale.</h1>
                        <p className='text-2xl max-w-[900px]'>Deliver or connect to institutional-grade yield-bearing collateral and stablecoins that convert at the speed of crypto capital markets on Canton - the only public chain with privacy </p>
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
                        <h1 className='text-5xl font-medium max-w-[550px]'>Connect: confidential collateral in action</h1>
                        <FaqAccordion className='w-[600px]' items={faqData} />
                    </div>

                    <div className="flex flex-col gap-4 bg-[#A8E2FA] rounded-[30px] w-full p-12 justify-center items-center text-center">
                        <h1 className="font-semibold text-3xl">Get started on Canton today</h1>
                        <p className="max-w-[900px] text-[1.3rem] py-5">Use existing assets, stablecoins, apps, and services on Canton to unlock the value of collateral and earn Canton Coin rewards. </p>
                        <Button variant={"secondary"}>
                            Book a meeting
                        </Button>
                    </div>
                </section>

                <section className="bg-[#1b1b1b] text-white py-20">
                    <div className="mx-auto max-w-[1440px] px-6 flex flex-col gap-[200px]">
                        <div>
                        <h1 className="text-5xl font-medium">Connected on Canton</h1>
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

                <section className='py-20'>
                <Testimonial testimonials={testimonials} />
                </section>

                <section className="flex flex-col gap-6 max-w-[1440px] mx-auto">
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
            </div>
        </PageLayout>
    )
}

export default CryptoPage