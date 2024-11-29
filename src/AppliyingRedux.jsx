import React from 'react'
import { useState } from 'react'
import './App.css'


function AppliyingRedux() {

   const randomData = () =>[
    {id:1,name:"Mitul",role:"Fullstack Developer"},
    {id:2,name:"Hiren",role:"Web designer"},
    {id:3,name:"Ashvin",role:"Frontend Developer"},
    {id:4,name:"Manoj",role:"Frontend Developer"},
    {id:5,name:"Kruparth",role:"React-js Developer"},
   ]

   const [data, setData] = useState(randomData);

   const[search, setSearch] = useState('');

   const handleSearch = (event) =>{
    setSearch(event.target.value);
   }

   const filterdata = data.filter((row)=>{
    return row.name.toLowerCase().includes(search.toLowerCase()) ||
         row.role.toLowerCase().includes(search.toLowerCase());

   })
  return (
    <div className='app'>
        <h2>Table-data</h2>

        <input 
        type="text" 
        placeholder="Search name or role..." 
        value={search}
        onChange={handleSearch}  
        />

        {/* tb */}
        <table border='1'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody>
            {filterdata.map((person)=>(
                <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.role}</td>
                </tr> 
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default AppliyingRedux