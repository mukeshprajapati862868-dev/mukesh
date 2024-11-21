import { Link } from "react-router-dom";
const Newscomponents = (props) => {
  return (
    <div>
          <div className='grid grid-cols-12 '>
              {
                  props.Allnews.map((news, i) => {
                      return news.urlToImage && <div className=' flex flex-col justify-between border border-spacing-2 py-0 px-3 border-gray-400 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 mt-10' key={i}>
                          <img src={news.urlToImage} alt="" />
                        <h1 className="font-bold my-2 text-sm" >Title :{news.title}</h1>
                          <h1>Author : <small>{news.author}</small></h1>
                          <h1>Publish : <span>{news.publishedAt}</span></h1>
                          <Link to={news.url} className="text-white hover:text-black bg-emerald-500 px-4 py-2 rounded-md hover:bg-red-400">View Full news</Link>

                      </div>
                  })
              }
          </div>
    </div>
  );
}

export default Newscomponents;
