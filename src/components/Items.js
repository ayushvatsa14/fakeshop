import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../Redux/Slices/CartSlice";

function Items({product}){
    const cart=useSelector((state) => state.cart);
    const dispatch=useDispatch();

    function addToCart(product){
        dispatch(add(product));
    }

    function removeFromCart(id){
        dispatch(remove(id));
    }

    return (
        <div className="flex flex-col items-center gap-3 shadow-cardShadow rounded-xl py-4 transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-2xl">
            <p className="text-[1.1rem] font-bold">{product.title.length>16 ? (`${product.title.substring(0, 17)}....`) : (product.title)}</p>
            <p className="w-[75%] text-[0.8rem] text-gray-400">{product.description.length>16 ? (`${product.description.substring(0, 85)}....`) : (product.description)}</p>

            <div className="w-[10rem] h-[12rem]">
                <img src={product.image} className="w-full h-full" />
            </div>

            <div className="w-full px-4 flex justify-between mt-2">
                <p className="text-[1.1rem] text-green-600 font-bold">{`$${product.price}`}</p>

                {
                    cart.some((item) => item.id === product.id) ?
                    (<button onClick={() => removeFromCart(product.id)} className="text-[0.8rem] font-semibold px-3 border-2 border-black rounded-2xl hover:bg-black hover:text-white uppercase">Remove Item</button>)
                    :
                    (<button onClick={() => addToCart(product)} className="text-[0.8rem] font-semibold px-3 border-2 border-black rounded-2xl hover:bg-black hover:text-white uppercase">Add to Cart</button>)
                }
            </div>
        </div>
    );
}

export default Items;