import { Dispatch, SetStateAction } from 'react';
import { Article } from '../../api/types';
import { Languages } from '../../store/general/generalTypes';
import articlePlaceholder from '../../assets/placeholder.jpg';

interface NewsGridProps {
  articles: Article[];
  lng: Languages;
  setArticleInModal: Dispatch<SetStateAction<Article | null>>;
}

const NewsGrid = (props: NewsGridProps) => {
  const { articles, lng, setArticleInModal } = props;

  return (
    <div className="m-4 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {articles.map((article) => (
        <button key={article.title} onClick={() => setArticleInModal(article)} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={article.image || articlePlaceholder} alt="thumbnail" />
          </figure>
          <div className="flex flex-col justify-between flex-1 gap-2 p-4">
            <h2 className="card-title">{article.title}</h2>
            <div className="card-actions flex gap-0 flex-col items-end">
              <p className="text-sm">{article.url.split('//')[1]?.slice(0, article.url.split('//')[1].indexOf('/'))}</p>
              <p className="text-sm">{new Date(article.publish_date).toLocaleString(lng)}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default NewsGrid;
