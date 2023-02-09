import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import {indigo} from "@mui/material/colors";
const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px" mx="auto">
      <Typography
        variant="h2"
        color={grey[600]}
        fontSize={{xs:30,md:50}}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0",textAlign:'center' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={indigo[800]} sx={{textAlign:'center'}}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
