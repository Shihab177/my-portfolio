import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* Big Error Number */}
      <h1 className="text-[8rem] font-bold text-red-500 animate-bounce">404</h1>

      {/* Message */}
      <h2 className="text-3xl font-semibold mb-2">Oops! Page not found</h2>
      <p className="text-gray-400 text-center max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back to safety.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
