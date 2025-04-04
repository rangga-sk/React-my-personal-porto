import Navbar from './components/Navbar.jsx'
import EffectTrail from './components/EffectTrail.jsx'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='mainContainer'>
        <div className='wrap-head'>
        <EffectTrail />
          <div className='box-head'>
            <span className='head-span-name'>RANGGA SUKMANA MILDAN</span>
            <span className='head-span-job'>Front-end Web Developer / Full-Stack Web Developer</span>
          </div>
        </div>
        <div className='wrap-profile'>
          <div className='box block1'></div>
          <div className='box block3'></div>
          <div className='box block2'></div>
        </div>
      </div>
    </>
  )
}

export default App
