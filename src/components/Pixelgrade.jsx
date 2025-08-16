import img01 from '../assets/img/img-01.png'

function Pixelgrade() {
  return (
    <div className='py-10'>
        <div className='container mx-auto max-w-[1440px] p-10 grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
                <img src={img01} alt="" />
            </div>
            <div>
                <h2 className='text-[36px] font-semibold text-[#4D4D4D] mt-4 md:mt-0 leading-[1]'>The unseen of spending three <br /> years at Pixelgrade</h2>
                <p className='text-[16px] text-[#717171] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <a className='inline-flex justify-center items-center mt-8 py-[14px] px-[32px] bg-[#4CAF4F] text-[16px] text-white rounded-md' href="">Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Pixelgrade