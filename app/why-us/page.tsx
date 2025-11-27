
import { BiChevronRight } from 'react-icons/bi'
import PageLayout from '../components/layout/page-layout'
import Button from '../components/ui/button'
import Image from 'next/image'
import { exploreData, resourcesData } from '@/constants/why-us'

const brandLogos = ["https://www.canton.network/hubfs/Copper-logo-transparent-1-2-e1741779637311.png", "https://www.canton.network/hubfs/Logos/Ecosystem/Cumberland/cumberland-logo-black2.png", "https://www.canton.network/hubfs/Logos/Ecosystem/DTCC/DTCC-logo-black.png", "https://www.canton.network/hubfs/Logos/Ecosystem/Tradeweb/Tradeweb-logo-black.png", "https://www.canton.network/hubfs/JP%20Morgan.png", "https://www.canton.network/hubfs/Logos/Ecosystem/QCP/qcp-capital-logo-black.png", "https://www.canton.network/hubfs/Logos/Ecosystem/Citadel%20Securities/CitSec-Logo%20(1).webp", "https://www.canton.network/hubfs/Logos/Ecosystem/Broadridge/Broadridge-logo-black.png", "https://www.canton.network/hubfs/Logos/Ecosystem/Circle/circle-logo-2021.svg", "https://www.canton.network/hubfs/logo-hsbc.svg"]

const WhyUsPage = () => {
    return (
        <PageLayout title="Bringing Trillions Onchain" description='The public blockchain chosen by Wall Street: real-world finance meets crypto velocity' btnText='Read The Case for Canton'>
            <div className="gap-[100px] flex flex-col py-16">
                <section className="flex justify-between w-full max-w-[1440px] mx-auto px-6">
                    <div className="flex flex-col gap-4">
                        <h1 className='text-4xl'>Introducing &#39;Cantonomics&apos;</h1>
                        <p>Canton aligns rewards with the real value participants create.</p>
                        <p className="pt-2">Every Canton Coin is earned, fairly rewarding builders, users, and operators. Think sustainable economics, not speculation. Canton flips the script on tokenomics.</p>
                        <Button variant='primary'>
                            The Role of Canton Coin
                        </Button>
                    </div>
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
                        <source src='/videos/' type="video/mp4" />
                    </video>
                </section>

                <section className='flex flex-col mx-auto max-w-[1440px] gap-16'>
                    <div className="flex justify-between items-center">
                        <h1 className='text-4xl max-w-[500px]'>Chosen by global financial institutions and onchain leaders</h1>
                        <div className="flex gap-2 items-center text-blue-500">
                            <a href="">Explore the ecosystem</a>
                            <BiChevronRight />
                        </div>
                    </div>
                    <div className="flex gap-5 overflow-x-auto overflow-hidden">
                        {brandLogos.map((b, idx) => (
                            <div className="inline-flex items-center justify-center rounded-3xl p-6 bg-gray-200 h-[200px] min-w-[200px]" key={idx}>
                                <Image src={b} alt={b} width={200} height={200} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-[#1b1b1b] text-white py-20">
                    <div className="flex flex-col gap-16 mx-auto max-w-[1440px]">
                        <h1 className='text-5xl max-w-[800px]'>Explore the latest wallets, apps and assets</h1>
                        <div className="flex gap-10">
                            {exploreData.map((e, idx) => (
                                <div className="flex flex-col gap-10 h-[300px] justify-between border border-[#f6ffa4] rounded-3xl p-10" key={idx}>
                                    <div>
                                        <h1 className='text-3xl'>{e.title}</h1>
                                        <p className='pt-5'>{e.desc}</p>
                                    </div>
                                    <div className="flex gap-2 items-center text-[#f6ffa4]">
                            <a href="">More</a>
                            <BiChevronRight />
                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-6 max-w-[1440px] mx-auto">
                    <h1 className='text-5xl'>Resources</h1>
                    <div className="flex gap-10">
                        {resourcesData.map((r, i) => (
                            <div className='h-[300px] flex flex-col justify-between p-10 rounded-3xl bg-gray-200' key={i}>
                                <h1 className='text-2xl font-semibold'>{r}</h1>
                                <div className="flex gap-2">
                                    <Image
                                    src="/images/logo.webp"
                                    alt='Logo'
                                    width={50}
                                    height={50}
                                    />
                                    <strong>Canton</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* faqs go here */}
            </div>
        </PageLayout>
    )
}

export default WhyUsPage