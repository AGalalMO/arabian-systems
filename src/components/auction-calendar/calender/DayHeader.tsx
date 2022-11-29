import { Auction } from "../../../@types/Auction";
import {
  StyledDayHeaderStack,
  StyledDayNumberTypography,
  StyledWeekDayTypography,
} from "./styles";

export const DayHeader = ({
  auction,
  currentDay,
}: {
  auction: Auction;
  currentDay:string}) => {
  const auctionDate = new Date(auction.Date);
  return (
    <StyledDayHeaderStack>
      <StyledWeekDayTypography>
        {auction.DayName.slice(0, 3)}
      </StyledWeekDayTypography>
      <StyledDayNumberTypography
        sameDate={currentDay == auctionDate.toLocaleDateString()}>
        {auction.DayNumber}
      </StyledDayNumberTypography>
    </StyledDayHeaderStack>
  );
};
