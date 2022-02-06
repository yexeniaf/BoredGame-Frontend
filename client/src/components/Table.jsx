import { useState } from 'react';

import Counter from './Counter';
import data from "../mock-data.json"

export default function Table() {
    const [values, setValues] = useState(data);
    const [show, setShow] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    let expandCollapseLabel;
    if (show) {
        expandCollapseLabel = "Close";
    } else if (!show) {
        expandCollapseLabel = "Open";
    };

return (
    <div>
        <h1
            className='text-lg font-bold text-yellow-50'
        >
            LeaderBoard
        </h1>
        <button
            className="w-16 text-sm font-bold bg-amber-400 border-1 border-black rounded-sm m-2"
            onClick={()=> setShow(!show)}
        >
                {expandCollapseLabel}
        </button>
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
