import React from "react";
import {
  Box,
  Container,
  ListItemButton,
  ListItemText,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ProjectSection from "./components/ProjectSection";
import WorkSection from "./components/WorkSection";
import ProfilePicture from "./assets/profile-picture.jpg";

import "./App.css";

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#BDC3C7",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        "&.MuiContainer-root": {
          paddingLeft: 0,
          paddingRight: 0,
          "@media (min-width: 600px)": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: isSmallScreen ? "auto" : "200px",
          backgroundImage: "linear-gradient(135deg, #003366 100%, #004080 0%)",
          mb: 1,
          p: 1,
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: isSmallScreen ? "center" : "center",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          component="img"
          src={ProfilePicture}
          className="fadeIn"
          sx={{
            height: 150,
            width: 150,
            borderRadius: "50%",
            marginRight: 2,
            boxShadow: "0px 5px 20px #000000",
          }}
        /><Box>
        <Typography
          className="fadeIn"
          variant={isSmallScreen ? "h4" : "h2"}
          style={{ fontWeight: "bold" }}
        >
          Muhammad Farrhan
        </Typography>
        <Typography
          className="fadeIn"
          style={{ fontStyle: "italic" }}
        >
          Full Stack Developer | President of Wheelchair Basketball Association (Singapore)
          
        </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          "@media (max-width: 900px)": {
            flexDirection: "column",
          },
        }}
      >
        {/* Left Stem */}
        <Box
          sx={{
            width: { md: "300px", xs: "100%" },
            backgroundColor: "#003366",
            mr: { md: 1, xs: 0 },
            mb: 1,
            p: 1,
            flexShrink: 0,
          }}
        >
          <Typography variant="h4">Skills</Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="JavaScript Java Python" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="Bootstrap CSS HTML jQuery React" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="MySQL Node.js PostgreSQL" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="Git GitHub Maven" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="Discord Jira Slack Zoom" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="Docker Heroku" />
            </ListItem>
          </List>
          <Typography variant="h4" sx={{ pt: 1 }}>
            Education
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="Singapore University of Social Sciences | BSc (Hons) Information Technology and Business (ERP)" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="edx Harvard University | CS50's Introduction to Programming with Python" />
            </ListItem>
            <ListItem sx={{ p: 0, pl: 1 }}>
              <ListItemText primary="Ngee Ann Polytechnic | Diploma in Marine & Offshore Technology" />
            </ListItem>
          </List>
        </Box>

        {/* Body */}
        <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
          {/* Body 1 */}
          <Box
            sx={{
              mb: 1,
              p: 1,
              backgroundColor: "#003366",
              flex: 1,
            }}
          >
            <ProjectSection />
          </Box>

          {/* Body 2 */}
          <Box
            sx={{
              mb: 1,
              p: 1,
              backgroundColor: "#003366",
              flex: 1,
            }}
          >
            <WorkSection />
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Box
        sx={{
          height: "100px",
          backgroundColor: "#B21400",
          p: 1,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <a href="mailto:work.farrhan@gmail.com" >
          <EmailIcon style={{ color: "white" }} />
        </a>
        <a href="https://www.facebook.com/farrhan" target="_blank">
          <FacebookIcon style={{ color: "white" }} />
        </a>
        <a href="https://github.com/farrhanng" target="_blank">
          <GitHubIcon style={{ color: "white" }} />
        </a>
        <a href="https://www.linkedin.com/in/farrhan/" target="_blank">
          <LinkedInIcon style={{ color: "white" }} />
        </a>
        <a href="https://wa.me/+6596566390" target="_blank">
          <WhatsAppIcon style={{ color: "white" }} />
        </a>
      </Box>
    </Container>
  );
}

export default App;
