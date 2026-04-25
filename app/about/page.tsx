import content from "@/data/content.json";

export default function About() {
  const aboutData = content.about;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-myo-blue mb-12">{aboutData.title}</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-myo-blue mb-6">
            {aboutData.garimaroleTitle}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {aboutData.garimaBio}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-myo-blue mb-6">
            {aboutData.philosophy.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {aboutData.philosophy.text}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-myo-blue mb-6">
            {aboutData.waldorfExplanation.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {aboutData.waldorfExplanation.text}
          </p>
        </section>
      </div>

      {/* Placeholder for photo */}
      <div className="bg-gray-200 rounded-lg p-8 text-center mt-12">
        <p className="text-gray-500">{aboutData.photoCaption}</p>
      </div>
    </div>
  );
}
