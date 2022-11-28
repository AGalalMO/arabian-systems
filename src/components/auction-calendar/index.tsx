import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useActionCalender } from "./useActionCalender";
import { DayHeader } from "./calneder/DayHeader";
export const AuctionCalender = () => {

    const { calenderData } = useActionCalender()
    console.log("calenderDAta", calenderData);
  return (
    <Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Box flex={1}>
          <Typography fontSize={24} color={theme.palette.grey[400]}>
            Auction Calender
          </Typography>
        </Box>
        <Stack
          flex={4}
          flexDirection={"row"}
          justifyContent={"center"}
          color={theme.palette.grey[300]}>
          <ChevronLeftOutlinedIcon />
          <Typography
            fontWeight={700}
            fontSize={18}
            style={{
              marginLeft: "16px",
              marginRight: "16px",
              alignItems: "center",
            }}>
            <span>Today</span>
          </Typography>
          <ChevronRightOutlinedIcon />
        </Stack>
        <Box flex={1}></Box>
      </Stack>
      <Stack
        style={{
          borderRadius: 6,
          background: theme.palette.grey["700"],
          justifyContent: "center",
                  boxShadow: `0px 3px 6px #4E4E4E29`,
          flexDirection:'row'
        }}>
              {calenderData.slice(0, 7).map((item) => {
           return <DayHeader key={item.Date} date={item.Date} />;
       })}
      </Stack>
    </Stack>
  );
};
