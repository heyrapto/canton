import PageLayout from '../components/layout/page-layout'
import { 
  trademarkGuidelines, 
  brandGuide, 
  cantonLogos, 
  foundationLogos, 
  brandContacts, 
  brandPressReleases 
} from '@/constants/brand'
import { BiChevronRight, BiDownload } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/ui/button'

const BrandPage = () => {
  return (
    <PageLayout 
      title="Brand kit & trademark use" 
      description='Access the Canton Network brand guidelines, official logos, and media contact details here. Everything you need to represent our brand consistently and accurately.' 
      hasBgImage
    >
      <div className='max-w-[1440px] mx-auto py-16 px-6'>
        {/* Trademark Use Guidelines Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Trademark use guidelines</h2>
          
          <div className="bg-white rounded-3xl space-y-8 max-w-[800px]">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                TL;DR: {trademarkGuidelines.tldr}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As the Canton Network (the &#34;Network&#34;) grows, we here at Digital Asset appreciate that Network participants, partners, and others may want to promote their connection to the Network and will often want to use Canton-related trademarks, including the CANTON word mark and other Canton-related names, logos, icons, design elements, trade dress, or anything else (whether registered or unregistered, collectively the &#34;Canton Marks&#34;) to do so. These Canton Brand Guidelines (&#34;Guidelines&#34;) are intended to explain how you may use Digital Asset&#39;s Canton Marks in connection with the Network.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Canton Marks are the exclusive property of Digital Asset (Switzerland) GmbH. In order to protect and maintain our ownership of the Canton Marks, and to ensure that use of the Canton Marks by others does not lead to confusion or other problematic situations, we&#39;ve put in place a consistent and cohesive approach for how you may use the Canton Marks. Unless you have signed an express license agreement with Digital Asset for use of the Canton Marks, these Guidelines will govern your use of the Canton Marks.
              </p>

              {trademarkGuidelines.sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-lg mb-3">{section.title}.</h4>
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-3">{section.content}</p>
                  )}
                  {section.bullets && (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-gray-700 leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <p className="text-gray-700 leading-relaxed mb-2">
                {trademarkGuidelines.contact.text}{' '}
                <a 
                  href={`mailto:${trademarkGuidelines.contact.email}`}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  {trademarkGuidelines.contact.email}
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                {trademarkGuidelines.download.text}{' '}
                <a 
                  href={trademarkGuidelines.download.href}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  {trademarkGuidelines.download.linkText}
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Canton Brand Guide Section */}
        <section className="mb-20">
        <div className="flex items-center justify-between">
         <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold mb-8">{brandGuide.title}</h2>
         </div>
          <p className="text-lg max-w-2xl">{brandGuide.description}</p>
        </div>
          <div>
            <Button variant="primary" className="">
              {brandGuide.buttonText}
            </Button>
          </div>
        </section>

        {/* Canton Logos Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Canton Logos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cantonLogos.map((logo) => (
              <div key={logo.id} className="flex flex-col gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{logo.name}</h3>
                  <a 
                    href={logo.downloadHref}
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 group"
                  >
                    Download
                    <BiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Canton Foundation Logos Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Canton Foundation Logos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationLogos.map((logo) => (
              <div key={logo.id} className="flex flex-col gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{logo.name}</h3>
                  <a 
                    href={logo.downloadHref}
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 group"
                  >
                    Download
                    <BiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacts Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandContacts.map((contact) => (
              <div 
                key={contact.id} 
                className="bg-[#1b1b1b] text-white rounded-3xl p-10"
              >
                <h3 className="text-3xl font-bold mb-2">{contact.name}</h3>
                <p className="text-gray-400 text-lg mb-8">{contact.title}</p>
                
                {contact.isButton ? (
                  <button className="flex items-center gap-2 text-[#f6ffa4] hover:text-[#f6ffa4]/80 transition-colors group font-medium">
                    <span>{contact.email}</span>
                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-[#f6ffa4] hover:text-[#f6ffa4]/80 transition-colors group font-medium"
                  >
                    <span>{contact.email}</span>
                    <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Press Releases Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandPressReleases.map((release) => (
              <Link href={release.href} key={release.id}>
                <div className="flex flex-col justify-between h-[350px] p-8 bg-gray-100 rounded-3xl hover:bg-gray-200 transition-colors cursor-pointer">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{release.date}</p>
                    <h3 className="text-xl font-semibold leading-tight">{release.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={release.authorImage}
                      alt={release.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <strong className="font-medium">{release.author}</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default BrandPage