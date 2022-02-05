import { useState } from 'react';
import Counter from './Counter';
import data from "../mock-data.json"


export default function Table() {
    const [values, setValue] = useState(data)
    const [show, setShow] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();
      }


  return(
      <div>
          <h1>LeaderBoard</h1>
          <button onClick={()=> setShow(true)}>Open</button>
          <button onClick={()=> setShow(false)}>Close</button>
          { show? <div className='results'>
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
    </div>:null}
    </div>
  )
}
