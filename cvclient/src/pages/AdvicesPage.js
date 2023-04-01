import AdviceThumbnail from "../components/advicePage/AdviceThumbnail";
import classes from "./AdvicePage.module.css";
import { adviceArticles } from "../mocks/mockedData";

const adviceArticlesList = adviceArticles;
const AdvicesPage = () => {
  const result = adviceArticlesList.reduce(
    (r, o, i) => ((r[i % 3] = r[i % 3] || []).push(o), r),
    []
  );
  const firstColumn = result.at(0);
  const secondColumn = result.at(1);
  const thirdColumn = result.at(2);

  const firstColumnThumbnails = firstColumn.map((article) => (
    <AdviceThumbnail
      key={article.id}
      articleId={article.id}
      title={article.title}
      author={article.author}
      text={article.text}
      shortDescription={article.shortDescription}
      category={article.category}
      date={article.date}
    />
  ));
  const secondColumnThumbnails = secondColumn.map((article) => (
    <AdviceThumbnail
      key={article.id}
      articleId={article.id}
      title={article.title}
      author={article.author}
      text={article.text}
      shortDescription={article.shortDescription}
      category={article.category}
      date={article.date}
    />
  ));
  const thirdColumnThumbnails = thirdColumn.map((article) => (
    <AdviceThumbnail
      key={article.id}
      articleId={article.id}
      title={article.title}
      author={article.author}
      text={article.text}
      shortDescription={article.shortDescription}
      category={article.category}
      date={article.date}
    />
  ));

  return (
    <>
      <div className={classes["row"]}>
        <div className={classes["column"]}>{firstColumnThumbnails}</div>
        <div className={classes["column"]}>{secondColumnThumbnails}</div>
        <div className={classes["column"]}>{thirdColumnThumbnails}</div>
      </div>
    </>
  );
};

export default AdvicesPage;
