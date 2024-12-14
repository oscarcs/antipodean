import { Eclipse, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-center gap-10">
      <Eclipse className="animate-spin text-indigo-200" style={{ animation: "spin 15s linear infinite" }} size='100'></Eclipse>
      <div className="flex flex-col items-center">
        <h1 className="text-indigo-400 tracking-wide">antipodean systems OÜ</h1>
        <p className="text-indigo-200">purveyors of high-quality source code</p>
      </div>
      <div className="text-indigo-200 flex flex-row items-center gap-1 whitespace-nowrap">
        <MapPin size='16'></MapPin>tallinn, estonia <span className="text-indigo-400">and everywhere</span>
      </div>
    </div>
  );
}
