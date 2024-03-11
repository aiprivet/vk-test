import useBasketStore from "./store/useStore.ts";
import CardItem from "./components/CardItem.tsx";
import { useEffect } from "react";
import { Checkout } from "./components/Checkout.tsx";

function App() {
  const basket = useBasketStore((state) => state.basket);
  const getItems = useBasketStore((state) => state.fetchBasket);
  const changeQty = useBasketStore((state) => state.changeQty);
  const deleteItem = useBasketStore((state) => state.removeItem);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="h-screen bg-black p-10">
        <h1 className="mb-10 text-center text-2xl font-bold text-white">
          Корзина
        </h1>
        <div className="mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div>
            {basket.map((item) => (
              <CardItem
                key={item.title}
                img={item.image}
                description={item.description}
                title={item.title}
                qty={item.qty}
                price={item.price}
                onAdd={() => changeQty(+item.id, "add")}
                onRemove={() => changeQty(+item.id, "remove")}
                onDelete={() => {
                  deleteItem(+item.id);
                }}
              ></CardItem>
            ))}
          </div>

          <Checkout
            total={basket
              .reduce((acc, val) => acc + val.price * val.qty, 0)
              .toFixed(1)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
