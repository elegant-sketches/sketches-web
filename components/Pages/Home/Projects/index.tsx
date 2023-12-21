import Image from 'next/image';
import img1 from '../../../../accets/sketch.jpg';
import img2 from '../../../../accets/sketch2.jpg';
import img3 from '../../../../accets/sketch3.jpg';

export const Projects = () => {
  return (
    <div className='w-[95%]  sm:w-9/12 m-auto pt-5'>
      <div className='flex justify-between items-center  border-b-2 pb-3 border-[#E67817]'>
        <p className='text-2xl font-medium text-[#E67817]'>Projects</p>
        <p className='cursor-pointer   hover:text-[#E67817] transition-all'>
          See all projects
        </p>
      </div>
      <div>
        <div className='flex w-full py-8   flex-col sm:flex-row'>
          <div className='w-full sm:w-2/5'>
            <Image src={img1} alt='' className='w-full' />
          </div>
          <div className=' w-full  sm:w-3/5 p-4'>
            <span className='text-2xl  '>Sketches</span>
            <h2 className='text-3xl font-bold sm:mt-2   sm:mb-4'>
              List of Sketches
            </h2>
            <p className='text-lg '>
              Browse through my collection of sketches and find the perfect
              artwork for your loved ones. Each sketch captures the unique
              essence and personality of the subject, bringing out their true
              beauty.
            </p>
          </div>
        </div>
        <div className='flex w-full py-8 flex-col sm:flex-row'>
          <div className='w-full sm:w-2/5'>
            <Image src={img2} alt='' className='w-full' />
          </div>
          <div className='w-full sm:w-3/5 p-4'>
            <span className='text-2xl  '>Commission</span>
            <h2 className='text-3xl font-bold sm:mt-2 sm:mb-4'>
              Custom Sketches
            </h2>
            <p className='text-lg '>Skill Set</p>
          </div>
        </div>
        <div className='flex w-full py-8  flex-col sm:flex-row '>
          <div className='w-full sm:w-2/5'>
            <Image src={img3} alt='' className='w-full max-h-[400px]' />
          </div>
          <div className='w-full sm:w-3/5 p-4'>
            <span className='text-2xl  '>Contact</span>
            <h2 className='text-3xl font-bold sm:mt-2 sm:mb-4'>
              Connet With Me
            </h2>
            <p className='text-lg '>
              Interested in getting a sketch done? Have a question or need more
              information? Feel free to reach out to me, and I'll be glad to
              assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
