import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import Navbar from "scenes/navbar";
import HomePage from "scenes/homePage/index.jsx";
import LoginPage from "scenes/loginPage/index.jsx";
import ProfilePage from "scenes/profilePage/index.jsx";
import EventPage from "scenes/eventPage/event.jsx";
import Chat from "scenes/chatPage/Chat.jsx";
import EditProfile from "scenes/editprofile/index.jsx";
import DonationPage from "scenes/donationPage/index.jsx";
import FaqPage from "scenes/FaqPage/index.jsx";
import WorkPage from "scenes/workPage/index.jsx";
import EventRegistrationForm from "scenes/eventPage/eventform.jsx";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/ChatPage" element={<Chat />} />
            <Route path="/EditProfile/:userId" element={<EditProfile />} />
            <Route path="/EventPage" element={<EventPage />} />
            <Route path="/DonationPage" element={<DonationPage />} />
            <Route path="/FaqPage" element={<FaqPage />} />
            <Route path="/WorkPage" element={<WorkPage />} />
            <Route path="/EventRegistrationForm/:eventpostId" element={<EventRegistrationForm />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
