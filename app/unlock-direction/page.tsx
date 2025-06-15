import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";

// --- COMPONENT TRANG CHÍNH ---
// Được cấu trúc lại thành một component duy nhất, sạch sẽ.
export default function DirectionPage() {
    // Dữ liệu của trang được định nghĩa tập trung để dễ quản lý
    const pageData = {
        title: "UNLOCK TRUE DIRECTION",
        description:
            "Hành trình kết nối và đối thoại sâu sắc với linh hồn để lắng nghe những thông điệp chân thật nhất từ nội tâm của bạn.",
        bannerImage: "/dinhhuong.jpg",
        contentImage: "/direction-content.jpg", // Tên file content theo yêu cầu
        cta: {
            heading: "BẠN ĐÃ SẴN SÀNG TÌM LỐI ĐI RIÊNG?",
            description:
                "Đôi khi câu trả lời bạn tìm kiếm đã luôn ở bên trong. Hãy để tôi giúp bạn lắng nghe và giải mã những thông điệp đó.",
            primaryButton: { text: "Tìm hướng đi của bạn", url: "https://docs.google.com/forms/d/1VRBGVeSNHqmVBWDiswiGHqWs2OoIl7Yobj3cneeaorI/edit" },
            secondaryButton: { text: "Khám phá dịch vụ khác", url: "/" },
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
                        alt="Direction Banner"
                        className="mt-8 w-[90%] mx-auto aspect-video rounded-lg object-cover shadow-xl"
                    />

                    {/* 3. Hình ảnh nội dung */}
                    <img
                        src={pageData.contentImage}
                        alt="Direction Content"
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