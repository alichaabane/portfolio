import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import Position from '../hook/useWindowPosition';
import {ScrollToTop} from "react-simple-scroll-up";

export default function Contact() {
    const animated = Position('contact', 0.6, 4);
    return (
        <div
            className=" min-h-screen  flex justify-center items-center  "
            id="contact"
        >
            <ScrollToTop className="mt-20">
                <span>UP</span>
            </ScrollToTop>
            <div
                style={{
                    minHeight: '50vh',
                    background: '#091C29',
                }}
                className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
            >
                <LazyLoadImage
                    effect="blur"
                    src={content.contact.img}
                    placeholderSrc={content.contact.imgPlaceholder}
                    alt="profile"
                    width="300px"
                    className="mt-10 transtion duration-2000 ease-in-out mx-auto"
                />
                <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
                    <h1
                        className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                        } transform transition duration-3000 text-white text-5xl font-bold`}
                    >
                        {content.contact.title}
                    </h1>
                    <p
                        className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                        } transform transition duration-3000 text-white text-2xl`}
                    >
                        {content.contact.desc}
                    </p>
                    <div
                        className={`flex ${
                            animated ? '' : 'translate-y-10 opacity-0'
                        } transform transition duration-3000 `}
                    >
                        {content.contact.socials.map((social, index) => {
                            return (
                                <a href={social.link} target="_blank">
                                <LazyLoadImage
                                    effect="blur"
                                    className="m-2"
                                    width="50px"
                                    key={index}
                                    src={social.img}
                                    alt={social.alt}
                                /></a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
