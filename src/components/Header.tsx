import { Switch } from "./ui/switch";
import SunSvg from "@/icons/SunSvg";
import MoonSvg from "@/icons/MoonSvg";
function Header({ darkMode, setDarkMode }: any) {
  return (
    <div
      className={`
         h-[100px] flex items-center justify-between full px-8`}
    >
      <div className="text-[30px] font-bold">Kosh</div>{" "}
      <div className="flex ">
        {" "}
        <div className="flex w-[100px]">
          <div className="w-6 h-6">
            <SunSvg
              fill={darkMode ? "#FFFFFF" : "#4B0082"}
              stroke={`${!darkMode ? "#00000" : "#fffff"}`}
            />
          </div>
          <div onClick={() => setDarkMode((prev: boolean) => !prev)}>
            <Switch checked={darkMode} className={`${!darkMode?"bg-[#00000]":"bg-[#fffff]"} transition-colors`}></Switch>
          </div>
          <div className="w-6 h-6">
            <MoonSvg fill={darkMode ? "#FFFFFF" : "#4B0082"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
