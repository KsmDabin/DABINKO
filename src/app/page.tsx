import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative">
        {/* Top Navigation Bar - Absolute positioning over hero image */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="text-2xl text-white font-bold">Home</a>
              </div>

              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <a href="/products" className="text-white hover:text-gray-200">Products ▾</a>
                </div>
                <div className="relative group">
                  <a href="/news" className="text-white hover:text-gray-200">News ▾</a>
                </div>
                <div className="relative group">
                  <a href="/about" className="text-white hover:text-gray-200">About Us ▾</a>
                </div>
                <a href="/contact" className="text-white hover:text-gray-200">Contact Us</a>
              </nav>

              {/* Right Side Items */}
              <div className="flex items-center space-x-4">
                <button className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <div className="flex items-center">
                  <Image
                    src="/en-flag.png"
                    alt="English"
                    width={24}
                    height={24}
                    className="h-4 w-auto"
                  />
                  <span className="ml-2 text-white">English ▾</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              Premium Quality competitive prices,<br />
              Quality guranteed.
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Company Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Company Introduction</h2>
          <p className="text-gray-700">
            We specialize in manufacturing and exporting Butyl inner tubes from China to North Africa 
            and the Middle East regions. We maintain high quality standards in our production, 
            particularly for large truck inner tubes, while ensuring competitive pricing in the market.
          </p>
        </section>

        {/* Contact Information */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li>
                <strong>Address:</strong> Rm. 301-3, Daekyung T&S Bldg., 9, Yonghyeon-ro, 
                Deogyang-gu, Goyang-si, Gyeonggi-do, South Korea
              </li>
              <li><strong>Phone:</strong> +82108776467</li>
              <li><strong>Fax:</strong> +82260089735</li>
              <li><strong>Email:</strong> dabinko@kita.net</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">WhatsApp</a>
              <a href="#" className="text-blue-600 hover:underline">WeChat</a>
              <a href="#" className="text-blue-600 hover:underline">Telegram</a>
            </div>
          </div>
        </section>

        {/* Product Information */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Product Information</h2>
          <a 
            href="http://www.florescencetube.com" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Product Catalog
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2024 Dabinko International Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
