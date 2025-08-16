import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa"
import logoWhite from '../assets/img/logo-white.png'

function Footer() {
  return (
    <div className="bg-[#263238] py-16">
        <div className="container mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 m-10 md:m-10 md:grid-cols-2">
                <div>
                    <img src={logoWhite} alt="" />
                    <p className="my-10 text-white">
                        Copyright © 2020 Nexcent ltd. <br />
                        All rights reserved
                    </p>
                    <ul className="flex md:flex-row mb-5 gap-4">
                        <li><a className="text-[#F5F7FA] text-2xl" href="#"><FaInstagram/></a></li>
                        <li><a className="text-[#F5F7FA] text-2xl" href="#"><FaDribbble/></a></li>
                        <li><a className="text-[#F5F7FA] text-2xl" href="#"><FaTwitter/></a></li>
                        <li><a className="text-[#F5F7FA] text-2xl" href="#"><FaYoutube/></a></li>
                    </ul>   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 text-white">
                    <div>
                        <h4 className="text-[20px] font-semibold">Company</h4>
                        <ul className="flex flex-col mb-5">
                            <li className="mt-2"><a className="text-[14px]" href="">Blog</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">About us</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Contact us</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Pricing</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Testimonials</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[20px] font-semibold">Support</h4>
                        <ul className="flex flex-col mb-5">
                            <li className="mt-2"><a className="text-[14px]" href="">Help center</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Terms of service</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Legal</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Privacy policy</a></li>
                            <li className="mt-2"><a className="text-[14px]" href="">Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[20px] font-semibold">Stay up to date</h4>
                        <form action="" className="flex mt-5">
                            <div className="relative">
                                <input type="text" className="bg-white/20 text-[14px] px-4 py-2 rounded-md" placeholder="Your enail address"/>
                                <button type="submit" className="absolute top-[10px] right-[10px] cursor-pointer"><FaRegPaperPlane/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer