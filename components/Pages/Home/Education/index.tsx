export const Education = () => {
  return (
    <div className='bg-[#FAFBFF]'>
      <div className='w-[95%] sm:w-9/12 m-auto'>
        <div className='flex justify-between items-center pt-16  border-b-2 pb-3 border-[#E67817]'>
          <p className='text-2xl font-medium text-[#E67817]'>Education</p>
        </div>
        <div className='flex w-full justify-between flex-col sm:flex-row py-8 items-start'>
          <div className='text-right '>
            <p className='mt-2'>Sketch </p>
            <p> Academy </p>
            <p> 2003 - 2018</p>
          </div>
          <div className=' w-full sm:w-4/5 mt-4 sm:mt-0'>
            <p className='text-2xl'>Portrait Sketches </p>
            <p className=' mt-4 border-b-[1px] pb-4'>
              This course teaches the fundamentals of portrait sketching,
              including proportions, shading, and capturing facial expressions.
            </p>
          </div>
        </div>
        <div className='flex w-full justify-between py-4 flex-col sm:flex-row items-start'>
          <div className='text-right '>
            <p className='mt-2'>Art Institute </p>
            <p> 2010 - 2012</p>
          </div>
          <div className='w-full sm:w-4/5 mt-4 sm:mt-0'>
            <p className='text-2xl'>Commission Custom Sketches </p>
            <p className=' mt-4 pb-4 border-b-[1px]'>
              This course covers the techniques and skills needed to create
              realistic and expressive pet sketches.
            </p>
          </div>
        </div>
        <div className='flex w-full justify-between py-4 flex-col sm:flex-row items-start'>
          <div className='text-right '>
            <p className='mt-2'>Art University </p>
            <p> 2013 - 2018</p>
          </div>
          <div className='w-full sm:w-4/5 mt-4 sm:mt-0'>
            <p className='text-2xl'>Landscape Sketches </p>
            <p className=' mt-4 border-b-[1px] pb-4'>Pet Sketches .</p>
          </div>
        </div>
      </div>
    </div>
  );
};
