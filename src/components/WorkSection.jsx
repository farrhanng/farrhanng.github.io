import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import engineer from "../assets/engineer.png";
import planner from "../assets/stowage-planner.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#003366",
        display: "flex",
        flex: 1,
        flexDirection: isSmallScreen ? "column" : "row",
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        allowScrollButtonsMobile={true}
        sx={{
          pr: isSmallScreen ? 0 : 1,
          display: "flex",
          flexShrink: 0,
          height: "100%",
          "& .MuiTabs-flexContainer": {
            height: "100%",
            flexDirection: isSmallScreen ? "row" : "column",
          },
          ".MuiTabs-scrollButtons.Mui-disabled": {
            opacity: 0.3,
          },
          "& .MuiTab-root": {
            transition: "all 0.35s ease",
            "&:hover": {
              backgroundColor: "rgba(189, 195, 199, 0.2)",
            },
            "&.Mui-selected": {
              backgroundColor: "rgba(189, 195, 199, 0.4)",
              color: "white",
            },
          },
        }}
      >
        <Tab
          label={
            <div style={{ textAlign: "center", color: "white" }}>
              Train And Place
              <br />
              Jr Full Stack Developer
            </div>
          }
          {...a11yProps(0)}
          sx={{ flex: 1, p: 0, minHeight: 0, minWidth: "50%" }}
        />
        <Tab
          label={
            <div style={{ textAlign: "center", color: "white", width: "100%" }}>
              SCTP in
              <br />
              Software Engineering
            </div>
          }
          {...a11yProps(1)}
          sx={{ flex: 1, p: 0, minHeight: 0, minWidth: "50%" }}
        />
        <Tab
          label="Trade Manager"
          {...a11yProps(2)}
          sx={{ flex: 1, p: 0, minHeight: 0, minWidth: "50%", color: "white" }}
        />
        <Tab
          label="Stowage Planner"
          {...a11yProps(3)}
          sx={{ flex: 1, p: 0, minHeight: 0, minWidth: "50%", color: "white" }}
        />
        <Tab
          label="Engineer"
          {...a11yProps(4)}
          sx={{ flex: 1, p: 0, minHeight: 0, minWidth: "50%", color: "white" }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Typography
          variant="h4"
          sx={{ textAlign: isSmallScreen ? "center" : "left" }}
        >
          Temasek Polytechnic & Generation Singapore
        </Typography>
        <Typography
          sx={{ opacity: 0.5, textAlign: isSmallScreen ? "center" : "left" }}
        >
          September 2023 to January 2024 • 3 months
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Worked collaboratively in a duo to create 'Purrfect Pawtners,' a pet
          adoption platform, with a key focus on backend development and
          database management using JavaScript, Java, and MySQL. This website
          serves as a comprehensive solution for pet-related enterprises,
          breeders, and owners, featuring functionalities for listing pets and
          matching them with prospective owners.
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography
          variant="h4"
          sx={{ textAlign: isSmallScreen ? "center" : "left" }}
        >
          Nanyang Technological University & Skills Union
        </Typography>
        <Typography
          sx={{
            opacity: 0.5,
            textAlign: isSmallScreen ? "center" : "left",
            x: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          May 2023 to November 2023 • 6 months
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Introduction to Software Development: Acquired fundamental coding
          skills in HTML, CSS, and JavaScript, enabling the creation of basic
          yet functional web components.
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Web Fundamentals with React JS: Developed proficiency in building web
          pages using HTML.
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Backend Fundamentals with Java Spring Boot & Database: Gained
          expertise in backend application development using Java, Spring Boot,
          and PostgreSQL.
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Introduction to DevOps: Acquired foundational knowledge of DevOps
          practices.
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Mobile Development with React Native: Learned to convert UX designs
          into mobile applications.
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography
          variant="h4"
          sx={{ textAlign: isSmallScreen ? "center" : "left" }}
        >
          Maersk
        </Typography>
        <Typography
          sx={{ opacity: 0.5, textAlign: isSmallScreen ? "center" : "left" }}
        >
          September 2022 to December 2022 • 3 months
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Enhanced customer experience, reducing transit times by over 1 day, by
          bridging communication between sales and pricing managers to develop
          tailored solutions.
        </Typography>
        <Typography
          sx={{
            textAlign: isSmallScreen ? "justify" : "left",
            px: isSmallScreen ? 1 : 0,
            pb: 1,
          }}
        >
          Leveraged problem-solving skills in data analysis to devise
          region-specific pricing strategies, boosting profitability and
          operational efficiency.
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Box
            component="img"
            src={planner}
            sx={{
              width: isSmallScreen ? "auto" : 400,
              height: 250,
              pr: isSmallScreen ? 0 : 1,
            }}
          />
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: isSmallScreen ? "center" : "left" }}
            >
              Maersk
            </Typography>
            <Typography
              sx={{
                opacity: 0.5,
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              October 2018 to May 2022 • 3 years 7 months
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Optimized port time, directly enhancing KPIs through meticulous
              stowage planning for 50 ships.
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Recognized with Spot and Star Awards for customer-centric and safe
              operations.
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Contributed to data analytics projects, achieving a 1-3%
              improvement in PNL margin.
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Played an active role in the GMC Committee, fostering team
              cohesion through various activities.
            </Typography>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Box
            component="img"
            src={engineer}
            sx={{
              width: isSmallScreen ? "auto" : 400,
              height: 250,
              pr: isSmallScreen ? 0 : 1,
            }}
          />
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: isSmallScreen ? "center" : "left" }}
            >
              Keppel Shipyard
            </Typography>
            <Typography
              sx={{
                opacity: 0.5,
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              November 2012 to September 2018 • 5 years 10 months{" "}
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Led 80 high-paced repair and retrofitting projects, managing 200
              workers and coordinating cross-departmentally.
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Pioneered departmental innovation systems, leading a team of 5 to
              win company-level awards.
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Contributed to data analytics projects, achieving a 1-3%
              improvement in PNL margin.
            </Typography>
            <Typography
              sx={{
                textAlign: isSmallScreen ? "justify" : "left",
                px: isSmallScreen ? 1 : 0,
                pb: 1,
              }}
            >
              Played an active role in the GMC Committee, fostering team
              cohesion through various activities.
            </Typography>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
