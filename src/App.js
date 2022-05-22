import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./lib/routes";
import CustomLayout from "./pages/Layout";
import Home from "./pages/home";

import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "id",
    name: "Indonesia",
    country_code: "id",
  },
  {
    code: "en",
    name: "English",
    country_code: "en",
  },
];

export default function App() {
  const currentLanguageCode = cookies.get("il8next") || "id";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
}
