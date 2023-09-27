import './style.scss'
import hand from '../../assets/images/waving-hand-svgrepo-com.svg'
import user from '../../assets/images/istockphoto-483284636-612x612.jpg'
import location from '../../assets/icons/Icon.svg'
import location2 from '../../assets/icons/icon-dot-emerald-500.svg'
import Github from "../../assets/icons/github.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Figma from "../../assets/icons/figma.svg"
const About = () => {
  return (
    <section className=' pb-24'>

      <div className='wrapper flex pt-[200px] flex-wrap'>

        <div>
          <div className='flex gap-4 mb-2'>
            <h1 className='text cursor-pointer'>Hi, I'm Abdulbosit</h1>
            <img className=' w-[60px]' src={hand} alt='img' />
          </div>

          <p className=' text-[16px] text-[inter] font-normal text-[#4B5563] mb-12 cursor-pointer'>
            I'm a full stack developer (React.js & Vue.js and Node.js & Laravel
            ) with a focus on creating <br /> exceptional digital experiences
            that are fast, accessible, visually appealing, and responsive. Even{' '}
            <br /> though I have been creating web applications for over 7
            years, I still love it as if it was something new.
          </p>

          <div className=' mb-12'>
            <div className='flex gap-[8px] mb-2'>
              <img className='cursor-pointer' src={location} alt='img' />
              <a href='https://yandex.uz/maps/-/CDUSrYjA'>
                <p className='text-[16px] font-normal text-[#4B5563] leading-[24px] cursor-pointer'>
                  Tashkent, Chilonozor
                </p>
              </a>
            </div>

            <div className='flex gap-[16px] ml-[8px]'>
              <img className='cursor-pointer' src={location2} alt='img' />
              <a href='https://exquisite-rolypoly-c9c1e1.netlify.app/'>
                <p className='text-[16px] font-normal text-[#4B5563] leading-[24px] cursor-pointer'>
                  Available for new projects
                </p>
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            className=' img w-[280px] h-[320px] ml-[128px] cursor-pointer'
            src={user}
            alt='img'
          />
        </div>
      </div>

      <div className=' flex gap-[10px] items-center w-6 '>
        <img className=' cursor-pointer'src={Github} alt="img" />
        <img className=' cursor-pointer ' src={Twitter} alt="img" />
        <img className=' cursor-pointer ' src={Figma} alt="img" />

      </div>
    </section>
  )
}

export default About
