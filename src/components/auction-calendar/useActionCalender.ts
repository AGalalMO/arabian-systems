import { useEffect, useState } from "react";
import { Auction } from "../../@types/Auction";
import axiosInstance from "../../utils/axios";
import { APIS } from "../../utils/serviceUrls";

export const useActionCalender = () => {
    const [calenderData, setCalenderData] = useState<Auction[]>([]);
   const [startDay,setStartDay]=useState<number>(0)
   const [endDay, setEndDay] = useState<number>(0);
    useEffect(() => {
      getCalender()
  }, []);
  const getCalender = async () => {
    const response = await axiosInstance.post(APIS.LANDING.CALENDER, {
      DateFrom: "2022-11-27T09:43:38.024Z",
      DateTo: "2022-12-27T09:43:38.024Z",
    });
    setCalenderData(response.data?.Data);
  };
    return {
      calenderData,
    };
};
