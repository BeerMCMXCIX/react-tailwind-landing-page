import article01 from "../assets/img/article-01.png"
import article02 from "../assets/img/article-02.png"
import article03 from "../assets/img/article-03.png"
import { IoIosArrowRoundForward } from "react-icons/io";


function Article() {
  return (
    <div className='px-10 pt-10 pb-20 text-center'>
        <div className='container mx-auto max-w-[1440px]'>
                <h2 className='text-[36px] text-[#4D4D4D] font-semibold'>Caring is the new marketing</h2>
                <p className='text-[16px] text-[#717171] mt-2'>
                    {/* ใช้ {} เปิดปิด ข้อความเพราะมี ' ซึ่งไม่ถูกหลัก React เช่น who's ที่ผิด | who\'s ที่ถูก */}
                    {'The Nexcent blog is the best place to read about the latest membership insights, '} 
                    <br />
                    {'trends and more. See who\'s joining the community, read about how our community '} 
                    <br />
                    {'are increasing their membership income and lot\'s more. '}
                </p>

            <div className='mt-4 mb-21'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='relative my-8 md:m-0'>
                        <img className='rounded-xl md:max-w-[368px] mx-auto p-0' src={article01} alt="" />

                        <div className='absolute  bg-[#F5F7FA] mx-auto w-[270px] md:w-full md:max-w-[317px] md:max-h-[176px] bottom-[-50px] md:bottom-[-75px] left-[50%] translate-x-[-50%] p-4 shadow-xl rounded-lg'>
                            <h4 className='text-[16px] md:text-[20px] text-[#717171] font-semibold'>Creating Streamlined <br />Safeguarding Processes with <br />OneRen</h4>
                            <a className='flex text-[16px] justify-center items-center text-[#4CAF4F] font-semibold md:m-4' href="">Readmore <span className='ml-2'><IoIosArrowRoundForward/></span></a>
                        </div>
                    </div>

                    <div className='relative my-8 md:m-0'>
                        <img className='rounded-xl md:max-w-[368px] mx-auto p-0' src={article02} alt="" />

                        <div className='absolute  bg-[#F5F7FA] mx-auto w-[270px] md:w-full md:max-w-[317px] md:max-h-[176px] bottom-[-50px] md:bottom-[-75px] left-[50%] translate-x-[-50%] p-4 shadow-xl rounded-lg'>
                            <h4 className='text-[16px] md:text-[20px] text-[#717171] font-semibold'>What are your safeguarding <br />responsibilities and how can <br />you manage them?</h4>
                            <a className='flex text-[16px] justify-center items-center text-[#4CAF4F] font-semibold md:m-4' href="">Readmore <span className='ml-2'><IoIosArrowRoundForward/></span></a>
                        </div>
                    </div>

                    <div className='relative my-8 md:m-0'>
                        <img className='rounded-xl md:max-w-[368px] mx-auto p-0' src={article03} alt="" />

                        <div className='absolute  bg-[#F5F7FA] mx-auto w-[270px] md:w-full md:max-w-[317px] md:max-h-[176px] bottom-[-50px] md:bottom-[-75px] left-[50%] translate-x-[-50%] p-4 shadow-xl rounded-lg'>
                            <h4 className='text-[16px] md:text-[20px] text-[#717171] font-semibold'>Revamping the Membership <br />Model with Triathlon <br />Australia</h4>
                            <a className='flex text-[16px] justify-center items-center text-[#4CAF4F] font-semibold md:m-4' href="">Readmore <span className='ml-2'><IoIosArrowRoundForward/></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article