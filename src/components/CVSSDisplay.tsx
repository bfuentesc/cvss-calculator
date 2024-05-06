import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import GaugeComponent from 'react-gauge-component';
import { determineSeverity } from '../utils/severityUtils';

// Interfaces o Tipos usualmente se colocan al inicio del archivo o en un archivo separado si se reutilizan en varios lugares.
interface CVSSDisplayProps {
  baseScore: number | null;  // baseScore puede ser número o null si aún no está determinado.
  // vectorString: string | null;      // vectorString es siempre un string.
  vectorComponent: React.ReactNode;
}


const CVSSDisplay = ({ baseScore, vectorComponent }: CVSSDisplayProps) => {
  const severity = determineSeverity(baseScore ?? 0);
  console.log(`The severity is ${severity.label} with color ${severity.color}.`);
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={12} sx={{ height: '75%' }}>
          <GaugeComponent
            style={{ width: "100%", height: "100%" }}
            type="semicircle"
            arc={{
              width: 0.2,
              padding: 0.005,
              cornerRadius: 1,
              subArcs: [
                { limit: 3.9, color: '#7AC74F', tooltip: { text: 'Low' } },
                { limit: 6.9, color: '#F2BB05', tooltip: { text: 'Medium' } },
                { limit: 8.9, color: '#DF2935', tooltip: { text: 'High' } },
                { color: '#000000', tooltip: { text: 'Critical' } }
              ]
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            value={baseScore ?? 0}
            labels={{
              valueLabel: {
                style: { fontSize: "50px", fill: "#000", textShadow: "none" }
              }
            }}
            minValue={0}
            maxValue={10}
          />
          {
            baseScore !== null && (
              <Typography variant="body1" style={{ textAlign: 'center', width: "100%", fontWeight: "bold", color: `${severity.color}` }}>
                {severity.label}
              </Typography>
            )
          }
        </Grid>
        <Grid item xs={12} sx={{ height: '25%' }}>
          {vectorComponent}

        </Grid>
      </Grid>
    </Box>
  );
};

export default CVSSDisplay;
