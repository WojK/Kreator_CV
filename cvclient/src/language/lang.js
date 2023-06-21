import React from "react";
import { useState } from "react";

const pl = {
  /* navbar elemns */
  creator: "Kreator",
  advices: "Porady",
  about_us: "O nas",
  sign_in: "Logowanie",
  sign_up: "Rejestracja",
  /*Login page */
  login_welcome_text: "Witamy ponownie!!!",
  login_motivate: "Zaloguj się i stwórz swoje CV",
  password: "Hasło:",
  password_small: "hasło",
  login: "Zaloguj się",
  login_no_account: "Nie masz konta? Kliknij tutaj",
  /*Register page */
  register_welcome_text: "Stwórz idealne CV w 5 minut",
  register_motivate:
    "Zarejestruj się i skorzystaj z porad doświadczonych rekruterów",
  register_name: "Imię:",
  register_surname: "Nazwisko:",
  confirm_password: "Potwierdź hasło:",
  register_already_account: "Masz już konto? Kliknij tutaj",
  password_min_length: "Hasło musi posiadać minimum 6 znaków.",
  password_match: "Pola Hasło i Potwierdź hasło muszą być jednakowe.",
  /*Editor */
  editor_feel_free: "W każdej chwili możesz zmienić szablon",
  /*Tab names (on_left) */
  personal_tab: "Osobiste",
  profile_tab: "Profil",
  education_tab: "Wykształcenie",
  experience_tab: "Doświadczenie",
  skills_tab: "Umiejętności",
  languages_tab: "Języki obce",
  hobby_tab: "Zainteresowania",
  project_tab: "Projekty",
  soft_skills_tab: "Umiejętności miękkie",
  sum_tab: "Podsumowanie",
  /*Editor-Personal Tab*/
  editor_personal_main_text: "Rozpocznij od nagłówka swojego CV",
  editor_personal_submain_text:
    "Podaj swoje imię i nazwisko oraz dane kontaktowe, aby rekruter mógł do Ciebie napisać lub zadzwonić.",
  editor_personal_name: "Imię",
  editor_personal_surname: "Nazwisko",
  editor_personal_phone_number: "Numer telefonu",
  editor_personal_email: "Adres e-mail",
  editor_personal_location: "Lokalizacja",
  editor_personal_choose_image: "Wybierz zdjęcie",
  /*Editor-Profile Tab*/
  editor_profile_main_text: "Uzupełnij swoje dane osobowe",
  editor_profile_submain_text:
    "Opisz swój profil i udostępnij informacje o sobie!",
  editor_profile_profile_description: "Opis profilu",
  editor_profile_about_me: "O mnie",
  /*Editor-Education Tab*/
  editor_education_main_text: "Dodaj swoje wykształcenie",
  editor_education_submain_text:
    "Dodaj swój najnowszy poziom wykształcenia - jeśli masz wyższe wykształcenie, nie podawaj informacji o szkole średniej, a jeśli masz wykształcenie średnie, nie pisz o edukacji podstawowej.",
  editor_education_school_name: "Nazwa szkoły",
  editor_education_school_city: "Miasto szkoły",
  editor_education_start_year: "Data rozpoczęcia",
  editor_education_finish_year: "Data zakończenia",
  editor_education_school_desc: "Opisz swoją szkołę jednym lub dwoma zdaniami",
  /*Editor-Experience Tab*/
  editor_experience_main_text: "Teraz pora na Twoje doświadczenie",
  editor_experience_submain_text:
    "Rozpocznij od swojej najnowszej pracy. Możesz również dodać pracę wolontariacką, staże i działalność pozalekcyjną.",
  editor_experience_company_name: "Nazwa firmy",
  editor_experience_company_city: "Miasto firmy",
  editor_experience_experience_from: "Data rozpoczęcia",
  editor_experience_experience_to: "Data zakończenia",
  editor_experience_job_desc: "Opisz swoją pracę jednym lub dwoma zdaniami",
  /*Editor-Projects Tab*/
  editor_projects_main_text: "Przejdźmy do projektów",
  editor_projects_submain_text:
    "Teraz przedstaw projekty, na które jesteś dumny.",
  editor_projects_project_name: "Nazwa projektu",
  editor_projects_project_link: "Link do projektu",
  editor_projects_project_desc: "Opis projektu",
  editor_projects_project_tech_stack: "Stos technologiczny",
  /*Editor-Skills Tab*/
  editor_skills_main_text:
    "Wymień Twoje umiejętności, które uważasz za najbardziej wartościowe",
  editor_skills_submain_text:
    "Dodanie umiejętności do swojego CV pozwala wyróżnić się i pokazać swoje kompetencje potencjalnym pracodawcom.",
  editor_skills_skill: "Umiejętności",
  /*Editor-Languages Tab*/
  editor_languages_main_text: "Języki obce",
  editor_languages_submain_text:
    "Dodaj języki obce, którymi posługujesz się, i określ swój poziom znajomości.",
  editor_languages_language: "Język",
  /*Editor-Hobby Tab*/
  editor_hobby_main_text: "Zainteresowania",
  editor_hobby_submain_text:
    "Dziel się swoimi zainteresowaniami, pokaż, co napędza Twoje życie.",
  editor_hobby_hobby: "Zainteresowanie",
  /*Editor-Sum Tab*/
  editor_sum_main_text:
    "Już prawie gotowe! Zakończmy Twoje CV mocnym podsumowaniem.",
  editor_sum_clause: "Klauzula informacyjna RODO",
  editor_sum_clause_text:
    "I consent to the processing of my personal data by (company name) for the purpose of recruiting for the position I have applied for.",
  /*Main page */
  main_page_section1_main_text:
    "Przedstaw swoje umiejętności i doświadczenie w sposób, który wyróżni cię z tłumu.",
  main_page_section1_button: "Stwórz CV Teraz!",
  main_page_section2_main_text:
    "Twój sukces zawodowy zaczyna się od porządnego CV",
  main_page_section2_benefit1:
    "Stwórz profesjonalne CV szybko i łatwo. Wszystko w kilku prostych krokach w przeglądarce.",
  main_page_section2_benefit2:
    "Zwiększ swoje szanse na zatrudnienie dzięki czystemu, schludnemu i dobrze zorganizowanemu CV.",
  main_page_section2_benefit3:
    "Przygotuj swoje CV zgodnie z powszechnie przyjętymi standardami, aby nie zapomnieć o żadnych istotnych szczegółach.",
  main_page_section3_main_text: "Stwórz swoje wymarzone CV",
  main_page_section3_benefit1_title: "Najwyższa Jakość",
  main_page_section3_benefit1:
    "Dzięki naszemu rozwiniętemu, a jednocześnie intuicyjnemu Kreatorowi CV tworzenie życiorysu to łatwizna. Generowanie jednego szablonu zajmuje mniej niż 2 minuty. Wystarczy wypełnić formularz.",
  main_page_section3_benefit2_title: "Profesjonalne Szablony",
  main_page_section3_benefit2:
    "Wybierz spośród 9 profesjonalnych szablonów CV. Zaprojektowanych przez ekspertów i zaadoptowanych przez osoby sukcesu.",
  main_page_section3_benefit3_title: "Porady",
  main_page_section3_benefit3:
    "Sprawdź zakładkę z Poradami, aby uczyć się od najlepszych rekruterów w branży i zadbać o wszystkie istotne elementy swojego CV.",
  main_page_section3_benefit4_title: "Zdobądź swój wymarzony zawód",
  main_page_section3_benefit4:
    "Zaskocz swojego nowego pracodawcę wyróżniającym się CV. Bez względu na twoje doświadczenie. Zdobądź pracę, o której zawsze marzyłeś/aś.",
  main_page_section3_benefit5_title: "Rozwiązanie oszczędzające czas",
  main_page_section3_benefit5:
    "Wygeneruj swoje CV w kilka minut dzięki naszemu efektywnemu Kreatorowi CV. Pożegnaj żmudny i czasochłonny proces ręcznego formatowania swojego życiorysu.",
  main_page_section3_benefit6_title: "Nowoczesne i stylowe wzory",
  main_page_section3_benefit6:
    "Wyróżnij się spośród konkurencji dzięki naszej kolekcji profesjonalnie zaprojektowanych szablonów CV. Każdy szablon jest starannie opracowany, aby pozostawić trwałe wrażenie i zaprezentować Twoje unikalne umiejętności i kwalifikacje.",
  main_page_section3_benefit7_title: "Prosta personalizacja",
  main_page_section3_benefit7:
    "Personalizuj swoje CV bez wysiłku dzięki naszemu przyjaznemu interfejsowi. Łatwo edytuj, aktualizuj i dostosowuj swoje CV, aby dopasować je do każdej aplikacji o pracę, oszczędzając czas i zapewniając, że Twoje CV idealnie odpowiada wymaganiom danej roli.",
  /*Creator_choose_template*/
  general_template: "Szablon Ogólny",
  creator_main_text:
    "Odkryj szablony CV, które odpowiadają Twoim celom i robią wrażenie.",
  general_template_desc:
    "Ogólne szablony CV to predefiniowane formaty, które mogą być używane przez osoby z różnych branż i zawodów do stworzenia profesjonalnego CV, w którym przedstawiają swoje kwalifikacje, umiejętności, doświadczenie zawodowe i osiągnięcia.",
  student_template: "Szablon Studencki",
  student_template_desc:
    "Szablony CV dla studentów to predefiniowane formaty, które studenci mogą używać do stworzenia profesjonalnego CV, w którym przedstawiają swoje osiągnięcia akademickie, umiejętności, doświadczenie zawodowe i działalność pozaszkolną.",
  technical_template: "Szablon Techniczny",
  technical_template_desc:
    "Techniczne szablony CV są predefiniowanymi formatami, które są specjalnie dostosowane dla osób pracujących w dziedzinach technicznych, takich jak inżynieria, informatyka czy nauka. Szablony te są zaprojektowane tak, aby klarownie i zwięźle prezentować umiejętności techniczne, wiedzę i osiągnięcia.",
  general_template_choose: "Wybierz Swój Szablon Ogólny!",
  student_template_choose: "Wybierz Swój Szablon Studencki!",
  technical_template_choose: "Wybierz Swój Szablon Techniczny!",
  /*About us page*/
  about_us_1:
    "Projekt zrealizowany w niewilkim zespole prowadzony w oparciu o metodykę zwinną",
  about_us_2:
    "Projekt zrealizowany w ramach przedmiotu 'Projekt Zespołowy' na Politechnice Warszawskiej @2022/2023",
  about_us_3:
    "Projekt Graficzny przygotowany w Figmie, kod źródłowy oraz dokumentację można znaleźć na github'ie: ",
  /*Footer */
  footer: "CV_CREATOR - PROJEKT ZESPOŁOWY @2022/2023",
  /*CV Preview - right side */
  section_profile_desc: "Opis profilu",
  section_experience: "Doświadczenie zawodowe",
  section_education: "Wykształcenie",
  section_about_me: "O mnie",
  section_languages: "Języki obce",
  section_skills: "Umiejętności",
  section_hobbies: "Zainteresowania",
  section_contact: "Kontakt",
  section_projects: "Projekty",
  section_clause: "Klauzula",
  clause:
    "Wyrażam zgodę na przetwarzanie danych osobowych w celu i zakresie niezbędnym dla procesu rekrutacji.",
  section_tech_skills: "Technologie",
  section_soft_skills: "Umiejętności miękkie",
  currently: "obecnie",
};

