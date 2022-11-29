import { useEffect, useState } from "react";
import { Auction } from "../../@types/Auction";
import axiosInstance from "../../utils/axios";
import { APIS } from "../../utils/serviceUrls";

export const useAuctionCalender = () => {
  const [calenderData, setCalenderData] = useState<Auction[]>([]);
  const [startDay, setStartDay] = useState<number>(0);
  const [endDay, setEndDay] = useState<number>(7);
  const [maxEvents, setMaxEvents] = useState(0);
  useEffect(() => {
    getCalender();
  }, []);
  const getCalender = async () => {
    const response = await axiosInstance.post(APIS.LANDING.CALENDER, {
      DateFrom: "2022-11-27T09:43:38.024Z",
      DateTo: "2022-12-27T09:43:38.024Z",
    });
    setCalenderData(response.data?.Data);
  };
  useEffect(() => {
    let maxEventsNumber = 0;
    if (calenderData) {
      calenderData.map((item) => {
        if (item.Events.length > maxEventsNumber)
          maxEventsNumber = item.Events.length;
      });
      setMaxEvents(maxEventsNumber);
    }
  }, [calenderData]);
  const onNextClick = () => {
    if (endDay == calenderData.length) return;
    else setStartDay(endDay );
    setEndDay(
      endDay + 7 > calenderData.length
        ? calenderData.length - endDay
        : endDay + 7
    );
  };
  return {
    calenderData,
    maxEvents,
    onNextClick,
    startDay,
    endDay
  };
};
