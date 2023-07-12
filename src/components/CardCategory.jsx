import '../app.css';

const CardCategory = ({data}) => {
  return (
    <div className="rounded-lg w-full h-24 bg-slate-100  flex items-center justify-center relative vignette ">
        <h2 className="text-2xl font-bold absolute text-white">{data.name}</h2>
        <img src={data.img} className={`w-full h-full object-cover ${data.position} rounded-lg `}/>
    </div>
  );
}

export default CardCategory;