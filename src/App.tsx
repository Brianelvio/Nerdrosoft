import React from 'react';
import { Grid2x2, Music4, Gamepad2, ChevronRight, Rocket } from 'lucide-react';

function App() {
  const products = [
    {
      title: "Sergeant StabbyFace",
      type: "Game",
      description: "The most violent First Person Shooter out there",
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      title: "Space Command Series",
      type: "RTS Games",
      description: "Command your fleet across the galaxy in this epic trilogy",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Reverb Series",
      type: "Audio Tools",
      description: "Professional audio tools for the modern creator",
      icon: <Music4 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-[2.1rem] h-[2.1rem] relative rotate-45">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-[#1dacd5]"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-[#804cee]"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#ef5f1d]"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#114fee]"></div>
                </div>
                <span className="ml-3 text-xl font-bold">Nerdrosoft</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="https://conflictnerd.stream/merch/5499669" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Products
                </a>
                <a href="https://conflictnerd.stream/merch/5499669" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Downloads
                </a>
                <a href="https://conflictnerd.stream/merch/5499669" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-[#1dacd5]">Nerdrosoft</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Creating revolutionary software that probably works. Maybe.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="https://conflictnerd.stream/merch/5499669" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1dacd5] hover:bg-[#1795b8]">
                      Get Started <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
            <p className="mt-4 text-lg text-gray-500">Choose your next favorite software</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <a
                  key={product.title}
                  href="https://conflictnerd.stream/merch/5499669"
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#1dacd5] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-[#1dacd5] bg-opacity-10">
                      {product.icon}
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                    <ChevronRight className="w-6 h-6" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://conflictnerd.stream/merch/5499669" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Store</span>
              <Grid2x2 className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 Nerdrosoft. All rights reserved. Maybe.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;