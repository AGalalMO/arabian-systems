import { Event } from "../../../@types/Auction";
import {
  StyledActionDateTypography,
  StyledActionEventStack,
  StyledActionTitleTypography,
  StyledActionTypeTypography,
  StyledCountTypography,
  StyledItemsCountStack,
} from "./styles";

export const AuctionEvent = ({
  event,
  empty,
}: {
  event?: Event;
  empty: boolean;
}) => {
  return (
    <StyledActionEventStack empty={empty}>
      {event && (
        <>
          <StyledActionDateTypography>
            Ending {event.Time}
          </StyledActionDateTypography>
          <StyledActionTitleTypography>
            {event.Title}
          </StyledActionTitleTypography>
          <StyledActionTypeTypography>Direct sale</StyledActionTypeTypography>
          <StyledItemsCountStack>
            <StyledCountTypography>
              {" "}
              {event.NumberOfItems} item
            </StyledCountTypography>
          </StyledItemsCountStack>
        </>
      )}
    </StyledActionEventStack>
  );
};
