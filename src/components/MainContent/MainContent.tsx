import { useParams } from 'react-router-dom';
import { country } from '../../api/country';
import { ResponseData } from '../../api/types';
import { useFetch, useSelector } from '../../hooks';
import { NewsDisplay } from '../../store/general/generalTypes';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../Loader/Loader';
import NewsGrid from './NewsGrid';
import NewsList from './NewsList';

const MainContent = () => {
  const displayStyle = useSelector((state) => state.general.newsDisplayStyle);

  const { countryId } = useParams();

  const { data, error, loading } = useFetch<ResponseData>(`https://newsapi.org/v2/top-headlines?country=${countryId}`);

  if (loading) return <Loader />;

  if (countryId && !Object.keys(country).includes(countryId)) return <ErrorPage />;

  if (data && displayStyle === NewsDisplay.list) return <NewsList articles={data.articles} />;
  if (data && displayStyle === NewsDisplay.grid) return <NewsGrid articles={data.articles} />;

  return null;
};

export default MainContent;
