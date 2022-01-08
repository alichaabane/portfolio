import React from 'react';
import { ScrollToTop } from 'react-simple-scroll-up'
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Position from '../hook/useWindowPosition';

export default function Project() {
    const animated = Position('project', 0.6);

    return (
        <div
            className="min-h-screen flex justify-center items-center flex-col"
            id="project" style={{ backgroundColor: '#FEFEFE' }}
        >
            <ScrollToTop className="mt-20">
                <span>UP</span>
            </ScrollToTop>
            <h1 className="md:text-5xl sm:text-3xl font-bold">{content.project.title}</h1>
            <p className="text-gray-600 font-dosis text-2xl mb-10 justify-center">
                I have done
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
                <LazyLoadImage
                    effect="blur"
                    placeholderSrc={content.project.img}
                    src={content.project.img}
                    alt="phone prototype"
                    className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
                />
                <div
                    className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
                    style={{
                        border: '1px solid #e5ecf9',
                        transform: animated
                            ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
                            : '',
                        boxShadow:
                            '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <ProjectDetail />
                </div>
                <div className="flex justify-center items-center md:hidden">
                    <ProjectDetail />
                </div>
            </div>

        </div>

    );

}

const ProjectDetail = () => {
    const animated = Position('project', 0.6);
    return (
        <div>
            <h1
                className={` ${animated ? '' : 'translate-y-10 opacity-0'
                    }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
            >
                {content.project.projectName}
            </h1>
            <p
                className={`${animated ? '' : 'translate-y-10 opacity-0'
                    }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
            >
                {content.project.desc}
            </p>
            <button
                className={`${animated ? '' : 'translate-y-10 opacity-0'
                    } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-center text-white rounded-lg shadow-2xl`}
            >
                <p className="text-lg">
                    <a href={content.project.website}
                        rel="noopener noreferrer"
                        target="_blank">Website</a></p>
            </button>
        </div>
    );
};
