import React, { useContext, useEffect, useState } from "react";
import data from "../../../Item.json";
import product from "../../../product.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Context from "../Product/ShopContext";
import PopularContext from "../Product/PopularContext";

const DisplayCategory = () => {
    const elementProduct = useContext(Context)
    const display = useContext(PopularContext)
    return (
        <div>
            <div className=" align-item-center ">
                <h1 className="text-center mt-5 ">All Products</h1>
                <div
                    className="d-flex flex-wrap mt-5 gap-3 cursor-pointer justify-content-center"
                    style={{ width: "100vw" }}
                >
                    {data.map((item, i) => (
                        <div
                            className="text-center shadow p-3 mb-5 bg-white rounded"
                            style={{
                                height: "500px",
                                width: "400px",
                                // border: "solid 1px",
                                borderRadius: "15px",
                            }}
                            key={i}
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

                            <div >
                                <a href="/cart">
                                    <Button className="m-1" variant="danger">Add to Cart</Button>
                                </a>
                                <Button variant="secondary">Buy Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" align-item-center ">
                {/* <h1>Top Trendings</h1> */}
                <div
                    className="d-flex flex-wrap mt-5 gap-3 cursor-pointer justify-content-center"
                    style={{ width: "100vw" }}
                >
                    {product.map((item, i) => (
                        <div
                            className="text-center shadow p-3 mb-5 bg-white rounded"
                            style={{
                                height: "500px",
                                width: "400px",
                                // border: "solid 1px",
                                borderRadius: "15px",
                            }}
                            key={i}
                        >
                            <Link onClick={display} to={`/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <img
                                    className="m-1 mt-2"
                                    src={item.images[0]}
                                    alt=""
                                    height={"300px"}
                                    width={"350px"}
                                />
                                <h4 className="m-4">{item.title}</h4>
                                <h6 className="text-secondary">$ {item.price}</h6>
                            </Link>

                            <div >
                                <a href="/cart">
                                    <Button className="m-1" variant="danger">Add to Cart</Button>
                                </a>
                                <Button variant="secondary">Buy Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default DisplayCategory
