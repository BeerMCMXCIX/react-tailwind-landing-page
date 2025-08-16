import clientImgLogo01 from '../assets/img/clients/client-01.png'
import clientImgLogo02 from '../assets/img/clients/client-02.png'
import clientImgLogo03 from '../assets/img/clients/client-03.png'
import clientImgLogo04 from '../assets/img/clients/client-04.png'
import clientImgLogo05 from '../assets/img/clients/client-05.png'
import clientImgLogo06 from '../assets/img/clients/client-06.png'
import clientImgLogo07 from '../assets/img/clients/client-07.png'

// กำหนด Logo ด้วย array เพื่อใช้ .map เรียก logo ทำให้เขียน code สั้นลง
const clientImgLogo = [
    clientImgLogo01,
    clientImgLogo02,
    clientImgLogo03,
    clientImgLogo04,
    clientImgLogo05,
    clientImgLogo06,
    clientImgLogo07];

function Clients() {
  return (
    <div className='container mx-auto max-w-[1440px] py-10 text-center'>
        <h2 className='text-[36px] text-[#4D4D4D] font-semibold '>Our Clients</h2>
        <p className='text-[16px] text-[#717171] mt-2'>We have been working with some Fortune 500+ clients</p>
        <ul className='flex flex-col items-center mx-auto mt-4 max-w-[1152px] md:flex-row md:justify-between'>
            {/* Function .map */}
            {clientImgLogo.map((client, index) => (
                <li key={index}>
                    <img src={client} alt="" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Clients