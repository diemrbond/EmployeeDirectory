import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Visibility from '@material-ui/icons/Search';
import VisibilityOff from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
    position: 'absolute',
    top: 110,
    left: 60,
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
  margin: {
    marginTop: 7,
    marginBottom: 10
  },
  textField: {
    width: '300px',
    background: 'white',
    borderRadius: 5,
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    search: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(event.target.value)
  };

  return (
    <div className={classes.root}>

      <div>
        <TextField
          id="filled-search"
          className={clsx(classes.margin, classes.textField)}
          label="Search Employee"
          type="search"
          variant="filled"
          value={values.search}
          onChange={handleChange('search')} 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
             )
            }}
          />
      </div>
    </div>
  );
}

