import { Orbit, MapPin, Ban } from "lucide-react";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-center gap-10">
      <div>
        <Orbit
          className="animate-spin text-indigo-200"
          style={{ animation: "spin 15s linear infinite", animationDirection: 'reverse' }}
          size='100'
          strokeWidth={2}
        ></Orbit>
        <div className="w-0 h-0">
          <div className="relative top-[-105px] left-[-5px] mix-blend-lighten bg-indigo-700 w-[110px] h-[110px] rounded-full"></div>
        </div>
        <div className="w-0 h-0">
          <Ban
            className="relative animate-spin text-indigo-400 top-[-100px] z-[-10]"
            style={{ animation: "spin 15s linear infinite", animationDirection: 'normal' }}
            size='100'
            strokeWidth={2}
          ></Ban>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <h1 className="text-indigo-200">antipodean <span className="text-indigo-400">systems oü</span></h1>
        {/* <p className="text-indigo-400 font-light">trans-hemispheric software solutions</p> */}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-indigo-200 flex flex-row items-center gap-1 whitespace-nowrap">
          <MapPin size='16'></MapPin>tallinn, estonia <span className="text-indigo-400 font-light">and everywhere</span>
        </div>
        <div className="text-indigo-400 items-center whitespace-nowrap">
          hello@antipodean.ee
        </div>
      </div>

    </div>
  );
}
