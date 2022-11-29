import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Event } from "../../../@types/Auction";
import { theme } from "../../../theme";

export const AuctionEvent = ({ event, backColor }: { event?: Event; backColor:string }) => {
  return (
    <Stack
      style={{
        width: "177px",
        height: "177px",
        background: backColor,
        padding: "20px 13px",
        border: `1px solid ${theme.palette.grey[600]}`,
        borderTop: "0px",
        borderLeft: "0px",
      }}>
      {event && (
        <>
          <Typography
            fontWeight={"Bold"}
            fontSize={12}
            style={{ opacity: "0.7" }}
            mb={"9px"}
            color={theme.palette.grey[400]}>
            Ending {event.Time}
          </Typography>
          <Typography
            fontWeight={"medium"}
            fontSize={17}
            mb={"9px"}
            color={theme.palette.grey[500]}>
            {event.Title}
          </Typography>
          <Typography
            fontWeight={"Semibold"}
            fontSize={14}
            mb={"9px"}
            color={theme.palette.grey[300]}>
            Direct sale
          </Typography>
          <Stack
            style={{
              padding: "8px 13px",
              maxWidth: "95px",
              background: theme.palette.grey[100],
              alignItems: "center",
              color: "white",
              justifyContent: "center",
              borderRadius: "18px",
            }}>
            <Typography
              style={{ fontSize: "12px", fontWeight: "700", color: "white" }}>
              {" "}
              {event.NumberOfItems} item
            </Typography>
          </Stack>
        </>
      )}
    </Stack>
  );
};
