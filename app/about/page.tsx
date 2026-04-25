export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-myo-blue mb-12">About MYO</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-myo-blue mb-6">
            Meet Garima Arora
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            [Garima's background and story to be added]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-myo-blue mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            [Core philosophy and approach to be added]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-myo-blue mb-6">
            Why Waldorf & Art Therapy?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            [Explanation of methodology to be added]
          </p>
        </section>
      </div>

      {/* Placeholder for photo */}
      <div className="bg-gray-200 rounded-lg p-8 text-center mt-12">
        <p className="text-gray-500">Photo of Garima to be added</p>
      </div>
    </div>
  );
}
