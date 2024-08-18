// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Select, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ setCategory }) => {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const handleSearch = () => {
    if (search) {
      navigate(`/search/${search}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          NewsApp
        </Typography>
        <Select
          defaultValue=""
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginRight: 2 }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="technology">Technology</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
        <IconButton sx={{ ml: 2 }} onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
