import { useState } from 'react';
import Counter from './Counter';
import data from "../mock-data.json"


export default function Table() {
    // The values and useState help import the data from the JSON file created for the territories. 
    const [values] = useState(data)
    // This functions the table from being able to be opened or closed so they players can see the map image. 
    const [show, setShow] = useState(true)

    // prevents from the form for the owner to be defaulted to blank. 
    const handleSubmit = async (e) => {
        e.preventDefault();
      }


  return(
    <div>
        <h1 className='text-lg font-bold text-yellow-50'>LeaderBoard</h1>
        <button className="w-16 text-sm font-bold bg-amber-400 border-1 border-black rounded-sm m-2" onClick={()=> setShow(true)}>Open</button>
        <button className="w-16 text-sm font-bold bg-amber-400 border-1 border-black rounded-sm m-2" onClick={()=> setShow(false)}>Close</button>
        { show? 
            <div className='results'>
                <div className='table'>
                    <table>
                        <tbody>
                            <tr>
                                <th className='text-yellow-50'>Territory</th>
                                <th className='text-yellow-50'>Troops</th>
                                <th className='text-yellow-50'>Owner</th>
                            </tr>
                            {values.map((value) => {
                                return (
                                    <tr>
                                        <td>{value.territory}</td>
                                        <td>
                                            {value.troops}
                                            <Counter troops={0}/>
                                        </td>
                                        <td>
                                            {value.owner}
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    className='owners'
                                                    type="text"
                                                    placeholder='Territory Owner'
                                                />
                                            </form>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        :null}
    </div>
  )
}
