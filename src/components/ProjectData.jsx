import '../style/projectdata.css'

export default function ProjectData({dataProject}) {
    return (
        <>
        <div className='wrap-project' id='halProject'>
          <span className='title-prj'>PROJECT</span>
          <div className='project-project'>
          {dataProject.data.map((dt, index) => (
            <div key={index} className='project-all'>
                <span className='project-title'>{dt.judul}</span>
                {/* <div className='div-prj-image'> */}
                  {/* <img className='project-img' src={dt.image_base[0]} alt="" /> */}
                  
                  <div className='div-prj-image'>
                    {dt.image_base.map((val, i) => (
                      <img className='project-img' src={val} key={i} alt="" />
                      // <span
                      //   key={i}
                      //   className="listSkillExp"
                      // >
                      //   {val}
                      // </span>
                    ))}
                  </div>

                {/* </div> */}
                <span className='project-description'>{dt.desc}</span>
            </div>
          ))}
          </div>
        </div>
        </>
    )
}