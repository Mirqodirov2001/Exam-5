import "./style.scss"
import Itransition from "../../assets/icons/itransition.svg"
import Najot from "../../assets/icons/najot talim.svg"
import Uzum from "../../assets/icons/uzum.svg"


const experience = () => {
  return (
    <section>
      <nav>
        <div className="wrapper">
          <button className=' experience text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>Experience</button>
          <p className="text-[20px] font-normal text-[inter] text-[#4B5563] leading-7 text-center mb-12">Here is a quick summary of my most recent experiences:</p>
        </div>
          <div className="card mb-12 mx-auto px-4 py-6 flex-wrap rounded-lg duration-500 hover:scale-105 hover:border-gray-600">
            <div className=" flex flex-wrap items-center text-center mb-[16px]">
              <img src={Najot} alt="" />
              <h1 className="ml-[130px] text-[20px] text-[inter] font-semibold text-[#111827] leading-7">I am currently studying Najot Talim</h1>
              <p className=" text-[16px] text-[inter] text-[#374151] font-normal ml-[80px]">Sep 2023 - Persent</p>
            </div>
            <div className=" mx-auto flex-wrap">
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter] mb-[4px]"> • Lorem ipsum dolor sit amet.</p>
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter] mb-[4px]"> • Lorem ipsum dolor sit amet, consectetur <br /> &nbsp;&nbsp;&nbsp;adipiscing elit.</p>
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter] mb-[4px]"> • Lorem ipsum dolor sit amet.</p>
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter]"> • Lorem ipsum dolor sit amet, consectetur <br /> &nbsp;&nbsp;&nbsp;adipiscing elit.</p>
            </div>
          </div>

          <div className="card mx-auto mb-24 px-4 py-6 rounded-lg duration-500 hover:scale-105 hover:border-gray-600">
            <div className=" flex items-center text-center ">
              <img src={Itransition} alt="" />
              <h1 className="ml-[115px] text-[20px] text-[inter] font-semibold text-[#111827] leading-7">Information security engineer</h1>
              <p className=" text-[16px] text-[inter] text-[#374151] font-normal ml-[124px]">Sep 2023 - Persent</p>
            </div>
            <div className=" mx-auto ">
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter] mb-[4px]"> • Lorem ipsum dolor sit amet.</p>
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter] mb-[4px]"> • Lorem ipsum dolor sit amet, consectetur <br /> &nbsp;&nbsp;&nbsp;adipiscing elit.</p>
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter] mb-[4px]"> • Lorem ipsum dolor sit amet.</p>
              <p className=" text-[16px] font-normal text-[#4B5563] text-[inter]"> • Lorem ipsum dolor sit amet, consectetur <br /> &nbsp;&nbsp;&nbsp;adipiscing elit.</p>
            </div>
          </div>
      </nav>
    </section>
  )
}

export default experience;