import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div>
            <div className='flex items-center py-1'>
                <CheckCircleIcon className='h-6 w-6 text-indigo-300' />
                <p className='ml-2'>{feature}</p>
            </div>

        </div>
    );
};

export default Feature;