const en = {
  creator: "Creator",
  advices: "Advices",
  about_us: "About us",
  sign_in: "Sign In",
  sign_up: "Sign Up",
  /*Login page */
  login_welcome_text: "Nice to see you again!!!",
  login_motivate: "Sign in and continue your CV",
  login: "Login",
  password: "Password:",
  password_small: "password",
  login_no_account: "Do not have an account? Click here",
  /*Register page */
  register_welcome_text: "Create perfect CV in 5 minutes",
  register_motivate: "Sign up and learn from our experience",
  register_name: "Name:",
  register_surname: "Surname:",
  confirm_password: "Confirm Password:",
  register_already_account: "Already have an account? Click here",
  password_min_length: "Password's minimum length is 6.",
  password_match: "Password and Confirm Password does not match.",
  /*Editor */
  editor_feel_free: "Feel free to switch your template any time",
  /*Tab names (on_left) */
  personal_tab: "Personal",
  profile_tab: "Profile",
  education_tab: "Education",
  experience_tab: "Experience",
  skills_tab: "Skills",
  languages_tab: "Languages",
  hobby_tab: "Hobby",
  project_tab: "Projects",
  soft_skills_tab: "Soft Skills",
  sum_tab: "Sum",
  /*Editor-Personal Tab*/
  editor_personal_main_text: "Start with your resume header",
  editor_personal_submain_text:
    "Enter your full name and contact information so a recruiter can write or call you.",
  editor_personal_name: "Name",
  editor_personal_surname: "Surname",
  editor_personal_phone_number: "Phone number",
  editor_personal_email: "Email",
  editor_personal_location: "Location",
  editor_personal_choose_image: "Choose Image",
  /*Editor-Profile Tab*/
  editor_profile_main_text: "Fill in your personal information",
  editor_profile_submain_text:
    "Describe your profile and post information about yourself!",
  editor_profile_profile_description: "Profile description",
  editor_profile_about_me: "About me",
  /*Editor-Education Tab*/
  editor_education_main_text: "Add your education",
  editor_education_submain_text:
    "Add your most recent level of education - if you have higher education - do not list secondary education, and if you have secondary education, do not write about primary education.",
  editor_education_school_name: "School Name",
  editor_education_school_city: "School City",
  editor_education_start_year: "Start Year",
  editor_education_finish_year: "Finish Year",
  editor_education_school_desc: "Describe your school in one or two sentences",
  /*Editor-Experience Tab*/
  editor_experience_main_text: "Now let's work on your experience",
  editor_experience_submain_text:
    "Start with your most recent job. You can also add volunteer work, internships and extra-curricular activities.",
  editor_experience_company_name: "Company Name",
  editor_experience_company_city: "Company City",
  editor_experience_experience_from: "Experience From",
  editor_experience_experience_to: "Experience To",
  editor_experience_job_desc: "Describe your job in one or two sentences",
  /*Editor-Projects Tab*/
  editor_projects_main_text: "Ok, let's go with projects",
  editor_projects_submain_text: "Now present projects you are proud of.",
  editor_projects_project_name: "Project Name",
  editor_projects_project_link: "Project Link",
  editor_projects_project_desc: "Project Description",
  editor_projects_project_tech_stack: "Tech Stack",
  /*Editor-Skills Tab*/
  editor_skills_main_text: "Let's pick your most important skills",
  editor_skills_submain_text:
    "Adding skills to your CV allows you to stand out and showcase your abilities to potential employers.",
  editor_skills_skill: "Skill",
  /*Editor-Languages Tab*/
  editor_languages_main_text: "Foreign languages",
  editor_languages_submain_text:
    "Add the foreign languages you speak and specify your level of knowledge.",
  editor_languages_language: "Language",
  /*Editor-Hobby Tab*/
  editor_hobby_main_text: "Hobby",
  editor_hobby_submain_text:
    "Share your interests, show what drives your life.",
  editor_hobby_hobby: "Hobby",
  /*Editor-Sum Tab*/
  editor_sum_main_text:
    "It's almost ready! Let's finish your resume with a strong summary.",
  editor_sum_clause: "Clause",
  editor_sum_clause_text:
    "I consent to the processing of my personal data by (company name) for the purpose of recruiting for the position I have applied for.",
  /*Main page */
  main_page_section1_main_text:
    "Showcase your skills and experience in a way that makes you stand out from the crowd.",
  main_page_section1_button: "Create CV Right Now!",
  main_page_section2_main_text:
    "Your career success starts with well-designed CV",
  main_page_section2_benefit1:
    "Create a professional resume quickly and easily. All in a few quick steps in your browser.",
  main_page_section2_benefit2:
    "Boost your chance to get employed with sharp, clean and well-organised resume.",
  main_page_section2_benefit3:
    "Organize your CV with commonly known standards to do not forget all crucial details.",
  main_page_section3_main_text: "Create your dream CV",
  main_page_section3_benefit1_title: "Highest Quality",
  main_page_section3_benefit1:
    "With our advanced and intuitive CV Creator, creating a resume is a breeze. It takes less than 2 minutes to generate one template. Just complete form.",
  main_page_section3_benefit2_title: "Professional Templates",
  main_page_section3_benefit2:
    "Choose from 9 professional resume templates. Designed by experts and adopted by successful experts.",
  main_page_section3_benefit3_title: "Advices",
  main_page_section3_benefit3:
    "Check out our Advices page to learn from the best recruiters in the industry and take care of all the essential elements of your resume.",
  main_page_section3_benefit4_title: "Get your Dream Job",
  main_page_section3_benefit4:
    "Surprise your new employer with an effective and distinctive CV. Regardless of your experience. Get that job you've always dreamed of.",
  main_page_section3_benefit5_title: "Time-Saving Solution",
  main_page_section3_benefit5:
    "Generate your CV in minutes with our efficient CV Creator. Say goodbye to the tedious and time-consuming process of manually formatting your resume.",
  main_page_section3_benefit6_title: "Stylish and Modern Designs",
  main_page_section3_benefit6:
    "Stand out from the competition with our collection of professionally designed resume templates. Each template is carefully crafted to make a lasting impression and showcase your unique skills and qualifications.",
  main_page_section3_benefit7_title: "Effortless Customization",
  main_page_section3_benefit7:
    "Personalize your CV effortlessly with our user-friendly interface. Easily edit, update, and customize your resume to tailor it to each job application, saving you time and ensuring your CV perfectly matches the requirements of the role.",
  /*Creator_choose_template*/
  general_template: "General Template",
  creator_main_text:
    "Discover CV templates that match your goals and make an impact.",
  general_template_desc:
    "General CV templates are pre-designed formats that can be used by individuals from various industries and professions to create a professional-looking CV (curriculum vitae) to showcase their qualifications, skills, work experience, and achievements.",
  student_template: "Student Template",
  student_template_desc:
    "Student CV templates are pre-designed formats that students can use to create a professional-looking CV (curriculum vitae) to showcase their academic achievements, skills, work experience, and extracurricular activities.",
  technical_template: "Technical Template",
  technical_template_desc:
    "Technical CV templates are pre-designed formats that are specifically tailored for individuals working in technical fields, such as engineering, IT, or science. These templates are designed to showcase technical skills, expertise, and achievements in a clear and concise manner.",
  general_template_choose: "Choose Your General Template!",
  student_template_choose: "Choose Your Student Template!",
  technical_template_choose: "Choose Your Technical Template!",
  /*About us page */
  about_us_1: "Created in small team managed with Scrum Method.",
  about_us_2:
    "Project created within course 'Team Project' on Warsaw University of Technology @2022/2023",
  about_us_3:
    "Project Figma (UI) design, source code and documentation can be found on github: ",
  /*Footer */
  footer: "CV_CREATOR - TEAM PROJECT @2022/2023",
  /*CV Preview - right side */
  section_profile_desc: "Profile description",
  section_experience: "Job Experience",
  section_education: "Education",
  section_about_me: "About me",
  section_languages: "Languages",
  section_skills: "Skills",
  section_hobbies: "Hobbies",
  section_contact: "Contact",
  section_projects: "Projects",
  section_clause: "Clause",
  clause:
    "I consent to the processing of my personal data for the purpose and scope necessary for the recruitment process.",
  section_tech_skills: "Tech skills",
  section_soft_skills: "Soft skills",
  currently: "currently",
};

export const LangContext = React.createContext({
  lang: "en",
  setLang: () => {},
  tr: (s) => {},
  Tr: (props) => {},
});

export function LangContextProvider(props) {
  const [lang, setLang] = useState("en");
  const tr = (s) => {
    let r = null;
    if (lang === "en") r = en[s];
    else if (lang === "pl") r = pl[s];

    if (!r) {
      return s;
    }
    return r;
  };
  const Tr = (props) => {
    return <>{tr(props.children)}</>;
  };
  const value = { lang, setLang, tr, Tr };

  return (
    <LangContext.Provider value={value}>{props.children}</LangContext.Provider>
  );
}
