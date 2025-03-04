import Image from "next/image"
import Link from "next/link"

export default function Checkout() {
  return (
    <div className="w-full overflow-hidden">
    {/* Navbar */}
    <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 bg-black  before:z-[-10] "> {/* Adjusted mt */}
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Banner Image"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 mt-[150px]">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            Check-Out Page
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/about" className="text-orange-500">Checkout</Link>
          </div>
        </div>
      </div>
  

    <div className="container mx-auto px-4 py-8 mt-20 mb-20">
      <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  >
                    <option value="">Choose country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                    placeholder="Choose city"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                />
              </div>

              <div>
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAsShipping"
                className="h-4 w-4 rounded border-gray-300 text-[#FF9F0D] focus:ring-[#FF9F0D]"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-4 space-y-4 md:space-y-0">
            <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D] w-full md:w-72 h-12 px-3">
              Back to cart
            </button>
            <button className="px-6 py-2 bg-[#FF9F0D] text-white rounded-md shadow-sm text-sm font-medium hover:bg-[#FF9F0D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D] w-full md:w-72 h-12">
              Proceed to shipping
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="p-6 rounded-lg border-2 border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="/Rectangle 8933.png"
                    alt="Chicken Tikka Kebab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Chicken Tikka Kebab</h3>
                  <p className="text-sm text-gray-500">{150} gm net</p>
                  <p className="text-sm text-gray-500">{50}$</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{130}$</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium">{25}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">{54.76}$</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{432.65}$</span>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-[#FF9F0D] text-white rounded-md shadow-sm text-sm font-medium hover:bg-[#FF9F0D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D]">
            Place an order
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
