import { CiUser,CiShoppingCart,CiHeart,CiHome } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const BottomNavbar = ({setIsSidebar}) => {
  return (
    <div className='w-full h-16 px-8 fixed bottom-0 flex justify-between items-center bg-white border-t border-gray-300 md:hidden z-10'>
        <RxHamburgerMenu onClick={()=>{setIsSidebar(true)}} className="text-2xl cursor-pointer"/>
        <CiShoppingCart className="text-3xl cursor-pointer"/>
        <CiHome className="text-3xl cursor-pointer"/>
        <CiHeart className="text-3xl cursor-pointer"/>
        <CiUser className="text-3xl cursor-pointer"/>

    </div>
    
  )
}

export default BottomNavbar