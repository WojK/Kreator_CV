import { useParams } from "react-router-dom"
import {adviceArticles} from "../../mocks/mockedData"
import classes from "./AdviceArticle.module.css";

const adviceArticlesList = adviceArticles;
const AdviceArticle = () =>{
    const {adviceId} = useParams();
    const articleData = adviceArticlesList.find(a => { return a.id === parseInt(adviceId)});
    return(
        <div className={classes["article-div"]}>
            <p><span className={classes["article-title"]}>{articleData.title}</span> <div className={classes["article-category"]}>{articleData.category}</div></p>
            <p className={classes["article-date"]}>{articleData.date} {articleData.author} </p>
            <br/>
            <p className={classes["article-text"]}>{articleData.text}</p>

        </div>
    )
}

export default AdviceArticle