import { useTheme } from "@mui/material/styles";
import { Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useState } from "react";
import React from "react";

const Homebox = ({
  input,
  result,
  setInput,
  title,
  label,
  runLogic,
  setResult,
}) => {
  const theme = useTheme();
  const xsBreak = useMediaQuery(theme.breakpoints.down("sm"));
  const [inputErr, setInputErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return setInputErr(true);
    }
    setInputErr(false);
    runLogic(input);
  };

  const handleClear = (e) => {
    e.preventDefault();
    if (input !== "") {
      setInput("");
      setResult("");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#5EC5B7", p: 2, borderRadius: 5, mb: 4 }}>
      <Typography
        variant={xsBreak ? "h5" : "h4"}
        sx={{ fontWeight: 600, textDecoration: "underline", mb: 3 }}
      >
        {title}
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          onChange={(e) => setInput(e.target.value)}
          id='outlined-basic'
          label={label}
          variant='outlined'
          sx={{ mb: 1.5 }}
          fullWidth
          error={inputErr}
          autoComplete='off'
          value={input}
        />
        <Button
          variant='contained'
          endIcon={<DirectionsRunIcon />}
          sx={{ mb: 1.5 }}
          type='submit'
        >
          Run
        </Button>
        <Button
          variant='contained'
          endIcon={<BackspaceIcon />}
          sx={{ mb: 1.5, ml: 3 }}
          onClick={(e) => handleClear(e)}
        >
          Clear
        </Button>
      </form>
      <Box sx={{ ml: 0.3, display: "flex", gap: 2 }}>
        <Typography variant='h6'>Result:</Typography>
        <Typography variant='h6'>{result}</Typography>
      </Box>
    </Box>
  );
};

export default Homebox;
