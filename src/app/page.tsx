export default function Home() {
  return (
    <main>
      <div className="grid gap-4 lg:gap-12">
        <h1 className="text-3xl font-light leading-none md:text-4xl">
          Welcome to the <br />
          <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="text-grey-500 md:text-md text-xs italic">
          Pick a subject to get started.
        </p>
      </div>
    </main>
  )
}
