import { useState } from 'react'
import { Link } from 'react-router-dom'



const WorkListing = ({ work, onDelete }) => {
  const [showActions, setShowActions] = useState(false);
  const toggleActions = () => {
    setShowActions((prev) => !prev);
  };
  


  const deleteWork = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this work?'
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/works/${work.id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      console.error('Failed to delete work');
      alert('Failed to delete work');
      return;
    }

    onDelete(work.id);
    
  };

  return (
    <div     className="bg-white border border-slate-400 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{work.title}</h3>       
        </div>

        <button
          type="button"
          onClick={toggleActions}
          className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-3 py-2 rounded"
        >
          {showActions ? 'Hide actions' : 'Show actions'}
        </button>
      </div>

      <p className="text-gray-600">{work.category}</p>
      <p className="text-gray-600">Instrumentation: {work.instrumentation}</p>
      <p className="text-gray-600">Price: £{work.price}</p>
      <p className="text-gray-600">Published in: {work.publicationYear}</p>

      {showActions && (
        <div className="flex gap-3 mt-4">
          <Link
            to={`/edit-work/${work.id}`}
            className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>

          <button
            type="button"
            onClick={deleteWork}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkListing;