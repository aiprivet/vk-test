import { FaRegTrashAlt } from "react-icons/fa";

interface CardProps {
  img: string;
  title: string;
  description: string;
  qty: number;
  onDelete: () => void;
  onAdd: () => void;
  onRemove:()=>void
  price: number;
}
const cardItem: React.FC<CardProps> = ({
  img,
  title,
  description,
  qty,
  price,
  onDelete,
  onAdd,
  onRemove
}) => (
  <div className="justify-between mb-6 rounded-lg bg-neutral-800 p-6 shadow-md sm:flex sm:justify-start">
    <div className="h-1/4">
      <img src={img} className=" rounded-lg sm:w-40 object-fill" />
    </div>
    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div className="mt-5 sm:mt-0">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="mt-1 text-xs text-white">{description}</p>
      </div>
      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
        <div className="flex justify-end ">
          <span onClick={onRemove} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-blue-50">
            -
          </span>
          <span className="bg-white text-black p-1 px-3">{qty}</span>
          <span onClick={onAdd} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
            {" "}
            +{" "}
          </span>
        </div>

        <div className="flex items-center gap-4 pr-2">
          <p className="text-sm text-white">{price * qty} ₽</p>
          <div onClick={onDelete} className="text-white text-sm hover:text-red-500 cursor-pointer">
            {<FaRegTrashAlt />}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default cardItem;
