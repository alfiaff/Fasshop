import React, { useState, useEffect } from 'react';
import {
  Jumbotron,
  SkeletonCircleCategory,
  CardProduct,
  SkeletonCardProduct,
  SkeletonCardDiscount,
  Header
} from '../components';
import '../app.css';

const Home = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const numbers = [];

  const generateNumber = () => {
    for (let i = 0; i < 40; i++) {
      numbers.push(i);
    }
    const shuffle = (numbers) => {
      for (let i = numbers.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[random]] = [numbers[random], numbers[i]];
      }
      return numbers;
    };
    let results = shuffle(numbers);
    return results;
  };

  const dataWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const handleWishList = (id) => {
    const existingProduct = dataWishlist.find((obj) => obj.id === id);
    if (existingProduct) {
      return; // Jika produk sudah ada dalam wishlist, keluar dari fungsi
    }
    const findAllProducts = allProducts.find((obj) => obj.id === id);
    dataWishlist.push(findAllProducts);
    if (dataWishlist) {
      localStorage.setItem('wishlist', JSON.stringify(dataWishlist));
    }
  };

  useEffect(() => {
    setProducts(product);
  }, [product]);

  useEffect(() => {
    if (
      products.shoes &&
      products.hoodies &&
      products.tShirts &&
      products.dress
    ) {
      setAllProducts([
        ...products.shoes,
        ...products.hoodies,
        ...products.tShirts,
        ...products.dress
      ]);
    }
  }, [products]);

  useEffect(() => {
    let random = generateNumber();
    const newRecommend = [];
    random.map((num) => {
      if (allProducts[num]) {
        newRecommend.push(allProducts[num]);
      }
    });
    const validationRecommend = newRecommend ? newRecommend : [];
    setRecommend(validationRecommend);
  }, [allProducts]);

  useEffect(() => {
    if (recommend && recommend.length > 0) {
      sessionStorage.setItem('recommend', JSON.stringify(recommend));
    }
  }, [recommend]);

  useEffect(() => {
    const loadRecommend = JSON.parse(sessionStorage.getItem('recommend'));
    if (loadRecommend) {
      setRecommend(loadRecommend);
    }
  }, []);

  return (
    <div>
      <main className="pb-28 xl:px-20">
        <Jumbotron />
        <section className="w-full px-5 ">
          <h3 className="text-2xl font-bold xl:text-center">Our brand</h3>
          <div className="flex gap-3 items-center xl:justify-center overflow-scroll thumb-none snap-mandatory mt-3">
            <SkeletonCircleCategory brand="Vans" />
            <SkeletonCircleCategory brand="Gucci" />
            <SkeletonCircleCategory brand="H&M" />
            <SkeletonCircleCategory brand="Pull & Bear" />
            <SkeletonCircleCategory brand="Nike" />
          </div>
        </section>

        <section className="w-full  mt-10 ">
          <h3 className="text-2xl font-bold px-5">Recommendations for today</h3>

          <div className="w-full h-fit overflow-scroll overflow-y-hidden flex gap-3 thumb-none snap-mandatory mt-3 pb-5 px-5">
            {recommend.length > 0 ? (
              recommend.map((obj) => (
                <CardProduct
                  key={obj.id}
                  data={obj}
                  handleWishList={handleWishList}
                />
              ))
            ) : (
              <>
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
              </>
            )}
          </div>
        </section>

        <section className="px-5 flex flex-col gap-3">
          <SkeletonCardDiscount
            height="h-20"
            bg="bg-gradient-to-r from-blue-200 to-cyan-200"
          />
          <SkeletonCardDiscount
            height="h-40"
            bg="bg-gradient-to-r from-indigo-400 to-cyan-400"
          />
          <SkeletonCardDiscount
            height="h-52"
            bg="bg-gradient-to-r from-indigo-500 to-blue-500"
          />
        </section>

        <section className="w-full px-5 mt-10 ">
          <h2 className="text-2xl font-bold">Jadi diri sendiri shesshh 🥶</h2>

          <h2 className="font-bold mt-3">Shoes</h2>
          <div className="w-full overflow-scroll flex gap-3 thumb-none snap-mandatory mt-3 pb-3">
            {products && products.shoes ? (
              products.shoes.map((obj) => (
                <CardProduct
                  key={obj.id}
                  data={obj}
                  products={products}
                  handleWishList={handleWishList}
                />
              ))
            ) : (
              <>
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
              </>
            )}
          </div>

          <h2 className="font-bold mt-3">Hoodies</h2>
          <div className="w-full overflow-scroll flex gap-3 thumb-none snap-mandatory mt-3 pb-3">
            {products && products.hoodies ? (
              products.hoodies.map((obj) => (
                <CardProduct
                  key={obj.id}
                  data={obj}
                  handleWishList={handleWishList}
                />
              ))
            ) : (
              <>
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
              </>
            )}
          </div>

          <h2 className="font-bold mt-3">T-shirts</h2>
          <div className="w-full overflow-scroll flex gap-3 thumb-none snap-mandatory mt-3 pb-3">
            {products && products.tShirts ? (
              products.tShirts.map((obj) => (
                <CardProduct
                  key={obj.id}
                  data={obj}
                  handleWishList={handleWishList}
                />
              ))
            ) : (
              <>
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
              </>
            )}
          </div>

          <h2 className="font-bold mt-3">Dress</h2>
          <div className="w-full overflow-scroll flex gap-3 thumb-none snap-mandatory mt-3 pb-3">
            {products && products.dress ? (
              products.dress.map((obj) => (
                <CardProduct
                  key={obj.id}
                  data={obj}
                  handleWishList={handleWishList}
                />
              ))
            ) : (
              <>
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
                <SkeletonCardProduct />
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
