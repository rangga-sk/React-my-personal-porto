import '../style/navbar.css'
import { useState, useEffect } from 'react';

export default function Navbar({EffectRain, setEffectRain, dataContact, namaPanggil}) {
    
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

    function scrollToSection(param) {
        const section = document.getElementById(param);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    // tombol burger untuk
    const [isOpenNav, setIsOpenNav] = useState(false);

    const toggleMenu = () => {
        setIsOpenNav(!isOpenNav);
    };

    
    function aktifEfek() {
        setEffectRain(!EffectRain);
    }

    return (
        <>
         {/* style={{borderBottom: isScroll && '1px solid rgb(62, 224, 62)', background: isScroll && 'white', boxShadow: isScroll && '' }} */}
            <nav>
                <div className='img-nama'>
                    {/* <img className='navhome-img' src="./src/assets/react.svg"/> */}
                    <span className='nav-name' onClick={aktifEfek}>{namaPanggil}</span>
                </div>
                <div class="toggle-nav" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ol className={`olnav ${isOpenNav ? 'show' : ''}`}>
                    <li className='linav' onClick={() => scrollToSection('halId')}>About</li>
                    <li className='linav' onClick={() => scrollToSection('halExp')}>Experience</li>
                    <li className='linav' onClick={() => scrollToSection('halProject')}>Project</li>
                    {/* <li className='linav'>Contact</li> */}
                    <button type="button" style={{backgroundColor: isOpen && 'limegreen', color: isOpen && 'rgb(207, 236, 207)'}} onClick={toggleDropdown} className='contact-button'>Contact
                    {isOpen && (
                        <div className="navDropdown">
                            {dataContact.map((curr, key, value) => {
                                return (
                                    <a key={key} target='_blank' href={value[key].includes("|") ? value[key].split("|")[1].trim() : ""}>{value[key].includes("|") ? value[key].split("|")[0].trim() : value[key]}</a>
                                )
                            })}
                        </div>
                    )}
                    </button>
                </ol>
            </nav>
        </>
    )
}
