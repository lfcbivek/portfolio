import React from "react";
import LinkedInIcon from '../../static/images/LinkedIn.svg'
import GitHubIcon from '../../static/images/Github.svg'

function Socials() {
    const linkedIn = "https://www.linkedin.com/in/bivek-gyawali-81b275151/";
    const github = "https://github.com/lfcbivek"

    return(
        <div className="socials-component">
            <div className="linkedIn">
                <a href={linkedIn}>
                    <img src={LinkedInIcon} width={50} height={50}></img>
                </a>
            </div>
            <div className="github">
                <a href={github}>
                    <img src={GitHubIcon} width={50} height={50}></img>
                </a>
            </div>
        </div>
    )

}

export default Socials
