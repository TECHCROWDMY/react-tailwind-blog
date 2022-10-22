import React from 'react';
import { Navbar, Footer, BlogContent } from '../Components';
import { useParams } from 'react-router-dom';


const BlogPage = () => {
  const {id} = useParams()
  
  const blog1=[
    {   'id':'1',
        'title':"Blog 1",
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",
        'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis ut orci eget posuere. Mauris quis finibus est. Nulla facilisi. Nunc lorem odio, gravida eget turpis non, ornare tincidunt dolor. Praesent ac risus vitae quam blandit facilisis non vulputate lorem. Etiam convallis, libero ut iaculis rhoncus, augue massa venenatis lacus, nec iaculis lacus nisi vitae magna. Aliquam vitae dolor eleifend ipsum varius aliquet. Maecenas sodales id sapien nec gravida. Donec nisl risus, hendrerit a nulla vel, sagittis elementum magna. Nullam porttitor neque sed malesuada ullamcorper.Proin non egestas ante. Aenean hendrerit sodales orci, vel sollicitudin massa pharetra efficitur. Curabitur elementum finibus eros, at bibendum velit bibendum ut. Donec condimentum ante a felis semper egestas. Quisque nec leo vel lorem cursus sollicitudin. Ut eleifend, lectus ut consectetur commodo, nisi elit laoreet sem, sed dictum arcu lectus in enim. In a justo mollis, bibendum eros porta, ultricies ex. Vivamus eu neque varius, ullamcorper sapien sed, tincidunt lacus. Morbi sit amet commodo diam, eu pulvinar libero. Donec viverra mollis eleifend. Nulla tincidunt tempor ipsum suscipit eleifend. Mauris tincidunt tortor et tellus imperdiet, eget sollicitudin sem vestibulum. Nam eu sapien felis. Pellentesque faucibus turpis a velit malesuada pharetra. In dictum tristique elementum. Cras laoreet lorem eget arcu pretium bibendum. Vestibulum efficitur feugiat nibh, a tristique libero luctus at. Duis vulputate, ipsum aliquam imperdiet tempor, justo metus interdum quam, vitae aliquet justo diam at erat. Fusce eget dui eu elit imperdiet pretium sed id justo. Aliquam semper tincidunt felis, vel efficitur velit aliquam ut. Morbi ultricies condimentum est nec blandit. Phasellus dignissim nunc arcu, in facilisis lorem lobortis in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vulputate metus ut lectus congue consectetur. Suspendisse elit purus, scelerisque in lorem interdum, lacinia suscipit metus. In imperdiet id tellus et condimentum. Praesent scelerisque lectus nec mi ullamcorper, bibendum pulvinar massa sodales.Proin quis mattis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam feugiat nibh ut tellus tempus, non tincidunt tellus pellentesque. Duis pretium tellus nec nulla tristique, quis fringilla tellus consectetur. Aliquam nisl risus, bibendum nec mauris at, interdum suscipit dui. Ut non sagittis dolor. Aliquam semper maximus imperdiet. Sed eleifend placerat tellus. Maecenas vehicula fermentum purus in vulputate. Vestibulum volutpat justo ut dapibus vestibulum. Nullam sodales nibh non augue faucibus vulputate. Etiam placerat nibh et rhoncus feugiat. Maecenas ac dolor mauris. Morbi maximus sagittis dapibus. Duis suscipit placerat feugiat."

    },
    {   
        'id':'2',
        'title':"Blog 2",
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",
    }, 
    {   
        'id':'3',
        'title':"Blog 3",
        'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",

    },
    {   
      'id':'4',
      'title':"Blog 4",
      'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      'coverImg':"https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png",

  }
]
  return (
    <>
      <Navbar />
      <BlogContent blogId={id} blog1={blog1}/>
      <Footer />
    </>  
  )
}

export default BlogPage