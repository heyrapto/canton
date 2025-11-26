import { BiChevronRight } from "react-icons/bi"
import Button from "../ui/button"
import { newsCards } from "@/constants"

const NewsSection = () => {
    return (
        <section className="max-w-[1440px] mx-auto flex flex-col px-6 py-20 gap-24">
            <div className="flex flex-col gap-4 bg-blue-300 rounded-lg w-full p-12 justify-center items-center text-center">
                <h1 className="font-semibold text-4xl">Introducing {'Cantonomics'}</h1>
                <h3 className="font-semibold">Canton aligns rewards with the real value participants create.</h3>
                <p className="max-w-[900px] text-[1.3rem] py-5">Every Canton Coin is earned, fairly rewarding builders, users, and operators. Think sustainable economics, not speculation. Canton flips the script on tokenomics.</p>
                <Button variant={"secondary"}>
                    Learn more
                </Button>
            </div>

            <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-4xl font-semibold">News</h1>
                    <div className="flex gap-1 items-center text-purple-500">
                        <a href="">read more</a>
                        <BiChevronRight />
                    </div>
                </div>

                <div className="flex gap-10">
                    {newsCards.map((n, idx) => (
                        <div className="flex flex-col justify-between h-[300px] p-6 bg-gray-200 rounded-lg" key={idx}>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <strong>{n.tag}</strong>
                                    |
                                    <span>{n.date}</span>
                                </div>
                                <h1 className="text-3xl font-semibold">{n.title}</h1>
                            </div>
                            <div className="flex gap-2 items-center text-purple-500">
                                <a href="">Read</a>
                                <BiChevronRight />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsSection