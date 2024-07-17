import PropTypes from 'prop-types';

const ProblemForm = ({
  formData,
  handleSubmit,
  handleInputChange,
  buttonText,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
      ></textarea>
      <label>Difficulty</label>
      <select
        name="difficulty"
        value={formData.difficulty}
        onChange={handleInputChange}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

ProblemForm.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ProblemForm;
