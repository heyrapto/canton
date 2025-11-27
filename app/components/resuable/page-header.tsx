import Image from 'next/image'
import Button from '../ui/button'

interface PageHeaderProps {
    title: string,
    description?: string,
    btnText?: string
    hasBgImage?: boolean
    hasFlexImage?: boolean
    flexImage?: string
    textOnly?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, btnText, hasBgImage = true, hasFlexImage = false, flexImage, textOnly = false }) => {
    if(textOnly) {
        return(
        <header className={`relative w-full bg-[#1b1b1b] ${btnText ? "h-[500px]" : "h-[450px]"} overflow-hidden text-white`}>
                <div className="mt-[80px] z-10 max-w-[1440px] mx-auto h-full flex justify-between items-center px-6">
                    <div className="flex flex-col gap-4 max-w-full">
                        <h1 className="text-7xl font-medium text-white">{title}</h1>
                        {description && (
                            <p className="text-3xl max-w-[600px]">{description}</p>
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

    if (hasFlexImage) {
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