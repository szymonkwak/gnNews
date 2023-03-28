import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { country } from '../../api/country';
import { Article, ResponseData } from '../../api/types';
import { useFetch, useSelector } from '../../hooks';
import { NewsDisplay } from '../../store/general/generalTypes';
import ErrorPage from '../ErrorPage/ErrorPage';
import FetchingError from '../ErrorPage/FetchingError';
import Loader from '../Loader/Loader';
import FetchBtn from './components/FetchBtn';
import useSetDisplayedArticles from './hooks/useSetDisplayedArticles';
import NewsGrid from './NewsGrid';
import NewsList from './NewsList';
import ArticleModal from './components/ArticleModal';

const MainContent = () => {
  const displayStyle = useSelector((state) => state.general.newsDisplayStyle);
  const lng = useSelector((state) => state.general.language);

  const [news, setNews] = useState<Article[]>([]);
  const [articleInModal, setArticleInModal] = useState<Article | null>(null);

  const { countryId } = useParams();
  const { fetchData, error, loading } = useFetch<ResponseData>();
  useSetDisplayedArticles(news.length);

  const handleFetch = async () => {
    const data = await fetchData(
      `https://api.worldnewsapi.com/search-news?offset=${news.length}&language=${countryId}`
    );
    if (data) setNews((prev) => prev.concat(data.news));
  };

  useEffect(() => {
    handleFetch();
    return () => {
      setNews([]);
    };
  }, [countryId]);

  if (!news.length && loading) return <Loader />;
  if (countryId && !Object.keys(country).includes(countryId)) return <ErrorPage />;
  if (error) return <FetchingError />;

  if (news.length)
    return (
      <>
        {displayStyle === NewsDisplay.list ? (
          <NewsList articles={news} lng={lng} setArticleInModal={setArticleInModal} />
        ) : (
          <NewsGrid articles={news} lng={lng} setArticleInModal={setArticleInModal} />
        )}

        <FetchBtn handleFetch={handleFetch} loading={loading} />
        {articleInModal ? <ArticleModal article={articleInModal} setArticle={setArticleInModal} lng={lng} /> : null}
      </>
    );

  return null;
};

export default MainContent;
