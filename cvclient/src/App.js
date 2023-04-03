import React from "react";
import { Editor } from "./components";
import MainLayoutPage from "./pages/MainLayoutPage";
import AdvicesPage from "./pages/AdvicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ChooseTemplatePage from "./pages/ChooseTemplatePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdviceArticle from "./components/advicePage/AdviceArticle"

import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayoutPage />}>
      <Route path="creator" element={<ChooseTemplatePage />} />,
      <Route path="advices" element={<AdvicesPage />} />,
      <Route path="advices/:adviceId" element={<AdviceArticle />} />,
      <Route path="about_us" element={<AboutUsPage />}></Route>,
      <Route path="my_account"></Route>,
      <Route path="editor" element={<Editor />}></Route>,
    </Route>,
      <Route path="register" element={<RegisterPage />}></Route>,
      <Route path="login" element={<LoginPage />}></Route>,
  ])
);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <div className="App"></div>
      </RouterProvider>
    </>
  );
}

export default App;
