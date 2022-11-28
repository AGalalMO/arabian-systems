import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { theme } from "../../../theme";

export const DayHeader = ({ date }: { date: string }) => {
  const CurrentDate = new Date(date);
  const weekday = CurrentDate.toLocaleString("en", {
    weekday: "short",
  });
  const today = new Date();
  return (
    <Stack
      style={{ padding: "24px 53px" }}
      alignItems={"center"}
      justifyContent={"center"}>
      <Typography
        fontWeight={"bold"}
        fontSize={18}
        color={theme.palette.grey[400]}>
        {weekday}
      </Typography>
      <Typography
        fontWeight={"bold"}
        fontSize={62}
        color={
          today.toDateString() == CurrentDate.toDateString()
            ? theme.palette.primary.main
            : theme.palette.grey[400]
        }>
        {CurrentDate.getDate()}
      </Typography>
    </Stack>
  );
};
