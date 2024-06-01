import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import "./styles/style.scss";
import { Box } from "@mui/material";
import { testApi } from "./api/test";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const {isUserLoggedIn} = useSelector((state) => state.users);
  useEffect(() => {
    if (isUserLoggedIn) {
      console.log("isUserLoggedIn", isUserLoggedIn);
      testApi().then((res) => {
        console.log(res);
      });  
    }
  }, [isUserLoggedIn]);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        dispatch(usersAction.updateLoginStatus({ isLoggedIn: true, user: user }));
      }
    });
  },[dispatch])



  return (
    <Box className="App">
      <AppRouter />
    </Box>
  );
}

export default App;
