  import React, { useState } from "react";
  import fdm from "../assets/images/fdm.png";
  import vacuum from "../assets/images/vacuum.png";
  import slm from "../assets/images/slm.png";
  import dlp from "../assets/images/dlp.png";
  import sla from "../assets/images/sla.png";
  import sls from "../assets/images/sls.png";

  const printingMethods = [
    {
      title: "Fused Deposition Modeling (FDM)",
      img: fdm,
      description:
        "Fused Deposition Modeling (FDM) is a 3D printing technology widely known for its speed, accuracy, and competitive cost. An FDM machine precisely extrudes melted plastic filament to create a part.",
    },
    {
      title: "Vacuum Casting",
      img: vacuum,
      description:
        "Using two-component polyurethanes and silicone molds, Vacuum Casting is known for its fast production of high-quality prototypes or end-use products.",
    },
    {
      title: "Selective Laser Melting (SLM)",
      img: slm,
      description:
        "SLM is a rapid prototyping, 3D printing, or additive manufacturing technique designed to use a high power-density laser to melt and fuse metallic powders together.",
    },
    {
      title: "Digital Light Processing (DLP)",
      img: dlp,
      description:
        "Both processes work by selectively exposing liquid resin to a light source—SLA a laser, DLP a projector—to form very thin solid layers of plastic that stack up to create a solid object.",
    },
    {
      title: "Stereolithography (SLA)",
      img: sla,
      description:
        "SLA uses an ultraviolet laser that draws on the surface of liquid thermoset resin to create thousands of thin layers until final parts are formed. The primary difference between DLP and SLA is the light source.",
    },
    {
      title: "Selective Laser Sintering (SLS)",
      img: sls,
      description:
        "Selective laser sintering (SLS) uses a CO2 laser that fuses nylon-based powder, layer by layer, until final thermoplastic parts are built.",
    },
  ];

  const materialsData = [
    { category: "SLA (Stereolithography)", items: [{ name: "Resin" }] },
    {
      category: "FDM (Fused deposition modeling)",
      items: [
        { name: "PLA" },
        { name: "ABS" },
        { name: "PETG" },
        { name: "TPU" },
        { name: "PC" },
        { name: "ASA" },
        { name: "PEEK" },
        { name: "PPS" },
      ],
    },
    { category: "SLS (Selective laser sintering)", items: [{ name: "Nylon" }, { name: "TPU" }] },
    { category: "DLP (Digital Light Processing)", items: [{ name: "Resin" }] },
    { category: "MJF (Multi Jet Fusion)", items: [{ name: "Nylon" }] },
    {
      category: "SLM (Selective Laser Melting)",
      items: [
        { name: "Aluminum" },
        { name: "Stainless steel" },
        { name: "Titanium" },
        { name: "Tool steel" },
      ],
    },
  ];

  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#22c55e" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#ffffff" },
    { name: "Gray", value: "#6b7280" },
  ];

  const CombinedPage = () => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleMaterialClick = (name) => {
      if (name === "PLA") {
        setSelectedMaterial(name);
        setSelectedColor(null); // reset color selection on new click
      } else {
        setSelectedMaterial(null);
        setSelectedColor(null);
      }
    };

    const handleSubmit = () => {
  if (!selectedColor) {
    alert("Please select a color before submitting.");
    return;
  }

  alert(`3D Print Order Submitted!\nMaterial: ${selectedMaterial}\nColor: ${selectedColor}`);

  // Hide the floating color box after showing the message
  setSelectedMaterial(null);
  setSelectedColor(null);
};


    return (
      <div className="bg-white">
        {/* Section 1: Printing Capabilities */}
        <section className="py-16 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            3D Printing Capabilities
          </h2>
          <p className="text-gray-500 mb-10">
            We have over 50 3D printing machines in our distributed network
          </p>

          <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
            {printingMethods.map((method) => (
              <div
                key={method.title}
                className="flex flex-col items-center bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6"
              >
                <img
                  src={method.img}
                  alt={method.title}
                  className="h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 text-justify">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </section>

  {/* Section 2: Material Selection + Floating Panel */}
  <section className="py-16 max-w-6xl mx-auto px-6 relative">
    <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
      The Best 3D Printing Material Selection
    </h2>
    <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-12"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 items-start">
      {/* LEFT SIDE — FDM + SLA + SLS + Floating Panel */}
      <div className="relative space-y-10">
        {materialsData
          .filter(
            (m) =>
              m.category.includes("FDM") ||
              m.category.includes("SLA") ||
              m.category.includes("SLS")
          )
          .map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-800 mb-3">{category}</h3>
              <ul className="space-y-1">
                {items.map(({ name }) => (
                  <li
                    key={name}
                    onClick={() => handleMaterialClick(name)}
                    className={`cursor-pointer text-gray-700 py-1 border-b border-gray-200 transition hover:text-blue-600 ${
                      selectedMaterial === name ? "text-blue-600 font-medium" : ""
                    }`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {/* Floating Panel beside FDM */}
        {selectedMaterial === "PLA" && (
          <div className="md:absolute md:right-[130px] md:top-0 mt-8 md:mt-0 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-6 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Order PLA Material</h3>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Color
            </label>
            <div className="flex flex-wrap gap-3 mb-6">
              {colors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    selectedColor === color.value
                      ? "border-blue-600 scale-110"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition"
            >
              Submit Order
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE — DLP + MJF + SLM */}
      <div className="space-y-10">
        {materialsData
          .filter(
            (m) =>
              m.category.includes("DLP") ||
              m.category.includes("MJF") ||
              m.category.includes("SLM")
          )
          .map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-800 mb-3">{category}</h3>
              <ul className="space-y-1">
                {items.map(({ name }) => (
                  <li
                    key={name}
                    onClick={() => handleMaterialClick(name)}
                    className={`cursor-pointer text-gray-700 py-1 border-b border-gray-200 transition hover:text-blue-600 ${
                      selectedMaterial === name ? "text-blue-600 font-medium" : ""
                    }`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  </section>

      </div>
    );
  };

  export default CombinedPage;
