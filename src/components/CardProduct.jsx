import React, {useState, useEffect} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';

// solid
import {AiFillHeart} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';

const CardProduct = ({data, handleWishList}) => {
  const [isWishList, setIsWishList] = useState(false);
  const [itemsIsWishList, setItemsIsWishList] = useState([]);
  
  const handleIsWishList = () => {
    setIsWishList(!isWishList);
    validationWishList(data.id, !isWishList); // Panggil fungsi validationWishList setelah mengubah nilai isWishList
  }; 
  
  const validationWishList = (id, isWishList) => {
    const loadDataWishList = JSON.parse(localStorage.getItem('wishlist'));
    if (loadDataWishList) {
      loadDataWishList.forEach(obj => {
        if (obj.id === id) {
          obj.wishList = isWishList;
          
        }
      });
      localStorage.setItem('wishlist', JSON.stringify(loadDataWishList));
    }
  };
  
  // Menggunakan useEffect untuk memuat nilai isWishList dari localStorage saat komponen pertama kali dirender
  useEffect(() => {
    const loadDataWishList = JSON.parse(localStorage.getItem('wishlist'));
    if (loadDataWishList) {
      const initialIsWishList = loadDataWishList.filter(obj => obj.wishList === true);
      if (initialIsWishList) {
        initialIsWishList.map(obj => {
          if (obj.id === data.id) {
            setIsWishList(true)
          }
        })
      }
    ;
    }
  }, []);


  
  return (
    <div className="w-48 h-fit rounded-lg grid grid-rows-[45%_1fr] shadow">
      <div className="w-full h-full ">
        <img src={data.image} className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="w-full h-full px-2 py-3 flex flex-col
      justify-between">
        <div>
          <h2 className={`font-bold text-sm mb-1`}>{data.name}</h2>
          <div className="flex items-center gap-1">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <h2 className="font-bold">Rp{data.price}</h2>
        </div>
        
        <div className="flex gap-1 items-end ">
          <button className="px-11 py-2 bg-slate-800 text-white rounded-full
          text-xl"><AiOutlineShoppingCart /></button>
          <button className="px-5 py-2 bg-white border rounded-lg"
           onClick={() => {
             handleWishList(data.id)
             handleIsWishList()
           }}
           >
           {
             isWishList ? <AiFillHeart /> : <AiOutlineHeart/>
           }
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;