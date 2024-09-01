import React, { useState } from "react";
import styled from "styled-components";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { darkTheme } from "./components/Utils";
import { ThemeProvider} from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ALGORITHMS } from "./components/Utils";

const AlgorithmSelect = (props) => {
    const {onCodeChange} = props;
    const [algorithm, setAlgorithm] = React.useState('');

    const handleChange = (event) => {
        setAlgorithm(event.target.value);
        onCodeChange(ALGORITHMS[event.target.value].code, ALGORITHMS[event.target.value].code);
    };

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                <InputLabel id="algorithm-label">ALGORITHM</InputLabel>
                <Select
                    labelId="algorithm-label"
                    // id="demo-select-small"
                    value={algorithm}
                    // label="ALGORITHM"
                    onChange={handleChange}
                >
                    {ALGORITHMS.map((algorithm, key) => (
                        <MenuItem value={key}>{algorithm.title}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </ThemeProvider>
      </div>

    );
}

export default AlgorithmSelect;