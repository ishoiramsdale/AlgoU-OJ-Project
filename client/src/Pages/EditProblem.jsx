import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProblemForm from '../Components/ProblemForm';

const EditProblem = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: 'easy',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProblem = async () => {
        try {
          const response = await axios.get(`/api/problems/${id}`);
          setFormData({
            title: response.data.title,
            description: response.data.description,
            difficulty: response.data.difficulty,
          });
        } catch (error) {
          console.error('Error fetching problem:', error);
        }
    };
    fetchProblem();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/problems/${id}`, formData);
      // navigate to problem list on success
      navigate('/problems');
    } catch (error) {
      console.error('Error updating problem:', error);
      // handle error, e.g., show error message
    }
  };

  return (
    <div>
      <h2>Edit Problem</h2>
      <ProblemForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        buttonText="Update"
      />
    </div>
  );
};

export default EditProblem;
