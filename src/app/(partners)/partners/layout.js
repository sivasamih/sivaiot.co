import PartnerNavBar from "@/components/compo/partners/partnerNavbar";

const ParterLayout = ({ children }) => {
  return (
    <>
      <PartnerNavBar />
      {children}
    </>
  );
};

export default ParterLayout;
