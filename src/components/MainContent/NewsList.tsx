import { useTranslation } from 'react-i18next';
import { Article } from '../../api/types';
import { useSelector } from '../../hooks';

interface NewsListProps {
  articles: Article[];
}

const NewsList = (props: NewsListProps) => {
  const { articles } = props;

  const { t } = useTranslation();

  const lng = useSelector((state) => state.general.language);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full max-lg:table-compact">
        <thead>
          <tr>
            <th>#</th>
            <th>{t('Tytuł artykułu')}</th>
            <th>{t('Źródło')}</th>
            <th>{t('Data publikacji')}</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, idx) => (
            <tr key={article.title}>
              <th>{idx}</th>
              <td>{article.title}</td>
              <td>{article.source.name}</td>
              <td>{new Date(article.publishedAt).toLocaleString(lng)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsList;
