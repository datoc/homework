import { Fragment } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import dishes from "./data";
import { useState } from "react";

type Dish = {
    id: number,
    name: string,
    category: string,
    cookingTime: number,
    price: number,
    rating: number,
    image: string
}

function App() {
    const [dish, addDish] = useState<Dish[]>([]);

    const handle = (id : number) => {
        addDish(item => item.filter(i => i.id !== id));
    }

    return (
        <Fragment>
            <Navbar ids={dish} onRemove={handle} />
            <main className="container grid grid-cols-4 mt-5 gap-3 mx-auto">
                {
                    dishes.map(function (item, index) {
                        return (
                            <div key={index} className="dark:bg-slate-900 border border-gray-700 rounded-2xl text-white hover:scale-3/2 transition-all duration-200 overflow-hidden mb-3">
                                <img src={item.image} className="w-full" />
                                <div className="p-3">
                                    <p>{item.name}</p>
                                    <small className="text-gray-500">San Marzano tomatoes, fresh mozzarella, basil, San Marzano tomatoes, fresh </small>
                                </div>
                                <div className="flex flex-row justify-between p-3">
                                    <span className="font-bold">{item.price + " ₾"}</span>
                                    <button className="bg-white text-slate-900 p-2 cursor-pointer rounded-md font-extrabold text-xs" onClick={() => addDish([...dish, dishes[index]])}>Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </Fragment>
    );
}

export default App;