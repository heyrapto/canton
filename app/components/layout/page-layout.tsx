import Footer from "../shared/footer"
import Navbar from "../shared/navbar"
import PageHeader, { ItemProp } from "../resuable/page-header"

interface PageLayoutProps {
    children: React.ReactNode, 
    title: string, 
    description?: string, 
    btnText?: string
    flexImage?: string
    hasBgImage?: boolean
    hasFlexImage?: boolean
    textOnly?: boolean
    items?: ItemProp[]
}

const PageLayout:React.FC<PageLayoutProps> = ({ children, title, description, btnText, flexImage, hasBgImage, hasFlexImage, textOnly, items }) => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <PageHeader items={items as any[]} textOnly={textOnly} flexImage={flexImage} hasBgImage={hasBgImage} hasFlexImage={hasFlexImage} title={title} description={description} btnText={btnText} />
        {children}
        <Footer />
    </div>
  )
}

export default PageLayout