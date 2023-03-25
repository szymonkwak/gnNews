import { Article } from '../../api/types';
import { Languages } from '../../store/general/generalTypes';

interface NewsGridProps {
  articles: Article[];
  lng: Languages;
}

const NewsGrid = (props: NewsGridProps) => {
  const { articles, lng } = props;

  return (
    <div className="m-3 grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <div key={article.publishedAt} className="card 2xl:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={article.urlToImage} alt="thumbnail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <div className="card-actions flex gap-0 flex-col items-end">
              <p className="text-sm"> {article.source.name}</p>
              <p className="text-sm">{new Date(article.publishedAt).toLocaleString(lng)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
