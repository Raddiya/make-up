import React from 'react';

const ShopRight = ({cart,chooseAgain,chooseOneForMe}) => {
    return (
        <div className='row'>
<h2 className='text-center'>Sected Item</h2>
            {cart.map(item => (
                <div>
                    <h4>{item.name}</h4>
                </div>
            ))}
 <button  onClick={chooseOneForMe} className='btn btn-success w-100'>Choose one for me</button>
 <button onClick={chooseAgain} className='btn btn-danger w-100'>Choose again</button>

        </div>
    );
};

export default ShopRight;