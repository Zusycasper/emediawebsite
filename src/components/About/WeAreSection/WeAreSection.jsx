import React from "react";

function WeAreSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/media/about/weAre.jpg"
                alt="Business Meeting"
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">
                We're specialists, not "do-it-all" generalists
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
               For over 14 years, we’ve been helping small businesses across
                the <b>UK</b> and
                <b> Sri Lanka</b> with their IT needs providing smart,
                reliable, and scalable tech support that fuels growth. But we’re
                more than that. We’re a global collective of designers,
                developers, strategists, and tech innovators based in the <b>UK</b> and
                <b> Sri Lanka</b>. 
                <br/> <br/> We live and breathe digital crafting bold ideas,
                striking visuals, and intelligent, seamless solutions that bring
                brands to life. We push boundaries, fight for great concepts,
                and deliver work that not only looks amazing but performs
                flawlessly and drives real results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeAreSection;
