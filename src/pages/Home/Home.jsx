import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'


const Home = () => {
    const { allCoin, currency } = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([])
    const [input, setInput] = useState('')

    const inputHandler = (event) =>{
        setInput(event.target.value)
        if (event.target.value === '') {
            setDisplayCoin(allCoin)
        }
    } 

    const searchHandler = async (event) => {
         event.preventDefault();
         const coin = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
         })
         setDisplayCoin(coin)
    }

    useEffect(() => {
        if (input.trim() === '') {
            setDisplayCoin(allCoin)
        } else {
            const filteredCoins = allCoin.filter(coin => 
                coin.name.toLowerCase().includes(input.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(input.toLowerCase())
            )
            setDisplayCoin(filteredCoins)
        }
    }, [input, allCoin])

    useEffect(() => {
        setDisplayCoin(allCoin)
    }, [allCoin])

    return (
        <div className='home px-[10px] pb-[100px] flex flex-col xl:flex-row gap-[40px] items-start'>

            {/* TEXT */}
            <div className='max-w-[600px] my-[80px] mx-auto flex flex-col items-center text-center gap-[30px] '>
                <h1 className="text-[max(4vw,36px)] font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg sm:leading-[70px] leading-[50px]">
                    Asura Crypto <br /> Marketplace
                </h1>
                <p className="w-[75%] text-[#e3e3e3] leading-relaxed text-lg opacity-90">
                    A secure and user-friendly crypto marketplace where you can trade, track, and explore digital assets with real-time prices, market trends, and valuable insights for smarter investing.
                </p>

                {/* SEARCH BAR */}
                <form onSubmit={searchHandler} action="" className='flex p-[8px] w-[80%] bg-white rounded-[5px] text-[20px] justify-between items-center gap-[10px] text-black'>
                    <input onChange={inputHandler} value={input} type="text" placeholder='Search coin..' className='flex-1 outline-none border-none pl-[10px] w-[100px] placeholder-black' required/>
                    <button type='submit' className='border-none bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-[16px] py-[10px] px-[30px] rounded-[5px]'>Search</button>
                </form>
            </div>

            <div className='cryptotable max-w-[800px] w-full m-auto rounded-[15px] overflow-hidden mt-3 lg:mt-10'>
                <div className='tablelayout grid md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] items-center bg-[#1e1e1e] border-b border-[#333] text-white
                
                grid-cols-[0.5fr_3fr_1fr_1fr] 
                '>
                    <p className="opacity-70">#</p>
                    <p className="font-semibold">Coins</p>
                    <p className="opacity-70">Price</p>
                    <p className="opacity-70">24H Change</p>
                    <p className="opacity-70 text-right border-none hidden md:block">Market Cap</p>
                </div>
                {
                    displayCoin.slice(0, 10).map((item, index) => (
                        <div className='grid md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] items-center bg-[#1e1e1e] border-b border-[#333] text-white last:border-b-0 grid-cols-[0.5fr_3fr_1fr_1fr]' key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div className='flex items-center gap-[10px] '>
                                <img src={item.image} alt="" className='xs:w-[35px] w-[25px]' />
                                <p>{item.name + ' - ' + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? 'text-green-300 text-center' : 'text-red-500 text-center'}>
                                {Math.floor(item.price_change_percentage_24h * 100) / 100}
                            </p>
                            <p className='text-right hidden md:block'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Home