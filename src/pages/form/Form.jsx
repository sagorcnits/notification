import { useState } from "react";

const Form = () => {
  const [subject, setSubject] = useState([1]);

  const addSubject = () => {
    setSubject([...subject, subject.length + 1]);
  };

  // remove subject
  const removeSubject = () => {
    if (subject.length > 1) {
      setSubject(subject.slice(0, -1));
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-2 border-gray-300 p-4 rounded-md  w-[400px]"
      >
        <h1 className="text-2xl font-bold text-center">Add Subject</h1>
        {subject?.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 *:flex-1 *:w-full">
              <input
                className="border-2 border-gray-300 p-2 rounded-md"
                type="text"
                placeholder="subject"
                name={`subject-${item}`}
              />
              <input
                className="border-2 border-gray-300 p-2 rounded-md"
                type="number"
                placeholder="mark"
                name={`mark-${item}`}
              />
            </div>
          );
        })}
        <div className="flex gap-4 *:border-2 *:border-gray-300 *:p-2 *:rounded-md *:w-full">
          <button
            onClick={addSubject}
            className="hover:bg-black hover:text-white duration-300 border-black p-2 rounded-md"
            type="button"
          >
            add more
          </button>
          <button
            onClick={removeSubject}
            className="hover:bg-black hover:text-white duration-300 border-black p-2 rounded-md"
            type="button"
          >
            remove
          </button>
        </div>

        <button className="border-2 hover:bg-black hover:text-white duration-300 border-black p-2 rounded-md">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
