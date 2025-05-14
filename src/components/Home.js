import Items from './Items.js';
import { products } from '../Data.js';

function Home(){
    return (
        <div className='w-11/12 max-w-[1060px] mt-4 mx-auto grid grid-cols-4 py-4 gap-4 gap-y-6'>
            {products.map((product) => (
                <Items product={product} key={product.id} />
            ))}
        </div>
    );
}

export default Home;