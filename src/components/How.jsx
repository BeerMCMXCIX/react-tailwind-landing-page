import Img02 from '../assets/img/img-02.png'

function How() {
  return (
    <div className='p-10'>
        <div className='container mx-auto max-w-[1440px] p10 grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
                <img src={Img02} alt="" />
            </div>
            <div>
                <h2 className='text-[36px] text-[#4D4D4D] font-semibold leading-[1] mt-4'>How to design your site footer like <br /> we did</h2>
                <p className='text-[14px] text-[#717171] mt-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <a className='inline-flex text-white bg-[#4CAF4F] rounded-md py-[14px] px-[32px] mt-8' href="">Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default How