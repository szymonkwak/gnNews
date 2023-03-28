import { Article } from '../../api/types';
import { Languages } from '../../store/general/generalTypes';
import articlePlaceholder from '../../assets/placeholder.jpg';

interface NewsGridProps {
  articles: Article[];
  lng: Languages;
}

const NewsGrid = (props: NewsGridProps) => {
  const { articles, lng } = props;

  return (
    <div className="m-4 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {articles.map((article) => (
        <a key={article.title} href={article.url} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={article.urlToImage || articlePlaceholder} alt="thumbnail" />
          </figure>
          <div className="flex flex-col justify-between flex-1 gap-2 p-4">
            <h2 className="card-title">{article.title}</h2>
            <div className="card-actions flex gap-0 flex-col items-end">
              <p className="text-sm"> {article.source.name}</p>
              <p className="text-sm">{new Date(article.publishedAt).toLocaleString(lng)}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsGrid;
