import { Article } from '../../api/types';

interface NewsGridProps {
  articles: Article[];
}
const NewsGrid = (props: NewsGridProps) => {
  const { articles } = props;

  return <div>NewsGrid</div>;
};

export default NewsGrid;
