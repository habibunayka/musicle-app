const Banner = () => {
    return (
        <div className="flex flex-row justify-between relative gap-5 mb-8 overflow-hidden">

            <div className="w-[50%] h-80 bg-gradient-to-b from-primary50 to-primary30 rounded-lg flex flex-col items-start justify-center p-6">
                <div className="text-sm text-slate-400 mb-2">
                    Enjoy unlimited premium features!
                </div>
                <h2 className="text-white text-4xl font-medium font-orbitron mb-4">
                    Musicle+
                </h2>
                <p className="text-white opacity-80 text-md">
                    Get exclusive access to all premium features, without
                    limitations.
                </p>
                <a
                    href="#"
                    className="px-6 py-3 mt-6 text-white bg-primary rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300"
                >
                    Upgrade Now!
                </a>
            </div>

            <div className="w-full h-80 bg-gray-500 rounded-lg relative overflow-hidden">
                <video
                    src="./assets/video/banner.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end p-6 z-20 bg-[#16161698] rounded-lg">
                    <h1 className="text-white opacity-80 text-7xl font-edu font-bold mb-4">
                        <span className="text-primary font-extrabold">
                            Runs
                        </span>
                        tein
                    </h1>
                    <p className="text-white opacity-70 text-xl font-semibold">
                        Join us for an unforgettable night!
                    </p>
                    <p className="text-white opacity-70 text-md font-light mt-2">
                        Starts: October 30th, 2024 at 7:00 PM
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
