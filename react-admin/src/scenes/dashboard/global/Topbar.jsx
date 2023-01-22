import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsModeOutlinedIcon from "@mui/icons-material/NotificationsModeOutlined";
import SettingsModeOutlinedIcon from "@mui/icons-material/SettingsModeOutlined";
import PersonModeOutlinedIcon from "@mui/icons-material/PersonModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return <Box display ="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
        <Box 
        display= "flex" 
        backgroundColor={colors.primary[400]} 
        orderRadius="3px">
            
        </Box>
        <IconButton></IconButton>
    </Box>

};

export default Topbar;