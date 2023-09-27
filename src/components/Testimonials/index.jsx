import "./style.scss"
import people from "../../assets/images/people.svg"
import user from "../../assets/images/icon-avatar.svg"

const testimonials = () => {
  return (
    <section id="testimonials" className="mb-[192px]">
      <nav>
        <div className="wrapper">
          <h1 className=' btn3 text-[14px] text-[inter] font-normal text-[#4B5563] mx-auto mb-4  hover:bg-sky-700 hover:text-white cursor-pointer'>
            Testimonials
          </h1>
          <p className='text-[20px] font-normal text-[inter] text-[#4B5563] leading-7 text-center mb-12'>
            Nice things people have said about me:
          </p>
          <div className="flex justify-between gap-12 flex-wrap">

            <div className=" cart3  flex-wrap px-4 py-6 rounded-lg duration-500 hover:scale-110 hover:border-gray-600">
              <img className=" mb-[24px] cursor-pointer" src={user} alt="" />
              <p className="text-[16px] font-normal text-[inter] text-[#4B5563] mb-[24px]">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
              <h1 className="text-[20px] text-[inter] font-semibold text-[#111827]">Dilshod Boymurodov</h1>
              <p className="text-[16px] font-normal text-[inter] text-[#4B5563] -mt-[20px]">Founder - Paymart.uz</p>
            </div>

            <div className=" cart3 flex-wrap px-4 py-6 rounded-lg duration-500 hover:scale-110 hover:border-gray-600">
              <img className=" mb-[24px] rounded-3xl cursor-pointer" src={people} alt="" />
              <p className="text-[16px] font-normal text-[inter] text-[#4B5563] mb-[24px]">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
              <h1 className="text-[20px] text-[inter] font-semibold text-[#111827]">Dilshod Boymurodov</h1>
              <p className="text-[16px] font-normal text-[inter] text-[#4B5563] -mt-[20px]">Founder - Paymart.uz</p>
            </div>

            <div className=" cart3 flex-wrap px-4 py-6 rounded-lg duration-500 hover:scale-110 hover:border-gray-600">
              <img className=" mb-[24px] cursor-pointer" src={user} alt="" />
              <p className="text-[16px] font-normal text-[inter] text-[#4B5563] mb-[24px]">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
              <h1 className="text-[20px] text-[inter] font-semibold text-[#111827]">Dilshod Boymurodov</h1>
              <p className="text-[16px] font-normal text-[inter] text-[#4B5563] -mt-[20px]">Founder - Paymart.uz</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default testimonials