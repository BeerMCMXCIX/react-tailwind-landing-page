import icon01 from '../assets/img/icon-01.png'
import icon02 from '../assets/img/icon-02.png'
import icon03 from '../assets/img/icon-03.png'

function Community() {
  return (
    <div className='container mx-auto max-w-[1440px] text-center'>
        <h2 className='text-[36px] font-semibold text-[#4D4D4D] mt-10 leading-[1]'>Manage your entire community <br /> in a single system</h2>
        <p className='text-[16px] text-[#717171] mt-2'>Who is Nextcent suitable for?</p>
        <div className='grid grid-cols-1 gap-19 md:grid-cols-3 md:gap-38 mt-4'>
            <div className='shadow-lg px-8 py-6 rounded-lg w-[299px] h-[260px] mx-auto'>
                <img className='mx-auto' src={icon01} alt="" />
                <h3 className='text-[28px] text-[#4D4D4D] font-bold leading-[1] mt-4'>Membership <br /> Organisations</h3>
                <p className='text-[14px] text-[#717171] mx-auto w-[251px] h-[60px] mt-2'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className='shadow-lg px-8 py-6 rounded-lg w-[299px] h-[260px] mx-auto'>
                <img className='mx-auto' src={icon02} alt="" />
                <h3 className='text-[28px] text-[#4D4D4D] font-bold leading-[1] mt-4'>National <br /> Associations</h3>
                <p className='text-[14px] text-[#717171] mx-auto w-[240px] h-[80px] mt-2'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className='shadow-lg px-8 py-6 rounded-lg w-[299px] h-[260px] mx-auto'>
                <img className='mx-auto' src={icon03} alt="" />
                <h3 className='text-[28px] text-[#4D4D4D] font-bold leading-[1] mt-4'>Clubs And <br /> Groups</h3>
                <p className='text-[14px] text-[#717171] mx-auto w-[251px] h-[60px] mt-2'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </div>
  )
}

export default Community