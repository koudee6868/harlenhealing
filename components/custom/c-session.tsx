import { ArrowRight } from "lucide-react";
import Link from 'next/link'; // Sử dụng Link của Next.js để tối ưu điều hướng
import React from "react";

// 1. Đổi tên interface từ Feature thành Session và thêm thuộc tính 'link'
interface Session {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string; // Thuộc tính mới cho mỗi session
}

interface SessionCustomProps {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  sessions?: Session[]; // Đổi tên từ 'features' thành 'sessions'
}

const SessionCustom = ({
  heading = "Dịch vụ coaching 1:1",
  description = "Bước vào hành trình khám phá những năng lực ẩn sâu trong tâm trí và vũ trụ. Mỗi tính năng là một cánh cổng mở ra chiều không gian mới – nơi trực giác, năng lượng và tri thức cổ xưa cùng hòa quyện.",
  linkUrl = "#", // Link chung không còn quan trọng lắm, nhưng vẫn giữ lại
  linkText = "Book a demo",
  // 2. Cập nhật dữ liệu mặc định để có thuộc tính 'link'
  sessions = [
    {
      id: "session-1",
      title: "Soul Talk",
      description:
        "Kết nối sâu sắc với nội tâm qua giao diện tĩnh tại và thiền định. Được thiết kế để khơi dậy trực giác và mở rộng tầng ý thức cao hơn.",
      image: "/soultalk.jpg",
      link: "/soul-talk", // Ví dụ link
    },
    {
      id: "session-2",
      title: "Shadow Work",
      description:
        "Là hành trình đối diện, nhìn thấy và chữa lành những phần bị chối bỏ, bị tổn thương hoặc bị kìm nén trong tiềm thức của bạn , những phần bạn không muốn ai biết, thậm chí chính bạn cũng không dám nhìn thẳng",
      image: "/shadowwork.jpg",
      link: "/shadow-work", // Ví dụ link
    },
    {
      id: "session-3",
      title: "Chuyển Hóa / Transmutation",
      description:
        "Gỡ bỏ niềm tin giới hạn - Kết nối với bản thân thật - Làm lại từ bên trong để cảm xúc, hành vi, mối quan hệ và hiện thực bên ngoài cùng thay đổi",
      image: "/chuyenhoa.jpg",
      link: "/transmutation", // Ví dụ link
    },
    {
      id: "session-4",
      title: "Định Hướng / Unlock True Direction",
      description:
        "Cảm thấy mất phương hướng, không biết bản thân muốn gì hoặc nên đi đâu. Luôn cảm thấy lạc lõng, hoang mang, thay đổi liên tục nhưng không thật sự hiểu rõ chính mình.",
      image: "/dinhhuong.jpg",
      link: "/unlock-direction", // Ví dụ link
    },
    {
      id: "session-5",
      title: "Tổng Quan Cá Nhân",
      description:
        "Phân tích tổng quan con người bạn qua nhiều góc nhìn. Bản đồ sao - Thần số học - Tử vi",
      image: "/overview.jpg",
      link: "/overview", // Ví dụ link
    },
  ],
}: SessionCustomProps) => {
  return (
    <section className="pt-32">
      <div className="container flex flex-col gap-16">
        <div className="">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Lặp qua mảng sessions thay vì features */}
          {sessions.map((session, index) => (
            // 3. Bọc toàn bộ thẻ session bằng thẻ <Link> của Next.js
            <Link 
              href={session.link} 
              key={session.id} 
              className={`
                group flex flex-col overflow-clip rounded-xl border border-border 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8' : ''}
              `}
            >
              {/* Cấu trúc cho session đầu tiên (lớn hơn) */}
              {index === 0 ? (
                <>
                  <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                    <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                      {session.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {session.description}
                    </p>
                  </div>
                </>
              ) : (
                // Cấu trúc cho các session còn lại (nhỏ hơn)
                <>
                  <div>
                    <img
                      src={session.image}
                      alt={session.title}
                      className="aspect-video h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                    <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                      {session.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {session.description}
                    </p>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SessionCustom };

