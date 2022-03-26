import React from 'react';
import './ShopLeft.css';

const ShopLeft = (props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-card">
                {
                    props.product.map((items) => (
                        <div className="col">
                            <div className="card">
                                <img src={items.picture}className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{items.name}</h5>
                                    <h5 className="card-title">{items.price}</h5>
                                    <button type="button" class="btn btn-secondary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ShopLeft;