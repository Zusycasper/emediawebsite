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
                We’re not just another agency, we’re a collective of designers,
                developers, strategists, and tech innovators who live and
                breathe digital and tech experiences. 
                <br/>
                Based in <b>UK </b> and <b>Sri Lanka </b>,
                we bring brands to life with bold ideas, striking visuals,
                intelligent solutions, and seamless technology. We push
                boundaries, fight for great concepts, and craft work that looks
                amazing, performs flawlessly, and drives results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeAreSection;
