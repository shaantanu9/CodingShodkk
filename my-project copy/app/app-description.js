import { unstable_getServerSession } from "next-auth/next";

export default async function AppDescription() {
  const session = await unstable_getServerSession();
  console.log("Hello from app-description.js", session);
  return (
    <div>
      <div>
        This is the application description component (server component).
      </div>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
