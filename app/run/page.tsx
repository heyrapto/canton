
import { testimonials } from '@/constants'
import PageLayout from '../components/layout/page-layout'
import Testimonial from '../components/resuable/testimonial'
import Button from '../components/ui/button'
import ConnectForm from '../components/ui/connect-form'

const RunPage = () => {
    return (
        <PageLayout title="Run">
            <div className="flex flex-col gap-20 py-16">
                <div className='max-w-[1440px] mx-auto flex flex-col gap-20'>
                <h1 className='text-5xl '>Run services as a founding provider of the privacy-enabled, open blockchain network built for synchronized financial markets</h1>
                <section className="flex flex-col lg:flex-row-reverse w-full justify-between items-start gap-12">
                    <div className="flex-1 flex flex-col gap-6">
                        <p className="text-lg text-gray-700 leading-relaxed max-w-[700px]">
                            As a member of the community providing the foundational infrastructure of the Canton Network, you have a unique opportunity to grow with the network and support the creation of new applications and connections. Bring enhanced utility and value to the public network and its participants, all while gaining first mover advantage and insight into connections that can be made across the network as it grows.
                        </p>
                        <Button variant="primary">
                            Discover the ecosystem
                        </Button>
                    </div>

                    <h1 className='text-6xl font-medium text-black'>Grow with the Canton Network                    </h1>
                </section>
                </div>

                <section className="w-full bg-[#1b1b1b] text-white py-20">
                    <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-10">
                        <h1 className='text-4xl'>By the industry, for the industry</h1>
                        <p className='max-w-[600px]'>Join leading financial markets participants taking part in the operations and governance of the Canton Network’s decentralized interoperability backbone, the Global Synchronizer.</p>
                        <div className="flex items-center gap-4">
                        <Button variant='primary'>
                            Global synchronizer
                        </Button>
                        <Button variant='primary'>
                            Splice
                        </Button>
                        </div>
                    </div>
                </section>

                {/* testimonials here */}
                <Testimonial testimonials={testimonials} />

                {/* video goes here */}
                <section className="w-full bg-[#1b1b1b] text-white py-20">
                    <div className="max-w-[1440px] mx-auto justify-center items-center flex">
                    <video className="w-[800px] h-[500px] object-cover rounded-2xl" autoPlay loop muted playsInline preload="metadata">
                        <source src='/videos/Canton_Cantonomics.mp4' type="video/mp4" />
                    </video>
                    </div>
                </section>

                <section className="py-20">
                    <div className="mx-auto max-w-[1440px] px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Section - Text Content */}
                            <div className="bg-white text-black p-12 rounded-lg">
                                <h1 className="text-4xl font-bold mb-6">Join the community</h1>
                                <p className="text-lg mb-8">Connect with us to explore how you can participate in running decentralized infrastructure for the Canton Network.</p>
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

export default RunPage