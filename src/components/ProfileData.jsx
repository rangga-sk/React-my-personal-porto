import '../style/profiledata.css'

export default function ProfileData({dataAbout}) {
    return(
    <>
    <div className='wrap-profile' id='halId'>
          <div className='card-profile'>
            <div className='card-photo'>
              <img src="./photo-aboutme.png" alt=""/>
            </div>
            <div className='card-text'>
              <span className='card-text-aboutme'>ABOUT ME</span>
              <span className='card-aboutme-desc'>{dataAbout.aboutdesc}</span>

              <div className='about-detail'>
                <div className='location-detail'>
                  <span className='desc-loc-icon'></span>
                  <span className='desc-loc'>{dataAbout.aboutaddr.home.kecamatan} <br/>{dataAbout.aboutaddr.home.kota}<br/>{dataAbout.aboutaddr.home.provinsi}</span>
                </div>
                
                <div className='location-detail'>
                  <span className='desc-smk-icon'></span>
                  <span className='desc-smk'>{dataAbout.aboutaddr.smk.name}<br /> {dataAbout.aboutaddr.smk.jurusan}<br /> {dataAbout.aboutaddr.smk.date}</span>
                </div>
                <div className='location-detail'>
                <span className='desc-kuliah-icon'></span>
                  <span className='desc-kuliah'>{dataAbout.aboutaddr.kuliah.name}<br/> {dataAbout.aboutaddr.kuliah.jurusan} <br/> {dataAbout.aboutaddr.kuliah.date}</span>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
    )
}
