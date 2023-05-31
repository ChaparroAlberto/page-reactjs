import React from "react";

const Testimonials = () => {
    return (
        <div className="p-8 xl:p-20 flex flex-col gap-8 bg-[#FCFCFF] relative">
            <h1 className="text-[2.5rem] text-center font-black text-main">Let’s hear What they says</h1>
            <div className="flex justify-center gap-4">
                <span className="text-5xl text-primary">
                    <img src="“.svg" alt="quotes" />
                </span>
                <p className="max-w-2xl text-center text-secondary leading-[1.7]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
                fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <span className="text-5xl text-primary">
                    <img src="“ r.svg" alt="quotes" />
                </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center justify-center gap-8 md:gap-12">
                    <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full" alt="" />
                    <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" alt="" />
                    <img src="Mask Group.png" className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-[#706FE5] p-1 bg-white" alt="" />
                    <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" alt="" />
                    <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full" alt="" />
                </div>
                <div>
                    <h3 className="text-center text-2xl font-bold text-main">Ricky Aprilia</h3>
                    <h5 className="text-center text-xl text-secondary">Founder of Varibo</h5>
                </div>
            </div>
            <img src="cube dots.svg" className="absolute" alt="cube dots" /><img src="cube dots.svg" className="absolute right-8 bottom-8 xl:right-20 xl:bottom-20" alt="cube dots" />
        </div>
    )
};

export default Testimonials;