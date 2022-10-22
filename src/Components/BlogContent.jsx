import React from 'react'
import { Link } from 'react-router-dom'

const BlogContent = ({blogId,blog1}) => {
    

    let arr = blog1.filter(blog=>blog.id===blogId)
    let blog=arr[0]
    console.log(blog.title)


    
    return (
        <div className='w-full  py-[50px]  bg-[#f9f9f9] '>
     
    
          <div className='max-w-[1240px] mx-auto'>
            
           
            
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2   gap-x-8 gap-y-8  px-4  sm:pt-20 ss:pt-20 md:mt-0 text-black '>
              
                <div className='col-span-2 gap-x-8 gap-y-8'>
                    <img className='h-56 w-full object-cover' src={blog.coverImg} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
                    <div className='pt-5 font-[CircularStd]'><p>{blog.content}</p></div>
                </div>

                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md max-h-[500px]'>

                </div>
               

               

              
     
            </div>
          </div>
    
    
    
    
    
    
        </div>
      )
}

export default BlogContent