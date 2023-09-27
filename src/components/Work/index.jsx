import './style.scss'
import project from '../../assets/images/Screenshot 2023-09-27 101122.png'
import button from "../../assets/icons/Icon Button.svg"
import project1 from "../../assets/images/Screenshot 2023-09-27 110623.png"
import teletype from "../../assets/images/teletype.png"

const work = () => {
  return (
    <section id='work'>
      <nav>
        <div className='wrapper '>
          <h1 className=' btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>
            Work
          </h1>
          <p className='text-[20px] font-normal text-[inter] text-[#4B5563] leading-7 text-center mb-12'>
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className=' cards flex gap-[96px] px-4 py-6 rounded-lg duration-500 hover:scale-105 hover:border-gray-600'>
          <div>
            <img
              className=' w-[560px] h-[384px] border rounded-lg hover: shadow-black cursor-pointer'
              src={project}
              alt='img'
            />
          </div>
          <div>
            <h1 className=' text-[30px] text-[inter] font-semibold text-black mb-6'>
              Art Books
            </h1>
            <p className='text-[16px] font-normal text-[inter] text-[#4B5563] mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante <br /> ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia <br /> curae.
            </p>
            <div className='flex'>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>React</p>
              <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Tailwindcss</p>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Figma</p>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>GitHub</p>
              <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-6  hover:bg-sky-700 hover:text-white cursor-pointer]'>Flowbaite</p>
            </div>
            <a href="https://jocular-kulfi-f7e857.netlify.app/"><img className=' cursor-pointer' src={button} alt="" /></a>
          </div>
        </div>

        <div className=' cards flex gap-[96px] mt-[96px] rounded-lg  hover:scale-105 hover:border-gray-600'>
          <div>
            <h1 className=' text-[30px] text-[inter] font-semibold text-black mb-6'>
              Flower shop
            </h1>
            <p className='text-[16px] font-normal text-[inter] text-[#4B5563] mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante <br /> ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia <br /> curae.
            </p>
            <div className='flex'>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>React</p>
              <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Tailwindcss</p>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Figma</p>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>GitHub</p>
              
            </div>
            <div className='flex'>
                <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-6  hover:bg-sky-700 hover:text-white cursor-pointer]'>Flowbaite</p>
                <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-6  hover:bg-sky-700 hover:text-white cursor-pointer]'>Boxicon</p>
                <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-6  hover:bg-sky-700 hover:text-white cursor-pointer]'>Toastify</p>
              </div>
            <a href="https://joyful-hummingbird-0ed6a6.netlify.app/"><img className=' cursor-pointer' src={button} alt="" /></a>
          </div>
          <img
            className=' w-[560px] h-[384px] border rounded-lg hover: shadow-black cursor-pointer'
            src={project1}
            alt='img'
          />
        </div>

        <div className=' cards flex gap-[96px] mt-[96px] mb-[192px] px-4 py-6 rounded-lg transition duration-500 hover:scale-105 hover:border-gray-600'>
          <div>
            <img
              className=' w-[560px] h-[384px] border rounded-lg hover: shadow-black cursor-pointer'
              src={teletype}
              alt='img'
            />
          </div>
          <div>
            <h1 className=' text-[30px] text-[inter] font-semibold text-black mb-6'>
              Teletype
            </h1>
            <p className='text-[16px] font-normal text-[inter] text-[#4B5563] mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante <br /> ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia <br /> curae.
            </p>
            <div className='flex'>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>React</p>
              <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Tailwindcss</p>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Figma</p>
              <p className='btn2 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>GitHub</p>
              <p className='btn1 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-6  hover:bg-sky-700 hover:text-white cursor-pointer]'>Flowbaite</p>
            </div>
            <a href="https://teletype-gagg-6oy8yp2sa-mirqodirov2001-s-team.vercel.app/profile.html"><img className=' cursor-pointer' src={button} alt="" /></a>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default work
