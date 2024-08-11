import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { filterData,apiUrl } from './data'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'


function App() {
   
  const [courses,setCourses] = useState(null)
  const [loading,setLoading] = useState(true)
  const [category,setCategory] = useState(filterData[0].title)


  const fetchData = async() =>{

    setLoading(true);
    try {
      const result = await fetch(apiUrl);
      const output = await result.json()
      if(!result.ok){
        if(result.status===404){
          toast.error("404 Not Found")
        }else{
          toast.error("Something went wrong")
        }
      }
      //save data into variable
      setCourses(output.data)

    } catch (error) {
      toast.error("Something went wrong")
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])
 
  return (
    <>
      <div className='flex flex-col min-h-screen bg-bgDark2'>
        <div >

        <Navbar/>
        </div>
       
       <div className=''>
        
        
       <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>

        </div>
         
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ?(<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
        </div>

       </div>

       

      </div>
    </>
  )
}

export default App
