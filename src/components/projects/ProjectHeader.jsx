import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = ({dataToPass}) => {
	console.log(dataToPass, "title of the projectHJeader")
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
        <div>
            {singleProjectData.map((singleProject) => {
                return (<div>
                    {dataToPass === singleProject.ProjectHeader.title && (
                        <Header singleProject={singleProject} />
                    )}
                </div>)
            })}
        </div>
    );
};

export default ProjectSingleHeader;

function Header ({singleProject}) {
	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleProject.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProject.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<a target='_blank' rel='noreferrer noopener'  href={singleProject.ProjectHeader.link} className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProject.ProjectHeader.link}
					</a>
				</div>
			</div>
		</div>
	)
}
