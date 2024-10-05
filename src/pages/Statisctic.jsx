import React from "react";

const PremiumPlans = () => {
    const plans = [
        {
            name: "Mini",
            price: "Rp75.000/month", 
            features: [
                "Ad-free music on mobile",
                "Download songs on 1 mobile device",
            ],
        },
        {
            name: "Individual",
            price: "Rp150.000/month", 
            features: [
                "Ad-free music",
                "Download songs on any device",
                "Listen offline",
                "High-quality audio",
            ],
        },
        {
            name: "Duo",
            price: "Rp195.000/month", 
            features: [
                "2 Premium accounts",
                "For couples who live together",
                "Ad-free music",
                "Download and listen offline",
                "High-quality audio",
            ],
        },
        {
            name: "Family",
            price: "Rp225.000/month", 
            features: [
                "6 Premium accounts",
                "For family members living together",
                "Ad-free music",
                "Block explicit music",
                "Download and listen offline",
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="rounded-lg w-full bg-gradient-to-b from-primary50 to-primary30 flex flex-col items-center justify-center py-20">
                <div className="text-sm text-slate-400 mb-6">
                    Enjoy unlimited premium features!
                </div>
                <h2 className="text-white text-6xl font-medium font-orbitron mb-6">
                    Musicle+
                </h2>
                <p className="text-white opacity-80 text-lg">
                    Get exclusive access to all premium features, without limitations.
                </p>
                <a
                    href="#plan"
                    className="px-6 py-3 mt-6 text-white bg-primary rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300"
                >
                    Upgrade Now!
                </a>
            </div>

            <div className="my-24 w-full flex flex-col justify-center items-center max-w-4xl">
                <h3 className="text-white text-3xl font-semibold mb-4 text-left">
                    Why Musicle Premium?
                </h3>
                <ul className="text-white opacity-80 list-disc space-y-2 text-xl text-left">
                    <li>No ad interruptions</li>
                    <li>Download and listen offline</li>
                    <li>High-quality audio</li>
                    <li>Access on multiple devices</li>
                </ul>
            </div>

            <div id="plan" className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 w-full max-w-5xl">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-primary30 rounded-3xl p-6 flex flex-col justify-between items-start"
                    >
                        <div className="flex flex-col">
                            <h4 className="text-white text-2xl font-semibold mb-2">
                                {plan.name}
                            </h4>
                            <p className="text-white text-4xl font-bold mb-4">
                                {plan.price}
                            </p>
                            <ul className="text-white text-lg opacity-80 space-y-2 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href="#"
                            className="w-full py-2 text-center mt-10 text-white bg-primary rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300"
                        >
                            Get {plan.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumPlans;
