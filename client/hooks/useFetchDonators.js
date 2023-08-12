import { useEffect, useState } from "react";
import { useStateContext } from "../context";

export default function useFetchDonators(pId, campaign) {
  const { contract, address, getDonations } = useStateContext();
  const [donators, setDonators] = useState([]);
  const fetchDonators = async () => {
    const data = await getDonations(pId);
    setDonators(data);
  };

  useEffect(() => {
    if (contract && campaign) {
      fetchDonators();
    }
  }, [contract, address, campaign]);
  return {
    donators,
  };
}
