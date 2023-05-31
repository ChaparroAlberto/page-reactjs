import React from "react";

const Clients = () => {
    return (
        <div className="bg-[#FCFCFF] p-8 xl:p-20 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
            <h2 className="text-xl font-semibold text-main text-center">Trusted by greatest companies</h2>
            <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
                <img src="Google.svg" alt="marca" />
                <img src="Airbnb.svg" alt="marca" />
                <img src="CreativeM.svg" alt="marca" />
                <img src="Shopify.svg" alt="marca" />
                <img src="Amazon.svg" alt="marca" />
            </div>
        </div>
    )
};

export default Clients;