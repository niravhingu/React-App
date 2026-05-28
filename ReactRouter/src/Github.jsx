import React from 'react'
import { useEffect } from 'react'



function Github() {
    const [data,setData]=React.useState([]);

useEffect(()=>{
   
   async function getUser() {

      try {

         const res = await fetch(
            'https://api.github.com/users/niravhingu'
         )

         const apidata = await res.json()

         setData(apidata)

         console.log(apidata)

      }

      catch(error){

         console.log(error)

      }

   }

   getUser()

},[])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>Github: {data.following}
    <img src={data.avatar_url} alt="avatar" className='w-20 h-20 rounded-full mx-auto mt-4' />
    </div>
  )
}

export default Github   

export async function githubLoader(){

   const res = await fetch(
      'https://api.github.com/users/niravhingu'
   )

   const apidata = await res.json()

   return apidata

}