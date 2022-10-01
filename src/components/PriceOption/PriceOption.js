import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-purple-500 m-3 rounded-md p-3'>
            <div>
                <h2 className='font-serif text-xl p-4'>Price: <span className='text-4xl font-serif font-bold'>{option.price} </span> <span className='font-serif text-xl'>/mon</span></h2>
                <p className='font-serif text-3xl p-3 font-semibold text-white'>{option.name}</p>
            </div>

            <h2 className='font-boldf font-serif text-xl text-start'>Features</h2>
            <div className='px-10 py-3'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-red-400 w-full rounded-md py-2 text-white font-semibold mt-4 hover:bg-purple-800'>Buy Now</button>
        </div>
    );
};

export default PriceOption;