

const fetchPostBySlug = async (slug) => {
  // Replace with your API call or database query
  const posts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post.",
      slug: "first-post",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post.",
      slug: "second-post",
    },
  ];
  return posts.find((post) => post.slug === slug) || null;
};

export default async function BlogPostPage({
  params}) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
