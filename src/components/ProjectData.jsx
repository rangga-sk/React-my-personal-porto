import '../style/projectdata.css'

export default function ProjectData({dataProject}) {
  console.log(dataProject);
    return (
        <>
        <div className='wrap-project' id='halProject'>
          <span className='title-prj'>PROJECT</span>
          <div className='project-project'>
          {dataProject.data.map((dt, index) => (
            <div key={index} className='project-all'>
                <span className='project-title'>{dt.judul}</span>
                <div className='div-prj-image'>
                  <img className='project-img' src={dt.image_base} alt="" />
                </div>
                <span className='project-description'>{dt.desc}</span>
            </div>
          ))}
          </div>
        </div>
        </>
    )
}