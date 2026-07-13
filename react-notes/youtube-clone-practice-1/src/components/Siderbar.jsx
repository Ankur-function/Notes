import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const SideBar = () => {
    const toggleMenu = useSelector((store)=>{return store.app.isMenuOpen});
    
    return (
        <div>
          {toggleMenu && <MenuItems/>}
        </div>
    )
}

export default SideBar;