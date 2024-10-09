function NewsLetter() {
  return (
    <div className="w-full mx-auto py-14 px-2 bg-slate-300 h-full flex justify-center items-center">
      <div className="max-w-md w-full">
        <h1 className="title text-3xl font-semibold text-slate-800 mb-4">
          Subscribe for Exclusive Updates
        </h1>
        <div className="flex gap-2 w-full">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition duration-300"
            type="email"
            placeholder="Enter your email"
            name="newsletteremail"
            id="newsletteremail"
          />
          <button className="bg-teal-400 text-white font-semibold hover:bg-teal-500 transition-colors duration-500 px-5 py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
