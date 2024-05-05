import SocmedCard from "./SocmedCard";

const Socmed = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        <SocmedCard
          iconName="InstagramLogo"
          iconClass="text-blue"
          iconSize="40"
          linkS="/"
          nameS="Instagram"
        />
        <SocmedCard
          iconName="XLogo"
          iconClass="text-blue"
          iconSize="40"
          linkS="/"
          nameS="X"
        />
        <SocmedCard
          iconName="FacebookLogo"
          iconClass="text-blue"
          iconSize="40"
          linkS="/"
          nameS="Facebook"
        />
        <SocmedCard
          iconName="WhatsappLogo"
          iconClass="text-blue"
          iconSize="40"
          linkS="/"
          nameS="Whatsapp"
        />
      </div>
    </>
  );
};

export default Socmed;
