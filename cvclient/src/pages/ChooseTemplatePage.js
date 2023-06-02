import TemplateCategory from "../components/chooseTemplate/TemplateCategory";
import classes from "./ChooseTemplatePage.module.css";
import { TextAny } from "../language/langTexts";

const ChooseTemplatePage = () => {
  const data_templates = [
    {
      title: <TextAny text="general_template" />,
      description: <TextAny text="general_template_desc" />,
      type: "general",
    },
    {
      title: <TextAny text="student_template" />,
      description: <TextAny text="student_template_desc" />,
      type: "student",
    },
    {
      title: <TextAny text="technical_template" />,
      description: <TextAny text="technical_template_desc" />,
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
