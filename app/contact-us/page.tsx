import PageLayout from '../components/layout/page-layout'
import ConnectForm from '../components/ui/connect-form'

const ReportsPage = () => {

  const items = [
    "Interested in the latest news and developments in the Canton ecosystem?",
    "Want to quickly connect to the network, build apps or bring tokenized assets to Canton participants?",
    "Or find out more about rewards and incentives for network activity?"
  ]

  return (
    <PageLayout title="Discover the rails for the on-chain economy" hasBgImage>
      <section className="py-20 max-w-[1440px] mx-auto">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div className="bg-white text-black p-12 rounded-lg">
              <h1 className="text-4xl font-bold mb-6">Get in touch</h1>

              <ul className="flex flex-col gap-4 text-lg">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-black font-bold mt-1">•</span>

                    {typeof item === "string" ? (
                      <span>{item}</span>
                    ) : (
                      <span>
                        {item}{" "}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className='pt-10'>Complete the form to speak to an expert from the Global Synchronizer Foundation.</p>
            </div>

            {/* RIGHT */}
            <ConnectForm />

          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ReportsPage