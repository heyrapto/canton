import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'

const PageHeader = ({title, description, btnText}: {title: string, description?: string, btnText?: string}) => {
  return (
    <header className={`relative w-ful ${btnText ?"h-[700px]":"h-[500px]"}  overflow-hidden text-white`}>
      <Image
        src="https://www.canton.network/hubfs/Canton-Connect-Hero-Banner.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

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