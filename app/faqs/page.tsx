import PageLayout from '../components/layout/page-layout'
import { faqData } from '@/constants/faqs'
import Faqs from '../components/resuable/faqs'

const FaqsPage = () => {
  return (
    <PageLayout title="FAQs" hasBgImage>
      <div className='max-w-[1440px] mx-auto py-16 px-6'>
        <Faqs items={faqData} />
      </div>
    </PageLayout>
  )
}

export default FaqsPage