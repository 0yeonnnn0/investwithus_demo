import { Logos3 } from "./blocks/logos3";

const logoData = {
  logos: [
    {
      id: "logo-1",
      description: "Databricks",
      image: "/invested-company/Databricks_logo.svg",
      className: "h-[60px] w-[150px]",
    },
    {
      id: "logo-2",
      description: "Anthropic",
      image: "/invested-company/Anthropic_logo.svg",
      className: "h-[60px] w-[130px]",
    },
    {
      id: "logo-3",
      description: "Perplexity",
      image: "/invested-company/Perplexity_logo.svg",
      className: "h-[80px] w-[160px]",
    },
    {
      id: "logo-4",
      description: "Glean.ai",
      image: "/invested-company/Gleanai_logo.svg",
      className: "h-[60px] w-[120px]",
    },
    {
      id: "logo-5",
      description: "Chime",
      image: "/invested-company/Chime_logo.svg",
      className: "h-[60px] w-[100px]",
    },
  ],
};

function RollingLogo({ className }: { className?: string }) {
  return (
    <div className={`mt-20 w-full max-md:mt-10 max-md:max-w-full ${className}`}>
      <div className="text-xl font-light leading-relaxed text-center text-zinc-800 max-md:max-w-full">
        <span
          style={{
            fontFamily:
              "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 400,
            color: "rgba(161,161,161,1)",
          }}
        >
          Backed by Investors with Holdings in
        </span>
        <span
          style={{
            fontFamily:
              "Urbanist, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 400,
            color: "rgba(46,46,46,1)",
          }}
        >
          {" "}
          DataBricks, Anthropic, Perplexity, Glean.ai, and Chime
        </span>
      </div>
      <div className="mt-5 w-full max-md:max-w-full">
        <Logos3 {...logoData} className="w-full" />
      </div>
    </div>
  );
}

export default RollingLogo;
