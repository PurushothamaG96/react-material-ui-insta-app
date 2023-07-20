import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Instagram, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

//custom style -------------------------------------------
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "None",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display:"none"
  }
}));

function Navbar() {
    const [open, setOpen] = React.useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Instagram sx={{ display: { xs: "block", sm: "none " } }} />
        <Typography
          variant="h6"
          component={"span"}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Insta
        </Typography>
        <Search>
          <InputBase placeholder="Search here..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick = {e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick = {e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         />
          <Typography component={"span"}>John</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={e=>setOpen(false)}
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
