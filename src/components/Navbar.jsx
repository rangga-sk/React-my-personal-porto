import './navbar.css'
import { useState, useEffect } from 'react';

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);    

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
            <nav>
                <div className='img-nama'>
                    <img className='navhome-img' src="./src/assets/react.svg"/>
                    <span>RANGGA SUKMANA MILDAN</span>
                </div>
                <ol className='olnav'>
                    <li className='linav'>About</li>
                    <li className='linav'>Project</li>
                    {/* <li className='linav'>Contact</li> */}
                    <button type="button" style={{backgroundColor: isOpen && 'limegreen', color: isOpen && 'rgb(207, 236, 207)'}} onClick={toggleDropdown} className='contact-button'>Contact</button>
                    {isOpen && (
                        <div className="navDropdown">
                            <a href="mailto:sukmana.vector@gmail.com" target='_blank'>E-Mail</a>
                            <a href="https://wa.me/0895622554047" target='_blank'>Phone</a>
                        </div>
                    )}
                </ol>
            </nav>
        </>
    )
}