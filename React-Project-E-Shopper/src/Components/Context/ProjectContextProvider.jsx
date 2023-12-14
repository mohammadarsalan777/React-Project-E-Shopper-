import React, { useEffect, useState } from 'react'
import { ContextProvider } from './ProjectContext'
import { useParams } from 'react-router-dom'
import Data from '../../Item.json'
import CartItem from '../Pages/Cart/CartItem'

const ProjectContextProvider = ({ children }) => {
    const [data, setData] = useState(Data)
    const [carditem, setCarditem] = useState(null)
    const { id } = useParams()
    console.log(id);

    const card = () => {

        useEffect(() => {
            const element = Data.find(item => item.id === id)
            setCarditem(element)

        }, [id])

        return (
            <ContextProvider value={{ addtocart, card }}>
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
        )
    }

}
export default ProjectContextProvider

