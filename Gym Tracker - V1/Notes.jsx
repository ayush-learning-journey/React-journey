import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState("");

  return (
    <div className="p-4">
      <label className="block text-lg font-semibold mb-2">
        Notes
      </label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your workout notes here..."
        className="w-full p-2 border rounded-lg resize-none"
        rows="4"
      />
      <p className="mt-2 text-gray-600">You wrote: {notes}</p>
    </div>
  );
}

export default Notes;