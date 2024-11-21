import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopHeadLine = () => {

  const [Allnews, setAllnews] = useState([]);
  console.log(Allnews);



  // async function getAllData() {
  //   let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=55a3df49a34c4bf0a3ebc1ba1ecbbf27')
  //   // console.log(res);
  //   setAllnews(res.data.articles)


  // }

  async function getAllData() {
    let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=55a3df49a34c4bf0a3ebc1ba1ecbbf27');
    console.log(res);
    setAllnews(res.data.articles)
    
    
  }
 useEffect(()=>{
  getAllData()
},[])


  return (
    <div>
      <h1>This is tpHead line</h1>
      {
        Allnews.map((news, i) => {
          return news.urlToImage && <div className=' flex flex-col justify-between border border-spacing-2 py-0 px-3 border-gray-400 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12' key={i}>
            <img src={news.urlToImage} alt="" />
            <h1 className="font-bold my-2 text-sm" >Content :{news.content}</h1>
            
            <Link to={news.url} className="text-white hover:text-black bg-emerald-500 px-4 py-2 rounded-md hover:bg-red-400">View Full news</Link>

          </div>
        })
      }
    </div>
  )
}

export default TopHeadLine
