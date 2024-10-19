'use clients'
import { useEffect, useRef, useState } from 'react'
import { PRODUCT_CATEGORIES } from '@/config'



const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<
      null | number
    >(null)

    return (
        <div className='flex gap-4 h-full' ref={navRef}></div>
    

}

export default NavItems