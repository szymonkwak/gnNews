import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Article } from '../../api/types';
import { Languages } from '../../store/general/generalTypes';

interface NewsListProps {
  articles: Article[];
  lng: Languages;
  setArticleInModal: Dispatch<SetStateAction<Article | null>>;
}

const NewsList = (props: NewsListProps) => {
  const { articles, lng, setArticleInModal } = props;

  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto m-4">
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
              <th>{idx + 1}</th>
              <td>
                <button onClick={() => setArticleInModal(article)}>{article.title}</button>
              </td>
              <td className="text-sm">
                {article.url.split('//')[1]?.slice(0, article.url.split('//')[1].indexOf('/'))}
              </td>
              <td>{new Date(article.publish_date).toLocaleString(lng)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsList;
