import React, {useState, useEffect} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {CardProduct, SkeletonCardProduct} from '../components';

const Search = ({product}) => {
  const [allProducts, setAllProducts] = useState([]);
const [resultSearch, setResultSearch] = useState([]);

const handleSearch = (e) => {
  const value = e.target.value;
  const regex = new RegExp(value, 'gi');

  const filteredProducts = allProducts.filter(obj => obj.name.match(regex));
  setResultSearch(filteredProducts);
};
const dataWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const handleWishList = (id) => {
    const existingProduct = dataWishlist.find(obj => obj.id === id);
      if (existingProduct) {
       return; // Jika produk sudah ada dalam wishlist, keluar dari fungsi
      }
    const findAllProducts = allProducts.find(obj => obj.id === id);
    dataWishlist.push(findAllProducts);
    if (dataWishlist) {
      localStorage.setItem('wishlist', JSON.stringify(dataWishlist));
      
    }
  }

useEffect(() => {
  const shoes = product && product.shoes ? product.shoes : [];
  const hoodies = product && product.hoodies ? product.hoodies : [];
  const tShirts = product && product.tShirts ? product.tShirts : [];
  const dress = product && product.dress ? product.dress : [];
  const allProducts = [...shoes, ...hoodies, ...tShirts, ...dress];
  setAllProducts(allProducts);
  setResultSearch(allProducts); // Menampilkan semua produk saat pertama kali rendering
}, []);

return (
  <div>
    <form className="w-full h-20 p-5 flex items-center ">
      <input 
        type="text"
        className="w-full p-3 border-2 rounded-lg outline-none relative"
        placeholder="What do you want to search?"
        onChange={handleSearch}
      />
      <BiSearchAlt className="text-2xl absolute right-8"/>
    </form>
    <div className="flex items-center flex-wrap justify-center gap-2 pb-28">
      {resultSearch.length > 0 ? 
        resultSearch.map(obj => <CardProduct key={obj.jd} data={obj} handleWishList={handleWishList} />) :
        <>
          <SkeletonCardProduct />
          <SkeletonCardProduct />
          <SkeletonCardProduct />
          <SkeletonCardProduct />
          <SkeletonCardProduct />
        </>
      }
    </div>
  </div>
);

  
}

export default Search;