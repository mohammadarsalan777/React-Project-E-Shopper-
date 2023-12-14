import React, { useState, useEffect } from 'react';
import Context from './ShopContext';
import elements from '../../../Item.json';
import { useParams } from 'react-router-dom';
import ClickCategory from '../Categories/ClickCategory';

const ProductContext = ({ children }) => {
    const [data, setData] = useState(elements);
    const { id } = useParams();
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {
        // Update selected element based on the id parameter
        const element = elements.find(item => item.id === id);
        setSelectedElement(element);
    }, [id]);


    return (
        <Context.Provider value={selectedElement}>
            {selectedElement && (
                <div className='container mt-4 shadow  mb-4 bg-white rounded'>
                    <div className='row'>
                        <div className="col-lg-4 col-12 text-center mt-3 mb-3 ">
                            <img src={selectedElement.img} alt="" height={'300vh'} className='mt-4 shadow  mb-4 bg-white rounded' />
                        </div>
                        <div className="col-lg-8 col-12 text-center mt-3 mb-3  shadow   bg-white rounded ">

                            <h1>{selectedElement.name}</h1>
                            <h5>$ {selectedElement.price}</h5>
                            <button className='btn btn-danger'>Add to Cart</button>
                            <button className='btn btn-secondary'>Buy Now</button>
                            <hr />
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quaerat facilis aspernatur nostrum voluptatibus perferendis beatae consectetur animi? Totam, quibusdam?</p>

                        </div>
                    </div>
                </div>
            )}
            {/* <ClickCategory /> */}
            {children}
        </Context.Provider>
    );
};

export default ProductContext;
