import { createPortal } from "react-dom";
import { Trash } from "lucide-react"

type Dish = {
    id: number,
    name: string,
    category: string,
    cookingTime: number,
    price: number,
    rating: number,
    image: string
}

interface Props {
    isOpened: boolean,
    dish: Dish[],
    removeDish : (index : number) => void
}

function Cart(props: Props) {
    if (!props.isOpened) return null;

    return createPortal(
        <div className="fixed top-0 right-0 w-1/4 bg-slate-900 border-s border-s-gray-800 h-screen text-white p-3">
            <div className="hover:overflow-y-auto h-4/5 overflow-hidden scrollbar-track-slate-900 scrollbar-thumb-slate-700">
                {
                    props.dish.map(function (item, index) {
                        return (
                            <div key={index} className="w-full bg-slate-800 rounded-md p-3 flex justify-between items-center mb-2">
                                <span>{item.name}</span>
                                <button className="bg-red-300 text-red-700 p-2 rounded-md hover:bg-red-200 transition duration-200 cursor-pointer" onClick={() => props.removeDish(item.id)}>
                                    <Trash className="w-4 h-4 pointer-events-none" />
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-2/5">
                <h4>ჯამური რაოდენობა: {props.dish.length}</h4>
            </div>
        </div>,
        document.body
    )
}

export default Cart;