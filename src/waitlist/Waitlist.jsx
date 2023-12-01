import React from "react";
import WaitTalk from "./features/waitTalk/WaitTalk";
import WaitImage from "./features/waitImage/WaitImage";

export default function Waitlist() {
  return (
    <section className="min-h-screen grid-cols-2 lg:grid">
      <WaitTalk />
      <WaitImage />
    </section>
  );
}
