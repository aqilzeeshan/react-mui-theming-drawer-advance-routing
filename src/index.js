import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Stuff from './components/Stuff'
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import { red } from "@mui/material/colors";

  const theme = createTheme({
    spacing: 10,
    palette: {
      //mode: "dark",
      mode: "light",
      // primary: {
      //   // main: orange[500]
      // }
      customRibRed: {
        main: red[400],
        superDark: red[800],
        superLight: red[100]
      }
    },
    typography: {
      myVariant: {
        fontSize: "2rem",
        color: 'red',
      },    
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  });

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
      <Route path="/stuff" element={<Stuff />}/>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);