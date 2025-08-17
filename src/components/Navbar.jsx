import '../style/navbar.css'
import { useState, useEffect, useRef } from 'react';

export default function Navbar({EffectRain, setEffectRain, dataContact}) {
    const boxRef = useRef(null);
    useEffect(() => {
      if (boxRef.current) {
        boxRef.current.innerHTML = "";

        let spans = [];
        for (let i = 0; i < 40; i++) {
          let span = document.createElement('span');
          spans.push(span);
          boxRef.current.appendChild(span);
          span.style.top = `${i * 1}px`;
          let delay = (Math.random() * 0.25) + 0;
          span.style.transitionDelay = delay + 's';
        }
      }
    }, []);


    function effectSlide() {
      boxRef.current.classList.toggle('activeBox');
      setTimeout(() => {
        setEffectRain(!EffectRain);
      }, 100);
    };

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


    return (
        <>
         {/* style={{borderBottom: isScroll && '1px solid rgb(62, 224, 62)', background: isScroll && 'white', boxShadow: isScroll && '' }} */}
            <nav>
                <div className='img-nama'>
                    <div ref={boxRef} className='boximg' onClick={() => {effectSlide();}}></div>
                    {/* <div className='box'></div> */}
                    {/* <img className='navhome-img' src="./src/assets/react.svg"/> */}
                    {/* <span className='nav-name' onClick={aktifEfek}>{namaPanggil}</span> */}
                </div>
                <div className="toggle-nav" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ol className={`olnav ${isOpenNav ? 'show' : ''}`}>
                    <li className='linav' onClick={() => scrollToSection('halId')}>About</li>
                    <li className='linav' onClick={() => scrollToSection('halExp')}>Experience</li>
                    <li className='linav' onClick={() => scrollToSection('halProject')}>Project</li>
                    {/* <li className='linav'>Contact</li> */}
                    <button type="button" style={{backgroundColor: isOpen && '#3a5f3a', color: isOpen && 'rgb(207, 236, 207)'}} onClick={toggleDropdown} className='contact-button'>Contact
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
