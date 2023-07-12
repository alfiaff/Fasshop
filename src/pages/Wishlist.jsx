import React, { useState, useEffect } from 'react';
import { CardWishList } from '../components';

const Wishlist = () => {
  const [wishList, setWishList] = useState([]);
   
  useEffect(() => {
   const loadWishList = JSON.parse(localStorage.getItem('wishlist'));
    if (loadWishList) {
      const checkWishList = loadWishList.filter(obj => obj.wishList === true);
       //console.log(checkWishList)
       if (checkWishList) {
          setWishList(checkWishList)
       }
       localStorage.setItem('wishlist', JSON.stringify(checkWishList))
    }
  }, [])
  
  const handleRemove = (id) => {
     const getAllProducts = JSON.parse(localStorage.getItem('wishlist'));
     const updateAllProducts = getAllProducts.filter(obj => obj.id !== id);
     localStorage.setItem('wishlist', JSON.stringify(updateAllProducts));
     const loadWishList = JSON.parse(localStorage.getItem('wishlist'));
     setWishList(loadWishList)
  }
  
  return (
    <div className="w-full p-5 xl:px-20">
      <h2 className="font-bold text-2xl mb-5">Wishlist</h2>
      <hr className="mb-5"/>
      <div className="mb-24">
        {wishList.length > 0? (
          wishList.map((obj) => (
            <CardWishList key={obj.id} data={obj}  remove={handleRemove}/>
          ))
        ) : (
          <span >No items in wishlist</span>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
