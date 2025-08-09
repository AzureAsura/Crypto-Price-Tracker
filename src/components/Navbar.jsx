import React from 'react'
import { useContext } from 'react'
import logo from '../assets/logo.png'
import arrowIcon from '../assets/arrow_icon.png'
import { CoinContext } from '../context/CoinContext'

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case 'usd': {
                setCurrency({ name: 'usd', symbol: '$' })
                break;
            }
            case 'idr': {
                setCurrency({ name: 'idr', symbol: 'Rp.' })
                break;
            }
            default: {
                setCurrency({ name: 'usd', symbol: '$' })
            }
        }
    }

    return (
        <div className='
        flex items-center justify-between border-b-2 border-[#3c3c3c] text-[#ddd] lg:py-[20px] lg:px-[10%]
        md:py-[20px] md:px-[8%]
        py-[20px] px-[5%]
        '>
            <img src={logo} alt="" className='w-[max(12vw,120px)]' />
            <ul className='flex gap-[40px] list-none hidden sm:flex '>
                <li>Home</li>
                <li>Futures</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>

            <div className='flex items-center gap-[max(1vw,12px)] '>
                <select onChange={currencyHandler} name="" id="" className='py-[5px] px-[8px] rounded-md border-2 border-white bg-transparent text-white'>
                    <option value="usd" className='bg-[09005c] text-white'>USD</option>
                    <option value="idr" className='bg-[09005c] text-white'>IDR</option>
                </select>
                <button className='
                flex items-center lg:gap-[10px] lg:py-[10px] lg:px-[25px] rounded-[20px] text-base font-medium text-[#393939] bg-white outline-none 
                gap-[8px] py-[8px] px-[18px] text-[14px]
                '>Sign Up <img src={arrowIcon} alt="" className='w-[13px]' /></button>
            </div>
        </div>


    )
}

export default Navbar