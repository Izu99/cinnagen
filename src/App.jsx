// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import SideBar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DiseaseIdentifier from "./pages/ImageUpload";
import AgeIdentifier from "./pages/AgeIdentifier";
// import MarketTrends from "./pages/MarketTrends";
import "./App.css";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Analize from "./pages/Analize";
import Results from "./pages/ResultPage";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Router>
            <div className="flex bg-green-100">
                <SideBar />
                <div className="flex-1 p-4">
                    <div className="flex justify-end mb-4">
                        <motion.div
                            className="flex items-center cursor-pointer rounded-full text-white px-2"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FaCircleUser />
                            <span className="mx-2">Jon Doe</span>
                            {menuOpen ? (
                                <MdArrowDropUp size={24} />
                            ) : (
                                <MdArrowDropDown size={24} />
                            )}
                        </motion.div>

                        <AnimatePresence>
                            {menuOpen && (
                                <motion.div
                                    className="absolute bg-white right-0 top-12 w-48 rounded-lg shadow-xl z-10"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer">
                                            Profile
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Settings
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 text-red-500 rounded-b-lg cursor-pointer">
                                            Logout
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="w-full h-[92%] mt-10 bg-[#F6F6F6] rounded-3xl p-6 shadow-lg">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route
                                path="/disease-identifier"
                                element={<DiseaseIdentifier />}
                            />
                            <Route
                                path="/analize"
                                element={<Analize />}
                            />
                              <Route
                                path="/result"
                                element={<Results />}
                            />
                            <Route
                                path="/age-identifier"
                                element={<AgeIdentifier />}
                            />
                            {/* <Route
                                path="/market-trends"
                                element={<MarketTrends />}
                            /> */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
