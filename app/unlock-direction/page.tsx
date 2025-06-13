import { Lightbulb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// Tối ưu: Loại bỏ import Avatar không sử dụng
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Particles } from "@/components/magicui/particles";

// Dữ liệu không thay đổi
const defaultPost = {
    title: "UNLOCK TRUE DIRECTION",
    authorName: "John Doe",
    image: "/dinhhuong.jpg",
    pubDate: new Date(),
    description:
        "Hành trình kết nối và đối thoại sâu sắc với linh hồn để lắng nghe những thông điệp chân thật nhất từ nội tâm của bạn",
    authorImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
};

interface DirectionData {
    title: string;
    authorName: string;
    image: string;
    pubDate: Date;
    description: string;
    authorImage: string;
}

// Tối ưu: Đặt component chính làm default export và đổi tên cho rõ ràng
export default function DirectionPage({ post = defaultPost }: { post?: DirectionData }) {
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
                    <img
                        src={image}
                        alt="placeholder"
                        className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
                    />
                </div>
            </div>
            <div className="container">
                <div className="prose dark:prose-invert mx-auto max-w-3xl">
                    <h2 className="text-3xl font-extrabold">The Great Joke Tax</h2>
                    <p className="text-muted-foreground mt-2 text-lg">
                        In a kingdom far away, where laughter once flowed freely, a peculiar
                        tale unfolded about a king who decided to tax the very essence of
                        joy itself - jokes and jest.
                    </p>

                    <h2>How the Tax System Works</h2>
                    <p>
                        The king, seeing how much happier his subjects were, realized the
                        error of his ways and repealed the joke tax. Jokester was declared a
                        hero, and the kingdom lived happily ever after.
                    </p>
                    <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>Royal Decree!</AlertTitle>
                        <AlertDescription>
                            Remember, all jokes must be registered at the Royal Jest Office
                            before telling them
                        </AlertDescription>
                    </Alert>
                    <h2>The People&apos;s Rebellion</h2>
                    <p>
                        The people of the kingdom, feeling uplifted by the laughter, started
                        to tell jokes and puns again, and soon the entire kingdom was in on
                        the joke.
                    </p>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>King&apos;s Treasury</th>
                                    <th>People&apos;s happiness</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Empty</td>
                                    <td>Overflowing</td>
                                </tr>
                                <tr className="even:bg-muted m-0 border-t p-0">
                                    <td>Modest</td>
                                    <td>Satisfied</td>
                                </tr>
                                <tr className="even:bg-muted m-0 border-t p-0">
                                    <td>Full</td>
                                    <td>Ecstatic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        The king, seeing how much happier his subjects were, realized the
                        error of his ways and repealed the joke tax. Jokester was declared a
                        hero, and the kingdom lived happily ever after.
                    </p>

                    <h2>The King&apos;s Plan</h2>

                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="placeholder"
                        className="my-8 aspect-video w-full rounded-md object-cover"
                    />
                    <p>
                        The king thought long and hard, and finally came up with{" "}
                        <a href="#">a brilliant plan</a>: he would tax the jokes in the
                        kingdom.
                    </p>
                    <blockquote>
                        &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
                        joke, so it&apos;s only fair that they should pay for the
                        privilege.&rdquo;
                    </blockquote>
                    <p>
                        The king&apos;s subjects were not amused. They grumbled and
                        complained, but the king was firm:
                    </p>
                    <ul>
                        <li>1st level of puns: 5 gold coins</li>
                        <li>2nd level of jokes: 10 gold coins</li>
                        <li>3rd level of one-liners : 20 gold coins</li>
                    </ul>
                    <p>
                        As a result, people stopped telling jokes, and the kingdom fell into
                        a gloom. But there was one person who refused to let the king&apos;s
                        foolishness get him down: a court jester named Jokester.
                    </p>
                </div>
            </div>
        </section>
    );
}