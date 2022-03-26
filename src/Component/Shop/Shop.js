import React, { useEffect, useState } from 'react';
import ShopLeft from '../ShopLeft/ShopLeft';
import ShopRight from '../ShopRight/ShopRight';

const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const addToCart = (items) => {
        if (cart.length >= 4) {
            alert('maximum-4')
        }
        else {
            const isExsist = cart.find(item => item.id === items.id)
            if (!isExsist) {
                setCart([...cart, items])
            }
            else {
                alert('Already exist')
            }
        }

    }
    const chooseOneForMe=() =>{
        if(cart.length>0){
            const random=Math.floor(Math.random()*cart.length)
            setCart([cart[random]])
        }

    }
    const chooseAgain=()=>{
        setCart([])
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <ShopLeft product={product} addToCart={addToCart}>
                    </ShopLeft>

                </div>
                <div className='col-md-4'>
                    <ShopRight cart={cart} chooseAgain={chooseAgain} chooseOneForMe={chooseOneForMe}></ShopRight>

                </div>

            </div>


        </div>
    );
};

export default Shop;