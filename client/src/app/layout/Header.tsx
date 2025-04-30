import { ShoppingCart } from "@mui/icons-material";
import { AppBar,Badge,Box,IconButton,List,ListItem,Switch, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

const midLinks=[
    {title:'فروشگاه',path:'/catalog'},
    {title:'درباره',path:'/about'},
    {title:'تماس‌با‌ما',path:'/contact'},
    
]
const rightLinks=[
    {title:'ورود',path:'/login'},
    {title:'ثبت‌نام',path:'/register'},
    
]
interface Props{
    darkMode:boolean;
    handleThemeChange:() =>void;
}
const navStyles={
    color:'inherit',
    textDecoration:"none",
    typography:'h6',
    '&:hover':{
        color:'secondary.main'
    },
    '&.active':{
        color:'text.secondary'
    }
}
export default function Header({darkMode,handleThemeChange}:Props){
    const {basket}=useAppSelector(state =>state.basket);
    const { user } = useAppSelector(state => state.account);
    const itemCount=basket?.items.reduce((sum,item)=>sum+item.quantity,0);
    return(
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box display ='flex' alignItems='center'>
                <>
                    <a href="/">
                        <img src={'images/nilgoonIcon.png'} height={72} alt="Logo" />
                    </a>
                    
                </>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
                <List sx={{display:'flex'}}>
                    {midLinks.map(({title,path})=>(
                        <ListItem 
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title}
                        </ListItem>
                    )
                    )}
                </List>
                </Box>
                
                
                <Box display ='flex' alignItems='center'>
                <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr:2,
                        '&:hover':{
                            color:'secondary.main'
                        },
                        '&.active':{
                            color:'text.secondary'
                        }}}>
                    <Badge badgeContent={itemCount} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                {user?(
                    <SignedInMenu/>
                ):(
                    <List sx={{display:'flex'}}>
                    {rightLinks.map(({title,path})=>(
                        <ListItem 
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title}
                        </ListItem>
                    )
                    )}
                </List>
                )}
                
                </Box>
            </Toolbar>
        </AppBar>
    )
}