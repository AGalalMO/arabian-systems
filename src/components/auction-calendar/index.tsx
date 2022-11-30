import { Box, Stack } from "@mui/material";
import { useAuctionCalender } from "./useAuctionCalender";
import { DayHeader } from "./calender/DayHeader";
import { AuctionEvent } from "./calender/AuctionEvent";
import { Event } from "../../@types/Auction";
import {
  StyledCalenderContainerStack,
  StyledChevronLeftOutlinedIcon,
  StyledChevronRightOutlinedIcon,
  StyledControlsStack,
  StyledControlsTypography,
  StyledHeaderStack,
  StyledHeaderTypography,
} from "./styles";
export const AuctionCalender = () => {
  const {
    calenderData,
    maxEvents,
    onNextClick,
    startDay,
    endDay,
    currentDay,
    onBackClick,
    DateHeadText,
  } = useAuctionCalender();

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
          <StyledChevronLeftOutlinedIcon onClick={() => onBackClick()} />
          <StyledControlsTypography>
            <span>{DateHeadText}</span>
          </StyledControlsTypography>
          <StyledChevronRightOutlinedIcon onClick={() => onNextClick()} />
        </StyledControlsStack>
        <Box flex={1}></Box>
      </StyledHeaderStack>
      <StyledCalenderContainerStack>
        {calenderData.slice(startDay, endDay).map((item) => {
          return (
            <Stack key={item.Date} flex={1}>
              <DayHeader currentDay={currentDay} auction={item} />
              {getEventsContent(item.Events)}
            </Stack>
          );
        })}
      </StyledCalenderContainerStack>
    </Stack>
  );
};
