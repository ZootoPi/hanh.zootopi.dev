import { unstable_cache } from "next/cache";

export async function getPost(slug: string) {
  return unstable_cache(
    async (slug: string) => {
      const res = await fetch(`https://cms.tihado.com/api/posts?slug=${slug}`, {
        headers: {
          Authorization: `Bearer ${process.env.TAP_API_KEY}`,
        },
        next: {
          revalidate: 300, // 5 minutes
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data from CMS");
      }

      const data = (await res.json()) as {
        post: {
          title: string;
          content: string;
          slug: string;
          icon: string;
          id: number;
        };
      };

      return data.post;
    },
    [`post:${slug}`],
    {
      revalidate: 300, // 5 minutes
      tags: [`post:${slug}`],
    }
  )(slug);
}
