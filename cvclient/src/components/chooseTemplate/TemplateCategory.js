import classes from "./TemplateCategory.module.css";


const TemplateCategory = ({title, description}) => {

    return <>
        <div className={classes["template-div"]}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>;
}

export default TemplateCategory;