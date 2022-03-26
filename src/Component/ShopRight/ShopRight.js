import React from 'react';

const ShopRight = ({cart,chooseAgain,chooseOneForMe}) => {
    return (
        <div className='row shadow p-3 mt-5 bg-body'>
<h2 className='text-center'>Selected Item</h2>
<hr></hr>
            {cart.map(item => (
                <div>
                    <h4 key={item.id}>{item.name}</h4>
                </div>
            ))}
 <button  onClick={chooseOneForMe} className='btn btn-success mb-2 w-100'>Choose one for me</button>
 <button onClick={chooseAgain} className='btn btn-danger w-100'>Choose again</button>

        </div>
    );
};

export default ShopRight;