import React from "react";

const TrustedBy = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 border-b-1 w-[90%] pb-5 border-b-gray-200 lg:px-10">
        <div className="flex flex-wrap  justify-center items-center gap-8 md:gap-14">
          {/* Woox */}
          <img
            src="woox.png"
            alt="Woox"
            className="h-8 md:h-10"
          />

          {/* Exodus */}
          <img
            src="exodus.png"
            alt="Exodus"
            className="h-8 md:h-10"
          />

          {/* BitGo */}
          <img
            src="bitgo.png"
            alt="BitGo"
            className="h-8 md:h-10"
          />

          {/* Ankr */}
          <img
            src="ankr.png"
            alt="Ankr"
            className="h-8 md:h-10"
          />

          {/* Metamask */}
          <img
            src="metamask.png"
            alt="Metamask"
            className="h-8 md:h-10"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;