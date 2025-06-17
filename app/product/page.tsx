"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

type CartItem = Product & {
  quantity: number;
};

const products = [
  {
    id: 1,
    name: "Eco Bin - Household Recycling Bin",
    image: "",
    description: "A durable, labeled recycling bin made from 100% recycled plastic.",
    price: 19.99
  },
  {
    id: 2,
    name: "Compost Starter Kit",
    image: "",
    description: "Everything you need to start composting at home, eco-friendly and easy!",
    price: 34.99
  },
  {
    id: 3,
    name: "Reusable Sorting Bags (Set of 4)",
    image: "",
    description: "Color-coded bags for easy waste sorting and recycling.",
    price: 24.99
  }
];

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique transaction ID
    const transactionId = 'DHAFA_' + Math.floor(Math.random() * 10000000000).toString();
    
    // Prepare the payment data
    const paymentData = {
      amount: parseFloat(total),
      currency: 'XAF',
      transaction_id: transactionId,
      description: `Purchase of ${cart.length} items from DHAFA Recycling`,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone_number: customerPhone,
      channels: 'ALL',
      return_url: window.location.origin + '/product?status=success',
      notify_url: window.location.origin + '/api/payment-callback',
      lang: 'en'
    };
    
    // Initialize CinetPay SDK
    // @ts-ignore - CinetPay is loaded from external script
    CinetPay.setConfig({
      apikey: 'YOUR_CINETPAY_API_KEY', // Replace with your actual API key
      site_id: 'YOUR_SITE_ID',         // Replace with your actual Site ID
      mode: 'TEST'               // Use 'TEST' for testing
    });
    
    // @ts-ignore - CinetPay is loaded from external script
    CinetPay.getCheckout({
      transaction_id: paymentData.transaction_id,
      amount: paymentData.amount,
      currency: paymentData.currency,
      channels: paymentData.channels,
      description: paymentData.description,
      customer_name: paymentData.customer_name,
      customer_email: paymentData.customer_email,
      customer_phone_number: paymentData.customer_phone_number,
      customer_address: '',
      customer_city: '',
      customer_country: 'CM',
      customer_state: '',
      customer_zip_code: '',
      notify_url: paymentData.notify_url,
      return_url: paymentData.return_url,
      lang: paymentData.lang,
      metadata: JSON.stringify({ cart_items: cart })
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white-50">
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center text-green-700">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-4 hover:shadow-md transition flex flex-col"
              >
                <div className="relative h-48 w-full mb-4">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Image not available</span>
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 my-2 flex-grow">{product.description}</p>
                <p className="text-green-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <ul className="mb-4 space-y-2">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-500 ml-2">x{item.quantity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>   
                        <span className="ml-4 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="font-bold text-red-300 hover:text-red-500"
                        > 
                          &#x2715; 
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="font-semibold text-right mb-4">
                  Total: <span className="text-green-700">${total}</span>
                </div>
                {!showCheckout ? (
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    disabled={cart.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <form onSubmit={handlePayment} className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Customer Information</h3>
                    <div>
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="customerEmail"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="customerPhone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                      Pay Now (${total})
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
      
      {/* CinetPay SDK Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const script = document.createElement('script');
              script.src = 'https://cdn.cinetpay.com/seamless/latest/cinetpay.prod.min.js';
              script.async = true;
              document.body.appendChild(script);
            })();
          `,
        }}
      />
    </div>
  );
}