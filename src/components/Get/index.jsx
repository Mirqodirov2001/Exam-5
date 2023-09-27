import './style.scss'
import sms from "../../assets/icons/Icon pochta.svg"
import telephone from "../../assets/icons/Icon telephone.svg"
import copy from "../../assets/icons/Icon copy.svg"
import twitter from "../../assets/icons/Twitter.svg"
import figma from "../../assets/icons/figma.svg"
import github from "../../assets/icons/github.svg"

const get = () => {
  return (
    <section>
      <nav>
        <div className='wrapper'>
          <h1 className=' card4 text-[14px] font-medium text-[inter] text-[#4B5563] leading-[20px] mx-auto hover:bg-sky-700 hover:text-white cursor-pointer mb-[20px]'>
            Skills
          </h1>
          <p className=' text-[20px] font-normal text-[inter] text-[#4B5563] leading-7 text-center'>
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <p className='text-[14px] font-normal text-[inter] text-[#4B5563] text-center mb-[50px] '>
          Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng <br /> birinchi
          hadisi shu hadis bilan boshlangan: “Innamal a’malu <br /> bin niyyati” ya’ni,
          “Barcha amallar niyatga bog’liq”.
        </p>

        <div className='flex gap-5 text-center justify-center mb-5'>
          <a href="https://github.com/Mirqodirov2001"><img className=' cursor-pointer' src={sms} alt="img" /></a>
          <h1 className='text-[36px] font-bold text-[inter] text-[black] leading-[40px]'>mirqodirov678@gmail.com</h1>
          <img className=' cursor-pointer' src={copy} alt="" />
        </div>

        <div className='flex gap-5 text-center items-center justify-center mb-6'>
          <a href="+998977773766"><img className=' cursor-pointer' src={telephone} alt="img" /></a>
          <h1 className='text-[36px] font-bold text-[inter] text-[black] leading-[40px]'>+998977773766</h1>
          <img className=' cursor-pointer' src={copy} alt="" />
        </div>
        <p className='text-[14px] font-normal text-[inter] text-[#4B5563] text-center mb-2'>You may also find me on these platforms!</p>
        <div className='flex justify-center gap-2 mb-28'>
          <a href="https://github.com/Mirqodirov2001"><img className=' mt-1 cursor-pointer' src={github} alt="" /></a>
          <a href="https://twitter.com/?lang=ru"><img className=' cursor-pointer' src={twitter} alt="" /></a>
          <a href="https://www.figma.com/file/rFTUropJYfratmyV9LQww5/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(BOOTCAMP-N7-UCHUN-EXAM-5)-(Copy)?node-id=316%3A538&mode=dev"><img className=' cursor-pointer' src={figma} alt="" /></a>
        </div>
      </nav>
    </section>
  )
}

export default get
