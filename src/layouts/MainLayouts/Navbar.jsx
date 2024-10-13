import Search from "../../components/MainComp/Search";

const Navbar = () => {
    return (
        <div className="w-full flex flex-row justify-between items-center py-6 pl-8">
            <div className="font-orbitron text-[32px] min-w-[230px]  text-white">
                Musicle
            </div>
            <Search/>
            <div className="flex flex-row justify-between items-center lg:min-w-96 pl-7 pr-4">
                <div className="hidden lg:flex flex-row justify-between items-center rounded-full px-4 py-[8px] border border-primary hover:bg-primary text-primary hover:text-background transition-all duration-300 cursor-pointer font-medium">
                    <div className="text-[14px]">My Account</div>
                    <div className="ml-4">{">"}</div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <img
                        src="/assets/icons/stream.svg"
                        alt=""
                        className="mr-5"
                    />
                    <div className="h-[46px] flex justify-center items-center rounded-full border border-primary">
                        <img
                            src="/assets/images/profile.png"
                            alt=""
                            className="w-full h-full relative top-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
