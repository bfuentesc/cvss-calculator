// Importa las dependencias necesarias
import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButtons from './ToggleButtons'; // Asegúrate de que la ruta es correcta
import { ToggleButtonConfig } from '../types/types';

// Definición de las props que el componente necesita
interface AccordionMetricsProps {
    config: ToggleButtonConfig;
    value: string | null;
    handleChange: (metric: string, key: string) => void;
}

const AccordionMetrics = ({ config, value, handleChange }: AccordionMetricsProps) => {
    return (
        <Box sx={{ pt: 2 }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {config.title}
                </AccordionSummary>
                <AccordionDetails>
                    {config.description}
                </AccordionDetails>
            </Accordion>
            <Box sx={{ p: 2 }}>
                <ToggleButtons options={config.options} value={value} onChange={(key: string) => handleChange(config.key, key)} />
            </Box>
        </Box>
    );
};

export default AccordionMetrics;
