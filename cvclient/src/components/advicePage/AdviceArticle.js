import { useParams } from "react-router-dom"
import {adviceArticles} from "../../mocks/mockedData"
import classes from "./AdviceArticle.module.css";

const adviceArticlesList = adviceArticles;
const AdviceArticle = () =>{
    const {adviceId} = useParams();
    const articleData = adviceArticlesList.find(a => { return a.id === parseInt(adviceId)});
    return(
        <div className={classes["article-div"]}>
            <div className={classes["container"]}>
                <p className={classes["article-title"]}>{articleData.title}</p>
                <p className={classes["article-category"]}>{articleData.category}</p>
            </div>
            <p className={classes["article-date-author"]}>{articleData.date} {articleData.author} </p>
            <br/>
            <p className={classes["article-text"]}>{articleData.text}</p>

        </div>
    )
}

export default AdviceArticle