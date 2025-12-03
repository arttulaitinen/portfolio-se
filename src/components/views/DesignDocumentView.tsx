import { Link } from "react-router-dom";

export default function DesignDocumentView() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md px-6 sm:px-10 py-10">
          <header className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              Design Document
            </h1>
            <p className="text-lg text-gray-600">
              Technical design document for this portfolio
            </p>
          </header>

          <div className="space-y-8 text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-900">1. Project</h2>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                1.1 Project introduction
              </h3>
              <p>
                The aim of this project is to design and implement a
                comprehensive developer and learning -portfolio for the
                “Software Engineering” university course. The portfolio will
                hold three reflective and comparative learning artifacts on the
                principles of software engineering, which will together fulfill
                the course&apos;s learning goals.The project is developed solo
                by Laitinen Arttu.
              </p>
              <p>
                Even though the project is quite simple and straightforward,
                this documentation is made with the best design practices in
                mind, as in if it was for a larger project. This
              </p>
              <p>
                In addition to aforementioned, the secondary aims of the project
                are to gain experience in using React, Vite, Tailwind CSS,
                TypeScript, designing software projects and implementing CI/CD
                pipelines.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                1.2 Phases and schedule
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Week 1 - Initial planning: ideating, mapping requirements
                  &amp; features, planning the artifacts
                </li>
                <li>
                  Week 2 - Design: settling on the architecture, designing site
                  structure &amp; layout and UI
                </li>
                <li>
                  Week 3 - Development: implementing the frontend, configuring
                  CI/CD
                </li>
                <li>
                  Week 4 - Wrapping up: testing, finishing up the artifacts and
                  refining the site content
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                1.3 Tools, libraries and frameworks
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Frontend framework: React</li>
                <li>Build: Vite</li>
                <li>Styling: Tailwind CSS</li>
                <li>CI / CD: GitHub Actions</li>
                <li>Testing: Vitest, jsdom</li>
                <li>Formatting and static analysis: ESLint, Prettier</li>
                <li>Routing: react-router-dom</li>
                <li>Deployment: GitHub Pages, gh-pages adapter</li>
                <li>Source control: Git, GitHub</li>
                <li>IDE: VS Code</li>
                <li>AI: GPT-5</li>
                <li>Design tools: Miro</li>
              </ul>
            </section>

            <h2 className="text-2xl font-semibold text-gray-900">
              2. Technical description
            </h2>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                2.1 Portfolio
              </h3>
              <p>
                The portfolio aims to be of simple and minimal design. Emphasis
                is put on the concise presentation, readability and clarity. It
                is oriented mainly towards other developers and recruiters. It
                will serve as a professional showcase (extension of CV) and as a
                platform for presenting the learning artifacts of the “Software
                Engineering” course.
              </p>
              <p>The portfolio will feature following views:</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Frontpage / introduction
                  <br />
                  Landing page a brief introduction, links to “socials”
                  (LinkedIn, GitHub)
                </li>
                <li>
                  Project &amp; course gallery
                  <br />
                  Collection of selected development projects and core courses
                  <br />
                  Short summaries of each
                </li>
                <li>
                  Work experience / internship retrospective (1st artifact)
                  <br />
                  Reflective analysis of the internship experience
                  <br />
                  Comparison of SE principles VS in-practice
                </li>
                <li>
                  Portfolio feature &amp; design plan (2nd artifact)
                  <br />
                  Documentation of planning, design and architectural choices
                  <br />
                  Explaining design choices made through SE concepts
                </li>
                <li>
                  Portfolio CI/CD pipeline (3nd artifact)
                  <br />
                  Presentation and analysis of the GitHub action pipeline
                  <br />
                  Reflective analysis of pipelines role in SDLC (automation
                  &amp; quality control)
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                2.2 Environment
              </h3>
              <p>
                The project operates within the following technical
                environment(s):
              </p>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Production
                </h4>
                <p>
                  (JavaScript enabled) browser’s execution of React + Vite build
                  output
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Development
                </h4>
                <p>Local development server using Vite</p>
                <p>Node.js and npm for dependency management</p>
                <p>VS Code as IDE</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Build &amp; deployment
                </h4>
                <p>CI/CD pipeline using GitHub Actions</p>
                <p>Automated build, lint and testing steps</p>
                <p>Deployed to GitHub Pages</p>
                <p>Repo hosted on GitHub</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Testing &amp; QA
                </h4>
                <p>Vitest for unit testing</p>
                <p>ESLint for static code analysis</p>
                <p>Prettier for consistent formatting</p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                2.3 Features
              </h3>
              <p>
                Each feature listed includes a short description of a
                functionality that the ready product fulfills. For some features
                there is a hard “passing requirement” (numbered text) that needs
                to be achieved. When ready, the portfolio will include following
                features:
              </p>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Landing page and navigation
                </h4>
                <p>
                  Focus on having only the most important, aimed to be readable
                  by glancing at it (for recruiters).
                </p>
                <p>1. Readable in about a minute of time</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Navigation
                </h4>
                <p>
                  2. Navigation can be figured out by an user without any
                  instruction from the landing page
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Responsive UI
                </h4>
                <p>
                  3. Deployed site functions the same whether viewed on desktop
                  or on mobile
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Component-based architecture
                </h4>
                <p>
                  All views are structured as / using reusable React components
                </p>
                <p>
                  Clear separation of functionality (layout, content,
                  navigation)
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  CI/CD pipeline
                </h4>
                <p>Triggered automatically on new commit/push</p>
                <p>
                  4. Pipeline steps included and functional (as listed in the
                  photo 1)
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Sections for artifacts
                </h4>
                <p>Text-heavy sections, rendered in easily readable format</p>
                <p>
                  Focused on fulfilling the learning goals set by the course
                </p>
                <p>
                  5. Artifacts collectively fulfill the learning goals listed on
                  the course and aim to achieve the highest grade by following
                  the evaluation rubric
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Sections for professional showcase
                </h4>
                <p>
                  Gallery-type showcase where each project and core courses are
                  described
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Performance considerations
                </h4>
                <p>Vite build optimization</p>
                <p>Lazy loading for attached photos</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Maintainable structure
                </h4>
                <p>Structured folder hierarchy</p>
                <p>ESLint + Prettier enforced code style</p>
                <p>Easily extendable for future projects</p>
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
