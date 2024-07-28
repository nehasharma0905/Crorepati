import { Box } from "@mui/material";
import { AppRouter } from "./AppRouter";
import "./styles/style.scss";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./redux/userThunk";
import { Loader } from "./components/Loader";
import { usersAction } from "./redux/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, userObject } = useSelector((state) => state.users);

  //doubt
  useEffect(() => {
    if (!userObject) {
      onAuthStateChanged(auth, (user) => {
        console.log("user", user);
        if (user) {
          void dispatch(loginThunk());
        } else {
          dispatch(usersAction.setLoading(false));
          navigate("/login");
        }
      });
    }
  }, [dispatch, navigate, userObject]);

  return (
    <Box className="App">
      {isLoading ? <Loader className={"main-page-loader"} /> : <AppRouter />}
    </Box>
  );
}

export default App;
