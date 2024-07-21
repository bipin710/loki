import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='p-5 shadow-sm flex justify-between '>
      <div className='flex items-center gap-8 '>
        <Image src='/logo.svg' alt='logo' width={40} height={20} />
        <div className='md:flex items-center gap-7 hidden'>
          <h2 className='hover:scale-105 hover:text-blue-700 
          cursor-pointer'>Home</h2>
          <h2 className='hover:scale-105 hover:text-blue-700 
          cursor-pointer'>Services</h2>
          <h2 className='hover:scale-105 hover:text-blue-700 
          cursor-pointer'>About Us</h2>
       
        </div>
        
      </div>
      <div>
          <Button className="bg-blue-700">Get started</Button>
        </div>
    </div>
    
  );
};

export default Header;
