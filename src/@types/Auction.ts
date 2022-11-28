export type Auction = {
  Date:string;
  DayName: string;
  DayNumber: number;
  Events: [];
};
export type Event = {
  Title: string;
  Time: string;
  NumberOfItems: number;
  AuctionType: string;
};