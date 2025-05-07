
import { useState, useEffect } from "react"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"


function App() {
  const [feedbacks, setFeedbacks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`)
      const data = await response.json()
      setFeedbacks(data)
    } catch (error) {
      console.error("Error fetching feedback:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (feedbackData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      })

      if (response.ok) {
        fetchFeedbacks()
        setSubmitSuccess(true)
        setTimeout(() => setSubmitSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting feedback:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Feedback Application</h1>

      {submitSuccess && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your feedback has been submitted successfully.</span>
        </div>
      )}

      <FeedbackForm onSubmit={handleSubmit} />

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Feedback</h2>
        {isLoading ? (
          <p className="text-center text-gray-500">Loading feedback...</p>
        ) : (
          <FeedbackList feedbacks={feedbacks} />
        )}
      </div>
    </div>
  )
}

export default App
