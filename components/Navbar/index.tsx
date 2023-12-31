import Icons from 'comon/Icons';

export const Navbar = () => {
  return (
    <div className='bg-[#E67817] text-white py-5'>
      <div className=' w-[95%]  sm:w-9/12 m-auto flex items-center justify-between'>
        <div>
          <span className='text-xl  sm:text-2xl sm:font-bold   '>
            Elegant Sketches{' '}
          </span>
        </div>
        <div className='flex  gap-x-2 sm:gap-x-10'>
          <Icons
            icon='FaFacebookSquare'
            size={'30'}
            className='cursor-pointer'
          />
          <Icons
            icon='FaInstagramSquare'
            size={'30'}
            className='cursor-pointer'
          />
          <Icons
            icon='FaWhatsappSquare'
            size={'30'}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};
