import React from 'react'
import items from '../components/pidata'
import Item from '../components/Item'

export default function Homescreen() {
    return (
        <div>
           <div className="row">
            {
                items.map(item=>{
                    return (
                    <div className='col-md-4'>
                        <div>
                            <Item item={item}/>
                        </div>

                    </div>
                    ) 
                    
                })
            }
           </div>

        </div>

    )
}