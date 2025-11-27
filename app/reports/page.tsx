
import { testimonials } from '@/constants'
import PageLayout from '../components/layout/page-layout'
import Testimonial from '../components/resuable/testimonial'
import ConnectForm from '../components/ui/connect-form'

const ReportsPage = () => {
    return (
        <PageLayout title="Canton Network Pilots" description='Unlocking collateral mobility and the tokenization of real world assets' hasBgImage>
            <div className="flex py-16 flex-col gap-[100px]">
                <section className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col gap-2">
                        <p>In 2024, 3 groundbreaking pilots were conducted on the Canton Network, showcasing the exponential power of interoperable capital markets.</p>
                        <p>These pilots collectively illustrate the Canton Network’s capability to connect and coordinate across various blockchain systems while adhering to the high regulatory standards of global capital markets. Read on to explore more about each pilot and the next steps toward a fully interoperable financial ecosystem.</p>
                    </div>
                    <div className="flex gap-6"></div>
                </section>

                <section className="w-full bg-[#1b1b1b] text-white">
                    <div className='max-w-[1440px] mx-auto py-12'></div>
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