import React from "react";

export default function RoadmapPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Roadmap</h1>

      <section className="mb-8">
        <p>
          Welcome to the BNB Layer Watch Roadmap page. Here, we outline our
          future plans and milestones for the platform. Our goal is to
          continuously improve and expand the features of BNB Layer Watch to
          provide the best possible experience for our users. Stay tuned for
          exciting updates and new functionalities!
        </p>
      </section>

      <section>
        <img src="/roadmap.png" alt="Roadmap" className="w-full h-auto" />
      </section>
    </div>
  );
}
