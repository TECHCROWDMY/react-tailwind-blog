import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
    const blog1=[
        {   'id':1,
            'title':"Blog1",
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",

        },
        {   
            'id':2,
            'title':"Blog1",
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",
        }, 
        {   
            'id':3,
            'title':"Blog1",
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",

        },
        {   
          'id':4,
          'title':"Blog1",
          'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",

      }
    ]
    return (
        <div className='w-full  py-[50px]  bg-[#f9f9f9] '>
     
    
          <div className='max-w-[1240px] mx-auto'>
            
           
            
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1   gap-x-8 gap-y-8  px-4  sm:pt-20 ss:pt-20 md:mt-0 text-black '>
              
              
              {blog? blog.map((blog)=>
               <Link  to={`/${blog.id}`}>

                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                  <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                  <div className='p-8'>
                    <h3 className='font-bold text-2xl my-1'>{blog.attributes.title}</h3>
                    <p className='text-gray-600 text-xl'>{blog.attributes.short_desc}</p>
                  </div>
                  
                </div>
              </Link>
              
              
              ):
              blog1.map((blog)=>
              <Link to={`/${blog.id}`}>
                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                  <img className='h-56 w-full object-cover' src={blog.coverImg} />
                  <div className='p-8'>
                    <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                    <p className='text-gray-600 text-xl'>{blog.desc}</p>
                  </div>
                  
                </div>
              </Link>
              )}

               

              
     
            </div>
          </div>
    
    
    
    
    
    
        </div>
      )
}

export default Blog