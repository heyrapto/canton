import Footer from "../shared/footer"
import Navbar from "../shared/navbar"
import PageHeader from "../resuable/page-header"

const PageLayout = ({ children, title, description, btnText }: { children: React.ReactNode, title: string, description?: string, btnText?: string }) => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <PageHeader title={title} description={description} btnText={btnText} />
        {children}
        <Footer />
    </div>
  )
}

export default PageLayout