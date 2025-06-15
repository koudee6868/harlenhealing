import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";

// --- COMPONENT TRANG CHÍNH ---
// Cấu trúc lại thành một component duy nhất, dễ quản lý.
export default function OverviewPage() {
    // Dữ liệu của trang được định nghĩa tập trung
    const pageData = {
        title: "OVERVIEW SESSION",
        description:
            "Một bản đồ định hướng giúp bạn hiểu rõ mục tiêu, giá trị và những gì cần chuẩn bị cho cuộc hành trình khám phá bản thân sắp tới.",
        bannerImage: "/overview.jpg",
        // LƯU Ý: Thay thế đường dẫn ảnh placeholder dưới đây
        contentImage: "/overview-content.jpg",
        cta: {
            heading: "BẠN ĐÃ SẴN SÀNG ĐỂ BẮT ĐẦU?",
            description:
                "Buổi Overview là bước đầu tiên để soi chiếu và làm rõ con đường phía trước. Hãy đặt một lịch hẹn để cùng nhau vẽ nên tấm bản đồ cho riêng bạn.",
            primaryButton: { text: "Đặt lịch ở đây nè", url: "https://docs.google.com/forms/d/1sNPJxqiS4OOHEsnA0c47yi9aPHyn6lJCuKvIiLwUcS0/edit" },
            secondaryButton: { text: "Xem các dịch vụ khác", url: "/" },
        },
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-background py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <Particles
                        className="absolute inset-0 -z-10"
                        quantity={100}
                        ease={80}
                        color="#ffffff"
                        refresh
                    />

                    {/* 1. Tiêu đề và mô tả */}
                    <h1 className="max-w-4xl text-pretty text-5xl font-semibold md:text-7xl">
                        {pageData.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                        {pageData.description}
                    </p>

                    {/* 2. Hình ảnh Banner */}
                    <img
                        src={pageData.bannerImage}
                        alt="Overview Banner"
                        className="mt-8 w-[90%] mx-auto aspect-video rounded-lg object-cover shadow-xl"
                    />

                    {/* 3. Một hình ảnh nội dung */}
                    <img
                        src={pageData.contentImage}
                        alt="Nội dung Overview"
                        className="mt-8 w-[90%] mx-auto rounded-lg object-cover shadow-xl"
                    />

                    {/* 4. Khối Call to Action (CTA) */}
                    <div className="mt-8 w-[90%] mx-auto">
                        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
                            <h3 className="mb-4 max-w-3xl text-2xl font-semibold md:text-4xl">
                                {pageData.cta.heading}
                            </h3>
                            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
                                {pageData.cta.description}
                            </p>
                            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                    asChild
                                >
                                    <a href={pageData.cta.secondaryButton.url}>
                                        {pageData.cta.secondaryButton.text}
                                    </a>
                                </Button>
                                <Button className="w-full sm:w-auto" asChild>
                                    <a href={pageData.cta.primaryButton.url}>
                                        {pageData.cta.primaryButton.text}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}