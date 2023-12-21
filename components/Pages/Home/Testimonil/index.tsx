import Image from 'next/image';
import Img2 from './../../../../accets/sketch2.jpg';
import { FaQuoteRight } from 'react-icons/fa';

export const Testimonil = () => {
  return (
    <div className='w-[95%]   sm:w-9/12 m-auto'>
      <div className='flex justify-between items-center pt-16  border-b-2 pb-3 border-[#E67817]'>
        <p className='text-2xl font-medium  text-[#E67817]'>Testimonial</p>
      </div>
      <div className='flex   justify-between w-full py-16 flex-col sm:flex-row  items-center   '>
        <div className='border-[#4a64a08f] border-spacing-2 border w-52 h-52  grid items-center  justify-center rounded-full p-5'>
          <Image
            src={Img2}
            alt='img not found'
            className='w-40 h-40 rounded-full'
          />
        </div>
        <div className='sm:w-3/5 text-xl sm:mt-8'>
          <span className='pt-4'>
            <FaQuoteRight fontSize={35} className='text-[#2980b9]' />
          </span>
          <p className='pt-5'>
            I commissioned a portrait sketch of my parents, and I was blown away
            by the level of detail and accuracy. John truly captured their
            personalities and the love between them in the sketch. It's a
            treasured piece of art for our family.
          </p>
          <p className='text-[#2980b9]  mt-8 font-medium'>
            Emily Wilson{' '}
            <span className='text-[#d9d9d9]  ml-4'>
              {' '}
              Founder & Sketch Artist{' '}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
