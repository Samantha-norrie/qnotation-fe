import React from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { darkTheme } from "./components/Utils";
import { ThemeProvider} from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { EXAMPLES } from "./components/Utils";

const AlgorithmSelect = (props) => {
    const {onCodeChange} = props;
    const [algorithm, setAlgorithm] = React.useState('');

    const handleChange = (event) => {
        setAlgorithm(event.target.value);
        onCodeChange(EXAMPLES[event.target.value].code, EXAMPLES[event.target.value].code);
    };

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <FormControl sx={{ m: 1, width: "95%"}} size="small">
                <InputLabel id="algorithm-label">EXAMPLES</InputLabel>
                <Select
                    labelId="algorithm-label"
                    value={algorithm}
                    onChange={handleChange}
                >
                    {EXAMPLES.map((algorithm, key) => (
                        <MenuItem value={key}>{algorithm.title}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </ThemeProvider>
      </div>

    );
}

export default AlgorithmSelect;