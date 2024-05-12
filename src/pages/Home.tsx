import {
  Box,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  ViewQuiltRounded,
  EditRounded,
  InputRounded,
} from "@mui/icons-material";

const features = [
  {
    icon: <ViewQuiltRounded />,
    title: "Full CVSS Calculator",
    description:
      "Complete tool to select and understand each CVSS metric and sub-metric, view impact, exploitability, and base score.",
    learnMoreLink: "/full",
  },
  {
    icon: <EditRounded />,
    title: "Quick CVSS Calculator",
    description:
      "A simplified version of the full calculator without detailed descriptions for each metric, for faster assessments.",
    learnMoreLink: "/quick",
  },
  {
    icon: <InputRounded />,
    title: "CVSS Vector Input",
    description:
      "Enter a CVSS vector to see its impact, exploitability, and base score, with options to modify and analyze the vector.",
    learnMoreLink: "/vector-input",
  },
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Welcome to CVSS Calculator
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        This web application is designed not only to calculate the CVSS (Common
        Vulnerability Scoring System) but also to assist in a comprehensive
        analysis of vulnerabilities by examining their impact and
        exploitability. This enables organizations to focus their mitigation
        efforts more effectively, targeting the most significant risks.
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <CardActionArea component="a" href={feature.learnMoreLink}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ color: "success.main", mr: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6">{feature.title}</Typography>
                </Box>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  {feature.description}
                </Typography>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
