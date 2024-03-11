interface Checkout{
  total:string
}
export const Checkout:React.FC<Checkout> = ({total}) => {
  return (
    <div className="mt-6 h-full rounded-lg  bg-neutral-800 p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-white">Товары</p>
          <p className="text-white">{total} руб.</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white">Доставка</p>
          <p className="text-white">0 руб.</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold text-white">Итого</p>
          <div className="">
            <p className="mb-1 text-lg font-bold text-white">{total}  руб.</p>
          </div>
        </div>
        <button onClick={()=>{alert('Хочу работать в VK!')}} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Купить
        </button>
      </div>
  );
};
