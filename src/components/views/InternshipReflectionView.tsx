import { Link } from "react-router-dom";

export default function CICDPipelineView() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md px-6 sm:px-10 py-10">
          <header className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              Internship Reflection
            </h1>
            <p className="text-lg text-gray-600">
              Reflective report of my experience as SE intern
            </p>
          </header>

          <div className="space-y-8 text-gray-800 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Introduction
              </h2>
              <p>
                This reflection looks back to my time as an Software Engineer
                -intern as part of a Research and Development product team at a
                local company. My work focused on developing an iOS application
                and its SDK as part of a four-person domain team. The product we
                worked on was already well established and deployed globally, it
                had been under active development with the current team for
                about four years. When I started in May, I was just about to
                graduate with my Bachelor’s degree in Computer Science, and I
                was still very fresh as a software developer, having undertaken
                only a handful of mostly school related software projects
                before.
              </p>
              <p>
                Over these five months I spent with the team, I moved quickly
                from following along in the mob programming sessions and
                intensely trying to grasp how the product, development
                environment and process worked, to actively contributing in
                high-level design sessions and implementing features together
                with my domain’s seniors. My tasks included feature development,
                incident investigations, exploring security-related features and
                taking ownership of a new functionality in the team&apos;s
                internal hardware test framework.
              </p>
              <p>
                This reflection serves as one of the learning artifacts for the
                Software Engineering university course that I am currently
                taking. In this text I aim to reflect on the experience through
                the lens of five learning goals set on the course, by which the
                text is split in sections. The text will keep some distance from
                the actual events that I experienced at work, as the work was
                done under non-disclosure agreement, and instead focus on
                reflecting and comparing what I learned from an academic point
                of view.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                1. Software Engineering vs Computer Science: why SE is a
                disciplined field
              </h2>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                2. Key challenges in the project planning and execution
              </h2>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                3. Overlapping SDLC phases, relationships, and dependencies
              </h2>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                4. Methodologies and quality control: Agile, Kanban and Spiral
              </h2>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                5. Personal and organization process development
              </h2>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                Conclusion
              </h2>
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
