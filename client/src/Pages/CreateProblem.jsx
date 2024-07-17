import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProblemForm from '../Components/ProblemForm';

const CreateProblem = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: 'easy',
  });

  const navigate = useNavigate();

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
      await axios.post('/api/problems', formData);
      navigate('/problems');
    } catch (error) {
      console.error('Error creating problem:', error);
    }
  };

  return (
    <div>
      <h2>Create New Problem</h2>
      <ProblemForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        buttonText="Submit"
      />
    </div>
  );
};

export default CreateProblem;
