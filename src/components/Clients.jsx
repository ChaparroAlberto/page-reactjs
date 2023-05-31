import React from "react";

const Clients = () => {
    return (
        <div className="bg-[#FCFCFF] p-8 xl:p-20 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
            <h2 className="text-xl font-semibold text-main text-center">Trusted by greatest companies</h2>
            <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
                <img src="/public/Google.svg" alt="marca" />
                <img src="/public/Airbnb.svg" alt="marca" />
                <img src="/public/CreativeM.svg" alt="marca" />
                <img src="/public/Shopify.svg" alt="marca" />
                <img src="/public/Amazon.svg" alt="marca" />
            </div>
        </div>
    )
};

export default Clients;