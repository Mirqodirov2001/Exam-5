import './style.scss'
import user from '../../assets/images/istockphoto-483284636-612x612.jpg'

const About = () => {
  return (
    <section id='about' className=' mb-24'>
      <nav>
        <button className=' btn mx-auto text-[#4B5563] text-[16px] text-[inter] hover:bg-sky-700 hover:text-white mb-12'>
          About me
        </button>
        <div className='wrapper flex justify-between flex-wrap'>
          <div>
            <img className=' img1 w-[380px] h-[440px]' src={user} alt='img' />
          </div>
          <div className='text'>
            <h1 className=' text-[30px] font-semibold text-[inter] text-[#111827] leading-[36px] pb-[24px]'>
              Curious about me? Here you have it:
            </h1>
            <p className=' text2 mb-4'>
              I'm a passionate, software engineer who specializes in full stack{' '}
              <br />
              development (Vue.js & Node.js). I am very enthusiastic about
              bringing the <br /> technical and visual aspects of digital
              products to life. User experience, pixel <br /> perfect design,
              and writing clear, readable, highly performant code matters <br />{' '}
              to me.
            </p>

            <p className=' text2 mb-4'>
              I began my journey as a web developer in 2015, and since then,
              I've <br /> continued to grow and evolve as a developer, taking on
              new challenges and <br /> learning the latest technologies along
              the way. Now, in my early thirties, 7 <br /> years after starting
              my web development journey, I'm building cutting-edge <br /> web
              applications using modern technologies such as Next.js,
              TypeScript, <br /> Nestjs, Tailwindcss, Supabase and much more.
            </p>

            <p className=' text2 mb-4'>
              I am very much a progressive thinker and enjoy working on products
              end to <br />
              end, from ideation all the way to development.
            </p>

            <p className=' text2'>
              When I'm not in full-on developer mode, you can find me hovering
              around on <br /> twitter or on indie hacker, witnessing the journey of
              early startups or <br /> enjoying some free time. You can follow me on
              Linked where I share tech- <br />related bites and build in public, or
              you can follow me on GitHub.
            </p>

            <p className=' text2 mb-4'>
              Finally, some quick bits about me.
            </p>
            <div className=' flex gap-[50px]'>
              <div className='flex items-center gap-2'>
                <div className=' -mt-[52px]'>
                  <p className=' text-[20px] text-[#4B5563] items-center mt-10'>•</p>
                  <p className=' text-[20px] text-[#4B5563] items-center -mt-10'>•</p>
                </div>
                <div>
                  <p className='text2 text-[#4B5563]'>B.E. in Computer Engineering</p>
                  <p className='text2 text-[#4B5563]'>Full time coding</p>
                </div>
              </div>


              <div className='flex items-center gap-2'>
                <div className=' -mt-[52px]'>
                  <p className=' text-[20px] text-[#4B5563] items-center mt-10'>•</p>
                  <p className=' text-[20px] text-[#4B5563] items-center -mt-10'>•</p>
                </div>
                <div>
                  <p className='text2 text-[#4B5563]'>Leadership</p>
                  <p className='text2 text-[#4B5563]'>Project managment</p>
                </div>
              </div>
            </div>

            <p className=' text2 mb-24'>One last thing, I'm available for freelance work, so feel free to reach out and <br /> say hello! I promise I don't bite 😉</p>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default About
