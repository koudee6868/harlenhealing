import { Separator } from "@/components/ui/separator";

const ReviewCustom = () => {
  return (
    <section className="pb-22">
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium">Đánh giá của khách hàng</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Hành Trình Chữa Lành & Khai Sáng
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="/1.jpg"
                alt="placeholder"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-md">
                  Mình tìm đến phiên Soul Talk khi cảm thấy hoàn toàn lạc lõng và bế tắc. Đó không phải là một buổi dạy bảo, mà là một cuộc đối thoại sâu với chính tâm hồn mình. Người hướng dẫn đã giúp mình chạm đến và lắng nghe những góc khuất bên trong, từ đó mình tự nhận ra những rào cản vô hình đã kìm hãm mình bấy lâu. Mình rời đi với cảm giác thấu hiểu bản thân và bình yên thực sự
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Trần An Nhiên
                    </p>
                    <p className="text-muted-foreground">Marketing Manager</p>
                  </div>
                  {/* <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                    alt="logo"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  97%
                </p>
                <p className="font-semibold text-primary">
                  Mức độ Hài lòng
                </p>
                <p className="text-muted-foreground">Từ các khách hàng đã trải nghiệm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  4.2x
                </p>
                <p className="font-semibold text-primary">Gia tăng Sự thấu hiểu</p>
                <p className="text-muted-foreground">Ghi nhận sau phiên thực hành đầu tiên</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="/2.jpg"
                alt="placeholder"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-md">
                  Ban đầu mình khá e ngại với Shadow Work vì sợ phải đối mặt với những điều mình luôn né tránh. Nhưng người hướng dẫn đã tạo ra một không gian an toàn tuyệt đối, giúp mình dũng cảm nhìn thẳng vào 'bóng tối' của mình. Quá trình này không hề đáng sợ, ngược lại nó giúp mình chữa lành những tổn thương cũ và chấp nhận bản thân một cách trọn vẹn. Đây là bước ngoặt lớn giúp mình tự tin hơn rất nhiều.
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-primary">
                      Lê Minh Khang
                    </p>
                    <p className="text-muted-foreground">Creative Director</p>
                  </div>
                  {/* <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="logo"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  5x
                </p>
                <p className="font-semibold text-primary">Mức độ Chấp nhận Bản thân</p>
                <p className="text-muted-foreground">
                  Đo lường qua khảo sát trước và sau buổi thực hành
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  95%
                </p>
                <p className="font-semibold text-primary">Tỷ lệ Chuyển hóa</p>
                <p className="text-muted-foreground">Khách hàng ghi nhận sự thay đổi đột phá</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ReviewCustom };
