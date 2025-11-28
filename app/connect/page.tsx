import { featuresData, journeyData } from '@/constants/connect'
import PageLayout from '../components/layout/page-layout'
import Button from '../components/ui/button'
import { BiChevronRight } from 'react-icons/bi'
import ConnectForm from '../components/ui/connect-form'
import Testimonial from '../components/resuable/testimonial'
import { testimonials } from '@/constants'

const ConnectPage = () => {
    return (
        <PageLayout title="Create valuable connections" description="Connect to the trusted applications and ecosystem on Canton Network">
            <div className="mx-auto max-w-[1440px] gap-[200px] flex flex-col py-16">
                <section className="flex flex-col gap-10">
                    <p className='text-2xl max-w-[1000px]'>Get started with privacy-first tokenized assets and applications to unlock profitability, optimize capital and safely participate in institutional crypto markets.</p>
                    <div className="flex w-full gap-10">
                        {featuresData.map((f, i) => (
                            <div className='flex flex-col gap-6 h-[300px] justify-between p-10 bg-gray-200 rounded-[30px]' key={i}>
                                <h1 className='text-3xl font-medium'>{f.title}</h1>
                                <p className='text-[1.2rem]'>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row-reverse w-full justify-between items-start gap-12">
                    <div className="flex-1 flex flex-col gap-6">
                        <p className="text-lg text-gray-700 leading-relaxed max-w-[700px]">
                            From traditional and institutional crypto markets, to insurance and mortgage markets the applications and digital assets on the Canton Network connect to deliver secure and frictionless value exchange at the speed of the internet.
                        </p>
                        <p className="text-lg pt-2 text-gray-700 leading-relaxed max-w-[700px]">
                            Tap into and seamlessly exchange tokenized High-Quality Liquid Assets, ranging from regulatory-grade tokenized securities, to yield-bearing cash equivalents and stablecoins - with privacy built-in. Or bring your assets to the Canton ecosystem with out of the box solutions.
                        </p>
                        <Button variant="primary">
                            Discover the ecosystem
                        </Button>
                    </div>

                    <h1 className='text-6xl font-medium text-black'>Connect on Canton</h1>
                </section>

                <section className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-6xl font-medium'>Start Your Canton Journey</h1>
                        <p className='text-2xl max-w-[950px]'>A growing range of wallets, exchanges and custodians provide open access to the Canton. The other way to start actively contributing to Canton is to spin up a Validator node. Whether self-hosted or through an integrated node or custody service provider, running a Validator opens the broadest access to institutional-grade applications on Canton, while earning continuous rewards for providing utility.</p>
                    </div>
                    <div className="flex gap-10">
                        {journeyData.map((j) => (
                            <div className='flex flex-col justify-between h-[400px] bg-black text-white rounded-[30px] p-10' key={j.id}>
                                <div className='flex flex-col gap-6'>
                                    <span className='text-4xl'>{j.id}</span>
                                    <div>
                                        <h1 className='text-[1.4rem]'>{j.title}</h1>
                                        <p>{j.desc}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center text-[#f6ffa4]">
                                    <a href="">{j.btnText}</a>
                                    <BiChevronRight />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* testimonials section here */}
                <Testimonial testimonials={testimonials} />


                <section className="py-20">
                    <div className="mx-auto max-w-[1440px] px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Section - Text Content */}
                            <div className="bg-white text-black p-12 rounded-lg">
                                <h1 className="text-4xl font-semibold mb-6">Request access today</h1>
                                <p className="text-lg mb-8">Apply for a validator via the Global Synchronizer Foundation directly at: <a href="" className='text-blue-600'>https://sync.global/validator-request/</a></p>
                                <p className='pt-5'>Or set up a quick call with a community expert.</p>
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

export default ConnectPage