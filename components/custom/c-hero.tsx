import { HandHelping, Users, Zap } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroCustomProps {
  badge?: string;
  heading: string;
  // Xóa imageSrc và imageAlt khỏi props vì chúng ta sẽ định nghĩa trực tiếp
  features?: Feature[];
}

const HeroCustom = ({
  badge = "shadcnblocks.com",
  heading = "Blocks built with Shadcn & Tailwind",
  features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Tư vấn 1:1 Chuyên sâu",
      description:
        "Nhận sự hỗ trợ và định hướng cá nhân hóa để tháo gỡ những khúc mắc và tìm ra con đường phù hợp nhất cho hành trình của bạn.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Kết nối Nội tâm",
      description:
        "Các công cụ và phương pháp thực hành giúp bạn lắng nghe tiếng nói bên trong, thấu hiểu bản thân và chữa lành từ gốc rễ.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Chuyển hóa Năng lượng",
      description:
        "Giải phóng những năng lượng tiêu cực, tắc nghẽn và đánh thức nguồn năng lượng tích cực, sáng tạo vốn có bên trong bạn.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Khai mở Tri thức Cổ xưa",
      description:
        "Tiếp cận trí tuệ từ các bộ môn huyền học như Tarot, Chiêm tinh để soi chiếu và làm chủ cuộc đời mình.",
    },
  ],
}: HeroCustomProps) => {
  return (
    <section className="pb-16">
      <div className="container-fluid overflow-hidden">
        {/* <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="text-4xl font-semibold lg:text-5xl">{heading}</h1>
        </div> */}
        
        {/* === KHỐI HÌNH ẢNH ĐÃ ĐƯỢC SỬA LẠI === */}
        <div className="relative mx-auto w-[100%]">
          <picture>
            {/* Ảnh cho màn hình lớn (desktop) */}
            <source media="(min-width: 768px)" srcSet="/hero.png" />
            
            {/* Ảnh cho màn hình nhỏ (mobile) */}
            <source media="(max-width: 767px)" srcSet="/hero-mb.png" />

            {/* Ảnh mặc định và nơi áp dụng style */}
            <img
              src="/hero.png" // Fallback image
              alt="Hero image"
              className="max-h-[auto] w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
          {/* Các div hiệu ứng khác giữ nguyên */}
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>

        {/* === KHỐI FEATURES === */}
        {/* <div className="mx-auto mt-10 flex w-[80%] flex-col md:flex-row">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-linear-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export { HeroCustom };
