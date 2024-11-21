import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Newscomponents from '../Components/Newscomponents';
import TopHeadLine from '../Components/TopHeadLine';
import ContextSearch from '../Context/ContextSearh';

const Home = () => {
let ctx=useContext(ContextSearch)
  console.log(ctx.search);
let search=ctx.search;
const [Allnews, setAllnews] = useState([]);
console.log(Allnews);

  // let newsAll=async()=>{
  //   let res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=55a3df49a34c4bf0a3ebc1ba1ecbbf27');
  //     let data=await res.json();
  //   console.log(data);
  //   console.log(data.articles);

  // }
  // useEffect(()=>{
  //   newsAll();
  // })


  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getAllData() {
    let res = await axios.get(`https://newsapi.org/v2/everything?q=${ctx.search?ctx.search:'world'}&apiKey=55a3df49a34c4bf0a3ebc1ba1ecbbf27`)
    console.log(res);
    setAllnews(res.data.articles)
    
    
  }
  useEffect(()=>{
    getAllData()
  },[getAllData, search])


  // async function getAllNews() {
  //   let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=55a3df49a34c4bf0a3ebc1ba1ecbbf27')

  //   console.log(res);
    
    
  // }
  // getAllNews()
  return <div className='px-5 grid grid-cols-12 gap-4'>
      <div className='px-5 col-span-9'>
        <Newscomponents Allnews={Allnews}/>
      </div>
      <div className='col-span-3 relative md:w-auto w-[250px] sm:block overflow-hidden'>
        <h1 className='absolute top-0 left-0 bg-black text-white z-10 text-center font-bold w-full p-3'>Top HeadLines</h1>
       <div className='topHeadLine absolute'>
          <TopHeadLine />
       </div>
      </div>
    </div>
  
}

export default Home;
