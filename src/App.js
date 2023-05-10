import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'


function App() {
  const [data,setData]=useState([])
  const [pageNo,setPageNo]=useState(3)
  // const paginate = (followers) => {
  //   const itemsPerPage = 10
  //   const numberOfPages = Math.ceil(followers.length / itemsPerPage)
  
  //   const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
  //     const start = index * itemsPerPage
  //     return followers.slice(start, start + itemsPerPage)
  //   })
  
  //   return newFollowers
  // }
   const paginate = (followers) => {
    const itemsPerPage = 10
    const numberOfPages = 14
     const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return followers.slice(start, start + itemsPerPage)
    })
 console.log("new",newFollowers)
    return newFollowers;
  }

  const url = "https://jsonplaceholder.typicode.com/photos"
  const datafetch = async ()=>{
        const  data = await fetch(url)
        let data2 =await data.json()
        let data3 =paginate(data2)
        setData(data3[pageNo]);
  }
  useEffect(()=>{
    datafetch( )
  },[])


  return (
    <div className='box'>
      <h1>Pagination</h1>
        <button onClick={datafetch}> data</button>
      <div>
          {
           data &&  data.map((val,i)=>{
              return(
                <div className='box1' key={i}>
                   <h1>{val.id}</h1>
                   <h5>Title:{val?.title}</h5>
                   <img  src={val?.thumbnailUrl} alt={val.id}/>
                </div>
              )
             })
          }
      </div>
    
    </div>

  //   <div>
  //   {photos.map(photo => (
  //     <div key={photo.id}>
  //       <img src={photo.url} alt={photo.title}/>
  //       <p>{photo.title}</p>
  //     </div>
  //   ))}
  // </div>
  );
}

export default App;
