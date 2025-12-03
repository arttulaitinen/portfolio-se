import skojImage from "../../assets/skoj.png?url";
import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <img
            src={skojImage}
            alt="Arttu Laitinen"
            className="w-96 h-40 md:w-full md:h-auto rounded-lg mx-auto mb-6 object-cover"
            style={{ maxWidth: '387px', height: '164px' }}
          />
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Arttu Laitinen</h1>
          <p className="text-xl text-gray-600 mb-12">cs-student @ uef / joensuu</p>

          {/* Learning Artifacts */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Learning Artifacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                to="/internship-reflection"
                className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Internship Reflection</h3>
                <p className="text-gray-600">Insights and learnings from my internship experience</p>
              </Link>
              <Link
                to="/ci-cd-pipeline"
                className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CI/CD Pipeline</h3>
                <p className="text-gray-600">Implementation and best practices for continuous integration</p>
              </Link>
              <Link
                to="/design-doc"
                className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Doc</h3>
                <p className="text-gray-600">Technical design documentation and architecture</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="text-center py-8">
          <p className="text-gray-700 text-lg">
            <strong>Contacts:</strong> arttu.laitinen9@gmail.com, +358443078123
          </p>
        </div>
      </div>
    </div>
  );
}
