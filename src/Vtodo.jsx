import React from 'react'
import { Link } from 'react-router-dom'
const Vtodo=(props)=>{
    const {todos}=props
    todos.sort((a,b)=>{
        return a.id-b.id;
    })
    const showR=todos.map(p=><tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.title}</td>
        <td><Link to={`/product/${p?.id}`}>View Details</Link></td>
        <td><Link to={`/edit/${p?.id}`}>Edit Todo Details</Link></td>
    </tr>)
    return(
        <div>
            
            <table>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>action</th>
                </tr>
                {showR}
            </table>
        </div>
    )
}
export default Vtodo