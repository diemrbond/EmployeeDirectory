import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

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
    marginTop: 15,
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
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,    
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-search" size="small">Search Employee</InputLabel>
          <OutlinedInput
            id="outlined-size-small"
            type='text'
            value={values.search}
            size="small"
            onChange={handleChange('search')}
            endAdornment={
              <InputAdornment 
              position="end" 
              >
                <IconButton
                  aria-label="search" edge="end"
                >
                  <SearchIcon /> 
                </IconButton>
              </InputAdornment>
            }
            labelWidth={125}
          />
        </FormControl>        
      </div>
    </div>
  );
}
