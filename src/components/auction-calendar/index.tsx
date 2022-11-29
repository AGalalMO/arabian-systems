import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useAuctionCalender } from "./useAuctionCalender";
import { DayHeader } from "./calneder/DayHeader";
import { AuctionEvent } from "./calneder/AuctionEvent";
import { Event } from "../../@types/Auction";
export const AuctionCalender = () => {
  const { calenderData, maxEvents, onNextClick,startDay,endDay } = useAuctionCalender();
  console.log("maxEvents", maxEvents);

  const getEventsContent = (events: Event[]) => {
    let content: JSX.Element[] = [];
    for (let event of events) {
      content.push(
        <AuctionEvent
          key={event.NumberOfItems}
          backColor={'white'}
          event={event}
        />
      );
    }
    if (content.length < maxEvents) {
      for (let i = content.length; i < maxEvents; i++) {
        content.push(
          <AuctionEvent
            key={`empty${i}`}
            backColor={events.length == 0 ? theme.palette.grey[700] : "white"}
          />
        );
      }
    }

    return content;
  };

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
          <ChevronRightOutlinedIcon onClick={() => onNextClick()} />
        </Stack>
        <Box flex={1}></Box>
      </Stack>
      <Stack
        style={{
          borderRadius: 6,
          background: theme.palette.grey["700"],
          boxShadow: `0px 3px 6px #4E4E4E29`,
          flexDirection: "row",
        }}>
        {calenderData.slice(startDay, endDay).map((item) => {
          return (
            <Stack key={item.Date}>
              <DayHeader auction={item} />
              {getEventsContent(item.Events)}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
