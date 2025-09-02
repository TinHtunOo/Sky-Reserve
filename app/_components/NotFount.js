import Link from "next/link";

function NotFount() {
  return (
    <main className="h-[80vh] text-center space-y-6 flex items-center justify-center">
      <div>
        <h1 className="h1 font-semibold">You cannoot access to this page :(</h1>
        <div className="">
          <Link
            href="/"
            className="inline-block hover:text-brand underline  text-fg px-6 py-3 text-default mt-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFount;
