import { Box } from "@mui/material";
import Button from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
const MainDashboard = () => {
  const navigate = useNavigate();
  const nav = (link) => {
    navigate(link);
  };
  return (
    <Box className={'main-dashboard'}>

    </Box>
  );
};
export default MainDashboard;
