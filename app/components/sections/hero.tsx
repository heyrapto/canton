import Image from "next/image"
import Button from "../ui/button"

const HeroSection = () => {
  return (
    <section className="relative w-full h-[800px] overflow-hidden text-white">
      <Image
        src="https://www.canton.network/hubfs/Canton-Homepage-Hero-Banner.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center">
        <div className="flex flex-col gap-[30px]">
        <h1 className="text-white text-6xl font-bold">
          Where finance <span className="text-[#f6ffa4] italic">flows</span>
        </h1>
        <h4 className="pt-[50px] text-4xl max-w-[650px]">The power of capital markets meets the real value of blockchain</h4>
        <h3 className="pt-[10px] text-[1.2rem]">Unlock digital asset liquidity with Canton - the only public chain with privacy</h3>
        <div className="flex gap-2 items-center">
        <p>I want to: </p>
        <Button variant="tertiary">
            <p>Invest</p>
        </Button>
        <Button variant="tertiary">
            <p>Trade</p>
        </Button>
        <Button variant="tertiary">
            <p>Lend</p>
        </Button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
