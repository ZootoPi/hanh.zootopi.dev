import { getPost } from "../action";

export const revalidate = 300; // 5 minutes

export default async function SideProjects() {
  const post = await getPost("projects");

  return (
    <div
      className="flex-1 tiptap ProseMirror h-full mx-auto px-1 w-full"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
    />
  );
}
