import AdviceThumbnail from "../components/advicePage/AdviceThumbnail";
import classes from "./AdvicePage.module.css";
import { adviceArticles } from "../mocks/mockedData";
import { images } from "../mocks/images";

const AdvicesPage = () => {
  const adviceArticlesList = adviceArticles.map((article) => (
    <AdviceThumbnail
      key={article.id}
      photo={images[article.id - 1]}
      articleId={article.id}
      title={article.title}
      author={article.author}
      text={article.text}
      shortDescription={article.shortDescription}
      category={article.category}
      date={article.date}
    />
  ));

  return <div className={classes["container"]}>{adviceArticlesList}</div>;
};

export default AdvicesPage;
