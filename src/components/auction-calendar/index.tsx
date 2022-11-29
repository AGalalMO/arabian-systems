import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useAuctionCalender } from "./useAuctionCalender";
import { DayHeader } from "./calender/DayHeader";
import { AuctionEvent } from "./calender/AuctionEvent";
import { Event } from "../../@types/Auction";
import {
  StyledCalenderContainerStack,
  StyledControlsStack,
  StyledControlsTypography,
  StyledHeaderStack,
  StyledHeaderTypography,
} from "./styles";
export const AuctionCalender = () => {
  const { calenderData, maxEvents, onNextClick, startDay, endDay } =
    useAuctionCalender();

  const getEventsContent = (events: Event[]) => {
    let content: JSX.Element[] = [];
    for (let event of events) {
      content.push(
        <AuctionEvent key={event.NumberOfItems} empty={false} event={event} />
      );
    }
    if (content.length < maxEvents) {
      for (let i = content.length; i < maxEvents; i++) {
        content.push(
          <AuctionEvent
            key={`empty${i}`}
            empty={events.length == 0 ? true : false}
          />
        );
      }
    }

    return content;
  };

  return (
    <Stack>
      <StyledHeaderStack>
        <Box flex={1}>
          <StyledHeaderTypography>Auction Calender</StyledHeaderTypography>
        </Box>
        <StyledControlsStack flex={4}>
          <ChevronLeftOutlinedIcon />
          <StyledControlsTypography>
            <span>Today</span>
          </StyledControlsTypography>
          <ChevronRightOutlinedIcon onClick={() => onNextClick()} />
        </StyledControlsStack>
        <Box flex={1}></Box>
      </StyledHeaderStack>
      <StyledCalenderContainerStack>
        {calenderData.slice(startDay, endDay).map((item) => {
          return (
            <Stack key={item.Date}>
              <DayHeader auction={item} />
              {getEventsContent(item.Events)}
            </Stack>
          );
        })}
      </StyledCalenderContainerStack>
    </Stack>
  );
};
