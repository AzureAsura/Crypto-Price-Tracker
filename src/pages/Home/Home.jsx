import React from 'react'

const Home = () => {
    return (
        <div className='home px-[10px] pb-[100px] '>

            {/* TEXT */}
            <div className='max-w-[600px] my-[80px] mx-auto flex flex-col items-center text-center gap-[30px] '>
                <h1 className="text-[max(4vw,36px)] font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                    Largest <br />Crypto Marketplace
                </h1>
                <p className="w-[75%] text-[#e3e3e3] leading-relaxed text-lg opacity-90">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa
                    obcaecati ut. Ex, atque ipsa labore sint asperiores iure ducimus.
                </p>

                {/* SEARCH BAR */}
                <form action="" className='flex p-[8px] w-[80%] bg-white rounded-[5px] text-[20px] justify-between items-center gap-[10px]'>
                    <input type="text" placeholder='Search coin..' className='flex-1 outline-none border-none pl-[10px] placeholder-black' />
                    <button type='submit' className='border-none bg-[#7927ff] text-white text-[16px] py-[10px] px-[30px] rounded-[5px]'>Search</button>
                </form>
            </div>

            <div className='cryptotable max-w-[800px] m-auto rounded-[15px] overflow-hidden'>
                <div className='tablelayout grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] items-center bg-[#1e1e1e] border-b border-[#333] text-white'>
                    <p className="opacity-70">#</p>
                    <p className="font-semibold">Coins</p>
                    <p className="opacity-70">Price</p>
                    <p className="opacity-70">24H Change</p>
                    <p className="opacity-70 text-right">Market Cap</p>
                </div>
            </div>

        </div>
    )
}

export default Home