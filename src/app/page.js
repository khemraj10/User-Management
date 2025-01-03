import { columns } from "./users/columns";
import { UserTable } from "@/components/UserTable";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">User Management</h1>
      <main className="m-10">
        <UserTable columns={columns} />
      </main>
    </div>
  );
}
