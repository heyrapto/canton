import { ustilitiesData } from '@/constants/developers';
import PageLayout from '../components/layout/page-layout'
import Button from '../components/ui/button';
import Image from 'next/image';
import { BiChevronRight } from 'react-icons/bi';

const GlobalPage = () => {
  const items = [
    { title: "Cross-chain atomic transactions" },
    { title: "Privacy and independent control" },
    { title: "Regulated asset connectivity" }
  ];

  return (
    <PageLayout
      title="Explore the Canton Network Ecosystem"
      description="Connect and build on the network where traditional finance meets blockchain velocity"
      textOnly
      items={items}
    >
      <div className="bg-black w-full py-20">
        <section className='mx-auto max-w-[1440px]'>
          <div className="flex justify-between items-center w-full mb-10">
            <div></div>
            <Button variant='primary'>Join the Ecosystem</Button>
          </div>

          <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-6">
            {ustilitiesData.map((u, i) => (
              <div className="h-[400px] flex flex-col gap-10 w-full justify-between rounded-3xl p-10 bg-[#1b1b1b] text-white" key={i}>
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
        </section>
      </div>
    </PageLayout>
  )
}

export default GlobalPage