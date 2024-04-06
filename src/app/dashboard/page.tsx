import BackButton from "@/components/back_button";

function Dashboard() {
  return (
    <div className="flex flex-col gap-3 py-3 px-5">
      <div>Dashboard Page</div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default Dashboard;
