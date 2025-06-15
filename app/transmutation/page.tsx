import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";

// --- COMPONENT TRANG CHÍNH ---
// Tái cấu trúc để chứa tất cả logic và hiển thị trong một file duy nhất.
export default function TransmutationPage() {
    // Dữ liệu cho trang, được định nghĩa gọn gàng ở đây
    const pageData = {
        title: "TRANSMUTATION SESSION",
        bannerImage: "/chuyenhoa.jpg",
        // LƯU Ý: Thay thế các đường dẫn ảnh placeholder dưới đây
        contentImages: [
            "/trans-content-1.jpg",
            "/trans-content-2.jpg",
            "/trans-content-3.jpg",
        ],
        cta: {
            heading: "SẴN SÀNG ĐỂ CHUYỂN HOÁ?",
            description:
                "Đây là không gian an toàn để bạn biến đổi tận gốc những thách thức, không chỉ vượt qua mà còn vươn lên mạnh mẽ hơn từ chính nghịch cảnh.",
            primaryButton: { text: "Đặt lịch ở đây nè", url: "#" },
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

                    {/* 1. Tiêu đề chính */}
                    <h1 className="max-w-4xl text-pretty text-5xl font-semibold md:text-7xl">
                        {pageData.title}
                    </h1>

                    {/* 2. Hình ảnh Banner */}
                    <img
                        src={pageData.bannerImage}
                        alt="Transmutation Banner"
                        className="mt-8 w-[90%] mx-auto aspect-video rounded-lg object-cover shadow-xl"
                    />

                    {/* 3. Ba hình ảnh nội dung */}
                    {pageData.contentImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Nội dung chuyển hoá ${index + 1}`}
                            className="mt-8 w-[90%] mx-auto rounded-lg object-cover shadow-xl"
                        />
                    ))}

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