import React from "react";

const Posts = () => {
  return (
    <div className="p-8 w-3/4">
      <h1 className="text-3xl font-bold mb-6">My Posts</h1>
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Post Title 1</h2>
          <p className="text-gray-700">This is a sample post description.</p>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Post Title 2</h2>
          <p className="text-gray-700">This is another sample post description.</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
