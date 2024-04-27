import LinkComp from "../utils/LinkComp";

const BtnAcc = () => {
  return (
    <>
      <div className="flex gap-5">
        <LinkComp targetLink="/" targetName="Masuk" IconName="User" />
        <div className="lg:flex hidden">|</div>
        <LinkComp targetLink="/" targetName="Daftar" />
      </div>
    </>
  );
};

export default BtnAcc;
