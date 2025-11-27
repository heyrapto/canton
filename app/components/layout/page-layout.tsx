import Footer from "../shared/footer"
import Navbar from "../shared/navbar"
import PageHeader from "../resuable/page-header"

interface PageLayoutProps {
    children: React.ReactNode, 
    title: string, 
    description?: string, 
    btnText?: string
    flexImage?: string
    hasBgImage?: boolean
    hasFlexImage?: boolean
    textOnly?: boolean
}

const PageLayout:React.FC<PageLayoutProps> = ({ children, title, description, btnText, flexImage, hasBgImage, hasFlexImage, textOnly }) => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <PageHeader textOnly={textOnly} flexImage={flexImage} hasBgImage={hasBgImage} hasFlexImage={hasFlexImage} title={title} description={description} btnText={btnText} />
        {children}
        <Footer />
    </div>
  )
}

export default PageLayout