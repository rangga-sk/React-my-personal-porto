import Navbar from './components/Navbar.jsx'
import HeadText from './components/HeadText.jsx'
import EffectTrail from './components/EffectTrail.jsx'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <EffectTrail />
      <Navbar />
      <div className='mainContainer'>

        {/* <div className='wrap-head'>
          <div className='box-head'>
            <span className='head-span-name'>RANGGA SUKMANA MILDAN</span>
            <span className='head-span-job'>Front-end Web Developer / Full-Stack Web Developer</span>
          </div>
        </div> */}

        <HeadText />

        <div className='wrap-profile'>
          <div className='card-profile'>
            <div className='card-photo'>
              <img src="./vite.svg" alt=""/>
            </div>
            <div className='card-text'>
              <span>About Me</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio modi obcaecati labore saepe? Perferendis, vero rem excepturi, aliquid culpa nihil minima necessitatibus possimus, dolore iste reiciendis quas? Corporis dolor, error quod suscipit nisi odit asperiores cupiditate sapiente officiis commodi quasi, amet facere. Eveniet, dignissimos tempore ipsam nemo, explicabo enim sequi doloribus laborum culpa labore unde quidem porro optio eos voluptate quibusdam pariatur adipisci maxime accusantium laboriosam eligendi necessitatibus obcaecati totam. Doloremque nemo ipsum reprehenderit est numquam fugit sapiente sunt, recusandae cum laborum tempora? Odit vero eaque blanditiis ducimus quibusdam suscipit iure eum, dignissimos maiores consequuntur, eos, placeat magni nesciunt.</span>
            </div>
          </div>
        </div>

        <div className='wrap-experience'>
          <span className='title-wrp-exp'>Work Experience</span>
          <div className='list-experience'>
            <div className='box-btn-experience'>
              <button className='btn-list-experience'></button><span>Intern Programmer</span>
            </div>
            <div className='box-btn-experience'>
              <button className='btn-list-experience'></button><span>Data Analyst</span>
            </div>
            <div className='box-btn-experience'>
              <button className='btn-list-experience'></button><span>IT Auditor</span>
            </div>
            <div className='box-btn-experience'>
              <button className='btn-list-experience'></button><span>IT Full-Stack</span>
            </div>
          </div>
          <div className='detail-experience'>
              <span className='exp-title'>Intern Programmer</span>
              <span className='exp-datetime'>12 August 2021 - 16 May 2021</span>
              <p className='exp-description'>Saya memulai karier di PT Wahana Prestasi Logistik sebagai karyawan magang sebelum akhirnya menjadi karyawan kontrak. Selama masa magang, saya mempelajari penggunaan sistem operasi Linux (Ubuntu) yang telah disiapkan pada perangkat kantor. Saya juga mempelajari pembuatan shell script untuk membaca file log dari Nginx, kemudian data tersebut dikirim (push) ke database Redis. Setelah tersimpan di Redis, saya membuat shell script lanjutan untuk mengambil data dari Redis dan memindahkannya ke MySQL. Selanjutnya, data yang sudah ada di MySQL diolah dan dimasukkan ke Elasticsearch menggunakan Logstash. </p>
              <span className='exp-wh-i-lrn'>What I Learned</span>
              <div className='exp-skills'>
                <span>Linux Operation</span>
                <span>Shell Script</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
              </div>
          </div>
        </div>

        <div className='wrap-project'>
          <span className='title-prj'>Project</span>
          <div className='project-project'>
            <span className='project-title'>1. Software Sahabat Wahana</span>
            <img className='project-img' src="./vite.svg" alt="" />
            <span className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus facilis vel eaque dolor, natus similique mollitia repudiandae odit itaque. Aliquid fuga ut voluptates necessitatibus praesentium iusto doloribus enim dolor cupiditate unde corporis quam dignissimos, beatae velit sed commodi voluptatibus vitae totam vel? Ex ea saepe excepturi quo, qui officia?</span>
            <div className='project-skills'>
                <span>Linux Operation</span>
                <span>Shell Script</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
