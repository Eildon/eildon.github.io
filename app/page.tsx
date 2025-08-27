export default function HomePage() {
  return (
    <div className="w-full">
      {/* First Section - Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-black font-serif text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-normal">
          Eildon
        </h1>
        <p className="text-black font-serif text-lg md:text-xl lg:text-2xl mt-4 text-center max-w-2xl">
          automated web3 content marketing for busy founders focused on shipping
        </p>
      </section>

      {/* Second Section - Goal */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="max-w-4xl px-8 md:px-16 lg:px-24" style={{ marginLeft: '-15%' }}>
          <p className="text-black font-serif text-lg md:text-xl lg:text-2xl leading-relaxed">
            Our goal is simple. <br />
            To accelerate technical marketing at its simplest. <br />
            You don't need a content team for that. <br />
            You need Eildon.
          </p>
        </div>
      </section>

      {/* Third Section - Pricing */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white px-8">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-black font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Pricing
            </h2>
            <p className="text-black font-serif text-lg md:text-xl lg:text-2xl">
              Choose the plan that fits your content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-black font-serif text-2xl md:text-3xl font-normal mb-4">Free</h3>
              <p className="text-black font-serif text-4xl md:text-5xl font-normal mb-2">$0</p>
              <p className="text-black font-serif text-lg mb-8">Perfect for getting started</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Basic content templates
                </li>
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  1 article per month
                </li>
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Standard support
                </li>
              </ul>
              <button className="w-full bg-black text-white font-serif py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-black rounded-lg p-8 text-center bg-gray-50">
              <div className="mb-4">
                <span className="bg-black text-white font-serif text-sm px-3 py-1 rounded-full">Popular</span>
              </div>
              <h3 className="text-black font-serif text-2xl md:text-3xl font-normal mb-4">Pro</h3>
              <p className="text-black font-serif text-4xl md:text-5xl font-normal mb-2">$99</p>
              <p className="text-black font-serif text-lg mb-8">For growing founders</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  4 articles per month
                </li>
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Custom brand voice
                </li>
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Priority support
                </li>
                
              </ul>
              <button className="w-full bg-black text-white font-serif py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                Start Pro
              </button>
            </div>

            {/* Ultra Plan */}
            <div className="border border-gray-200 rounded-lg p-8 text-center">
              <div className="mb-4">
                <span className="bg-gray-500 text-white font-serif text-sm px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              <h3 className="text-black font-serif text-2xl md:text-3xl font-normal mb-4">Ultra</h3>
              <p className="text-black font-serif text-4xl md:text-5xl font-normal mb-2">$200</p>
              <p className="text-black font-serif text-lg mb-8">For teams & agencies</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Everything in Pro
                </li>
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Unlimited articles
                </li>
                <li className="text-black font-serif text-base flex items-center">
                  <span className="mr-2">✓</span>
                  Analytics dashboard
                </li>
              </ul>
              <button className="w-full bg-white text-black font-serif py-3 px-6 rounded-lg border border-black hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
