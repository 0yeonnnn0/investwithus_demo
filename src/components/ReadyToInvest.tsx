import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function ReadyToInvest() {
  return (
    <div id="invest" className="flex pt-[85px] px-[122px] flex-col items-start">
      <div className="flex h-[300px] items-center self-stretch">
        <div className="flex w-[1196px] h-[300px] px-[92px] py-[64px] items-center rounded-[8px] bg-[#E68A00]">
          <div className="flex w-[700px] flex-col items-start gap-8 shrink-0">
            <div className="flex h-[172px] flex-col justify-center items-start gap-8 shrink-0 self-stretch">
              <span className="text-white font-[Rethink Sans] text-[64px] font-bold leading-[160%]">
                I&apos;m Ready to Invest
              </span>
              <span className="text-[#212121] font-[Urbanist] text-[20px] font-semibold leading-[160%]">
                We are accepting minimum investments of $33,333.00 USD. This
                money will be invested in the form of a Post-Money MFN Safe
                Agreement.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[327px] h-[300px] -ml-[289px] pt-[60px] pb-[164px] flex-col items-start">
          <button className="flex w-[327px] h-[75px] py-3 flex-col justify-center items-center shrink-0 rounded-[20px] bg-[#FFD9A1] shadow-[0_5px_25px_0_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-5">
              <span className="text-[#03002A] font-[Urbanist] text-[28px] font-semibold leading-[160%]">
                Invest Now
              </span>
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-[#03002A] w-[28px]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadyToInvest;
