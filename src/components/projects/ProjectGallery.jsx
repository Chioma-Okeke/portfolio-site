import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = ({ dataToPass }) => {
    console.log(dataToPass, "title of the projectgallery");
    const { singleProjectData } = useContext(SingleProjectContext);
    return (
        <div>
            {singleProjectData.map((singleProject) => {
                return (<div>
                    {dataToPass === singleProject.ProjectHeader.title && (
                        <Gallery singleProject={singleProject} />
                    )}
                </div>)
            })}
        </div>
    );
};

export default ProjectGallery;

function Gallery({ singleProject }) {
    // const { singleProjectData } = useContext(SingleProjectContext);

    return (
        <div>
            <div className="flex flex-col gap-3 md:flex-row mt-12">
                {singleProject.ProjectImages.map((project) => {
                    return (
                        <div className="flex justify-center md:block mb-10 md:mb-0" key={project.id}>
                            <img
                                src={project.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={project.title}
                                key={project.id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
