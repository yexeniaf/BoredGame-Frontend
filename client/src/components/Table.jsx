import { useState } from 'react';
import Counter from './Counter';


export default function Table() {
    const data = [
        { territory: "Alaska", troops: "", owner: "" },
        { territory: "Northwest territory", troops: "", owner: "" },
        { territory: "Greenland", troops: "", owner: "" },
        { territory: "Alberta", troops: "", owner: "" },
        { territory: "Ontario", troops: "", owner: "" },
        { territory: "Quebec", troops: "", owner: "" },
        { territory: "Western United States", troops: "", owner: "" },
        { territory: "Eastern United States", troops: "", owner: "" },
        { territory: "Central America", troops: "", owner: "" },
        { territory: "Venezuela", troops: "", owner: "" },
        { territory: "Brazil", troops: "", owner: "" },
        { territory: "Peru", troops: "", owner: "" },
        { territory: "Argentina", troops: "", owner: "" },
        { territory: "North Africa", troops: "", owner: "" },
        { territory: "Congo", troops: "", owner: "" },
        { territory: "South Africa", troops: "", owner: "" },
        { territory: "Madagascar", troops: "", owner: "" },
        { territory: "East Africa", troops: "", owner: "" },
        { territory: "Egypt", troops: "", owner: "" },
        { territory: "Southern Europe", troops: "", owner: "" },
        { territory: "Northern Europe", troops: "", owner: "" },
        { territory: "Western Europe", troops: "", owner: "" },
        { territory: "Great Britain", troops: "", owner: "" },
        { territory: "Iceland", troops: "", owner: "" },
        { territory: "Scandinavia", troops: "", owner: "" },
        { territory: "Ukraine", troops: "", owner: "" },
        { territory: "Middle East", troops: "", owner: "" },
        { territory: "Afghanistan", troops: "", owner: "" },
        { territory: "Ural", troops: "", owner: "" },
        { territory: "Siberia", troops: "", owner: "" },
        { territory: "Yakutsk", troops: "", owner: "" },
        { territory: "Irkutsk", troops: "", owner: "" },
        { territory: "Kamchatka", troops: "", owner: "" },
        { territory: "Japan", troops: "", owner: "" },
        { territory: "Mongolia", troops: "", owner: "" },
        { territory: "China", troops: "", owner: "" },
        { territory: "India", troops: "", owner: "" },
        { territory: "Siam", troops: "", owner: "" },
        { territory: "Indonesia", troops: "", owner: "" },
        { territory: "New Guinea", troops: "", owner: "" },
        { territory: "Eastern Australia", troops: "", owner: "" },
        { territory: "Western Australia", troops: "", owner: "" },

    ]
    const [input, setInput] = useState();

    const handleTextInput = (e) => {
      const {name, value} = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }))
    }

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
            
            {data.map((value, key) => {
                return (
                    <tr key={key}>
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
