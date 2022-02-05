import { useState } from 'react';
import Counter from './Counter';
import data from "../mock-data.json"


export default function Table() {
    const [values, setValue] = useState(data)
    const [input, setInput] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
      }


  return( 
      <div className='results'>
    <div className='table'>
        <table>
            <tbody>
            <tr>
                <th>Territory</th>
                <th>Troops</th>
                <th>Owner</th>
            </tr>
            
            {values.map((value) => {
                return (
                    <tr>
                        <td>{value.territory}</td>
                        <td>
                            {value.troops}
                            <Counter />
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
  )
}
