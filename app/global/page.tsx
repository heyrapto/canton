import Image from 'next/image'
import PageLayout from '../components/layout/page-layout'
import { accordionData, quickFeatures } from '@/constants/global'
import { BiChevronRight } from 'react-icons/bi'
import Accordion from '../components/resuable/accordian'

const GlobalPage = () => {
    return (
        <PageLayout title="The Global Synchronizer" description='Unlock atomic transactions across independent blockchains' textOnly>
            <section className="w-full py-16">
                <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-[100px]">
                    <div>
                        <p className="text-2xl max-w-[1100px]">
                            The Global Synchronizer is a decentralized and transparently governed interoperability service for the Canton Network, addressing financial industry calls for unifying infrastructure to connect, drive liquidity and unleash the full potential of tokenized assets.
                        </p>

                        <Image
                            src="/images/Trans_level.webp"
                            alt="trans image"
                            width={1600}
                            height={1000}
                            className="w-full h-auto mt-12"
                        />
                    </div>

                    <div className='flex flex-col gap-6'>
                        <h1 className='text-4xl font-medium max-w-[550px]'>Tokenize and mobilize regulated real-world assets with connectivity and control</h1>
                        <p className='text-2xl max-w-[900px]'>Unlock cross-chain atomic transactions, while maintaining the privacy and independent controls regulated institutions require.</p>
                        <div className="flex gap-6 w-full">
                            {quickFeatures.map((q, i) => (
                                <div className="flex flex-col h-[200px] bg-gray-100 w-full rounded-3xl p-6" key={i}>
                                    <h1 className='text-3xl font-medium'>{q.title}</h1>
                                    <p className='pt-3'>{q.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <section className="flex flex-col gap-10">
                        <h1 className="text-5xl font-medium">The Global Synchronizer difference</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Transaction-level interoperability",
                                    desc: "With the Global Synchronizer, direct, risk-free value exchange across independent blockchains becomes a reality. Think DeFi-like composability, but with TradFi-grade privacy and control."
                                },
                                {
                                    title: "The leading network for regulated real-world assets",
                                    desc: "Connect assets, applications and services in the network emerging as the leading venue for digital assets, tokenizing $2T+ of real-world assets every month."
                                },
                                {
                                    title: "Individual control. Collective success",
                                    desc: "Choose the most appropriate infrastructure for your requirements, leveraging the Global Synchronizer as needed, based on its utility and value to your use case."
                                }
                            ].map((c, i) => (
                                <div
                                    key={i}
                                    className="bg-[#1b1b1b] text-white rounded-3xl p-10 flex flex-col gap-4"
                                >
                                    <h2 className="text-[1.8rem] font-semibold">{c.title}</h2>
                                    <p className="text-[1.1rem] leading-relaxed">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="">
                            <Accordion items={accordionData} />
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-20">
                        {[
                            {
                                title: "Connect",
                                desc: "Run a Validator node to participate in applications using the Global Synchronizer and provide utility to the Canton Network.",
                                links: [
                                    { text: "Get Connected" }
                                ]
                            },
                            {
                                title: "Build",
                                desc: "Build applications that can use the Global Synchronizer to perform atomic cross-chain transactions and quickly bring your assets to the Canton ecosystem.",
                                links: [
                                    { text: "Discover use cases" },
                                    { text: "Start building" }
                                ]
                            },
                            {
                                title: "Run",
                                desc: "Find out more about contributing to the operation of the decentralized infrastructure, or gain insight into Global Synchronizer governance.",
                                links: [
                                    { text: "Visit the Global Synchronizer Foundation" },
                                    { text: "Run the infrastructure" }
                                ]
                            }
                        ].map((j, i) => (
                            <div
                                key={i}
                                className="flex flex-col justify-between h-[350px] bg-[#1b1b1b] text-white rounded-[30px] p-10"
                            >
                                <div className="flex flex-col gap-6">
                                    <h1 className="text-[1.8rem] font-semibold">{j.title}</h1>
                                    <p className="text-[1.05rem] leading-relaxed">{j.desc}</p>
                                </div>

                                <div className="flex flex-col gap-3 mt-4">
                                    {j.links.map((b, k) => (
                                        <a
                                            key={k}
                                            className="flex items-center gap-2 text-[#f6ffa4] font-bold hover:opacity-80"
                                        >
                                            {b.text} <BiChevronRight />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </section>
        </PageLayout>
    )
}

export default GlobalPage