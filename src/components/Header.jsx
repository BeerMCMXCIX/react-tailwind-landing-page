import HeaderImg from '../assets/img/header-img.png'

function Header() {
  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[600px] flex items-center'>
        <div className='container mx-auto max-w-[1440px] px-10 py-1 flex flex-col md:flex-row md:justify-between md:items-center md:px-[80px] md:py-[96px]'>
            <div>
                <h1 className='text-[64px] leading-[1] font-semibold text-[#4D4D4D]'>Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                <p className='text-[16px] text-[#717171] mt-4'>Where to grow your business as a photographer: site or social media?</p>
                <a className='inline-flex justify-center items-center mt-8 py-[14px] px-[32px] bg-[#4CAF4F] text-[16px] text-white rounded-md' href="">Register</a>
            </div>
            <div>
                <img src={HeaderImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header