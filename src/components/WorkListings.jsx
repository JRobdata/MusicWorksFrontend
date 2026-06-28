import WorkListing from './WorkListing'
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const WorkListings = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {
      const fetchWorks = async () => {
  
        try{          
         const res = await fetch('/api/works');
         const data = await res.json();
         setWorks(data);
         }

        catch (error) {
          console.log('Error fetching data', error);
          alert('Failed to fetch works');
        }
        finally {
          setLoading(false);
        }
      }
       fetchWorks();
    }, []);

    const handleDelete = (id) => {
      setWorks((prevWorks) => prevWorks.filter((work) => work.id !== id));
    };

  return (
     <section className="max-w-5xl mx-auto px-10 py-8">
      <h2 className="text-2xl font-bold mb-6">Complete Works</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {works.map((work) => (
            <WorkListing
              key={work.id}
              work={work}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkListings;