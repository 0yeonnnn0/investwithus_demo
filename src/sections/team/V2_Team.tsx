import { rethinkSans, urbanist } from "@/lib/fonts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { useState } from "react";

export interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  detail?: string[];
  bio: string[];
}

function TeamMember({ name, role, imageSrc, detail, bio }: TeamMemberProps) {
  const [firstName, lastName] = name.split(" ");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="w-[540px] h-[412px] flex flex-row group relative"
        tabIndex={0}
        aria-label={`${name} - ${role}`}
      >
        <div className="inline-flex items-start gap-[16px] relative">
          <div className="absolute left-0 top-0 w-[24px] h-[59px] group-hover:h-[186px] duration-300 bg-gradient-to-b from-[#E68A00] to-[#060052]" />
          <div className="flex w-[172px] flex-col items-start gap-[8px] pl-[32px]">
            <div className="flex flex-col gap-0">
              <span
                className={`text-black ${urbanist.className} text-[32px] font-bold leading-[100%]`}
              >
                {firstName}
              </span>
              <span
                className={`text-black ${urbanist.className} text-[32px] font-bold leading-[100%] `}
              >
                {lastName}
              </span>
            </div>
            <div>
              <span
                className={`text-black ${urbanist.className} text-[16px] font-medium leading-[120%]`}
              >
                {role}
              </span>
              {detail && (
                <div className="flex flex-col items-start gap-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className=" flex flex-col gap-[2px]">
                    {detail.map((item, index) => (
                      <span
                        key={index}
                        className={`text-black ${urbanist.className} text-[16px] font-medium leading-[120%] whitespace-pre-line`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={handleOpenModal}
                    className="w-10 h-10 ml-2 flex items-center justify-center shadow-lg border-[#E68A00] rounded-[100px] p-[12px] cursor-pointer hover:bg-[#03002A] hover:text-white"
                    aria-label={`View more details about ${name}`}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative flex-1 h-full flex items-end ">
          <Image
            src={imageSrc}
            alt={name}
            width={456}
            height={494}
            className="transition-transform duration-300 group-hover:scale-110 origin-bottom object-contain object-bottom"
            style={{ marginLeft: "-90px" }}
          />
        </div>
      </div>
      <TeamModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        teamMember={{ name, role, imageSrc, detail, bio }}
      />
    </>
  );
}

function V2_Team() {
  const teamMembers = [
    {
      name: "Mike Dusi",
      role: "Real estate investor",
      imageSrc: "/team/MikeDusi.png",
      detail: ["Entrepreneur", "Bestia co-founder"],
      bio: [
        "Mike Dusi is a seasoned real estate investor and strategist with over 20 years of expertise in deal-making, negotiation, and market growth. He specializes in revitalizing distressed properties, structuring creative financing, and maximizing investment potential in residential and multi-unit assets.",
        "His deep market insight and hands-on experience set him apart in the industry, making him a driving force behind Bestia's AI-powered real estate innovation.",
      ],
    },
    {
      name: "Vak Sambath",
      role: "Serial entreprenuer",
      imageSrc: "/team/VakSambath.png",
      detail: ["20+ years in tech", "Bestia co-founder"],
      bio: [
        "Vak Sambath is a technology innovator and entrepreneur with 20+ years of experience building transformative platforms across tech media, e-learning, finance, and real estate.",
        "As the leader of Bestia Group, he is developing an AI-powered ecosystem to redefine real estate transactions. Previously, he co-founded CreatorIQ, pioneering enterprise-grade influencer marketing solutions used by Fortune 500 companies. His expertise continues to drive Bestia’s vision for the future of real estate.",
      ],
    },
  ];

  return (
    <div
      id="team"
      className="flex min-w-[1440px] pt-[120px] flex-col items-center gap-[92px] shrink-0 relative bg-gradient-to-b from-white via-gray-50/30 to-gray-100/80"
    >
      <div className="flex w-full px-[200px] flex-col items-center gap-[16px] self-stretch">
        <span
          className={`text-[#E68A00] ${rethinkSans.className} text-center text-[24px] font-bold leading-[160%]`}
        >
          MEET THE TEAM
        </span>
        <div className="flex flex-col items-center gap-[12px] self-stretch">
          <span
            className={`text-black ${rethinkSans.className} text-center text-[43px] font-bold leading-[160%]`}
          >
            A proven real estate and technology powerhouse.
          </span>
          <span
            className={`text-black ${urbanist.className} text-center text-[20px] font-normal leading-[160%]`}
          >
            Our founding team includes professionals who have transacted and
            overseen <span className="font-bold">thousands</span> of real estate
            deals, <br />
            <span className="font-bold">hundreds of millions</span> of dollars
            in cashflows, and the construction of a{" "}
            <span className="font-bold">billion dollar</span> startup.
          </span>
        </div>
      </div>
      <div className="inline-flex w-full justify-center items-center gap-[120px] md:gap-[80px] sm:gap-[40px] pl-[80px]">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            detail={member.detail}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default V2_Team;
