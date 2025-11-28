import Image from 'next/image'
import Button from '../ui/button'

export interface ItemProp {
    title: string
}

interface PageHeaderProps {
    title: string,
    description?: string,
    btnText?: string
    hasBgImage?: boolean
    hasFlexImage?: boolean
    flexImage?: string
    flexVideo?: string
    textOnly?: boolean
    items?: ItemProp[]
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, btnText, hasBgImage = true, hasFlexImage = false, flexImage, textOnly = false, items, flexVideo }) => {
    if (textOnly) {
        return (
            <header className={`relative w-full bg-[#1b1b1b] ${btnText ? "h-[500px]" : items ? "h-[700px]" : "h-[450px]"} overflow-hidden text-white`}>
                <div className="mt-[80px] z-10 max-w-[1440px] mx-auto h-full flex justify-between items-center px-6">
                    <div className="flex flex-col gap-4 max-w-full">
                        <h1 className="text-6xl max-w-[700px] font-medium text-white">{title}</h1>
                        {description && (
                            <p className="text-3xl max-w-[600px]">{description}</p>
                        )}
                        {btnText && (
                            <Button variant={'primary'} className="mt-20">
                                {btnText}
                            </Button>
                        )}
                        {items && items.length > 0 && (
                            <ul className='flex flex-col gap-2 max-w-[300px] mt-10'>
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className='text-[#f6ffa4] border-b border-gray-700 pb-2 text-medium text-xl font-semibold'
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        )
    }

    if (hasFlexImage && flexImage) {
        return (
            <header className={`relative w-full bg-[#1b1b1b] ${btnText ? "h-[800px]" : "h-[500px]"} overflow-hidden text-white`}>
                <div className="mt-[80px] z-10 max-w-[1440px] mx-auto h-full flex justify-between items-center px-6">
                    <div className="flex flex-col gap-4 max-w-[500px]">
                        <h1 className="text-5xl font-semibold text-white">{title}</h1>
                        {description && (
                            <p className="text-lg max-w-[600px]">{description}</p>
                        )}
                        {btnText && (
                            <Button variant={'primary'} className="mt-20">
                                {btnText}
                            </Button>
                        )}
                    </div>

                    <Image
                        src={flexImage as string}
                        alt="Flex image"
                        width={650}
                        height={650}
                        priority
                        className="object-contain"
                    />
                </div>
            </header>
        )
    } 

    if (hasFlexImage && flexVideo) {
        return (
            <header className={`relative w-full bg-[#1b1b1b] ${btnText ? "h-[800px]" : "h-[500px]"} overflow-hidden text-white`}>
                <div className="mt-[80px] z-10 max-w-[1440px] mx-auto h-full flex justify-between items-center px-6">
                    <div className="flex flex-col gap-4 max-w-[500px]">
                        <h1 className="text-5xl font-semibold text-white">{title}</h1>
                        {description && (
                            <p className="text-lg max-w-[600px]">{description}</p>
                        )}
                        {btnText && (
                            <Button variant={'primary'} className="mt-20">
                                {btnText}
                            </Button>
                        )}
                    </div>

                    <video
                        width={650}
                        height={650}
                        className="object-contain rounded-3xl"
                    >
                        <source src={flexVideo as string} />
                    </video>
                </div>
            </header>
        )
    }

    return (
        <header className={`relative w-full ${btnText ? "h-[700px]" : "h-[500px]"}  overflow-hidden text-white`}>
            {hasBgImage && (
                <Image
                    src="https://www.canton.network/hubfs/Canton-Connect-Hero-Banner.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                />
            )}
            <div className="relative mt-[80px] z-10 max-w-[1440px] mx-auto h-full flex items-center px-6">
                <div className="flex flex-col gap-4 max-w-[500px]">
                    <h1 className="text-5xl font-semibold text-white">{title}</h1>
                    {description && (
                        <p className="text-lg max-w-[600px]">{description}</p>
                    )}
                    {btnText && (
                        <Button variant={'primary'} className="mt-20">
                            {btnText}
                        </Button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default PageHeader