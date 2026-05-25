import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Velvenest | Premium Boutique Homestay & Retreat',
  description: 'Escape to Velvenest—a curated boutique homestay offering a luxurious, cozy sanctuary. Experience premium comfort, breathtaking local scenery, and serene spaces.',
  keywords: ['Velvenest', 'boutique homestay', 'luxury villa rental', 'cozy retreat', 'premium stay'],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-800 font-sans selection:bg-emerald-100">

      {/* Navigation Header */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-semibold tracking-wide text-stone-900">
          Velve<span className="text-emerald-700 font-light">nest</span>
        </div>
        <a
          href="#reserve"
          className="text-sm font-medium border border-zinc-300 hover:border-zinc-800 px-4 py-2 rounded-full transition-all"
        >
          Book Your Stay
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-20 text-center md:text-left md:grid md:grid-cols-12 md:gap-12 md:items-center">
        <div className="md:col-span-6 mb-12 md:mb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 inline-block mb-3">
            Boutique Sanctuary
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 tracking-tight leading-none mb-6">
            Your premium home away from home.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
            Welcome to Velvenest. Unwind in a thoughtfully designed space combining the plush comfort of a boutique resort with the peaceful privacy of a hidden nest.
          </p>
          <a
            href="#reserve"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-sm block sm:inline-block"
          >
            Check Seasonal Rates
          </a>
        </div>

        {/* Main Showcase Image Placeholder */}
        <div className="md:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200 shadow-md bg-stone-100">
          <img
            src="/velvenest/hero-showcase.jpeg"
            alt="Velvenest Homestay elegant warm-lit exterior entrance"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </header>

      {/* Key Details Grid */}
      <section className="bg-zinc-100 border-y border-zinc-200 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-700 text-center mb-12">
            Curated Experiences
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200/60">
              <div className="text-2xl mb-4">🛏️</div>
              <h3 className="text-xl font-medium mb-2 text-stone-900">The Comfort</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Plush bedding, premium linens, and spacious rooms designed to ensure complete rest.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200/60">
              <div className="text-2xl mb-4">🌿</div>
              <h3 className="text-xl font-medium mb-2 text-stone-900">The Surrounding</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Nestled perfectly close to historical pathways and panoramic riverside walking trails.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200/60 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-medium mb-2 text-stone-900">Modern Amenities</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Equipped with high-speed fiber Wi-Fi, fully dedicated workspace setups, and private parking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking and Contact Footer */}
      <section id="reserve" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">
          Reserve the Nest
        </h2>
        <p className="text-zinc-600 max-w-xl mx-auto mb-10">
          We process bookings directly via a simple text or email inquiry to offer personalized itinerary packages and flexible check-in times.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 max-w-2xl mx-auto mb-12">

          {/* Phone Numbers Card */}
          <div className="flex-1 bg-white border border-zinc-300 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">
              📞 Call to Book
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918073193641"
                className="text-lg font-medium text-stone-900 hover:text-emerald-700 transition-colors block"
              >
                +91 80731 93641
              </a>
              <div className="h-px bg-zinc-100 w-full" /> {/* Thin divider line */}
              <a
                href="tel:+9160018977473"
                className="text-lg font-medium text-stone-900 hover:text-emerald-700 transition-colors block"
              >
                +91 60018 977473
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex-1 bg-white border border-zinc-300 p-6 rounded-2xl shadow-sm flex flex-col justify-between text-center">
            <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">
              ✉️ Email Inquiries
            </div>
            {/* Added justify-center and w-full to perfectly center the link vertically and horizontally */}
            <div className="flex items-center justify-center h-full w-full">
              <a
                href="mailto:tanujarudola06@gmail.com"
                className="text-lg font-medium text-stone-900 hover:text-emerald-700 transition-colors break-all"
              >
                tanujarudola06@gmail.com
              </a>
            </div>
          </div>

        </div>

        <p className="text-xs text-zinc-400">
          📍 Location.{' '}
          <a
            href="https://www.google.com/maps/place/30%C2%B022'18.5%22N+77%C2%B053'07.9%22E/@30.3718152,77.8829592,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.3718152!4d77.8855341?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-600 transition-colors"
          >
            Open in Google Maps
          </a>
        </p>
      </section>

    </div>
  );
}