import { Fragment } from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';




function SocialNetworks() {

    return (
        <Fragment>
            <div className="lg:block hidden">
                <a href="linkedin.com/in/miguel-hernandez-066711264" target="_blank" className=" h-10 w-[380px] bg-[#0c61bf] fixed top-[40%] -left-[335px] hover:left-0 flex  text-blue-50 items-center justify-end">
                    <div>linkedin.com/in/miguel-hernandez-066711264</div>
                    <BsLinkedin className=" mx-2" size={30} />

                </a>
                <a href="https://github.com/miguetech" target="_blank" className=" h-10 w-[255px] bg-[#0d1116] fixed top-[46.5%] -left-[210px] hover:left-0 flex  text-blue-50 items-center justify-end">
                    <div>https://github.com/miguetech</div>
                    <BsGithub className=" mx-2" size={30} />
                </a>
                <a href="https://github.com/miguetech" target="_blank" className=" h-10 w-[270px] bg-[#76b5a8] fixed top-[53.1%] -left-[225px] hover:left-0 flex  text-blue-50 items-center justify-end">
                    <div>miguelmaster1803@gmail.com</div>
                    <MdEmail className=" mx-2  " size={30} />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5804263239926&text&type=phone_number&app_absent=0" target="_blank" className=" h-10 w-[180px] bg-[#1ad03f] fixed top-[59.7%] -left-[135px] hover:left-0 flex  text-blue-50 items-center justify-end">
                    <div>+5804263239926</div>
                    <BsWhatsapp className=" mx-2  " size={30} />
                </a>




            </div>


        </Fragment>
    );
}

export default SocialNetworks;