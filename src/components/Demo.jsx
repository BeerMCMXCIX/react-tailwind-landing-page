import { IoIosArrowRoundForward } from "react-icons/io";

function Demo() {
  return (
    <div className="bg-[#F5F7FA] py-10 flex justify-center text-center">
        <div className="container mx-auto max-w-[1440px]">
                <h1 className="text-[64px] text-[#263238] font-semibold leading-[1]">Pellentesque suscipit <br />fringilla libero eu.</h1>
                <a className="text-white text-[16px] inline-flex justify-center items-center bg-[#4CAF4F] rounded-md py-[14px] px-[32px] mt-8 " href="">Get a Demo <span className="ml-2"><IoIosArrowRoundForward/></span></a>
        </div>
    </div>
  )
}

export default Demo