import {BsArrowRightCircleFill} from 'react-icons/bs';
import {img17, img10, img11, img21, img24} from '../assets/img'

const Jumbotron = () => {
  return (
    <section className="w-full p-5">
      <div className="text-5xl ">
        <p className="text-sm mb-3 flex items-center gap-1"><span className="w-5 h-1 inline-block bg-black"></span>Improve your style</p>
        <h2 className="flex items-center gap-2 font-light">New style <span className="w-10 h-1 inline-block bg-black"></span></h2>
        <h2 className="flex items-center gap-2  font-light">new You.</h2>
        <a href="#" className="flex items-center gap-3 text-2xl mt-5">Shop Now <BsArrowRightCircleFill /></a>
      </div>
      
      <div className="w-full h-60 grid grid-cols-3 grid-rows-2 mt-5">
        <img src={img17} alt="image-1" className="w-full h-full object-cover" />
        <img src={img24} alt="image-1" className="w-full h-full object-cover xl:object-top row-span-2 "/>
        <img src={img11} alt="image-1" className="w-full h-full object-cover rounded-tr-2xl"/>
        <img src={img21} alt="image-1" className="w-full h-full object-cover object-top xl:object-center rounded-bl-2xl "/>
        <img src={img10} alt="image-1" className="w-full h-full object-cover object-top "/>
      </div>
    </section>
  );
}

export default Jumbotron;