"use client";

import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";


export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoryList = () => {
      GlobalApi.getCategory().then(resp => {
        console.log('API Response:', resp);
        setCategories(resp.categories);
      }).catch(error => {
        console.error('Error fetching categories:', error);
      });
    };

    getCategoryList();
    getAllBusinessList();

  }, []);
  console.log(categories)
    
  /**
   *  use to get All Business List
   */

  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      console.log(resp)
    })
  }

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categories} />
      
    </div>
    
  );
}
