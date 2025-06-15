import { HeroCustom } from "@/components/custom/c-hero";
import { ParticlesCustom } from "@/components/custom/c-particle";
import { ReviewCustom } from "@/components/custom/c-review";
import { SessionCustom } from "@/components/custom/c-session";

export default function Home() {
  return (
    <main className="px-4 md:px-0">
        {/* PHẦN 1: HERO BANNER (CHIẾM TOÀN MÀN HÌNH) */}
        <section className="relative w-full h-screen">

            {/* LỚP DƯỚI: HERO (z-10) */}
            <div className="absolute inset-0 z-10">
                <HeroCustom heading={""} />
            </div>

            {/* LỚP TRÊN: PARTICLES (z-20) */}
            <div className="absolute inset-0 z-20">
                <ParticlesCustom />
            </div>

        </section>

        <section className="flex justify-center">
            <ReviewCustom></ReviewCustom>
        </section>

        {/* PHẦN 2: SESSION (Nằm bên dưới Hero) */}
        {/* Section này giờ nằm trong luồng bình thường và sẽ hiển thị sau khi cuộn qua Hero */}
        <section className="flex justify-center">
            <SessionCustom />
        </section>
    </main>
  );
}