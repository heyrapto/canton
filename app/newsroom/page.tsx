import PageLayout from '../components/layout/page-layout'
import { pressReleases, inTheNews, mediaContact } from '@/constants/newsroom'
import { BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'

const NewsroomPage = () => {
  return (
    <PageLayout 
      title="Newsroom" 
      description='Stay connected with the Canton Network as we collaboratively shape the future of finance'
      hasBgImage
    >
      <div className='max-w-[1440px] mx-auto py-16 px-6'>
        {/* Press Releases Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Press Releases</h2>
            <Link 
              href="#" 
              className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-700 transition-colors group"
            >
              View all Press Releases
              <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release) => (
              <Link href={release.href} key={release.id}>
                <div className="flex flex-col justify-between h-[300px] p-6 bg-gray-100 rounded-[30px] hover:bg-gray-200 transition-colors cursor-pointer">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4 text-sm">
                      <strong>{release.tag}</strong>
                      |
                      <span className="text-gray-600">{release.date}</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight">{release.title}</h3>
                  </div>
                  <div className="flex gap-2 items-center text-purple-600 font-medium group">
                    <span>Read</span>
                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* In the News Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">In the News</h2>
            <Link 
              href="#" 
              className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-700 transition-colors group"
            >
              View all media coverage
              <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inTheNews.map((news) => (
              <Link href={news.href} key={news.id}>
                <div className="flex flex-col justify-between h-[300px] p-6 bg-gray-100 rounded-[30px] hover:bg-gray-200 transition-colors cursor-pointer">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4 text-sm">
                      <strong>{news.tag}</strong>
                      |
                      <span className="text-gray-600">{news.date}</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight">{news.title}</h3>
                  </div>
                  <div className="flex gap-2 items-center text-purple-600 font-medium group">
                    <span>Read</span>
                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Media Contact Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Media Contact</h2>
          
          <div className="bg-[#1b1b1b] text-white rounded-[30px] p-12 max-w-[600px]">
            <h3 className="text-3xl font-bold mb-2">{mediaContact.name}</h3>
            <p className="text-gray-400 text-lg mb-8">{mediaContact.title}</p>
            
            <a 
              href={`mailto:${mediaContact.email}`}
              className="inline-flex items-center gap-2 text-white hover:text-[#f6ffa4] transition-colors group"
            >
              <span className="font-medium">{mediaContact.email}</span>
              <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default NewsroomPage