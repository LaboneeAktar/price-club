import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {

    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Everything is free',
                'Awesome Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Use Features']
        },

        {
            id: 2, name: 'Premium', price: 19.99, features: [
                'Everything is Premium',
                'Awesome Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Use Features']
        },

        {
            id: 3, name: 'Medium', price: 9.99, features: [
                'Everything is Medium',
                'Awesome Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Use Features']
        }
    ]

    return (
        <div>
            <h1 className='text-4xl fond-bold text-indigo-700 font-serif p-6'>Best Deal of the Town!!</h1>
            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;