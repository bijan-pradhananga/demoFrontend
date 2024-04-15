import NavbarComponent from "@/components/NavbarComponent";
import NavbarComponent2 from "@/components/NavbarComponent2";
import MobileComponent from "@/components/MobileComponent/MobileComponent";
import BannerComponent from "@/components/BannerComponent";
import FooterComponent from "@/components/FooterComponent";
import ProductCard from "@/components/ProductCardComponent/ProductCard";

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      <NavbarComponent2/>
      <BannerComponent/>
      {/* product container  */}
      <div className="w-full my-5 px-5 md:px-0 md:w-3/4 md:mx-auto">
            <h1 className='font-semibold text-xl text-gray-600 md:text-2xl'>Products</h1>
            </div>
            <div className="w-full mt-1 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4 ">
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
            </div>
      {/* product container  */}
      <FooterComponent/>
      <MobileComponent/>
      
    </>
  );
}
