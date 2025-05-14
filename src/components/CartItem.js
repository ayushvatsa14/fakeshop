import { useDispatch, useSelector } from "react-redux";
import {remove} from "../Redux/Slices/CartSlice";
import { MdDelete } from "react-icons/md";

function CartItem({item}){
    const cart=useSelector((state) => state.cart);
    const dispatch=useDispatch();

    function removeFromCart(id){
        dispatch(remove(id));
    }

    return (
        <div className="w-full flex gap-8 px-6 py-6 border-b-2 border-b-black rounded-sm">
            <div className="w-[12rem] h-[10rem]">
                <img src={item.image} className="w-full h-full" />
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-[1.2rem] font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.description.length>16 ? (`${item.description.substring(0, 85)}....`) : (item.description)}</p>

                <div className="flex justify-between items-center">
                    <p className="text-[1.2rem] text-green-600 font-bold">{`$${item.price}`}</p>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 bg-red-300 rounded-full"><MdDelete fontSize={24} /></button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;