import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import content from "../content";
import { ScrollToTop } from 'react-simple-scroll-up'

export default function Technology() {
    return (
        <div className="min-h-screen font-bold flex flex-col font-dosis items-center  justify-center"
             id="technology"
        >
              <ScrollToTop className="mt-20">
                    <span>UP</span>
                    </ScrollToTop>
            <h1 className="text-5xl font-bold">{content.stack.title}</h1>
            <div className="flex flex-wrap justify-center mt-10">
                {content.stack.tech.map((tech, index) => {
                    return (
                        <span  key={'element-' + index} className={` ${index % 2 === 0 ? 'animate-float': 'animate-refloat'}
                        w-40 h-40 m-2 bg-white shadow-2xl items-center flex p-5 rounded-full`}>
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        </span>
                    );
                })}
            </div>
                <p className="text-xl md:max-w-xl text-center mt-10">{content.stack.desc}</p>
       
            
        </div>
        
    )
}