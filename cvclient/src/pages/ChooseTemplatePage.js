import TemplateCategory from "../components/chooseTemplate/TemplateCategory";
import classes from "./ChooseTemplatePage.module.css";
import { TextAny } from "../language/langTexts";

const ChooseTemplatePage = () => {
  const data_templates = [
    {
      id: 1,
      title: <TextAny text="general_template" />,
      description: <TextAny text="general_template_desc" />,
      type: "general",
    },
    {
      id: 2,
      title: <TextAny text="student_template" />,
      description: <TextAny text="student_template_desc" />,
      type: "student",
    },
    {
      id: 3,
      title: <TextAny text="technical_template" />,
      description: <TextAny text="technical_template_desc" />,
      type: "technical",
    },
  ];

  const templates = data_templates.map((data) => (
    <TemplateCategory
      key={data.id}
      title={data.title}
      description={data.description}
      type={data.type}
    />
  ));

  return (
    <div>
      <h1 className={classes["header"]}>
        <TextAny text="creator_main_text" />
      </h1>
      <div className={classes["templates-div"]}>{templates}</div>
    </div>
  );
};

export default ChooseTemplatePage;
