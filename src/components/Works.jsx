import React from "react";

const Works = () => {
    return (
        <div className="p-8 xl:p-20">
            <div className="mb-8">
                <h1 className="text-[2.5rem] text-main font-bold">We create world-class digital products</h1>
                <p className="text-xl text-secondary">By information about design the world to the best instructors, heatc helping By information</p>
            </div>
            {/* Works */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <img src="/public/work1.png" className="w-full h-[600px] object-cover rounded-3xl" alt="work" />
                    <p className="text-secondary text-sm">App Design - June 20, 2022</p>
                    <h3 className="text-main font-bold text-2xl">App Redesign</h3>
                    <p className="text-secondary">By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <img src="/public/work2.png" className="w-full h-56 object-cover rounded-3xl"/>
                        <p className="text-secondary text-sm">App Design - June 20, 2022</p>
                        <h3 className="text-lg text-main font-bold">Redesign channel website landng page</h3>
                        </div>
                    <div className="flex flex-col gap-4">
                        <img src="/public/work3.png" className="w-full h-56 object-cover rounded-3xl"/>
                        <p className="text-secondary">App Design - June 20, 2022</p>
                        <h3 className="text-lg text-main font-bold">New Locator App For a New Company</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="/public/work4.png" className="w-full h-56 object-cover rounded-3xl"/>
                        <p className="text-secondary text-sm">App Design - June 20, 2022</p>
                        <h3 className="text-lg text-main font-bold">Rental Rooms Web App Platform</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="/public/work5.png" className="w-full h-56 object-cover rounded-3xl"/>
                        <p className="text-secondary text-sm">App Design - June 20, 2022</p>
                        <h3 className="text-lg text-main font-bold">Calendar App for Big SASS Company</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Works;