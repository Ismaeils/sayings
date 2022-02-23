import SideMenu from "./side-menu";

const CustomLayout = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="container p-5 mx-auto flex flex-row">
            <div className="basis-1/4">
                <SideMenu></SideMenu>
            </div>
            
            <div className="basis-2/3 ">
                {children}
            </div>
        </div>
    );
}

export default CustomLayout;