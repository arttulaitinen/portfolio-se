import { Link } from "react-router-dom";

export default function CICDPipelineView() {
  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">CI/CD Pipeline</h1>
          <p className="text-xl text-gray-600 mb-8">Implementation and best practices for continuous integration and deployment</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-700 mb-4">
              Add your CI/CD pipeline documentation here. This section should include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Architecture and design of your pipeline</li>
              <li>Tools and technologies used (GitHub Actions, Jenkins, GitLab CI, etc.)</li>
              <li>Build, test, and deployment stages</li>
              <li>Automation strategies</li>
              <li>Monitoring and error handling</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Implementation Details</h2>
            <p className="text-gray-700 mb-4">
              Provide technical details about your pipeline implementation, including configuration files, 
              scripts, and best practices you followed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Results & Impact</h2>
            <p className="text-gray-700 mb-4">
              Describe the outcomes of your CI/CD implementation, such as deployment frequency, 
              reduced manual effort, or improved code quality.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Lessons Learned</h2>
            <p className="text-gray-700 mb-4">
              Share what you learned from implementing and maintaining a CI/CD pipeline.
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
