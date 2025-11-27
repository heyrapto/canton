
import { whitepaperData } from '@/constants/whitepaper';
import PageLayout from '../components/layout/page-layout'
import { BiChevronRight } from 'react-icons/bi';

const WhitepaperPage = () => {
    return (
        <PageLayout title="Canton Network Whitepapers" description='Read these to understand the vision for Canton
— the only public blockchain with privacy' hasBgImage>
            <section className='max-w-[1440px] mx-auto py-16 px-6'>
                <div className="grid grid-cols-2 gap-6">
                    {whitepaperData.map((w, i) => (
                        <div key={i} className='flex flex-col justify-between h-[350px] bg-gray-100 rounded-3xl p-6'>
                            <h1 className='text-3xl font-medium'>{w.title}</h1>
                            <div className='space-y-6'>
                                <p>{w.description}</p>
                                <div className="flex gap-2 items-center text-purple-600 font-medium group">
                                    <span>Read more</span>
                                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>
    )
}

export default WhitepaperPage;