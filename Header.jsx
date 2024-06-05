
import React, {useRef, useEffect} from 'react';

import "./header.css";

const nav_links =[
    {
        path:'#home',
        display:'Home'
    },

    {
        path:'#about',
        display:'About'
    },

    {
        path:'#shop',
        display:'Shop'
    },
];

const Header = ({theme, toggleTheme}) => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = ()=>{
       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
       {
        headerRef.current.classList.add('header_shrink')
       } else{
        headerRef.current.classList.remove('header_shrink')
       }
       }

       useEffect(()=>{
        window.addEventListener('scroll', headerFunc)

        return ()=> window.removeEventListener('scroll', headerFunc)
       },[]);

       const toggleMenu = ()=> menuRef.current.classList.toggle('menu_active');

    return(
    <header className='header' ref={headerRef}>
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <h2>WolffGames</h2>
                    
                </div>

                {/* ========== navigation ============== */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu">
                        {nav_links.map((item, index)=>(
                            <li className="menu_item"><a href={item.path} className="menu_link">
                                {item.display}
                                </a>
                                </li>
                        ))}
                    </ul>
                </div>

                {/* ========== light mode ============== */}
                <div className="light_mode" >
                   <span onClick={toggleTheme}>
                    {
                        theme==='light-theme' ? ( <span><i class="ri-moon-line"></i>Dark
                        </span>
                        ) : ( 
                        <span> 
                        <i class="ri-sun-line"></i> Light
                        </span>
                    )}
                     
                   </span> 
                </div>

                <span className="mobile_menu" onClick={toggleMenu}><i class="ri-menu-line"></i></span>
            </div>
        </div>
    </header>
)
}

export default Header;