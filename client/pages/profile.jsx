import { useEffect, useState } from "react";
import Head from "next/head";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DisplayCampaigns
        title={"Your Campaigns"}
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
}
