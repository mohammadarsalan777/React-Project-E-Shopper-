import React, { useEffect, useState } from 'react'
import data from '../../../product.json'
import PopularContext from './PopularContext'
import { useParams } from 'react-router-dom'

const PopularProducts = ({ children }) => {
    const [dataElement, setDataElement] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const elem = data.find(item => item.id === Number(id))
        setDataElement(elem)
    }, [id]);



    // const [productData, setProductData] = useState(data)
    // console.log(id);


    return (
        <PopularContext.Provider value={dataElement}>
            <div>
                {dataElement &&
                    (
                        <div className='container mt-4 shadow  mb-4 bg-white rounded'>
                            <div className='row'>
                                <div className="col-lg-4 col-12 text-center mt-3 mb-3 ">
                                    <img src={dataElement.images[0]} alt="" height={'300vh'} width={'360wh'} className='mt-4 shadow  mb-4 bg-white rounded' />
                                </div>
                                <div className="col-lg-8 col-12 text-center mt-3 mb-3  shadow bg-white rounded ">

                                    <h1>{dataElement.title}</h1>
                                    <h5>{dataElement.brand}</h5>
                                    <h5>$ {dataElement.price}</h5>
                                    <button className='btn btn-danger'>Add to Cart</button>
                                    <button className='btn btn-secondary'>Buy Now</button>
                                    <hr />
                                    <h3>Description</h3>
                                    <p>{dataElement.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            {children}
        </PopularContext.Provider>
    )
}

export default PopularProducts
