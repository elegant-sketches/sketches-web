import { useState } from 'react';

export const Contact = () => {
  const [userDetail, setUserDetail] = useState({
    email: '',
    name: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!userDetail.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!userDetail.name.trim()) {
      newErrors.name = 'name is required';
    }
    if (!userDetail.phone.trim()) {
      newErrors.phone = 'phone is required';
    }
    if (!userDetail.address.trim()) {
      newErrors.address = 'address is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', { userDetail });
  };

  return (
    <div className='w-[90%] sm:w-9/12 m-auto'>
      <div className='flex justify-between items-center pt-16  border-b-2 pb-3 border-[#E67817]'>
        <p className='text-2xl font-medium text-[#E67817]'>Contact</p>
      </div>
      <div className='py-8'>
        <div>
          <p className='text-xl font-medium '>Phone</p>
          <p className='mt-1'>+358 12 3456789</p>
          <p className='text-xl font-medium  mt-2'>Email</p>
          <p className='mt-1'> mail@company.com</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 grid grid-cols-6 gap-4 sm:grid-cols-12'
          >
            <div className='mb-4 col-span-6 sm:col-span-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='username'
              >
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Enter your name'
                value={userDetail.name}
                onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    name: e.target.value
                  });
                  setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
                }}
              />
              {errors.name && <p className='text-red-500'>{errors.name}</p>}
            </div>
            <div className='mb-6 col-span-6 sm:col-span-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Enter your email'
                value={userDetail.email}
                onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    email: e.target.value
                  });
                  setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                }}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div className='mb-6 col-span-6 sm:col-span-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='number'
              >
                Phone Number
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='number'
                type='number'
                placeholder='Enter your mobile number'
                value={userDetail.phone}
                onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    phone: e.target.value
                  });
                }}
              />
            </div>
            <div className='mb-6 col-span-6 sm:col-span-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='address'
              >
                Address
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='address'
                placeholder='Enter your address'
                rows={2}
                value={userDetail.address}
                onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    address: e.target.value
                  });
                }}
              />
            </div>
            <div className='col-span-6 sm:col-span-12 flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
