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

const PageLayout:React.FC<PageLayoutProps> = ({ children, ...headerProps }) => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <PageHeader items={headerProps.items ?? []} {...headerProps} />
        {children}
        <Footer />
    </div>
  )
}

export default PageLayout