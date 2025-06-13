
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Particles } from "@/components/magicui/particles";

const defaultPost = {
    title: "TRANSMUTATION SESSION",
    authorName: "John Doe",
    image: "/chuyenhoa.jpg",
    pubDate: new Date(),
    description:
        "Quá trình biến đổi tận gốc những thách thức, giúp bạn không chỉ vượt qua mà còn vươn lên mạnh mẽ hơn từ chính nghịch cảnh.",
    authorImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
};

interface SoulTalkData {
    title: string;
    authorName: string;
    image: string;
    pubDate: Date;
    description: string;
    authorImage: string;
}

const SoulTalk = ({ post = defaultPost }: { post?: SoulTalkData }) => {
    const { title, authorName, image, pubDate, description, authorImage } = post;
    return (
        <section className="py-8">
            <div className="container">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
                    <Particles />
                    <h1 className="max-w-3xl text-pretty text-5xl font-semibold md:text-6xl">
                        {title}
                    </h1>
                    <h3 className="text-muted-foreground max-w-3xl text-lg md:text-xl">
                        {description}
                    </h3>
                    {/* <div className="flex items-center gap-3 text-sm md:text-base">
                        <Avatar className="h-8 w-8 border">
                            <AvatarImage src={authorImage} />
                            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>
                            <a href="#" className="font-semibold">
                                {authorName}
                            </a>
                        </span>
                    </div> */}
                    <img
                        src={image}
                        alt="placeholder"
                        className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
                    />
                </div>
            </div>
            <div className="container">
                <div className="prose dark:prose-invert mx-auto max-w-3xl">
                    <h2 className="text-3xl font-extrabold">KÍCH HOẠT PHIÊN BẢN MỚI TỪ BÊN TRONG ✨</h2>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Gỡ bỏ niềm tin giới hạn<br></br>
                        Kết nối với bản thân thật<br></br>
                        Làm lại từ bên trong để cảm xúc, hành vi, mối quan hệ và hiện thực bên ngoài cùng thay đổi
                    </p>
                    <br></br>
                    <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>GÓI 7 NGÀY “KÍCH HOẠT & LÀM MỚI”</AlertTitle>
                        <AlertDescription>
                            <div>Giá dịch vụ: 1,500,000đ <s>3,000,000đ</s></div>
                            Phù hợp với ai?
                            <br></br>
                            - Người mới bắt đầu làm việc với tiềm thức
                            <br></br>
                            - Đang rối bời, mất phương hướng, cần được dẫn lối ra khỏi trạng thái tắc nghẽn nhanh chóng
                            <br></br><br></br>
                            Bạn sẽ nhận được:
                            <br></br>
                            - Khai vấn 1:1 (60-90 phút)
                            <br></br>
                            - Xác định niềm tin gốc đang kìm hãm bạn (liên quan đến tình cảm, tiền bạc, giá trị bản thân…)
                            <br></br>
                            - Chỉ ra mẫu hành vi lặp lại & giới hạn tiềm thức
                            <br></br><br></br>
                            Kế hoạch cá nhân hóa 7 ngày
                            <br></br>
                            - Bài tập nội tâm mỗi ngày (viết, chiêm nghiệm, tự phản tỉnh)
                            <br></br>
                            - Thiền dẫn ngắn
                            <br></br><br></br>
                            Đồng hành 1:1 (qua chat hoặc voice hỗ trợ mỗi ngày)
                            <br></br>
                            - Kiểm tra ,hướng dẫn và nhắc nhớ thực hành
                            <br></br>
                            - Gỡ rối cảm xúc khi phát sinh
                            <br></br><br></br>
                            Buổi kết thúc: Tích hợp & định hướng bước tiếp theo (30-45 phút)
                            <br></br><br></br>
                            QUÀ TẶNG:
                            <br></br>
                            - File thực hành PDF
                            <br></br>
                            - Thiền dẫn & nhạc năng lượng phù hợp
                            <br></br>
                            - Giảm giá 10% nếu đăng ký gói tiếp theo (ví dụ: Shadow Work 2h hoặc các gói dịch vụ đang hiện hành)
                        </AlertDescription>
                    </Alert>
                    <br></br>
                    <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>GÓI 14 NGÀY – “CHUYỂN HOÁ SÂU & CÀI LẠI TIỀM THỨC”</AlertTitle>
                        <AlertDescription>
                            <div>Giá dịch vụ: 2,650,000đ <s>5,700,000đ</s></div>
                            Phù hợp với ai?
                            <br></br>
                            - Người đã có nền tảng hoặc tự khám phá nhưng vẫn bị mắc kẹt
                            <br></br>
                            - Đã ý thức được vấn đề nhưng chưa thoát khỏi được cảm xúc tiêu cực, lặp lại tổn thương cũ
                            <br></br>
                            - Muốn thay đổi toàn diện và tích hợp sâu
                            <br></br><br></br>
                            Bạn sẽ nhận được:
                            <br></br>
                            - Khai vấn gốc rễ & bản đồ chuyển hoá (90 phút)
                            <br></br>
                            - Đi sâu vào tuổi thơ, vai diễn tiềm thức, Inner Child
                            <br></br>
                            - Gọi tên tổn thương gốc và mô thức vô thức đang vận hành
                            <br></br><br></br>
                            Lộ trình chuyển hoá 14 ngày
                            <br></br>
                            - Chia làm 2 chặng:
                            <br></br>
                            - Tuần 1: Nhận diện – giải phóng
                            <br></br>
                            - Tuần 2: Tái lập – tích hợp
                            <br></br>
                            - Bài tập, câu hỏi gợi mở, thực hành viết & thiền cá nhân hoá mỗi ngày
                            <br></br><br></br>
                            2 buổi mini hỗ trợ giữa hành trình (30 phút/buổi)
                            <br></br>
                            - Review tiến trình – gỡ rối – nâng cấp bài tập theo tiến độ thực tế
                            <br></br><br></br>
                            Support 1:1 hàng ngày (qua chat/voice)
                            <br></br>
                            - Phản hồi sâu – giải cảm xúc – giữ năng lượng tích cực
                            <br></br><br></br>
                            Buổi kết thúc (60 phút):
                            <br></br>
                            - Tổng kết toàn bộ hành trình
                            <br></br>
                            - Cài niềm tin mới vào tiềm thức
                            <br></br>
                            - Hướng dẫn xây dựng thói quen & ý thức mới lâu dài
                            <br></br><br></br>
                            Sau 14 ngày, bạn sẽ cảm nhận rõ:
                            <br></br>
                            - Những nút thắt cũ đã được tháo
                            <br></br>
                            - Tư duy và cảm xúc không còn phản ứng tự động
                            <br></br>
                            - Bạn biết cách lắng nghe bản thân, chữa lành, và tự dẫn đường
                            <br></br><br></br>
                            QUÀ TẶNG:
                            <br></br>
                            - File thực hành PDF
                            <br></br>
                            - Thiền dẫn & nhạc năng lượng phù hợp
                            <br></br>
                            - Giảm giá 10% nếu đăng ký gói tiếp theo (ví dụ: Shadow Work 2h hoặc các gói dịch vụ đang hiện hành)
                        </AlertDescription>
                    </Alert>
                    <br></br>
                    <h2><strong>KHÁC BIỆT GIỮA 7 VÀ 14 NGÀY</strong></h2>
                    <p>
                        👉 Gói 14 ngày không chỉ giúp bạn thay đổi rõ rệt hơn mà còn kinh tế hơn nếu bạn thực sự sẵn sàng đi sâu và tạo nên phiên bản mới cho cuộc đời mình.
                    </p>
                    <br></br>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nội dung</th>
                                    <th>7 ngày</th>
                                    <th>14 ngày</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lộ trình</td>
                                    <td>Nhận diện - chuyển hóa ban đầu</td>
                                    <td>Đào sâu, giải phóng, tái lập nền tảng</td>
                                </tr>
                                <tr className="even:bg-muted m-0 border-t p-0">
                                    <td>Độ sâu</td>
                                    <td>Làm rõ vấn đề chính </td>
                                    <td>Gỡ gốc rễ + chuyển đổi năng lượng</td>
                                </tr>
                                <tr className="even:bg-muted m-0 border-t p-0">
                                    <td>Support</td>
                                    <td>Nhẹ nhàng mỗi ngày</td>
                                    <td>Sát sao, đi cùng xuyên suốt</td>
                                </tr>
                                <tr className="even:bg-muted m-0 border-t p-0">
                                    <td>Buổi phụ</td>
                                    <td>Không có</td>
                                    <td>2 buổi mini review tiến trình</td>
                                </tr>
                                <tr className="even:bg-muted m-0 border-t p-0">
                                    <td>Hiệu quả</td>
                                    <td>Gỡ rối, bắt đầu nhẹ nhàng</td>
                                    <td>Chuyển mình rõ rệt và thay đổi sâu từ bên trong</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { SoulTalk };

interface CtaProps {
    heading: string;
    description: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

const Cta = ({
    heading = "Call to Action",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis!",
    buttons = {
        primary: {
            text: "Đặt lịch hẹn",
            url: "https://www.shadcnblocks.com",
        },
        secondary: {
            text: "Khám phá thêm",
            url: "/",
        },
    },
}: CtaProps) => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
                    <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        {heading}
                    </h3>
                    <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
                        {description}
                    </p>
                    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                        {buttons.secondary && (
                            <Button variant="outline" className="w-full sm:w-auto" asChild>
                                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                            </Button>
                        )}
                        {buttons.primary && (
                            <Button className="w-full sm:w-auto" asChild>
                                <a href={buttons.primary.url}>{buttons.primary.text}</a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Cta };



export default function Home() {
    return (
        // Thẻ <main> giờ đây chỉ là một thẻ bao bọc bình thường
        <main>
            <section className="flex justify-center">
                <SoulTalk></SoulTalk>
            </section>

            <section className="flex justify-center">
                <Cta heading={"SẴN SÀNG KHÁM PHÁ THÊM VỀ BẠN?"} description={"Không chỉ là một cuộc trò chuyện, đây là không gian an toàn để bạn khám phá và thấu hiểu bản thể đích thực của chính mình"}></Cta>
            </section>
        </main>
    );
}
