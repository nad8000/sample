import * as React from 'react';
import { BrowserRouter, Route, Routes, NavigateFunction, useNavigate} from 'react-router-dom';
import ContentsList from './features/ContentsList/ContentsListComponent';
import ContentsEditor from './features/ContentsEditor/ContentsEditorComponent';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/list" element={<ContentsList />} />
        <Route path="/editor" element={<ContentsEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  const navigate: NavigateFunction = useNavigate();

  const Contents = styled.div`
    background-color: #332c8d;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    // ボタン部分
    &button{
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
      &:hover{
        color: #ccc;
      }
    }
  `;

  return (
    <>
      <ButtonAppBar />
      <Contents>
        <button onClick={()=>navigate('/list')}>コンテンツリスト</button>
      </Contents>
    </>
  )
}

function ButtonAppBar() {  
  const navigate: NavigateFunction = useNavigate();
  const Link = styled.a`
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  `;

return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link onClick={()=>navigate('/')}>CustomBlog</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default App;
