import CompleteProfile from "./CompleteProfile";
import DashboardContent from "./DashboardContent";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardTable from "./DashboardTable";
import MakePayments from "./MakePayments";

const Dashboard = () => {
  return (
    <section className="p-6 flex flex-col gap-6">
      <DashboardHeader />
      <CompleteProfile />
      <MakePayments />
      <DashboardContent />
      <DashboardTable />
      <DashboardFooter />
    </section>
  );
};

export default Dashboard;
