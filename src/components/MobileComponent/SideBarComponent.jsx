
import { ImCross } from "react-icons/im";
const SideBarComponent = ({isSidebar,setIsSidebar}) => {
  return (
    isSidebar ? (
      <div className="w-5/6 h-full p-3 bg-white absolute top-0 z-20 border-r border-gray-300 transform transition-transform duration-300 ease-in-out">
        <div className='p-3 flex justify-between items-center border-b border-gray-300'>
          <h1 className='text-xl font-semibold'>Menu</h1>
          <ImCross onClick={() => setIsSidebar(false)} className="text-sm" />
        </div>
        <ul className="flex flex-col gap-3 mt-3 p-3 text-gray-600 text-lg font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    ) : null
  )
}

export default SideBarComponent