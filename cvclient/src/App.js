import React from "react";
import { Editor } from "./components";
import MainLayoutPage from "./pages/MainLayoutPage";
import AdvicesPage from "./pages/AdvicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ChooseTemplatePage from "./pages/ChooseTemplatePage";
import ChooseTemplateStylesPage from "./pages/ChooseTemplateStylesPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdviceArticle from "./components/advicePage/AdviceArticle";
import MyAccount from "./pages/MyAccount";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { LangContextProvider } from "./language/lang";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayoutPage />}>
      <Route path="creator" element={<ChooseTemplatePage />} />,
      <Route
        path="creator/:cvtemplate"
        element={<ChooseTemplateStylesPage />}
      />,
      <Route path="advices" element={<AdvicesPage />} />,
      <Route path="advices/:adviceId" element={<AdviceArticle />} />,
      <Route path="about_us" element={<AboutUsPage />}></Route>,
      <Route path="my_account" element={<MyAccount />}></Route>,
      <Route path="editor/:editorId" element={<Editor />}></Route>,
    </Route>,
    <Route path="register" element={<RegisterPage />}></Route>,
    <Route path="login" element={<LoginPage />}></Route>,
  ])
);

function App() {
  return (
    <>
    <LangContextProvider>
      <RouterProvider router={router}>
        <div className="App"></div>
      </RouterProvider>
    </LangContextProvider>
    </>
  );
}

export default App;
