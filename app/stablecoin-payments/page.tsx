import PageLayout from '../components/layout/page-layout'
import { cryptoQuickFeatures, faqData, resourcesData } from '@/constants/crypto'
import FaqAccordion from '../components/resuable/faqs'
import Button from '../components/ui/button'
import Image from 'next/image'
import { testimonials } from '@/constants'
import Testimonial from '../components/resuable/testimonial'

const StablecoinPaymentsPage = () => {
    const brandImages = [
        "/images/Circle3.webp",
        "/images/Flowdesk4.webp",
        "/images/Hashnote.webp",
        "/images/ibtc6.webp",
        "/images/QCP.webp",
    ]
    return (
        <PageLayout title="Private stablecoin payments on public blockchain" description='On-chain money that flows, with privacy, control, and utility at scale' hasBgImage btnText='Chat with us'>
            <div className='py-16'>
                <section className='max-w-[1440px] mx-auto py-16 flex flex-col gap-20'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-5xl font-medium max-w-[550px]'>On-chain payments, upgraded</h1>
                        <p className='text-2xl max-w-[900px]'>As you shape your stablecoin or on-chain payments strategy, privacy shouldn’t be an afterthought. No one wants their payments permanently on display - not you, your customers, or your counterparties. Unlike other public networks, Canton doesn’t force a trade-off: it embeds the privacy businesses demand with the utility real-world finance requires.</p>
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
                        <h1 className='text-5xl font-medium max-w-[550px]'>Private on-chain payments in action</h1>
                        <FaqAccordion className='w-[600px]' items={faqData} />
                    </div>

                    <div className="flex flex-col gap-4 bg-[#A8E2FA] rounded-[30px] w-full p-12 justify-center items-center text-center">
                        <h1 className="font-semibold text-3xl">Explore privacy-enabled stablecoins on Canton today</h1>
                        <p className="max-w-[900px] text-[1.3rem] py-5">Connect with an expert to understand how you can issue or use tokenized cash and stablecoins on Canton across on-chain capital markets and B2B payments</p>
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

export default StablecoinPaymentsPage