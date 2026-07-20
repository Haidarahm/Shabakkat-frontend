import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { deliveryModel } from "@/data/deliveryModel";

export default function IntegratedDeliveryModel() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading eyebrow="INTEGRATED DELIVERY MODEL" title="Three core capabilities. One strategic partner." />
      <StaggerGrid className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {deliveryModel.map((item) => (
          <StaggerItem key={item.title}>
            <Link href={item.href} className="block h-full">
              <Card className="h-full bg-white p-7">
                <div className="h-[3px] w-10 rounded-full bg-cyan" />
                <div className="mt-4 font-heading text-lg text-navy">{item.title}</div>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-text-body">{item.description}</p>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
