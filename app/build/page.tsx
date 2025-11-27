import { featuresData, journeyData } from '@/constants/build'
import PageLayout from '../components/layout/page-layout'
import { BiChevronRight } from 'react-icons/bi'
import ConnectForm from '../components/ui/connect-form'
import Testimonial from '../components/resuable/testimonial'
import { testimonials } from '@/constants'

const BuildPage = () => {
    return (
        <PageLayout title="Launch your Canton app, fast" description="Tokenize and mobilize real-world assets on-chain - with privacy and control" btnText="Developer docs">
            <div className="mx-auto max-w-[1440px] gap-[100px] flex flex-col py-16">
                <section className="flex flex-col gap-10">
                    <p className='text-6xl max-w-[900px] font-medium'>Build connected capital markets without compromise</p>
                    <div className="flex w-full gap-10">
                        {featuresData.map((f, i) => (
                            <div className='flex flex-col gap-6 h-[300px] justify-between p-10 bg-gray-200 rounded-[30px]' key={i}>
                                <h1 className='text-3xl font-medium'>{f.title}</h1>
                                <p className='text-[1.2rem]'>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-6xl font-medium'>Get started</h1>
                        <p className='text-2xl max-w-[950px]'>Create and use apps and assets that unify TradFi tokenization and crypto capital markets on-chain</p>
                    </div>
                    <div className="flex gap-10">
                        {journeyData.map((j) => (
                            <div className='flex flex-col justify-between h-[400px] bg-black text-white rounded-[30px] p-10' key={j.id}>
                                <div className='flex flex-col gap-6'>
                                        <h1 className='text-[1.8rem] font-semibold'>{j.title}</h1>
                                        <p>{j.desc}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                {j.btnTexts.map((b, i) => (
                                <div className="flex gap-2 items-center text-[#f6ffa4] font-bold" key={i}>
                                    <a href="">{b.text}</a>
                                    <BiChevronRight />
                                </div>
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='flex flex-col gap-3 w-full'>
                        <h1 className='text-6xl font-medium max-w-[700px]'>Discover previously impossible connections, enabled by Canton</h1>
                        <div className="flex justify-between w-full">
                            {}
                        </div>
                </section>

                {/* testimonials section here */}
                <Testimonial testimonials={testimonials} />

                <section className="py-20">
                    <div className="mx-auto max-w-[1440px] px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Section - Text Content */}
                            <div className="bg-white text-black p-12 rounded-lg">
                                <h1 className="text-4xl font-bold mb-6">Build on Canton</h1>
                                <p className="text-lg mb-8">Request more information to start creating apps on Canton Network</p>
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

export default BuildPage