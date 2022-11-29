import { useEffect, useMemo, useState } from "react";
import { Auction } from "../../@types/Auction";
import axiosInstance from "../../utils/axios";
import { APIS } from "../../utils/serviceUrls";

export const useAuctionCalender = () => {
  const [calenderData, setCalenderData] = useState<Auction[]>([]);
  const [startDay, setStartDay] = useState<number>(0);
  const [endDay, setEndDay] = useState<number>(7);
  const [maxEvents, setMaxEvents] = useState(0);
  const [currentDay, setCurrentDay] = useState(new Date().toLocaleDateString());
  useEffect(() => {
    getCalender();
    getGlobalTime();
  }, []);
  const getCalender = async () => {
    const response = await axiosInstance.post(APIS.LANDING.CALENDER, {
      DateFrom: "2022-11-27",
      DateTo: "2022-12-27",
    });
    setCalenderData(response.data?.Data);
  };

  const getGlobalTime = async () => {
    const response = await axiosInstance.get(
      APIS.UTILS.GLOBAL_TIME(Intl.DateTimeFormat().resolvedOptions().timeZone)
    );
    setCurrentDay(new Date(response.data?.datetime)?.toLocaleDateString());
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
    if (endDay >= calenderData.length) return;
    else setStartDay(endDay);
    setEndDay(
      endDay + 7 > calenderData.length ? calenderData.length : endDay + 7
    );
  };
  const onBackClick = () => {
    console.log("onBackClick start", startDay);
    console.log("onBackClick end", endDay);
    if (startDay == 0) return;
    else setEndDay(startDay);
    setStartDay(startDay - 7);
  };
  const DateHeadText = useMemo(() => {
    const startDate = new Date(calenderData[startDay]?.Date).toLocaleDateString(
      "en",
      {
        day: "2-digit",
        weekday: "long",
        month: "short",
      }
    );
    const endDate = new Date(calenderData[endDay - 1]?.Date).toLocaleDateString(
      "en",
      {
        day: "2-digit",
        weekday: "long",
        month: "short",
      }
    );

    return `${
      currentDay == new Date(calenderData[startDay]?.Date).toLocaleDateString()
        ? "Today"
        : startDate
    } -  ${endDate}`;
  }, [startDay, endDay,calenderData]);
  return {
    calenderData,
    maxEvents,
    onNextClick,
    onBackClick,
    startDay,
    endDay,
    currentDay,
    DateHeadText,
  };
};
