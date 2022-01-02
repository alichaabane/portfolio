import React from "react";
import content from "../content";
export default function Navigation() {
  return (
    <div style={{ background: "#091c29" }}>
      <div
        className="flex items-center justify-between w-10/12 mx-auto text-white  py-3"
      >
        <h1 className="text-3xl font-bold">{content.nav.logo}</h1>
        <div>
          {content.nav.links.map((link, index) => {
            return <span className="text-xl mr-4">{link.text}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
