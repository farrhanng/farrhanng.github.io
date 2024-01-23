import React, { useState } from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import imageWBA from "../assets/wba.org.sg.png";
import imagePP from "../assets/purrfect-pawtners.png";

function ProjectSection() {
  const projects = [
    {
      name: "Wheelchair Basketball Association",
      description:
        "The website of the Wheelchair Basketball Association (WBA) of Singapore features a user-friendly layout and a clean, intuitive design. It utilizes a low-code or no-code platform, integrating smoothly within the Google ecosystem. This approach promotes ease of maintenance and updates, allowing for streamlined content management. The architecture of the site likely supports scalability and adaptability, essential for evolving organizational needs. ",
      image: imageWBA,
    },
    {
      name: "Purrfect Pawtners",
      description:
        "Purrfect Pawtners is a full-stack web application designed to connect adoptable pets with potential families. Created as a capstone project by animal lovers, it aims to simplify pet adoption by addressing the challenges faced by both shelters and prospective pet owners. The platform combines a user-friendly front-end built with HTML, CSS, Bootstrap, and JavaScript, and a robust back-end powered by Java and Spring Boot, with a MySQL database. Managed using Jira, this project reflects a commitment to animal welfare and the effective use of technology for social good.",
      image: imagePP,
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const { name, description, image } = projects[currentProjectIndex];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#003366",
        p: 0,
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {/* Image and Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          pr: isSmallScreen ? 0 : 1,
          pb: isSmallScreen ? 1 : 0,
        }}
      >
        {/* Image */}
          <Box
            onClick={() => window.open('https://www.wba.org.sg/', '_blank')}
            sx={{
              width: "100%",
              height: "100%",
              paddingBottom: "75%",
              position: "relative",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              borderRadius: 1,
              mb: 1,
              cursor: "pointer"
            }}
          ></Box>
        {/* Button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
            onClick={prevProject}
          >
            Prev Project
          </Button>
          <Button variant="contained" color="primary" onClick={nextProject}>
            Next Project
          </Button>
        </Box>
      </Box>

      {/* Project Name & Description */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            p: isSmallScreen ? 1 : 0,
            textAlign: isSmallScreen ? "justify" : "left",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectSection;
