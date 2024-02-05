type Props = {
  params: { slug: string };
};

function BlogDetailsPage({ params }: Props) {
  return <h1>{params.slug}</h1>;
}

export default BlogDetailsPage;
