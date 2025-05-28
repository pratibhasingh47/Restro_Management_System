import React from "react";
import { Box, Typography, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer: React.FC = () => (
    <Box
        component="footer"
        sx={{
            width: "100%",
            bgcolor: "#000",
            color: "#fff",
            pt: 4,
            pb: 3,
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        {/* Main Info Row */}
        <Box
            sx={{
                width: "100%",
                maxWidth: 1100,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                px: 2,
                pb: 2,
                borderBottom: "1px solid #222",
                gap: 2,
            }}
        >
            {/* Left */}
            <Box sx={{ minWidth: 220, mb: { xs: 2, sm: 0 } }}>
                <Typography variant="h6" sx={{ letterSpacing: 2, mb: 1 }}>
                    RMS Portal
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                    Manage your restaurant efficiently.<br />
                    Orders | Inventory | Staff | Reports
                </Typography>
            </Box>
            {/* Center */}
            <Box
                sx={{
                    textAlign: "center",
                    flex: 1,
                    minWidth: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Typography variant="subtitle2" sx={{ letterSpacing: 1, mb: 1 }}>
                    Quick Links
                </Typography>
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
                    <Link href="/orders" color="inherit" underline="hover" sx={{ fontSize: 15 }}>
                        Orders
                    </Link>
                    <Link href="/stock-management" color="inherit" underline="hover" sx={{ fontSize: 15 }}>
                        Stock
                    </Link>
                    <Link href="/staff" color="inherit" underline="hover" sx={{ fontSize: 15 }}>
                        Staff
                    </Link>
                    <Link href="/my-account" color="inherit" underline="hover" sx={{ fontSize: 15 }}>
                        My Account
                    </Link>
                </Box>
            </Box>
            {/* Right */}
            <Box sx={{ minWidth: 220, textAlign: { xs: "center", sm: "right" }, mt: { xs: 2, sm: 0 } }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Contact
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                    Email: <Link href="mailto:admin@rms.com" color="inherit" underline="hover">admin@rms.com</Link><br />
                    Phone: +91-9876543210
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa", mt: 1 }}>
                    123 Main Street, New Delhi, India
                </Typography>
            </Box>
        </Box>
        {/* Heart & Designed By Row */}
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                my: 2,
                justifyContent: "center"
            }}
        >
            {/* <FavoriteIcon sx={{ color: "red", fontSize: 18 }} /> */}
            <Typography variant="body1" sx={{ fontWeight: 400, fontSize: 14 }}>
                Designed & Built by Pratibha with ❤️
            </Typography>
        </Box>
        {/* Copyright */}
        <Typography variant="caption" align="center" sx={{ color: "#888" }}>
            &copy; {new Date().getFullYear()} Restaurant Management System. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;