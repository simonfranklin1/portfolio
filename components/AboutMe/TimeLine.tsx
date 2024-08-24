import React from 'react'
import { Hind } from "next/font/google";
import { timeLineInfo } from '@/utils/utils';

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
})

const TimeLine = () => {
    return (
        <div className="timeline">
            <div className="timeline-line" />
            {
                timeLineInfo.map((item, index) => (
                    <div key={index} className={`timeline-item ${(index === 1 || index === 3) ? 'right-item' : 'left-item'}`}>
                        <div className="timeline-item-point">
                            <item.icon className='w-5 h-5' />
                        </div>
                        <div className="text-box">
                            <h2 className='font-[600] text-base sm:text-lg md:text-xl text-[#48afde]'>{item.title}</h2>
                            <small className={`mb-[15px] inline-block text-[13px] sm:text-base ${hind.className}`}>{item.period}</small>
                            <p className={`text-[13px] sm:text-lg ${hind.className}`}>{item.fact}</p>
                            <span className={`${(index === 1 || index === 3) ? 'right-container-arrow' : 'left-container-arrow'}`} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TimeLine