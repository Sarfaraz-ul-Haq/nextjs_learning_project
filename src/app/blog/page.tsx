import BackButton from "@/components/back_button";

function Blog() {
  return (
    <div className="flex flex-col gap-3 py-3 px-5">
      <div>Hello, this is my Blog Page</div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default Blog;
