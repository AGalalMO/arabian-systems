import { Typography } from "@mui/material";
import { AuctionCalender } from "../src/components/auction-calendar";
import { Layout } from "../src/components/shared/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
       <AuctionCalender />
      </Layout>
    </div>
  );
}
