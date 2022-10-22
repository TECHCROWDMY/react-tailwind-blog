import React from 'react'
import { Link } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const BlogContent = ({blogId,blogsDummy,blogs}) => {
    
    let  blog2={}


    let arr1 = blogsDummy.filter(blog=>blog.id===blogId)
    let blog1=arr1[0]
    // console.log(arr1)

    if(blogs){
        let arr2 = blogs.data.filter(blogs=>blogs.id==blogId)
        blog2=arr2[0]
    }else{
        blog2={}
     }
    





    
    return (
        <div className='w-full  py-[50px]  bg-[#f9f9f9] '>
     
    
          <div className='max-w-[1240px] mx-auto'>
            
           
            
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2   gap-x-8 gap-y-8  px-4  sm:pt-20 ss:pt-20 md:mt-0 text-black '>
              
                {blogs?
                
                <div className='col-span-2 gap-x-8 gap-y-8'>
                    <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog2.attributes.coverImg.data.attributes.url}`}  />
                     <ReactMarkdown>{blog2.attributes.content}</ReactMarkdown>
                </div>
                :
                <div className='col-span-2 gap-x-8 gap-y-8'>
                    <img className='h-56 w-full object-cover' src={blog1.coverImg} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog1.title}</h1>
                    <div className='pt-5 font-[CircularStd]'><p>{blog1.content}</p></div>
                </div>
                }

                
                
                
                
                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md max-h-[500px]'>

                </div>
               

               

              
     
            </div>
          </div>
    
    
    
    
    
    
        </div>
      )
}

export default BlogContent