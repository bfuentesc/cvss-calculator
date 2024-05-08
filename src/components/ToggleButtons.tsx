import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Tooltip, Typography } from "@mui/material";
import { ToggleButtonOption, ToggleButtonsProps } from "../types/types";

export default function ToggleButtons({
  value = null,
  options,
  onChange,
}: ToggleButtonsProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(
    value
  );

  const chunkOptions = (options: ToggleButtonOption[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < options.length; i += chunkSize) {
      chunks.push(options.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const optionChunks = chunkOptions(options, 3); // Crear chunks de tamaño 3

  // Agregar useEffect para actualizar el estado local cuando cambie el prop `value`
  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]); // Dependencias del efecto, actualiza el estado cuando `value` cambie

  const handleSelection = (
    event: React.MouseEvent<HTMLElement>,
    newKey: string | null
  ) => {
    if (newKey === null) {
      // Ignora intentos de desmarcar el botón actual
      return;
    }
    setSelectedValue(newKey);
    onChange(newKey); // Llamar al callback con el nuevo valor
  };

  return (
    // <ToggleButtonGroup
    //   color="success"
    //   size="small"
    //   value={selectedValue}
    //   exclusive
    //   onChange={handleSelection}
    //   aria-label="text selection"
    // >
    //   {options.map((option) => (
    //     <Tooltip title={option.description}>
    //       <ToggleButton key={option.key} value={option.key} aria-label={option.label}>
    //         {/* {React.createElement(option.icon, { sx: { fontSize: 15 , px:2} })} */}
    //         <Typography sx={{ fontSize: "smaller", fontWeight: "bold" }}>{option.label}</Typography>
    //       </ToggleButton>
    //     </Tooltip>
    //   ))}
    // </ToggleButtonGroup>
    <div>
      {optionChunks.map((chunk, index) => (
        <ToggleButtonGroup
          key={index}
          exclusive
          value={selectedValue}
          onChange={handleSelection}
          aria-label={`text selection group ${index}`}
          color="success"
          size="small"
        >
          {chunk.map((option) => (
            <Tooltip key={option.key} title={option.description}>
              <ToggleButton value={option.key} aria-label={option.label}>
                {/* React.createElement(option.icon, { sx: { fontSize: 15, px: 2 } }) */}
                <Typography sx={{ fontSize: "smaller", fontWeight: "bold" }}>
                  {option.label}
                </Typography>
              </ToggleButton>
            </Tooltip>
          ))}
        </ToggleButtonGroup>
      ))}
    </div>
  );
}
