import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./page/LoginPage.jsx";

import Applayout from "./components/Applayout.jsx";
import Mybooks from "./page/Mybooks.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<App />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="mybooks" element={<Mybooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
