import React from 'react';
import content from '../content';
import {Link as ScrollLink} from "react-scroll";

export default function Navigation() {
    return (
        <div style={{background: "#091c29"}} className="fixed w-screen top-0 z-50">
            <div className="flex items-center justify-between w-10/12 mx-auto text-white  py-3">
                <h1 className="text-3xl font-desis animate-pulse  font-bold">{content.nav.logo} {' '}
                    <span className="w-3 h-3 bg-red-500 inline-block rounded-full"> </span>
                </h1>
                <div>
                    {content.nav.links.map((link, index) => {
                        return (
                            <ScrollLink key={'element-' + index} to={link.to} smooth={true}>
                            <span  className="text-xl mr-4">
                            {link.text}
                            </span>
                            </ScrollLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
