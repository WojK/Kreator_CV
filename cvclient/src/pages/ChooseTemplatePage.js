import TemplateCategory from "../components/chooseTemplate/TemplateCategory";
import classes from "./ChooseTemplatePage.module.css";

const ChooseTemplatePage = () => {
  const data_templates = [
    {
      title: "General Template",
      description:
        "General CV templates are pre-designed formats that can be used by individuals from various industries and professions to create a professional-looking CV (curriculum vitae) to showcase their qualifications, skills, work experience, and achievements.",
      type: "general",
    },
    {
      title: "Student Template",
      description:
        "Student CV templates are pre-designed formats that students can use to create a professional-looking CV (curriculum vitae) to showcase their academic achievements, skills, work experience, and extracurricular activities.",
      type: "student",
    },
    {
      title: "Technical Template",
      description:
        "Technical CV templates are pre-designed formats that are specifically tailored for individuals working in technical fields, such as engineering, IT, or science. These templates are designed to showcase technical skills, expertise, and achievements in a clear and concise manner.",
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
