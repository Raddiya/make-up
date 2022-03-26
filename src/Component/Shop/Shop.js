import React, { useEffect, useState } from 'react';
import ShopLeft from '../ShopLeft/ShopLeft';
import ShopRight from '../ShopRight/ShopRight';

const Shop = () => {
   const[product,setProduct]=useState([])
   useEffect(()=>{ 
       fetch('product.json')
       .then(res=>res.json())
       .then(data=>setProduct(data))
   },[])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
<ShopLeft product={product}>
    
</ShopLeft>
                </div>
                <div className='col-md-4'>

                </div>

            </div>


        </div>
    );
};

export default Shop;