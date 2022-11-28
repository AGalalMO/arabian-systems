import { Breadcrumbs, Link, Typography } from "@mui/material";
import { theme } from "../../../theme";

export const BreadCrumb = () => {
  return (
    <Breadcrumbs
      style={{ marginTop: "50px", marginBottom: "18px", paddingLeft: "70px" }}>
      <Link underline='hover' fontSize={14} color='inherit' href='/'>
        Home
      </Link>
      <Link underline='hover' fontSize={14} color='inherit' href='/'>
        Won Auctions
      </Link>
      <Typography fontSize={14} color={theme.palette.grey[400]}>
        {" "}
        Auction Calender
      </Typography>
    </Breadcrumbs>
  );
};
