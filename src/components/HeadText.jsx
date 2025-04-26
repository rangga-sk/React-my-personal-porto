import '../style/headtext.css'

export default function HeadText({nameText, titlejob}) {
    return(
        <>
        <div className='wrap-head' id='halHead'>
          <div className='box-head'>
            <span className='head-span-name'>{nameText}</span>
            <span className='head-span-job'>{titlejob}</span>
          </div>
        </div>
        </>
    )
}