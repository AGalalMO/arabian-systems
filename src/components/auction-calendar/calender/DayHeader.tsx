import { Auction } from "../../../@types/Auction";
import {
  StyledDayHeaderStack,
  StyledDayNumberTypography,
  StyledWeekDayTypography,
} from "./styles";

export const DayHeader = ({ auction }: { auction: Auction }) => {
  const auctionDate = new Date(auction.Date);
  const today = new Date();
  return (
    <StyledDayHeaderStack>
      <StyledWeekDayTypography>
        {auction.DayName.slice(0, 3)}
      </StyledWeekDayTypography>
      <StyledDayNumberTypography
        sameDate={today.toDateString() == auctionDate.toDateString()}>
        {auction.DayNumber}
      </StyledDayNumberTypography>
    </StyledDayHeaderStack>
  );
};
