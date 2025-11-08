import { changelog as rawChangelog, Change } from "@/lib/constants/changelog";

export default function ChangelogPage() {
  // Sort changelog by date descending
  const sortedChangelog: Change[] = [...rawChangelog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Changelog</h1>
      <div className="space-y-8">
        {sortedChangelog.map((entry) => (
          <section key={entry.date} className="border-b pb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              {entry.date}
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-800">
              {entry.changes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
