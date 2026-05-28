import React from 'react'
import { Link } from 'react-router-dom'

function Users() {

  const user = [
    { id: 1, name: "Nirav", email: "nirav@example.com" },
    { id: 2, name: "John", email: "john@example.com" },
    { id: 3, name: "Jane", email: "jane@example.com" },
    { id: 4, name: "Doe", email: "doe@example.com" },
    { id: 5, name: "Smith", email: "smith@example.com" },
    { id: 6, name: "Alice", email: "alice@example.com" }
  ]

  return (

    <div>

      <h1 className='text-2xl font-bold'>
        Users Page
      </h1>

      {
        user.map((item) => (

          <div key={item.id}>

            <h2>

              <Link to={"/Users/"+item.id} className='text-blue-500 hover:underline' >
                {item.name}
              </Link>

            </h2>

            

          </div>

        ))
      }

    </div>

  )
}

export default Users