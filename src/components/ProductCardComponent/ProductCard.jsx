
const ProductCard = () => {
  return (
   
  
    <div className="cursor-pointer bg-white rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
         <ProductCardHeader />
         <ProductCardBody/>
    </div>
   
  )
}

const ProductCardHeader = () =>{
  return (
    <div className="w-full aspect-square bg-gray-200 rounded">
      <img src='/guitar.png' className="w-full h-full object-cover" ></img>
    </div>
  )
}

const ProductCardBody = ({product}) => {
  return (
    <div>       
        <div className="w-full mt-2 mb-2">
          <ProductCardInfos product={product}/>
        </div>
    </div>
  )
}

const ProductCardInfos = () => {
  return (
      <div className='md:flex md:items-center md:justify-between'>
          <div className="font-bold mb-1 overflow-hidden  whitespace-nowrap md:w-3/5 md:mb-0">Martin</div>
          <div className="font-bold text-gray-600 text-sm">Rs. 15000</div>
      </div>
  )
}


export default ProductCard