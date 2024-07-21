import Image from 'next/image';
import React from 'react';

const CategoryList = ({ categoryList }) => {
  console.log('Category List:', categoryList);

  return (
    <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      {categoryList.length > 0 ? categoryList?.map((category, index) => (
        <div key={index} className='border border-gray-200 rounded-lg p-1'>
          <h2 className='text-lg font-semibold bg-purple-100 text-red-700 flex items-center justify-center cursor-pointer
           rounded-lg hover:scale-105 transition-all ease-in'>{category.name}</h2>
          <div className={`flex flex-col items-center justify-center gap-2 bg-transparent 
          bg-blue-200 p-4 cursor-pointer rounded-lg hover:scale-105 transition-all ease-in`}>
            <Image 
              src={category.icon.url}
              alt={category.icon.alt || 'icon'}
              width={category.icon.width || 35}
              height={category.icon.height || 35}
              className='rounded-lg' 
            />
          </div>
        </div>
      )) :
      [1,2,3,4,5,6,7,8,9,10].map((item, index) => (
        <div key={index} className='h-[120px] w-full bg-slate-200 animate-pulse rounded-lg'>
        </div>
      ))}
    </div> 
  );
};

export default CategoryList;
