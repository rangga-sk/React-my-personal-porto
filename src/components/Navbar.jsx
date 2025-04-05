import '../style/navbar.css'
import { useState, useEffect } from 'react';

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);    
    const [isScroll, setIsScroll] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    window.addEventListener('scroll', () => {
        if(window.scrollY > 200) {
            setIsScroll(!isOpen);
        } else {
            setIsScroll(false);
        }
    });

    // close dropdown jika user klik diluar tombol dropdown
    useEffect(() => {
    const handleClickOutside = (event) => {
        if (!event.target.closest(".contact-button")) {
            setIsOpen(false);
        }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
    }, []);

    return (
        <>
         {/* style={{borderBottom: isScroll && '1px solid rgb(62, 224, 62)', background: isScroll && 'white', boxShadow: isScroll && '' }} */}
            <nav>
                <div className='img-nama'>
                    <img className='navhome-img' src="./src/assets/react.svg"/>
                    <span className='nav-name'>RANGGA SUKMANA MILDAN</span>
                </div>
                <ol className='olnav'>
                    <li className='linav'>About</li>
                    <li className='linav'>Work</li>
                    <li className='linav'>Project</li>
                    {/* <li className='linav'>Contact</li> */}
                    <button type="button" style={{backgroundColor: isOpen && 'limegreen', color: isOpen && 'rgb(207, 236, 207)'}} onClick={toggleDropdown} className='contact-button'>Contact</button>
                    {isOpen && (
                        <div className="navDropdown">
                            <a href="mailto:sukmana.vector@gmail.com" target='_blank'>Mail</a>
                            <a href="https:/linkedin.com/in/rangga-sukmana-mildan-862a67349" target='_blank'>Linked-in</a>
                        </div>
                    )}
                </ol>
            </nav>
        </>
    )
}