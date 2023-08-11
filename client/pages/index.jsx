import { useEffect, useState } from "react";
import Head from "next/head";

import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";

//home-page

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DisplayCampaigns
        title={"All Campaigns"}
        isLoading={isLoading}
        campaigns={campaigns}></DisplayCampaigns>
    </>
  );
}
