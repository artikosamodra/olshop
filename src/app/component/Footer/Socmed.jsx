import SocmedCard from "./SocmedCard";

const Socmed = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <SocmedCard
          iconName="InstagramLogo"
          iconClass=""
          iconSize="36"
          linkS="/"
          nameS="Instagram"
        />
        <SocmedCard
          iconName="XLogo"
          iconClass=""
          iconSize="36"
          linkS="/"
          nameS="X"
        />
        <SocmedCard
          iconName="FacebookLogo"
          iconClass=""
          iconSize="36"
          linkS="/"
          nameS="Facebook"
        />
        <SocmedCard
          iconName="WhatsappLogo"
          iconClass=""
          iconSize="36 "
          linkS="/"
          nameS="Whatsapp"
        />
      </div>
    </>
  );
};

export default Socmed;
