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
                setCurrency({ name: 'idr', symbol: 'Rp. ' })
                break;
            }
            default: {
                setCurrency({ name: 'usd', symbol: '$' })
            }
        }
    }

    return (
        <div className='flex items-center justify-between border-b-2 border-[#3c3c3c] text-[#ddd] py-[20px] px-[10%]'>
            <img src={logo} alt="" className='w-[max(12vw,120px)]' />
            <ul className='flex gap-[40px] list-none'>
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
                <button className='flex items-center gap-[10px] py-[10px] px-[25px] rounded-[20px] text-base font-medium text-[#393939] bg-white outline-none '>Sign Up <img src={arrowIcon} alt="" className='w-[13px]' /></button>
            </div>
        </div>


    )
}

export default Navbar