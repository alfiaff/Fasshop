import {BiMessageSquareX} from 'react-icons/bi';

const Message = () => {
  return (
    <div>
      <form className="p-5 xl:px-20">
        <input 
         type="text"
         placeholder="Looking for messages from whom?"
         className="w-full border px-5 py-3"
        />
      </form>
      <div className="w-full h-fit flex flex-col items-center justify-center
      text-3xl py-5">
        <BiMessageSquareX />
        <h2>No message</h2>
      </div>
    </div>
  );
}
export default Message;