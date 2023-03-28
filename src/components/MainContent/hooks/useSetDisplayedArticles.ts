import { useEffect } from 'react';
import { useDispatch } from '../../../hooks';
import { setDisplayedArticles } from '../../../store/general/generalSlice';

const useSetDisplayedArticles = (noOfArticles: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDisplayedArticles(noOfArticles));
    return () => {
      dispatch(setDisplayedArticles(0));
    };
  }, [noOfArticles]);
};

export default useSetDisplayedArticles;
