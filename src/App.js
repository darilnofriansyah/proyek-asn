import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./lib/routes";
import CustomLayout from "./pages/Layout";
import Home from "./pages/home";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "en",
  },
  {
    code: "id",
    name: "Indonesia",
    country_code: "id",
  },
];

export default function App() {
  const currentLanguageCode = cookies.get("il8next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
}
