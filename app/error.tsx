"use client";

const RootError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="px-8">
      <h2 className="mt-16 text-2xl">Something went wrong!</h2>
      <hr className="my-4 border-gray-300" />
      <pre className="text-red-500">{error.message}</pre>
      <button
        className="bg-cyan-500 text-white px-2 py-1 rounded hover:bg-cyan-600 mt-4"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default RootError;
