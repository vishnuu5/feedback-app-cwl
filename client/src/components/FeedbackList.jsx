const FeedbackList = ({ feedbacks }) => {
    if (feedbacks.length === 0) {
        return <p className="text-center text-gray-500">No feedback submitted yet.</p>
    }

    return (
        <div className="space-y-4">
            {feedbacks.map((feedback) => (
                <div key={feedback._id} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-lg">{feedback.name}</h3>
                            <p className="text-gray-600 text-sm">{feedback.email}</p>
                        </div>
                        <span className="text-xs text-gray-500">{new Date(feedback.timestamp).toLocaleString()}</span>
                    </div>
                    <p className="mt-2 text-gray-700">{feedback.message}</p>
                </div>
            ))}
        </div>
    )
}

export default FeedbackList
