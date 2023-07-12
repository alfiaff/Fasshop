import {BsTrash3} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';

// solid
import {AiFillHeart} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';

const CardWishList = ({data, remove}) => {
  
  
  return (
    <div className="w-full h-fit bg-slate-100 mt-5 rounded-lg grid grid-cols-[40%_1fr] grid-rows-[1fr_30%]  shadow-lg rounded-lg">
     <div className=" row-span-2 rounded-lg">
        <img src={data.image} className="w-full h-full object-cover rounded-tl-lg"/>
     </div>
     
     <div className="h-full flex flex-col justify-between p-3">
      <div>
        <h2>{data.name}</h2>
        <div className="flex items-center gap-1">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      </div>
      <p className="self-end">Rp{data.price}</p>
     </div>
      <div className="flex  gap-1 self-end justify-self-end p-3">
        <button type="button" className="rounded-md bg-red-400 px-5 py-2 text-sm font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-red-400 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-red-400"><AiOutlineHeart /></button>
        <button type="button" className="rounded-md bg-slate-700 px-5 py-2 text-sm font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700" onClick={() => remove(data.id)}><BsTrash3 /></button>
      </div>
    </div>
  );
}
export default CardWishList;