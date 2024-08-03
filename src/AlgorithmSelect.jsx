import React, { useState } from "react";
import styled from "styled-components";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ALGORITHMS } from "./components/Utils";

const AlgorithmSelect = (props) => {
    const {onCodeChange} = props;
    const [algorithm, setAlgorithm] = React.useState('');

    const handleChange = (event) => {
        setAlgorithm(event.target.value);
    //   setCode(ALGORITHMS[event.target.value].code);
        onCodeChange(ALGORITHMS[event.target.value].code, ALGORITHMS[event.target.value].code);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={algorithm}
                label="ALGORITHM"
                onChange={handleChange}
            >
                {ALGORITHMS.map((algorithm, key) => (
                    <MenuItem value={key}>{algorithm.title}</MenuItem>
                ))}
            </Select>
            </FormControl>
      </div>

    );
}

export default AlgorithmSelect;