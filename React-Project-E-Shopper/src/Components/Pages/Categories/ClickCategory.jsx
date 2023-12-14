import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../../../Item.json'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Context from '../Product/ShopContext'
import product from '../../../product.json'
import PopularContext from '../Product/PopularContext'

const ClickCategory = () => {
    const [filteredItems, setFilteredItems] = useState([]);
    const { category } = useParams();
    const elementProduct = useContext(Context);

    const [productItems, setProductItems] = useState([product])
    const display = useContext(PopularContext)


    useEffect(() => {
        const filtered = Item.filter(item => item.category.toLowerCase() === category.toLowerCase());
        setFilteredItems(filtered);
    }, [category]);

    useEffect(() => {
        const filtered = product.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setProductItems(filtered)
    }, [category])

    const categoryData = () => {
        return filteredItems.map((item, i) => (
            <>
                <div
                    key={i}
                    className="text-center shadow p-3 mb-5 bg-white rounded"
                    style={{
                        height: "530px", width: "400px", borderRadius: "15px",
                    }}
                >
                    <Link onClick={elementProduct} to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            className="m-1 mt-2"
                            src={item.img}
                            alt=""
                            height={"300px"}
                            width={"350px"}
                        />
                        <h4 className="m-4">{item.name}</h4>
                        <h6 className="text-secondary">$ {item.price}</h6>
                    </Link>

                    <div>
                        <a href="/cart">
                            <Button className="m-1" variant="danger">Add to Cart</Button>
                        </a>
                        <Button variant="secondary">Buy Now</Button>
                    </div>
                </div>

            </>
        ));
    };

    const productData = () => {
        return productItems.map((item, i) => (

            <div
                key={i}
                className="text-center shadow p-3 mb-5 bg-white rounded"
                style={{
                    height: "530px", width: "400px", borderRadius: "15px",
                }}
            >
                <Link onClick={display} to={`/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <img
                        className="m-1 mt-2"
                        src={item.img}
                        alt=""
                        height={"300px"}
                        width={"350px"}
                    />
                    <h4 className="m-4">{item.category}</h4>
                    <h6 className="text-secondary">$ {item.price}</h6>
                </Link>

                <div>
                    <a href="/cart">
                        <Button className="m-1" variant="danger">Add to Cart</Button>
                    </a>
                    <Button variant="secondary">Buy Now</Button>
                </div>
            </div>


        ));
    };


    return (
        <>
            <h1 className="text-center mt-5 ">{category}</h1>

            <div
                className="d-flex flex-wrap mt-5 gap-3 cursor-pointer justify-content-center"
                style={{ width: "100vw" }}
            >
                <>
                    {categoryData()}
                </>
                <>{productData()}</>

            </div>
        </>
    );
};

export default ClickCategory;
