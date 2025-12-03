import { Link } from "react-router-dom";
import miroPipeline from "../../assets/miropipeline.png?url";
import multiPipeline from "../../assets/multipipeline.png?url";
import singlePipeline from "../../assets/singlepipeline.png?url";

export default function CICDPipelineView() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md px-6 sm:px-10 py-10">
          <header className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">CI/CD Pipeline</h1>
            <p className="text-lg text-gray-600">
              Technical demonstration of CI/CD practices
            </p>
          </header>

          <div className="space-y-8 text-gray-800 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
              
               <div>
                  <img 
                    src={miroPipeline} 
                    alt="Miro Pipeline Diagram"
                    className="w-full rounded-lg shadow-md border border-gray-200"
                  />
                </div>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Single Pipeline</h3>
                  <img 
                    src={singlePipeline} 
                    alt="Single Pipeline Architecture"
                    className="w-full rounded-lg shadow-md border border-gray-200"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi Pipeline</h3>
                  <img 
                    src={multiPipeline} 
                    alt="Multi Pipeline Architecture"
                    className="w-full rounded-lg shadow-md border border-gray-200"
                  />
                </div>

              </div>
            </section>

          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
