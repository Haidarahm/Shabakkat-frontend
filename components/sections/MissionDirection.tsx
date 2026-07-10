import Eyebrow from "@/components/ui/Eyebrow";

const directionPoints = [
  { color: "bg-red", text: "Network Expertise on Demand" },
  { color: "bg-cyan", text: "Delivering Special Projects" },
  { color: "bg-red", text: "Managing Operations End-to-End" },
];

export default function MissionDirection() {
  return (
    <div className="bg-bg-muted px-14 py-20">
      <div className="grid grid-cols-2 gap-14">
        <div className="rounded border border-border-tint bg-bg-tint p-12">
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2 className="mt-[18px] font-heading text-[30px] font-semibold uppercase text-navy">
            Enabling a smarter connected world
          </h2>
          <p className="mt-[18px] text-[15.5px] leading-[1.75] text-text-body-alt">
            Shabakkat&apos;s mission is to help clients reach their potential through technology. We remain at the
            forefront of ICT innovation to engineer and implement solutions that deliver measurable, significant,
            and timely business value — partnering with clients to achieve their goals and finding true reward in
            helping them reach market prominence.
          </p>
          <div className="mt-6 font-heading text-[15px] tracking-[0.04em] text-red">
            &quot;Your Partner For Success&quot;
          </div>
        </div>
        <div>
          <Eyebrow>OUR DIRECTION</Eyebrow>
          <h2 className="mt-4 font-heading text-[34px] font-semibold uppercase leading-[1.15] text-navy">
            People, technology, and process
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-text-body">
            Capitalizing on 800+ distinctive people, Shabakkat operates across three models — sourcing the right
            expertise from Asia, the US, Europe, and MEA to pair skill with place.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {directionPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-3.5 rounded border border-border bg-white px-5 py-4"
              >
                <div className={`h-2 w-2 flex-shrink-0 rounded-full ${point.color}`} />
                <div className="font-heading text-[14.5px]">{point.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
