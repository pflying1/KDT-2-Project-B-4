import React, { useState, ChangeEvent, FormEvent } from 'react';

const CreateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // 데이터 전송 성공
        console.log('데이터 전송 성공');
      } else {
        // 데이터 전송 실패
        console.error('데이터 전송 실패');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="number" name="age" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateForm;
