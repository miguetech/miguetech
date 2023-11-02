import { Fragment } from "react";
import vueLogo from '../assets/logo_skills/vue-js.png';
import vitejsLogo from '../assets/logo_skills/vite-js.png';
import pythonLogo from '../assets/logo_skills/python.png';
import javaScriptLogo from '../assets/logo_skills/javascript.png';
import htmlLogo from '../assets/logo_skills/html.png';
import cssLogo from '../assets/logo_skills/css.png';
import flutterLogo from '../assets/logo_skills/flutter.png';
import miFoto from '../assets/mi-foto.jpg';
import mainImage from '../assets/image/main_page/front_page.jpg';
import laptop_cartoon from '../assets/image/main_page/laptop_cartoon.png';
import man_animated from '../assets/image/main_page/man_animated.png';
import TypedReactHooksDemo from "./nuevo";
import Typed from 'typed.js';

function Content1() {

    return (
        <Fragment>
            {/* <section className="container mx-auto  w-full  grid grid-cols-resposive">

                <img src={man_animated} className="object-cover h-full " alt="Image alt text" />
                <div className="  h-full relative w-[100%] ">

                    <h1 className="pl-14 text-[200%] text-white absolute  skew-y-[30deg] z-50 sm:top-24  w-[50%] sm:left-40">
                        <TypedReactHooksDemo />
                    </h1>
                    <div className="relative  w-[100%] h-full bg-blue-100 top-0">
                        <div className="">
                            <img src={laptop_cartoon} className="" />
                        </div>
                    </div>
                </div>

            </section> */}
            <section className=" text-white">
                <div className=" grid grid-cols-2 container m-20 items-center justify-items-center">

                    <div >
                        <div className=" text-6xl font-bold">Miguel Hernández</div>
                        <div className=" text-3xl font-bold">Soy Desarrollador Front-end</div>
                        <div className=" text-xl ">Especializado en la construcción de sitios web y aplicaciones moviles, dando una exepcional experiencia digital. Estoy enfocado en el diseño adaptativo hacia todo los tipos de dispositivos.</div>
                    </div>
                    <div className=" rounded-full w-64 border border-indigo-600border border-indigo-600 shadow-lg shadow-indigo-500">
                        <img className="object-cover  rounded-full"  src={miFoto} alt="" sizes="" srcset="" />

                    </div>
                </div>

            </section>

            <h1 className=" text-5xl text-center m-10 text-white"> Habilidades </h1>

            <section className="container mx-auto w-full   h-auto  grid grid-cols-resposive gap-20 content-center place-items-center my-10 md:my-24 text-white">
                <div className=" w-[96px] h-[96px] ">
                    <img src={vueLogo} />
                </div>
                <div className=" w-[96px] h-[96px] ">
                    <img src={vitejsLogo} ></img>
                </div>
                <div className=" w-[96px] h-[96px] ">
                    <img src={pythonLogo} />
                </div>
                <div className=" w-[96px] h-[96px] ">
                    <img src={javaScriptLogo} />
                </div>
                <div className=" w-[96px] h-[96px] ">
                    <img src={htmlLogo} />
                </div>
                <div className=" w-[96px] h-[96px] ">
                    <img src={cssLogo} />
                </div>
                <div className=" w-[96px] h-[96px] ">
                    <img src={flutterLogo} />
                </div>

            </section>
            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Save Changes
            </button>
            {/* <section className="w-full h-screen">
        <img src="https://www.nextibs.com/wp-content/uploads/2021/12/seguridad-informatica-1024x439.jpeg" className="object-cover w-full h-full" alt="Image alt text" />


    </section> */}
        </Fragment>
    );

}

export default Content1;