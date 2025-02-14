import AdminLink from "./components/AdminLink"

export default function AdminHomePage() {
  return (
    <main className="grid justify-items-center">
      <div className="grid w-full max-w-96 gap-4">
        <AdminLink href="/admin/category">Create New Category</AdminLink>
        <AdminLink href="/admin/create-question">Create New Question</AdminLink>
      </div>
    </main>
  )
}
