import prisma from "@/lib/db";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <main>
      <div>

      </div>
      Hello Worlds
    </main>
  )
}
