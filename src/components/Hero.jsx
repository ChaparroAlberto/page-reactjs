import React from 'react';
import { RiCheckboxBlankCircleFill, RiPlayMiniFill, RiStarSFill, RiCheckboxBlankFill } from "react-icons/ri";

const Hero = () => {
    return (
        <section className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8'>
            {/* Information */}
            <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-[7rem] '>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[3.4rem] leading-[1.3] xl:text-6xl text-main font-bold xl:leading-[1.7]'>Web Design Impactful Digital <span className='text-primary py-2 px-6 border-8 border-primary relative inline-block'>Products
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content'/>
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content'/>
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content'/>
                    <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content'/>
                    </span></h1>
                    <p className='text-secondary md:w-[80%] text-xl leading-[2.25rem] '>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <button className='w-full xl:w-auto bg-primary text-white text-[1.125rem] font-bold py-[.625rem] px-10 rounded-xl'>Contact Us</button>
                        <button className='text-secondary w-full xl:w-auto flex items-center justify-start text-left gap-4 rounded-xl text-[1rem] py-[.625rem] xl:px-3 '><RiPlayMiniFill className='bg-[#EAEAFB] text-primary text-[1.3125rem] p-3.5 box-content rounded-full'/> Watch our <br/>introduction video</button>
                    </div>
                </div>
            </div>
            {/* Image Girl */}
            <div className='md:col-span-3 flex items-center justify-center relative'>
                {/* Content Image */}
                <div>
                    <img src="/public/hero.png" className='w-[15.625rem] h-[15.625rem] md:w-[30rem] md:h-[30rem] object-cover xl:-mt-28' alt="image" />
                    <div className='relative bg-white shadow-xl rounded-lg p-[1.3rem] flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12'>
                        <div className='flex items-center'>
                            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-[#E9E8FA]' src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" alt="person" />
                            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-[#E9E8FA] -ml-4' src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg" alt="person" />
                            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-[#E9E8FA] -ml-4' src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg" alt="person" />
                            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-[#E9E8FA] -ml-4' src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="person" />
                            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-[#E9E8FA] -ml-4' src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg" alt="person" />
                        </div>
                        <h2 className="text-xl font-bold tracking-[1px] text-main">120 + Employees</h2>
                        <div className='flex items-center gap-2 text-lg text-gray-500'>
                            <RiStarSFill className='text-primary'/>5.0 (3.1k Reviews)
                        </div>
                        <div className='absolute -right-12 -bottom-12 -z-10'>
                            <div className='relative'>
                                <RiCheckboxBlankCircleFill className='text-primary text-8xl'/>
                                <RiCheckboxBlankFill className='absolute -left-7 -top-7 text-white text-8xl'/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Circle Back */}
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[26rem] md:h-[26rem] bg-[#EAEAFB] border-[10px] border-primary rounded-full -z-10'></div>
                {/* Logos */}
                <img src="/public/figma.png" className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[14%] right-[20%] xl:right-[10%] -rotate-12' alt="figma" />
                <img src="/public/adobe.png" className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[17%] left-[20%] xl:left-[10%] -rotate-12' alt="figma" />
                <img src="/public/sketch.png" className='w-8 h-8 md:w-14 md:h-14 object-contain xl:p-3 p-1 rounded-full border-l-8 border-gray-600 bg-gray-700 absolute top-[10%] xl:top-[7%] left-[10%] xl:-left-[6%] -rotate-12' alt="figma" />
            </div>
        </section>
    )
};

export default Hero;