import Search from "../components/MainComp/Search";
import Banner from "../layouts/ListenLayouts/Banner";
import Playlists from "../layouts/ListenLayouts/Main";

const Listen = () => {
    return (
        <>
            <div className="flex flex-col justify-start px-2 w-full">
                <Banner/>
                <Playlists />
            </div>
        </>
    );
};

export default Listen;
