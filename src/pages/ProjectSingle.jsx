import { useLocation } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
    const location = useLocation();
    const dataToPass = location.state?.dataToPass;
	console.log(dataToPass, "title of the project")

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader dataToPass={dataToPass.title}/>
				<ProjectGallery dataToPass={dataToPass.title}/>
				<ProjectInfo dataToPass={dataToPass.title}/>
				{/* <ProjectRelatedProjects dataToPass={dataToPass.title}/> */}
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
