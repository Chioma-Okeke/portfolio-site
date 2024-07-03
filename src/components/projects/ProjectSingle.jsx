import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image }) => {
    const dataToPass = {title}
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.15,
            }}
        >
            <Link to="/projects/single-project" state={{dataToPass: dataToPass}} aria-label="Single Project">
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div className="bg-secondary-light">
                        <embed
                            src={image}
                            alt="Single Project"
                            style={{ width: "100%", height: "400px" }}
                            className="w-full rounded-t-xl h-full"
                        />
                    </div>
                    <div className="text-center px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                            {title}
                        </p>
                        {Array.isArray(category) && category.map((cat, index) => {
                            return (
                                <span
                                    key={index}
                                    className="text-lg bg-indigo-500 text-white font-bold dark:text-ternary-light mr-4 p-2 shadow-lg"
                                >
                                    {cat}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;
