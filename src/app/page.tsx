import { getPost } from "./action";

export default async function Home() {
  const post = await getPost("");

  return (
    <div
      className="flex-1 tiptap ProseMirror h-full mx-auto px-1 w-full"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
    />
  );
}
