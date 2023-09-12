import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Footer from '../../../Shared/Footer/Footer';

const drawerWidth = 240;


const Dashboard = (props) => {
    const { admin } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link style={{ textDecoration: 'none', color: '#191A1D' }} to="/">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h6 className="my-0">Home</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#191A1D' }} to="/dashboard">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h6 className="my-0">Dashboard</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#191A1D' }} to="/products">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">Products</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                {
                    !admin ?
                        <>
                            <Link style={{ textDecoration: 'none', color: '#191A1D' }} to={`dashboard/myorder`}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'black' }}>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <h6 className="my-0">My Order</h6>
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: '#191A1D' }} to={`dashboard/reviewprovide`}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'black' }}>
                                        <StarBorderIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <h6 className="my-0">Review</h6>
                                    </ListItemText>
                                </ListItem>
                            </Link>

                        </>

                        :
                        <>
                            {/* Admin Section  */}
                            <Link style={{ textDecoration: 'none', color: '#191A1D' }} to={`dashboard/manageorder`}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'black' }}>
                                        <AddShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <h6 className="my-0">Manage All Order</h6>
                                    </ListItemText>
                                </ListItem>
                            </Link>


                            <Link style={{ textDecoration: 'none', color: '#191A1D' }} to={`dashboard/addnewproduct`}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'black' }}>
                                        <AddShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <h6 className="my-0">Add New Product</h6>
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: '#191A1D' }} to={`dashboard/makeadmin`}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'black' }}>
                                        <AddShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <h6 className="my-0">Make Admin</h6>
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        </>
                }
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar
                        style={{ backgroundColor: '#191A1D' }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Outlet></Outlet>
                    <Footer></Footer>
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;