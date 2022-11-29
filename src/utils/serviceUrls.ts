const baseUrl = "https://eaapi3.qc.arabiansystems.com/api";
export const APIS = {
  UTILS: {
    GLOBAL_TIME: (tz: string) => `https://worldtimeapi.org/api/timezone/${tz}`,
  },
  LANDING: {
    CALENDER: `${baseUrl}/Landing/AuctionCalender`,
  },
};
