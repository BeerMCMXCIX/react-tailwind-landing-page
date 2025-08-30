import Tim from '../assets/img/tim-smith.png'
import clientImgLogo01 from '../assets/img/clients/client-01.png'
import clientImgLogo02 from '../assets/img/clients/client-02.png'
import clientImgLogo03 from '../assets/img/clients/client-03.png'
import clientImgLogo04 from '../assets/img/clients/client-04.png'
import clientImgLogo05 from '../assets/img/clients/client-05.png'
import clientImgLogo06 from '../assets/img/clients/client-06.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const clientImgLogo = [
    clientImgLogo01,
    clientImgLogo02,
    clientImgLogo03,
    clientImgLogo04,
    clientImgLogo05,
    clientImgLogo06
];

function Meet() {
  return (
    <div className='bg-[#F5F7FA] p-10'>
        <div className='container mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={Tim} alt="" />
            </div>
            <div className='mx-auto'>
                <p className='text-[16px] text-[#717171]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h4 className='text-[20px] text-[#4CAF4F] mt-4'>Tim Smith</h4>
                <p className='text-[16px] text-[#717171] mt-2'>British Dragon Boat Racing Association</p>

                <ul className='flex flex-col mx-auto md:flex-row md:justify-between mt-8 items-center'>
                    {clientImgLogo.map((client, index) =>(
                        <li key = {index}>
                            <img src={client} alt="" />
                        </li>
                    ))}
                    <a className='flex items-center text-[20px] text-[#4CAF4F] font-semibold' href="">Meet all customers <span className='ml-2'><IoIosArrowRoundForward/></span></a>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Meet