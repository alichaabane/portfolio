import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from "../content";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Typical from 'react-typical'
import {Link as ScrollLink} from 'react-scroll';
import useStartAnimation from "../hook/useStartAnimation";

export default function Header() {
    const animated = useStartAnimation();

    return (
        <div className="min-h-screen flex items-center justify-center"
             style={{background: "#091c29"}}>
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center
            justify-between">
                <div className="w-full md:w-2/5 opacity-75">
                    <LazyLoadImage src={'/assets/my-image.jpeg'}
                                   placeholderSrc={'/assets/logo512.png'}
                                   effect='blur'/>
                </div>
                <div className='md:ml-5 md:mr-5 text-white font-dosis text-center md:text-right'>
                    <h2
                        className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                        }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
                    >
                        {content.header.text[0]}
                        <br/>
                        {content.header.text[1]}
                    </h2>
                    <h1
                        className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                        }  transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
                    >
                        {content.header.text[2]}{' '}
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />
                    </h1>
                    <ScrollLink to="project" smooth={true}>
                        <button
                            className="
                      animate-float
                        bg-indigo-500 mt-10 px-10 inline-block py-3
                        text-xl
                        border text-white font-bold rounded-lg">{content.header.btnText}
                        </button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    );
}