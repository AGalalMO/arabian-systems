import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Auction } from "../../../@types/Auction";
import { theme } from "../../../theme";

export const DayHeader = ({ auction }: { auction: Auction }) =>
{
  const auctionDate = new Date(auction.Date);
  const today = new Date();
  return (
    <Stack
      style={{
        width: "177px",
        height: "155px",
        borderRight: `1px solid ${theme.palette.grey[600]}`,
      }}
      alignItems={"center"}
      justifyContent={"center"}>
      <Typography
        fontWeight={"bold"}
        fontSize={18}
        color={theme.palette.grey[400]}>
        {auction.DayName.slice(0,3)}
      </Typography>
      <Typography
        fontWeight={"bold"}
        fontSize={62}
        color={
          today.toDateString() == auctionDate.toDateString()
            ? theme.palette.primary.main
            : theme.palette.grey[400]
        }>
        {auction.DayNumber}
      </Typography>
    </Stack>
  );
};
