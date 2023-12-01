import WTLogo from "./WTLogo";
import WTHeader from "./WTHeader";
import WTDescription from "./WTDescription";

export default function WaitTalk() {
  return (
    <div className="p-10 transition ease-in sm:p-16 lg:px-24">
      <WTLogo />
      <WTHeader />
      <WTDescription />
    </div>
  );
}
