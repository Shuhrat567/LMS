
import {Button} from "@/components/ui/button";

async function HomePage() {
    return (
        <div className='bg-banner w-full lg:w-full  md:w-full h-[77vh] mt-[80px]'>
            <div className='max-w-7xl mx-auto'>
                <div className='relative min-h-[60vh] flex flex-col items-start justify-center pt-20'>
                    <h1 className='text-3xl dark:text-black md:text-5xl lg:text-6xl font-creteRound text-start max-w-md pt-40 inline py-7'>
                        Build Skills With Online Course
                    </h1>
                    <p className="inline pt-1 pb-7 max-w-xl dark:text-black">It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. </p>
                    <Button
                        size={'lg'}
                        className='max-md:mt-2 p-5 text-lg rounded-full dark:text-black'
                    >
                        <span>Posts Comment</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
