import React from "react";

const AddComment = () => {
    return (
        <div className="border rounded-lg p-8">
            <div className="text flex gap-x-4">
                <img src="logo512.png" alt="" className="size-10" />
                <textarea
                    name=""
                    id=""
                    className="resize-y h-36 w-full focus:border-malibu-400 rounded
             focus:ring-0 focus:outline-none"
                    placeholder="Add your comment ..."
                ></textarea>
            </div>
            <div className="mt-4 flex justify-end">
                <button
                    type="button"
                    className="text-white bg-malibu-600 hover:bg-malibu-700 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded text-sm px-6 py-2"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddComment;
