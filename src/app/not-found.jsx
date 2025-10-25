export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  px-6 py-24 text-center text-black  dark:text-white">
      <div className="max-w-md">
        <h1 className="text-9xl font-extrabold text-orange-500 dark:text-orange-400">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    </main>
  );
}
