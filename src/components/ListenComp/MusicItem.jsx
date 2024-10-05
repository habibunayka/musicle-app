const MusicItem = ({ title, artist, album, duration, cover }) => {
  return (
    <tr className="group hover:bg-[#FFFFFF10] transition-all duration-300">
      <td className="w-[500px] py-2 pl-2">
        <div className="flex flex-row items-center">
          <div className="relative bg-gray-500 w-14 h-14 rounded-lg overflow-hidden">
            <img
              src={cover} 
              alt={`${album} cover`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src="/assets/icons/play-btn.svg"
                alt="play"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-md text-white cursor-pointer">{title}</div>
            <div className="mt-1 text-sm text-slate-400">{artist}</div>
          </div>
        </div>
      </td>
      <td className="py-2 text-sm text-left text-slate-400">{album}</td>
      <td className="py-2 text-sm text-left text-slate-400">{duration}</td>
      <td className="py-2 text-right">
        <div className="text-white text-right transition-all cursor-pointer">
          <img
            src={"/assets/icons/option.svg"}
            alt="option"
            className="w-5 h-3"
          />
        </div>
      </td>
    </tr>
  );
};

export default MusicItem;
