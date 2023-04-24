import TemplateCategory from "../components/chooseTemplate/TemplateCategory";
import classes from "./ChooseTemplatePage.module.css";

const ChooseTemplatePage = () => {
  const data_templates = [
    {
      title: "General Template",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      type: "general",
    },
    {
      title: "Student Template",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      type: "student",
    },
    {
      title: "Technical Template",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      type: "technical",
    },
  ];

  const templates = data_templates.map((data) => (
    <TemplateCategory
      title={data.title}
      description={data.description}
      type={data.type}
    />
  ));

  return <div className={classes["templates-div"]}>{templates}</div>;
};

export default ChooseTemplatePage;
