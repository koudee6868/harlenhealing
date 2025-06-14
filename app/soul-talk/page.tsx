import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button"; // Thêm import cho Button

// Dữ liệu cho phần đầu trang
const postData = {
    title: "SOUL TALK SESSION",
    image: "/soultalk.jpg",
};

// Component chính đã được cập nhật với phần CTA
export default function SoulTalkPage() {
    const { title, image } = postData;

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-background py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <Particles
                        className="absolute inset-0 -z-10"
                        quantity={100}
                        ease={80}
                        color="#ffffff"
                        refresh
                    />

                    <h1 className="max-w-4xl text-pretty text-5xl font-semibold md:text-7xl">
                        {title}
                    </h1>

                    {/* 1. Hình ảnh đầu tiên */}
                    <img
                        src={image}
                        alt="Soul Talk Session Header"
                        className="mt-8 w-[90%] mx-auto aspect-video rounded-lg object-cover shadow-xl"
                    />

                    {/* 2. Hình ảnh thứ hai */}
                    <img
                        src="/soul-talk-content.jpg"
                        alt="Soul Talk Content"
                        className="mt-8 w-[90%] mx-auto rounded-lg object-cover shadow-xl"
                    />

                    {/* --- PHẦN CTA ĐƯỢC KẾT HỢP Ở ĐÂY --- */}
                    {/* Wrapper div để đảm bảo chiều rộng bằng các hình ảnh trên (w-[90%]) */}
                    <div className="mt-8 w-[90%] mx-auto">
                        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
                            <h3 className="mb-4 max-w-3xl text-2xl font-semibold md:text-4xl">
                                Bạn đã sẵn sàng lắng nghe tâm hồn?
                            </h3>
                            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
                                Hành trình chữa lành bắt đầu từ một cuộc đối thoại. Hãy để
                                tôi đồng hành cùng bạn trên con đường khám phá và thấu hiểu
                                chính mình.
                            </p>
                            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                    asChild
                                >
                                    <a href="/about">Khám phá thêm</a>
                                </Button>
                                <Button className="w-full sm:w-auto" asChild>
                                    <a href="/booking">Đặt lịch ngay</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}