import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Item from '../../../Item.json';
import '../../../App.css';
import { Link } from "react-router-dom";
import Context from "./ShopContext";
// import { AddCartContext } from "../Cart/AddToCartContext";
import useProjectContext from "../../Context/ProjectContext";



const Product = () => {
    const [pdata, setPdata] = useState('');
    const [filterData, setFilteredData] = useState(Item);

    const elementProduct = useContext(Context)
    // const selectesCard = useProjectContext(AddCartContext)
    const { card } = useProjectContext()


    const searchHandler = (e) => {
        const itemdata = e.target.value;
        setPdata(itemdata);
        const filteredDatas = Item.filter((product) => product.name.toLowerCase().includes(pdata.toLowerCase()));
        setFilteredData(filteredDatas);
    };


    const searchByInp = () => {
        if (pdata) {
            return (pdata && filterData.map((val, i) => (
                <div className="text-center shadow  mb-4 bg-white rounded" id="spdiv" style={{ width: '240px' }} key={i}>
                    <Link onClick={elementProduct} to={`/product/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={val.img} alt=""
                            height={"180px"}
                            width={"230px"} />

                        <p >{val.name}</p>
                        <p className="text-danger">{val.category}</p>
                        <h6 className="text-secondary">$ {val.price}</h6>
                    </Link>
                    <Link to={`/cart/${val.id}`}>
                        <Button onClick={card} variant="danger">Add to Cart</Button>
                    </Link>

                </div >
            )))
        }
        else {
            return (Item.map((val, i) => (
                <>

                    <div className="text-center shadow  mb-4 bg-white rounded" id="spdiv" style={{ width: '240px' }} key={i}>
                        <Link to={`/product/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                            <img src={val.img} alt=""
                                height={"180px"}
                                width={"230px"} />
                            <p>{val.name}</p>
                            <p className="text-danger">{val.category}</p>
                            <h6 className="text-secondary">$ {val.price}</h6>
                        </Link>
                        <Link to={`/cart/${val.id}`}>
                            <Button onClick={card} variant="danger">Add to Cart</Button>
                        </Link>
                    </div>
                </>
            )))
        }
    }


    return (
        <>
            <div className="container">
                <h1 className="text-center mt-3 mb-3">Products Sections</h1>
                <div className="row">
                    <div className="col-lg-4 col-12 text-center">
                        <form>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search Product"
                                className="p-2"
                                value={pdata}
                                onChange={searchHandler}
                            />

                            <Button variant='danger' type="submit">Search</Button>
                        </form>
                        <ul style={{ listStyle: 'none' }}>
                            {
                                pdata && filterData.map((val, i) => (
                                    <li key={i}>
                                        {val.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={`col-lg-8 col-12 d-flex flex-wrap 
                            justify-content-between gap-1 shadow p-3 mb-5 bg-white rounded ${'col-12' == true} ?'resp-product' : ''`} style={{ borderRadius: '10px' }}>
                        {searchByInp()}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Product;
