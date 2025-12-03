import { Link } from "react-router-dom";

export default function DesignDocumentView() {
  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Design Document</h1>
          <p className="text-xl text-gray-600 mb-8">Technical design documentation and architecture</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-700 mb-4">
              Add your technical design documentation here. This section should cover:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Problem statement and objectives</li>
              <li>System architecture and design patterns</li>
              <li>Technology stack and rationale</li>
              <li>Database schema and data models</li>
              <li>API design and endpoints</li>
              <li>Security considerations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Architecture</h2>
            <p className="text-gray-700 mb-4">
              Describe the overall architecture of your system, including components, services, 
              and how they interact with each other.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Design Decisions</h2>
            <p className="text-gray-700 mb-4">
              Explain key design decisions and trade-offs you made during the development process.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Implementation</h2>
            <p className="text-gray-700 mb-4">
              Provide details about the implementation, including code structure, modules, 
              and important algorithms or techniques used.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Testing & Validation</h2>
            <p className="text-gray-700 mb-4">
              Describe your testing strategy, test cases, and how you validated the design.
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
