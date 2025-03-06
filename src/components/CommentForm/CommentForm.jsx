// src/components/CommentForm/CommentForm.jsx

import { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddComment(formData);
    setFormData({ text: '' });
  };

//   if (hootId && commentId) return (
//     <main className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <h1>Edit Comment</h1>
//         <label htmlFor='text-input'>Your comment:</label>
//         <textarea
//           required
//           type='text'
//           name='text'
//           id='text-input'
//           value={formData.text}
//           onChange={handleChange}
//         />
//         <button type='submit'>SUBMIT</button>
//       </form>
//     </main>
//   );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text-input'>Your comment:</label>
      <textarea
        required
        type='text'
        name='text'
        id='text-input'
        value={formData.text}
        onChange={handleChange}
      />
      <button type='submit'>SUBMIT COMMENT</button>
    </form>
  );
};

export default CommentForm;

