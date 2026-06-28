import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddWorkPage = ({ addWorkSubmit }) => {
    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState('1');
    const [instrumentation, setInstrumentation] = useState('');
    const [price, setPrice] = useState('');
    const [publicationYear, setPublicationYear] = useState('');

    const navigate = useNavigate();

    const submitForm = async (e) => {
      e.preventDefault();

    const newWork = {
      title,
      categoryId: Number(categoryId),
      instrumentation,
      price: Number(price),
      publicationYear: Number(publicationYear),
    };

      try {
        await addWorkSubmit(newWork);
        navigate('/');
      } catch (error) {
        console.error('Error adding work:', error);
        alert('Failed to add work.');
      }
    }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Work</h2>


            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2"
                >
                  Title
                </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"              
                required
                value={title}
                onChange={ (e) => setTitle(e.target.value) }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="categoryId"
                className="block text-gray-700 font-bold mb-2"
                >
                  Category
                </label>
              <select
                id="categoryId"
                name="categoryId"
                className="border rounded w-full py-2 px-3"
                required
                value={categoryId}
                onChange={ (e) => setCategoryId(e.target.value) }
              >

                <option value="1">Solo</option>
                <option value="2">Chamber</option>
                <option value="3">Orchestral</option>
                <option value="4">Choral</option>
              </select>
            </div>




            <div className="mb-4">
              <label htmlFor="instrumentation" className="block text-gray-700 font-bold mb-2"
                >
                  Instrumentation
                </label>
              <input
                type="text"
                id="instrumentation"
                name="instrumentation"
                className="border rounded w-full py-2 px-3 mb-2"              
                required
                value={instrumentation}
                onChange={ (e) => setInstrumentation(e.target.value) }
              />
            </div>

           <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 font-bold mb-2"
                >
                  Price
                </label>
              <input
                type="number"
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3 mb-2"
                min="0"
                step="0.01"
                required
                value={price}
                onChange={ (e) => setPrice(e.target.value) }
              />
            </div>

            <div className="mb-4">
              <label htmlFor="publicationYear" className="block text-gray-700 font-bold mb-2"
                >
                  Year of Publication
                </label>
              <input
                type="number"
                id="publicationYear"
                name="publicationYear"
                className="border rounded w-full py-2 px-3 mb-2"  
                min="1900"
                max="2100"            
                required
                value={publicationYear}
                onChange={ (e) => setPublicationYear(e.target.value) }
              />
            </div>


            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add work
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    );
};

export default AddWorkPage