import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is feedback item one',
      rating: 10,
    },
    {
      id: 2,
      text: 'this is feedback item two',
      rating: 5,
    },
    {
      id: 3,
      text: 'this is feedback item three',
      rating: 6,
    }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => item.id === id ? { ...item, ...updItem } : item)
    );
  };

  return (
    <FeedbackContext.Provider value={{
      feedback: feedback,
      deleteFeedback: deleteFeedback,
      addFeedback: addFeedback,
      editFeedback: editFeedback,
      feedbackEdit: feedbackEdit,
      updateFeedback: updateFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;