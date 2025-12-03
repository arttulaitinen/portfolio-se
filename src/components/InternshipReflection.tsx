import { Link } from "react-router-dom";

export default function InternshipReflection() {
  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Internship Reflection</h1>
          <p className="text-xl text-gray-600 mb-8">Insights and learnings from my internship experience</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-700 mb-4">
              Add your internship reflection content here. This section should cover:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Your role and responsibilities</li>
              <li>Key projects and accomplishments</li>
              <li>Skills learned and developed</li>
              <li>Challenges faced and how you overcame them</li>
              <li>Personal growth and insights</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Learnings</h2>
            <p className="text-gray-700 mb-4">
              Share the most important lessons and takeaways from your internship experience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Conclusion</h2>
            <p className="text-gray-700 mb-4">
              Summarize how this experience has shaped your professional goals and future direction.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/" className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
