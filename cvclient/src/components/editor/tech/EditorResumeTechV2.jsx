import React from "react";
import classes from "./editorResumeTechV2.module.css";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
const EditorResumeTechV2 = ({
    name,
    surname,
    phoneNumber,
    email,
    location,
    experienceList,
    projectList,
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
                        {/* {profileDescription &&
                            <div className={classes.side_item}>
                                <div className={classes.side_title}>Profile</div>
                                <div className={classes.side_info}>
                                    {profileDescription}</div>
                            </div>
                        } */}
                        {/* {aboutme &&
                            <div className={classes.side_item}>
                                <div className={classes.side_title}>About me</div>
                                <div className={classes.side_info}>{aboutme}</div>
                            </div>
                        } */}
                        <div className={classes.side_item}>
                            <div className={classes.side_title}>Contact</div>
                            {phoneNumber &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>Phone</div>
                                    <div className={classes.sub_content}>{phoneNumber}</div>
                                </div>
                            }
                            {email &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>E-mail</div>
                                    <div className={classes.sub_content}>{email}</div>
                                </div>
                            }
                            {location &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>Location</div>
                                    <div>{location}</div>
                                </div>
                            }
                            {/* {isGitHub &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>Github</div>
                                    <div className={classes.sub_content}>{github}</div>
                                </div>
                            }
                            {isLinkedin &&
                                <div className={classes.side_info}>
                                    <div className={classes.sub_title}>Linkedin</div>
                                    <div className={classes.sub_content}>{linkedin}</div>
                                </div>
                            } */}
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
                        {/* <div className={classes.role}>UI Designer</div> */}
                    </div>
                    {experienceList.length > 0 &&
                        <>
                            <div class={classes.side_item}>
                                <div className={classes.side_title}>Experience</div>
                                {experienceList.map((todo, index) =>
                                    <div className={classes.side_data}>
                                        <div>{todo.experienceFrom.split("-")[0]} - {todo.experienceTo.split("-")[0]}</div>
                                        <div className={classes.content}>
                                            <h1>{todo.companyName}</h1>
                                            <h2>{todo.companyCity}</h2>
                                            <p>{todo.jobDescription}</p>
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
                                {educationList.map((todo, index) =>
                                    <div className={classes.side_data}>
                                        <div>{todo.schoolStartYear.split("-")[0]} - {todo.schoolFinishYear.split("-")[0]}</div>
                                        <div className={classes.content}>
                                            <h1>{todo.schoolName}</h1>
                                            <h2>{todo.schoolCity}</h2>
                                            <p>{todo.schoolDesc}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    }

                    {/* {projectList.length > 0 &&
                        <>
                            <div class={classes.side_item}>
                                <div className={classes.side_title}>Projects</div>
                                {projectList.map((todo, index) =>
                                    <div className={classes.side_data}>
                                        <div className={classes.project}>
                                            <h1>{todo.projectName}</h1>
                                            <h2>{todo.projectLink}</h2>
                                            <p>{todo.projectDescription}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    } */}

                </div>
            </div>
        </div>
    );
};

export default EditorResumeTechV2;
