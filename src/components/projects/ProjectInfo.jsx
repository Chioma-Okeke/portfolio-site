/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = ({ dataToPass }) => {
    console.log(dataToPass, "title of the projectInfo");
    const { singleProjectData } = useContext(SingleProjectContext);

    return (
        <div>
            {singleProjectData.map((singleProject) => {
                return (
                    <div>
                        {dataToPass === singleProject.ProjectHeader.title && (
                            <Info singleProject={singleProject} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectInfo;

function Info({ singleProject }) {
    return (
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
            <div className="w-full sm:w-1/3 text-left">
                {/* Single project client details */}
                <div className="mb-7">
                    <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                        {singleProject.ProjectInfo.ClientHeading}
                    </p>
                    <ul className="leading-loose">
                        {singleProject.ProjectInfo.CompanyInfo.map((info) => {
                            return (
                                <li
                                    className="flex gap-3 flex-row sm:flex-col xl:flex-row font-general-regular text-ternary-dark dark:text-ternary-light"
                                    key={info.id}
                                >
                                    <span>{info.title}: </span>
                                    <p
                                        className={
                                            info.title === "Website" ||
                                            info.title === "Phone"
                                                ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                                                : ""
                                        }
                                        aria-label="Project Website and Phone"
                                    >
                                        {info.details}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Single project objectives */}
                <div className="mb-7">
                    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                        {singleProject.ProjectInfo.ObjectivesHeading}
                    </p>
                    <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                        {singleProject.ProjectInfo.ObjectivesDetails}
                    </p>
                </div>

                {/* Single project technologies */}
                <div className="mb-7">
                    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                        {singleProject.ProjectInfo.Technologies[0].title}
                    </p>
                    <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                        {singleProject.ProjectInfo.Technologies[0].techs.join(
                            ", "
                        )}
                    </p>
                </div>

                {/* Single project social sharing */}
                <div>
                    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                        {singleProject.ProjectInfo.SocialSharingHeading}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                        {singleProject.ProjectInfo.SocialSharing.map(
                            (social) => {
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="__blank"
                                        aria-label="Share Project"
                                        className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                                    >
                                        <span className="text-lg lg:text-2xl">
                                            {social.icon}
                                        </span>
                                    </a>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>

            {/*  Single project right section */}
            <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                    {singleProject.ProjectInfo.ProjectDetailsHeading}
                </p>
                {singleProject.ProjectInfo.ProjectDetails.map((details) => {
                    return (
                        <div>
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.projectOverview}
                            </p>
                            {details.userStory.length > 0 && (<div className="mb-5">
								<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
									User Stories
								</p>
								<ol className="list-disc ml-2">
									{details.userStory.map((story) => {
										return (
											<li className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">{story}</li>
										)
									})}
								</ol>
							</div>)}
                            {details.ProblemStatementAddressed.length > 0 && (<div>
								<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
									Problem Statement Addressed
								</p>
								<ol className="list-disc ml-2">
									{details.ProblemStatementAddressed.map((story) => {
										return (
											<li className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">{story}</li>
										)
									})}
								</ol>
							</div>)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
