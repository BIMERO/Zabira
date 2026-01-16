import type { ColumnDef } from "@tanstack/react-table";
import { tableData, type RecentData } from "../../utils/dashboard";
import { DataTable } from "../../components/common/DataTable";
import {
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
} from "react-icons/io";

const DashboardTable = () => {
  const columns: ColumnDef<RecentData>[] = [
    {
      accessorKey: "channel",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">Channel</span>
      ),
      cell: ({ row }) => (
        <span className="text-sm text-[#111827] font-medium">
          {row.original.channel}
        </span>
      ),
    },
    {
      accessorKey: "type",
      header: () => (
        <span className="text-xs font-medium text-[#718096] capitalize">
          type
        </span>
      ),
      cell: ({ row }) => (
        <span className="flex items-center gap-2">
          {row.original.type === "deposit" ? (
            <IoIosArrowRoundDown color="#0BA259" size={20} />
          ) : (
            <IoIosArrowRoundUp color="#FD6A6A" size={20} />
          )}
          <span className="text-sm text-[#111827] font-medium">
            {row.original.type === "deposit" ? "Deposit" : "Withdrawal"}
          </span>
        </span>
      ),
    },

    {
      accessorKey: "amount",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">amount</span>
      ),
      cell: ({ row }) => (
        <span className="text-sm text-[#111827] font-medium">
          {row.original.amount}
        </span>
      ),
    },

    {
      accessorKey: "fee",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">fee</span>
      ),
      cell: ({ row }) => (
        <span className="text-sm text-[#111827] font-medium">
          {row.original.fee}
        </span>
      ),
    },

    {
      accessorKey: "total",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">total</span>
      ),
      cell: ({ row }) => (
        <span className="text-sm text-[#111827] font-medium">
          {row.original.total}
        </span>
      ),
    },

    {
      accessorKey: "referenceId",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">Reference ID</span>
      ),
      cell: ({ row }) => (
        <span className="text-sm text-[#718096] font-medium">
          {row.original.referenceId}
        </span>
      ),
    },

    {
      accessorKey: "status",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">Reference ID</span>
      ),
      cell: ({ row }) => (
        <span
          className={`text-sm font-medium py-1 px-2 rounded ${
            row.original.status === "success"
              ? "text-[#0CAF60] bg-[#EFFBF7]"
              : row.original.status === "pending"
              ? "text-[#FE964A] bg-[#FFF0E6]"
              : "text-[#FD6A6A] bg-[#FFF0F0]"
          }`}
        >
          {row.original.status === "success"
            ? "Success"
            : row.original.status === "pending"
            ? "Pending"
            : "Cancelled"}
        </span>
      ),
    },

    {
      accessorKey: "date",
      header: () => (
        <span className="text-xs font-medium text-[#718096]">date</span>
      ),
      cell: ({ row }) => (
        <span className="flex flex-col gap-1">
          <span className="text-sm text-[#111827] font-medium">
            {row.original.date}
          </span>
          <span className="font-medium text-[#718096] text-xs">
            {row.original.time}
          </span>
        </span>
      ),
    },
  ];

  return (
    <section className="bg-[#FFFFFF] rounded-3xl p-6 w-full hidden md:block overflow-x-auto">
      <div className="flex items-center justify-between p-3 mb-6">
        <p className="font-bold">Recent Transactions</p>
        <p className="flex items-center gap-1 text-[#0044EE] text-sm font-semibold">
          View All <IoIosArrowForward />
        </p>
      </div>
      <DataTable data={tableData} columns={columns} />
    </section>
  );
};

export default DashboardTable;
