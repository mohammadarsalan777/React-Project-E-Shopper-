import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ContextProvider } from '../../Context/ProjectContext'
import { useParams } from 'react-router-dom'
import Data from '../../../Item.json'

const CartItem = () => {
    const [data, setData] = useState(Data)
    const [carditem, setCarditem] = useState()
    const { id } = useParams()
    console.log(id);
    console.log("-----", data)

    const card = () => {
        useEffect(() => {
            const element = Data.find(item => item.id === id)
            setCarditem(element)
        }, [id])


        return (
            <div>
                <div className='container mt-5'>
                    <div class="row">
                        <div className="col-lg-12 d-flex justify-content-between">

                            <p className='text-left'>Products </p>
                            <p className='text-left'>Title </p>
                            <p className='text-left'>Quantity </p>
                            <p className='text-left'>Price </p>
                            <p className='text-left'>Remove</p>
                        </div>

                    </div>
                    <hr />
                    <ContextProvider value={{ card }}>
                        {
                            carditem && (
                                <div className="col d-flex justify-content-between center border-1   ">
                                    <p className='text-center'><img src={carditem.img} height={'100px'} alt="" /></p>
                                    <p className='text-center'>{carditem.name}</p>
                                    <p className='text-center'><input type="number" name="" id="" defaultValue={1} /></p>
                                    <p className='text-center'>$ {carditem.price}</p>
                                    <Button className='text-center'>Remove</Button>
                                </div>
                            )
                        }
                        {children}
                    </ContextProvider>

                </div>
            </div>
        )
    }
}
export default CartItem
