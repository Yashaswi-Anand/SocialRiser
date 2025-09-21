import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing",
  description: "",
};

const InfluencerMarketing = () => {
  return (
    <>
      <Breadcrumb
        pageName="Influencer Marketing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    </>
  );
};

export default InfluencerMarketing;