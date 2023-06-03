import React from "react";
import classes from "./editorResumeTechV2.module.css";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
const EditorResumeTechV2 = ({
    name,
    surname,
    isPhoneNumber,
    phoneNumber,
    isEmail,
    email,
    isLocation,
    location,
    experienceList,
    skillList,
    languageList,
    image,
    reportTemplateRef,
    educationList,
}) => {
    return (
        <div ref={reportTemplateRef} className={classes["cv"]}>
            <div className={classes.centerside}>
                <div className={classes.column_left}>
                    <div style={{ textAlign: "left" }}>
                        <div className={classes.image}>
                            <img src={image} alt="zdj cv" />
                        </div>
                        <div className={classes.side_item}>
                            <div className={classes.side_title}>Contact</div>
                            {isPhoneNumber &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>Phone</div>
                                    <div className={classes.sub_content}>{phoneNumber}</div>
                                </div>
                            }
                            {isEmail &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>E-mail</div>
                                    <div className={classes.sub_content}>{email}</div>
                                </div>
                            }
                            {isLocation &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>Location</div>
                                    <div>{location}</div>
                                </div>
                            }
                        </div>
                        {skillList.length > 0 &&
                            <div className={classes.side_item}>
                                <div className={classes.side_title}>Skills</div>
                                <div className={classes.side_info}>
                                    {skillList.map((skill, index) => (
                                        <li key={index}>{skill.skill}</li>
                                    ))}
                                </div>
                            </div>
                        }
                        {languageList.length > 0 &&
                            <div className={classes.side_item}>
                                <div className={classes.side_title}>Languages</div>
                                <div className={classes.side_info}>
                                    {languageList.map((language, index) => (
                                        <li key={index}>{language.language}</li>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.column_right}>
                    <div className={`${classes.side_item}`}>
                        <div className={classes.name}>{name} {surname}</div>
                    </div>
                    {experienceList.length > 0 &&
                        <>
                            <div class={classes.side_item}>
                                <div className={classes.side_title}>Experience</div>
                                {experienceList.map((exp, index) =>
                                    <div className={classes.side_data}>
                                        <div>{exp.experienceFrom.split("-")[0]} - {exp.experienceTo.split("-")[0]}</div>
                                        <div className={classes.content}>
                                            <h1>{exp.companyName}</h1>
                                            <h2>{exp.companyCity}</h2>
                                            <p>{exp.jobDescription}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    }
                    {educationList.length > 0 &&
                        <>
                            <div class={classes.side_item}>
                                <div className={classes.side_title}>Education</div>
                                {educationList.map((education, index) =>
                                    <div className={classes.side_data}>
                                        <div>{education.schoolStartYear.split("-")[0]} - {education.schoolFinishYear.split("-")[0]}</div>
                                        <div className={classes.content}>
                                            <h1>{education.schoolName}</h1>
                                            <h2>{education.schoolCity}</h2>
                                            <p>{education.schoolDesc}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default EditorResumeTechV2;
