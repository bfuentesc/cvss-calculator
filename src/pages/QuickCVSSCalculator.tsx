import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import ToggleButtons from "../components/ToggleButtons";
import { useEffect, useState } from "react";
import { exploitabilityButtonConfigs, impactButtonConfigs, scopeButtonConfigs } from "../config/ToggleButtonConfigs";
import { CVSSValues, VectorValues } from "../types/types";
import { calculateCVSS, generateCVSSVector, getNumericCVSSValue } from "../utils/cvssCalculator";
import CVSSDisplay from "../components/CVSSDisplay";

// const initialValues: CVSSValues = {
//     AV: null,  // Attack Vector
//     AC: null,  // Attack Complexity
//     PR: null,  // Privileges Required
//     UI: null,  // User Interaction
//     S: null,   // Scope
//     C: null,   // Confidentiality
//     I: null,   // Integrity
//     A: null    // Availability
// };

const initialVectorValues: VectorValues = {
    AV: null,  // Attack Vector
    AC: null,  // Attack Complexity
    PR: null,  // Privileges Required
    UI: null,  // User Interaction
    S: null,   // Scope
    C: null,   // Confidentiality
    I: null,   // Integrity
    A: null    // Availability
};

const boxStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: "100vh",
    flex: 1,
    p: 2,

}



const QuickCVSSCalculator = () => {

    // const [values, setValues] = useState<CVSSValues>(initialValues);

    const [vectorValues, setVectorValues] = useState<VectorValues>(initialVectorValues);

    const [baseScore, setBaseScore] = useState<null | number>(null)

    const [vector, setVector] = useState<null | string>(null)

    const handleChange = (metric: string, key: string) => {
        // setValues(prevValues => ({
        //     ...prevValues,
        //     [metric]: value
        // }));

        setVectorValues(prevValues => ({
            ...prevValues,
            [metric]: key
        }));

    };

    useEffect(() => {
        // Comprobar si alguno de los valores es aún null
        const hasNull = Object.values(vectorValues).some(value => value === null);

        // Si no hay valores null, realiza una acción, como un console.log
        if (!hasNull) {
            // console.log("Todos los valores han sido establecidos:", values);
            const numericCVSSValue: CVSSValues = getNumericCVSSValue(vectorValues) as unknown as CVSSValues

            setVector(generateCVSSVector(vectorValues));
            // setValues(numericCVSSValue);
            setBaseScore(calculateCVSS(numericCVSSValue));

        }
    }, [vectorValues]); // Depende del estado 'values' para re-ejecutarse cuando cambie


    return <Container
        maxWidth="lg" sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
        }}>
        <CVSSDisplay baseScore={baseScore} vectorComponent={
            <Typography variant="h6" sx={{
                m: 1,
                fontSize: "100%"
            }}>
                {vector}
            </Typography>
        } />

        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
        }}>
            {/* Contenedor de la primera columna */}
            <Box sx={boxStyle}>

                <Typography variant="h5">
                    Exploitability Metrics
                </Typography>
                {exploitabilityButtonConfigs.map((config, index) => (
                    <Box key={index} sx={{ p: 2 }}>
                        <Typography variant="h6">
                            {config.title}
                        </Typography>
                        <ToggleButtons options={config.options} onChange={(key: string) => handleChange(config.key, key)} />
                    </Box>
                ))}
            </Box>
            {/* Contenedor de la segunda columna */}
            <Box sx={boxStyle}>

                {/* Contenido de la segunda columna */}
                <Typography variant="h5">
                    Scope (S)
                </Typography>
                <Box sx={{ p: 2 }}>
                    <ToggleButtons options={scopeButtonConfigs.options}
                        onChange={(key: string) => handleChange(scopeButtonConfigs.key, key)} />
                </Box>
            </Box>
            <Box sx={boxStyle}>
                <Typography variant="h5">
                    Impact Metrics
                </Typography>
                {impactButtonConfigs.map((config, index) => (
                    <Box key={index} sx={{ p: 2 }}>
                        <Typography variant="h6">
                            {config.title}
                        </Typography>
                        <ToggleButtons options={config.options} onChange={(key: string) => handleChange(config.key, key)} />
                    </Box>
                ))}
            </Box>
        </Box>
    </Container>
}

export default QuickCVSSCalculator;

