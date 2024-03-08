import { useRef, useState, forwardRef, useImperativeHandle} from "react";
import { Link } from "react-router-dom";
// interface ISidebar {}
export type SidebarRef = {
    sidebarControl(): void;
}

const Sidebar = forwardRef<SidebarRef>(({}, ref) => {
    const dashboard_li_1 = useRef<HTMLLIElement>(null);
    const dashboard_li_2 = useRef<HTMLLIElement>(null);
    const [isForDash, setIsForDash] = useState(false);
    ///

    const [isOpen, setIsOpen] = useState(false);
    const refDiv = useRef<HTMLDivElement | null>(null)
    const ula = useRef<HTMLUListElement | null>(null)
    const ulb = useRef<HTMLUListElement | null>(null)
    const sidebar_title = useRef<HTMLDivElement | null>(null)
    const copy_right = useRef<HTMLDivElement | null>(null)
    const sidebarControl = () => {
        if (isOpen === false) {
            refDiv.current.style.width = '270px';
            ula.current.style.cssText = 'opacity: 0.9; visibility: visible; '
            ulb.current.style.cssText = 'opacity: 0.9; visibility: visible;'
            sidebar_title.current.style.cssText = 'opacity: 0.9;'
            copy_right.current.style.cssText = 'opacity: 0.9;'
            setIsOpen(true)
        } else if (isOpen === true) {
            refDiv.current.style.width = '0px';
            ula.current.style.cssText = 'opacity: 0; visibility: hidden; transition: all 0.5s ease-in-out 0.5s;'
            ulb.current.style.cssText = 'oacity: 0; visibility: hidden; transition: all 0.5s ease-in-out 0.5s;'
            sidebar_title.current.style.cssText = 'opacity: 0; transition: all 0.5s ease-in-out 0.5s;'
            copy_right.current.style.cssText = 'opacity: 0; transition: all 0.5s ease-in-out 0.5s;'
            setIsOpen(false)
        }
    }


    const changeDash = () => {
        if (isForDash === false) {
            dashboard_li_1.current.style.visibility = 'visible';   
            dashboard_li_2.current.style.visibility = 'visible';   
            setIsForDash(true)
        } else if (isForDash === true) {
            dashboard_li_1.current.style.visibility = 'hidden';
            dashboard_li_2.current.style.visibility = 'hidden'; 
            setIsForDash(false)
        }
    }
   

  useImperativeHandle(ref, () => ({
      sidebarControl,
  }))
    return (
        <div className="sidebar" ref={refDiv}>
            <div className="title" ref={sidebar_title}>Skylyte Design</div>
            <div id="main">
                <ul className="sidebar-d" ref={ula}>
                    <span onClick={changeDash} >Dashboard</span>
                    <li ref={dashboard_li_1} style={{visibility: 'hidden'}}><Link to="/slides" >Presentation</Link></li>
                    <li ref={dashboard_li_2} style={{visibility: 'hidden'}}><Link to="/sketch">Edit</Link></li>
                </ul>
                <ul className="sidebar-d" ref={ulb}>
                    <Link to='/login'><span>Account</span></Link>
                    
                </ul>
            </div>
            <div className="cr-sidebar" ref={copy_right}>
                © Skylyte Inc. All rights reserved
            </div>
        </div>
    )
})

export default Sidebar;