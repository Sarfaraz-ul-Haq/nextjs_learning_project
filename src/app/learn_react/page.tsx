import BackButton from "@/components/back_button";

function LearnReact() {
  return (
    <div className="flex flex-col gap-3 py-3 px-5">
      <div>{`Hello, I'm learning React.js`}</div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default LearnReact;
