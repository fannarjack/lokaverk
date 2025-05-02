const Footer = () => {
  const footerCategories = [
    {
      title: "Platform",
      links: ["Callers", "Rankings", "Performance Metrics"],
    },
    {
      title: "Resources",
      links: ["Education", "Blog", "FAQ"],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Terms & Privacy"],
    },
  ];
  return (
    <footer className="bg-[#222222] text-white py-10 mt-7">
      {/* Top Section with 4 Columns */}
      <div className="w-full max-w-screen-xl mx-auto ">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-gray-400 text-sm max-w-screen-xl mx-auto px-4 text-center sm:text-left">
          {/* CoinWave Section (manually written) */}
          <div className="">
            <h3 className="text-xl text-white font-semibold mb-4">CoinWave</h3>
            <p className="text-sm text-gray-400 items-center">
              The platform for finding and tracking reliable meme coin callers.
            </p>
          </div>
          {footerCategories.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl text-white font-semibold mb-4">
                {section.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                {section.links.map((link, i) => (
                  <span key={i}>{link}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex items-center justify-center my-8 mx-6">
        <div className="flex-grow border-t border-gray-700" />

        <div className="mx-6 flex gap-6 text-xl">
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            🐦
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            📸
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
            🔗
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-300">
            💻
          </a>
        </div>

        <div className="flex-grow border-t border-gray-700" />
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} CoinWave. All rights reserved.</p>
        <p className="mt-1">
          This site is for educational purposes only and does not represent a
          real company.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
