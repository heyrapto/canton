"use client"

import PageLayout from '../components/layout/page-layout'
import { BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'
import { cards, docsData, resourcesData, resourceTabs, ustilitiesData } from '@/constants/developers'
import Button from '../components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

const DevelopersPage = () => {
    type ResourceTabKey = keyof typeof resourcesData;

const [activeTab, setActiveTab] = useState<ResourceTabKey>('community');
    return (
        <PageLayout title="Developers" description='Everything you need to go from idea to real-world financial applications. Start building today. ' hasFlexImage flexImage='/images/developer-hero.webp' btnText='View Docs'>
            <div className="flex flex-col gap-20 py-16">
                <section className='mx-auto max-w-[1440px] px-6 gap-20'>
                    <h1 className='text-5xl mb-30'>Ready to start building on Canton?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className={`${card.bgColor === "dark" ? "bg-[#1b1b1b] text-white" : "bg-gray-200 text-black"} rounded-[20px] p-8 flex flex-col gap-6 hover:border-gray-500 transition-colors`}
                            >
                                <h3 className="text-2xl font-semibold">{card.title}</h3>
                                <p className="leading-relaxed grow">{card.description}</p>
                                <Link
                                    href={card.href}
                                    className="flex items-center gap-2 hover:text-[#f6ffa4] transition-colors group"
                                >
                                    <span>{card.linkText}</span>
                                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 bg-[#A8E2FA] rounded-[30px] w-full p-12 justify-center items-center text-center">
                        <h1 className="font-medium text-4xl">Build on Canton. Earn Like Nowhere Else</h1>
                        <h3 className="font-semibold"></h3>
                        <p className="max-w-[900px] text-[1.3rem] py-5">There’s never been a better time to start building on Canton - its tokenomics ensures that most rewards flow to application providers, in line with the utility that you create on the network.</p>
                        <Button variant={"secondary"}>
                            Learn more
                        </Button>
                    </div>
                </section>

                <section className="w-full bg-[#1b1b1b]  text-white">
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-5 py-12">
                        <h1 className='text-5xl font-medium'>Utilities for Builders</h1>
                        <p>Canton’s ecosystem includes additional utilities to build, test, and get to market fast.</p>
                    </div>
                    <div className="bg-black w-full py-12">
                        <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-6">
                            {ustilitiesData.map((u, i) => (
                                <div className="h-[400px] flex flex-col gap-10 w-full justify-between rounded-3xl p-10 bg-[#1b1b1b]" key={i}>
                                    {u.tags.map((ut, ui) => (
                                        <span key={ui} className='border border-gray-400 text-center w-fit p-2 rounded-3xl text-[0.6rem] uppercase'>
                                            {ut}
                                        </span>
                                    ))}
                                    <div>
                                        <Image
                                            src={u.logo}
                                            width={60}
                                            height={60}
                                            alt='Util logo'
                                        />
                                        <h1>{u.title}</h1>
                                        <p>{u.desc}</p>
                                    </div>
                                    <div className="flex justify-end gap-1 items-center text-[#f6ffa4]">
                                        <a href="">More</a>
                                        <BiChevronRight />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='mx-auto max-w-[1440px] px-6 gap-20'>
                    <div className="bg-white rounded-[20px] flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="flex-1 flex flex-col gap-6">
                            <h2 className="text-4xl font-medium text-black">Upcoming Hackathons</h2>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-[700px]">
                                Join Canton Construct Ideathon: reimagine finance with Daml, AngelHack’s global virtual hackathon for builders to participate in Canton Network. November 13 - December 5, 2025. Selected teams receive mentorship and incubation.
                            </p>
                            <Button variant="primary">
                                Join Hackathon
                            </Button>
                        </div>
                        <Image src="/images/construct.webp" className='rounded-3xl' alt="Foundation" width={700} height={500} />
                    </div>
                </section>

                <section className='mx-auto max-w-[1440px] px-6 gap-20'>
                    <h1 className='text-5xl mb-5'>Canton Docs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {docsData.map((card, idx) => (
                            <div
                                key={idx}
                                className={`bg-gray-200 text-black rounded-[20px] p-8 flex flex-col gap-6 hover:border-gray-500 transition-colors h-[300px] justify-between`}
                            >
                                <div className='space-y-2'>
                                <h3 className="text-3xl font-medium">{card.title}</h3>
                                <p className="leading-relaxed grow">{card.desc}</p>
                                </div>
                                <Link
                                    href={""}
                                    className="flex text-purple-700 items-center gap-2 hover:text-[#f6ffa4] transition-colors group"
                                >
                                    <span>Learn more</span>
                                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='mx-auto max-w-[1440px] px-6 gap-20'>
                    <h1 className='text-5xl mb-5'>Canton Docs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {docsData.map((card, idx) => (
                            <div
                                key={idx}
                                className={`bg-gray-200 text-black rounded-[20px] p-8 flex flex-col gap-6 hover:border-gray-500 transition-colors h-[300px] justify-between`}
                            >
                                <div className='space-y-2'>
                                <h3 className="text-3xl font-medium">{card.title}</h3>
                                <p className="leading-relaxed grow">{card.desc}</p>
                                </div>
                                <Link
                                    href={""}
                                    className="flex text-purple-700 items-center gap-2 hover:text-[#f6ffa4] transition-colors group"
                                >
                                    <span>Learn more</span>
                                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='px-6 gap-20 bg-gray-100 py-12'>
                    <div className="mx-auto max-w-[1440px]">
                        <h1 className='text-5xl mb-8'>Explore resources</h1>
                        
                        <div className="flex gap-4 mb-8">
                            {resourceTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as ResourceTabKey)}
                                    className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors cursor-pointer ${
                                        activeTab === tab.id
                                            ? 'bg-white text-black'
                                            : 'bg-transparent text-gray-500'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {resourcesData[activeTab].map((resource, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col justify-between h-[350px]">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4">{resource.title}</h3>
                                        {'description' in resource && resource.description && (
                                            <p className="text-gray-700 leading-relaxed">
                                                {resource.description}
                                            </p>
                                        )}
                                    </div>
                                    <Link 
                                        href={resource.href} 
                                        className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-800 transition-colors group"
                                    >
                                        {resource.linkText}
                                        <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}

export default DevelopersPage;