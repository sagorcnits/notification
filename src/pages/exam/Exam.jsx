import { useState } from "react";

const Exam = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    examName: "",
    marks: "",
    startDate: "",
    endDate: "",
    // Step 2
    className: "",
    subject1: "",
    subject1Date: "",
    subject2: "",
    subject2Date: "",
    subject3: "",
    subject3Date: "",
  });
  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle next step
  const handleNext = () => {
    setStep(2);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          {step === 1 ? "Step 1" : "Step 2"}
        </h2>
        <div className="space-y-4">
          {step === 1 ? (
            <>
              <div className="flex gap-3">
                <div>
                  <label className="text-sm font-semibold">Exam Name:</label>
                  <input
                    type="text"
                    placeholder="Exam name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="examName"
                    value={formData.examName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Marks:</label>
                  <input
                    type="number"
                    placeholder="marks"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="marks"
                    value={formData.marks}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="text-sm font-semibold">start date:</label>
                  <input
                    type="date"
                    placeholder="start date"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">end date:</label>
                  <input
                    type="date"
                    placeholder="end date"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="text-sm font-semibold">Select class : </label>
                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="class1">class1</option>
                  <option value="class2">class2</option>
                  <option value="class3">class3</option>
                  <option value="class4">class4</option>
                  <option value="class5">class5</option>
                  <option value="class6">class6</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Subject :</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="subject 1"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="subject1"
                    value={formData.subject1}
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    placeholder="date"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="subject1Date"
                    value={formData.subject1Date}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="subject 2"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="subject2"
                  value={formData.subject2}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  placeholder="date"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="subject2Date"
                  value={formData.subject2Date}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="subject 3"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="subject3"
                  value={formData.subject3}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  placeholder="date"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="subject3Date"
                  value={formData.subject3Date}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-black duration-500 font-semibold"
              >
                Create Exam
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Exam;
