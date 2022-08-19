import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const client = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>,

  document.getElementById("app")
);
