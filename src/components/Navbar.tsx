import { ShoppingBasket } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import Cart from "./Cart";
import { useState } from "react";

type Dish = {
    id: number;
    name: string;
    category: string;
    cookingTime: number;
    price: number;
    rating: number;
    image: string;
};

interface Props {
    ids: Dish[];
    onRemove: (id: number) => void;
}

function Navbar(props : Props) {
    const [isOpened, setOpen] = useState(false);

    const handleId = (id : number) => {
        props.onRemove(id);
    }

    return (
        <Fragment>
            <nav className="bg-slate-900 text-white flex justify-start p-3">
                <a href="#" className="flex p-2 hover:bg-slate-800 transition-all duration-200 rounded-md" onClick={() => setOpen(!isOpened)}>Cart&nbsp;<ShoppingBasket /></a>
            </nav>

            <Cart isOpened={isOpened} dish={props.ids} removeDish={handleId} />
        </Fragment>
    );
}

export default Navbar;