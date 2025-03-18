import { useState } from "react";
import { Link } from "react-router-dom";

const PriceResultsPage = () => {
    // This would typically come from your app state or URL params
    // For demonstration, I'm using hardcoded values matching the image
    const [predictionData] = useState({
        year: "2026",
        month: "January",
        grade: "C5",
        category: "Medium",
        predictedPrice: "1822.98",
    });

    return (
        <div className="w-full">
            <div className="p-8">
                <h1 className="text-2xl font-semibold mb-8">
                    Got your prediction!
                </h1>

                <div className="bg-green-600/10 p-8 rounded-lg mb-8">
                    <div className="space-y-6">
                        <div>
                            <span className="text-gray-700 font-medium">
                                Year:{" "}
                            </span>
                            <span className="text-green-600 font-medium">
                                {predictionData.year}
                            </span>
                        </div>

                        <div>
                            <span className="text-gray-700 font-medium">
                                Month:{" "}
                            </span>
                            <span className="text-green-600 font-medium">
                                {predictionData.month}
                            </span>
                        </div>

                        <div>
                            <span className="text-gray-700 font-medium">
                                Grade{" "}
                            </span>
                            <span className="text-green-600 font-medium">
                                {predictionData.grade}
                            </span>
                        </div>

                        <div>
                            <span className="text-gray-700 font-medium">
                                Category:{" "}
                            </span>
                            <span className="text-green-600 font-medium">
                                {predictionData.category}
                            </span>
                        </div>

                        <div>
                            <span className="text-gray-700 font-medium">
                                Predicted price(LKR):{" "}
                            </span>
                            <span className="text-green-600 font-medium">
                                {predictionData.predictedPrice}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Link to="/price-identifier">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Predict Another
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PriceResultsPage;
