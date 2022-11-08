import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'

import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAuthMe())
    const isAuth = useSelector(selectIsAuth);
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:id" element={<FullPost />}></Route>
          <Route path="/add-post" element={<AddPost />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
