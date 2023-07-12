import CardCategory from '../components/CardCategory';
import {img19, img5, img8, img24, img20} from '../assets/img';

const Category= () => {
  const dataCategory = [
   {id: 1, name: 'Men', img:img19, position: 'object-top' },
   {id: 2, name: 'Women', img:img5,  position: 'object-top'},
   {id: 3, name: 'Colorful', img:img8, position: 'object-center'},
   {id: 4, name: 'Hype', img:img24, position: 'object-top'},
   {id: 5, name: 'Sports', img:img20, position: 'object-center'}
  ];
 
  return (
  <div className="p-5 xl:p-20 pb-28 flex flex-col gap-5">
     <h2 className="text-2xl font-bold">The category you want</h2>
    {
      dataCategory.length > 0 ?
      dataCategory.map(obj => {
        return <CardCategory key={obj.id} data={obj}/>
      }) : 'Opps something wrong'
    }
  </div>
  );
}

export default Category;