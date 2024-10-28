import { InputAdornment, TextField } from "@mui/material";
import { FormControl } from "@mui/material";

import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { createStyles, makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/slice/postSlice";
const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
  });
});
export default function SearchForm() {
  const { search } = useStyles();
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setKeyword(event.target.value);
  };
  const handleClick = () => {
    setKeyword("");
  };
  // xử lí search
  useEffect(() => {
    dispatch(getPosts(keyword));
  }, [keyword, dispatch]);
  return (
    <>
      <FormControl
        className={search}
        style={{ marginBottom: 20 }}
        fullWidth={true}
      >
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange}
          placeholder="search..."
          value={keyword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearIcon style={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  );
}
