import { Dispatch, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import articlePlaceholder from '../../../assets/placeholder.jpg';
import { Article } from '../../../api/types';
import { Languages } from '../../../store/general/generalTypes';

interface ArticleModalProps {
  article: Article;
  setArticle: Dispatch<SetStateAction<Article | null>>;
  lng: Languages;
}

const ArticleModal = (props: ArticleModalProps) => {
  const { article, setArticle, lng } = props;

  const { t } = useTranslation();

  useEffect(() => {
    return () => {
      setArticle(null);
    };
  }, []);

  return (
    <>
      {createPortal(
        <>
          <input type="checkbox" readOnly checked={!!article} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-10/12 max-w-7xl">
              <div className="flex justify-between gap-4">
                <h3 className="font-bold text-lg lg:text-2xl">{article.title}</h3>
                <button onClick={() => setArticle(null)} className="btn btn-sm lg:btn-md btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm">{new Date(article.publish_date).toLocaleString(lng)}</p>
              <img src={article.image || articlePlaceholder} alt="thumbnail" className="py-4 max-w-xl m-auto" />
              <p>{article.text}</p>
              <div className="flex justify-between pt-4">
                <button onClick={() => setArticle(null)} className="btn btn-primary pl-1">
                  <svg
                    className="h-6 w-6 fill-current md:h-8 md:w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                  </svg>
                  {t('Wróć')}
                </button>
                <a href={article.url} className="btn btn-primary">
                  {t('Idź do żródła')}
                </a>
              </div>
            </div>
          </div>
        </>,
        document.querySelector('#root')!
      )}
    </>
  );
};

export default ArticleModal;
