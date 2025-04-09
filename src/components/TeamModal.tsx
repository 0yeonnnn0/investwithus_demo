import { useEffect } from "react";
import { urbanist } from "@/lib/fonts";
import { TeamMemberProps } from "@/sections/team/V2_Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamMember: TeamMemberProps;
}

const TeamModal = ({ isOpen, onClose, teamMember }: TeamModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0  z-50 flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full h-[700px] md:w-[80%] md:h-[80%] max-w-[1200px] max-h-[800px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bg/bio_bg.png"
          alt="team modal bg"
          fill
          className="object-cover border-0 rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(218deg, rgba(230, 138, 0, 0.00) 50.9%, #E68A00 99%)",
          }}
        />

        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-white" />
        </button>

        <div className="relative h-full p-12 flex flex-col justify-end text-white">
          <h1 className={`${urbanist.className} text-[64px] font-bold mb-4`}>
            {teamMember.name}
          </h1>
          <h2 className={`${urbanist.className} text-[24px] font-bold mb-8`}>
            | {teamMember.role}
            {teamMember.detail &&
              teamMember.detail.map((item, index) => (
                <span key={index}>, {item}</span>
              ))}
          </h2>

          <div
            className={`${urbanist.className} w-[780px] space-y-6  text-[20px] leading-relaxed`}
          >
            {teamMember.bio.map((bio, index) => (
              <p key={index}>{bio}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
