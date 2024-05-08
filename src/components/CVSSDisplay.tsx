import { Grid, Typography, Container, useTheme, Theme, PaletteMode } from '@mui/material';
import React from 'react';
import GaugeComponent from 'react-gauge-component';
import { determineExploitability, determineImpact, determineSeverity } from '../utils/severityUtils';

// Interfaces o Tipos usualmente se colocan al inicio del archivo o en un archivo separado si se reutilizan en varios lugares.
interface CVSSDisplayProps {
  baseScore: number | null;  // baseScore puede ser número o null si aún no está determinado.
  explotability: number | null;
  impact: number | null;
  // vectorString: string | null;      // vectorString es siempre un string.
  vectorComponent: React.ReactNode;
}


const CVSSDisplay = ({ baseScore, explotability, impact, vectorComponent }: CVSSDisplayProps) => {
  const theme: Theme = useTheme();
  const themeKey: PaletteMode = theme.palette.mode;

  const severity = determineSeverity(baseScore ?? 0, themeKey === 'dark');
  const _explotability = determineExploitability(explotability ?? 0, themeKey === 'dark');
  const _impact = determineImpact(impact ?? 0, themeKey === 'dark');




  return (
    <Container maxWidth="lg" key={themeKey}>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Grid container item xs={12} direction="row" justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" style={{ textAlign: 'center', width: "100%", fontWeight: "bold" }}>Base Score (Severity)</Typography>
            <GaugeComponent
              style={{ width: "80%", margin: "auto" }}
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  { limit: 3.9, color: '#7AC74F', tooltip: { text: 'Low' } },
                  { limit: 6.9, color: '#F2BB05', tooltip: { text: 'Medium' } },
                  { limit: 8.9, color: '#DF2935', tooltip: { text: 'High' } },
                  { color: themeKey === 'dark' ? '#FFF' : '#000000', tooltip: { text: 'Critical' } }
                ]
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={baseScore ?? 0}
              labels={{
                valueLabel: {
                  style: { fill: theme.palette.text.primary, textShadow: "none" }
                }
              }}
              minValue={0}
              maxValue={10}
            />
            <Typography variant="body1" style={{ textAlign: 'center', width: "100%", fontWeight: "bold", color: baseScore ? severity.color : theme.palette.text.primary }}>
              {baseScore ? severity.label : 'None'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" style={{ textAlign: 'center', width: "100%", fontWeight: "bold" }}>Explotability</Typography>
            <GaugeComponent
              style={{ width: "80%", margin: "auto" }}
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  { limit: 0.3, color: '#7AC74F', tooltip: { text: 'Minimal ' } },
                  { limit: 1, color: '#F2BB05', tooltip: { text: 'Low' } },
                  { limit: 3, color: '#DF2935', tooltip: { text: 'Moderate' } },
                  { color: themeKey === 'dark' ? '#FFF' : '#000000', tooltip: { text: 'High' } }
                ]
              }}
              labels={{
                valueLabel: {
                  style: { fill: theme.palette.text.primary, textShadow: "none" }
                }
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={explotability ?? 0}
              minValue={0}
              maxValue={3.9}
            />
            <Typography variant="body1" style={{ textAlign: 'center', width: "100%", fontWeight: "bold", color: baseScore ? _explotability.color : theme.palette.text.primary }}>
              {explotability ? _explotability.label : 'None'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" style={{ textAlign: 'center', width: "100%", fontWeight: "bold" }}>Impact</Typography>
            <GaugeComponent
              style={{ width: "80%", margin: "auto" }}
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                subArcs: [
                  { limit: 1, color: '#7AC74F', tooltip: { text: 'Minor ' } },
                  { limit: 3.3, color: '#F2BB05', tooltip: { text: 'Moderate' } },
                  { limit: 5.1, color: '#DF2935', tooltip: { text: 'Critical' } },
                  { color: themeKey === 'dark' ? '#FFF' : '#000000', tooltip: { text: 'Catastrophic' } }
                ]
              }}
              labels={{
                valueLabel: {
                  style: { fill: theme.palette.text.primary, textShadow: "none" }
                }
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={impact ?? 0}
              minValue={0}
              maxValue={6.1}
            />
            <Typography variant="body1" style={{ textAlign: 'center', width: "100%", fontWeight: "bold", color: baseScore ? _impact.color : theme.palette.text.primary }}>
              {impact ? _impact.label : 'None'}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {vectorComponent}

        </Grid>
      </Grid>
    </Container>
  );
};

export default CVSSDisplay;
