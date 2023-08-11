import { useEffect, useState } from "react";
import { useStateContext } from "../context";

export default function useFetchCampaignDetail(pId) {
  const [campaign, setCampaign] = useState(undefined);
  const [isLoadingCampaignDetail, setIsLoadingCampaignDetail] = useState(false);
  const { contract, getCampaignByPid } = useStateContext();
  const fetchCampaign = async (pId) => {
    setIsLoadingCampaignDetail(true);
    const data = await getCampaignByPid(pId);
    setCampaign(data);
    setIsLoadingCampaignDetail(false);
  };
  useEffect(() => {
    if (contract && pId) {
      fetchCampaign(pId);
    }
  }, [contract, pId]);

  return {
    campaign,
    isLoadingCampaignDetail,
  };
}
