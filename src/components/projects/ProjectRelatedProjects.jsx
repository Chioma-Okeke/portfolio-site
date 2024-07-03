import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = ({dataToPass}) => {
	console.log(dataToPass, "title of the projectrelateed")
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
        <div>
            {singleProjectData.map((singleProject) => {
                return (<div>
                    {dataToPass === singleProject.ProjectHeader.title && (
                        <Projects singleProject={singleProject} />
                    )}
                </div>)
            })}
        </div>
    );
};

export default ProjectRelatedProjects;


function Projects ({singleProject}) {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleProject.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleProject.RelatedProject.Projects.map((project) => {
					return (
						<img
							src={project.img}
							className="rounded-xl cursor-pointer"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	)
}
