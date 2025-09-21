import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Management",
  description: "",
  // other metadata
};

const TalentManagement = () => {
  return (
    <>
      <Breadcrumb
        pageName="Talent Management"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    </>
  );
};

export default TalentManagement;