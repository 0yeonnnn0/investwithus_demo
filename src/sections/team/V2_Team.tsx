import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="w-[540px] h-[520px] flex flex-row">
      <div className="inline-flex items-start gap-[16px] relative">
        <div className="absolute left-0 top-0 w-[8px] h-[112px] bg-gradient-to-b from-[#E68A00] to-[#060052]" />
        <div className="flex w-[172px] flex-col items-start gap-[8px] pl-[16px]">
          <div className="flex flex-col gap-0">
            <span className="text-black font-[Urbanist] text-[32px] font-bold leading-[100%]">
              {firstName}
            </span>
            <span className="text-black font-[Urbanist] text-[32px] font-bold leading-[100%] mt-2">
              {lastName}
            </span>
          </div>
          <span className="text-black font-[Urbanist] text-[16px] font-medium leading-[200%]">
            {role}
          </span>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt={name}
        width={456}
        height={494}
        style={{ marginLeft: "-90px" }}
      />
    </div>
  );
}

function V2_Team() {
  const teamMembers = [
    {
      name: "Mike Dusi",
      role: "Real estate investor",
      imageSrc: "/team/MikeDusi.png",
    },
    {
      name: "Vak Sambath",
      role: "Serial entreprenuer",
      imageSrc: "/team/VakSambath.png",
    },
  ];

  return (
    <div
      id="team"
      className="flex py-[120px] flex-col items-center gap-[92px] shrink-0"
    >
      <div className="flex w-full px-[200px] flex-col items-center gap-[16px] self-stretch">
        <span className="text-[#E68A00] text-center font-[Rethink Sans] text-[24px] font-bold leading-[160%]">
          MEET THE TEAM
        </span>
        <div className="flex flex-col items-center gap-[12px] self-stretch">
          <span className="text-black text-center font-[Rethink Sans] text-[43px] font-bold leading-[160%]">
            A proven real estate and technology powerhouse.
          </span>
          <span className="text-black text-center font-[Urbanist] text-[20px] font-normal leading-[160%]">
            Our founding team includes professionals who have transacted and
            overseen <span className="font-bold">thousands</span> of real estate
            deals, <span className="font-bold">hundreds of millions</span> of
            dollars in cashflows, and the construction of a{" "}
            <span className="font-bold">billion dollar</span> startup.
          </span>
        </div>
      </div>
      <div className="inline-flex w-full justify-center items-center gap-[120px] pl-[80px]">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default V2_Team;
