import React from 'react';
import linkedIn from '../../static/images/linkedin.png'
import gitHub from '../../static/images/github.png'
export default class NavBar extends React.Component {
    render(){
        return(
        <nav className="flex items-center justify-between flex-wrap bg-slate-50 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight text-gray-700">Bivek Gyawali</span>
            </div>
            <div className="flex-grow lg:flex lg:w-auto">
                <a href = "#responsive-header">
                    <img src = {linkedIn} alt = "LinkedIn" width={20} height={20}/>
                </a>
                <a href = "#responsive-header">
                    <img src = {gitHub} alt = "Github" width={20} height={20}/>
                </a>
                
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-row-reverse justify-between lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-amber-300 mr-6">
                    Home
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-amber-300 mr-6">
                    Education
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-amber-300 mr-6">
                    Experience
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-amber-300 mr-6">
                    Projects
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-amber-300">
                    Resume
                </a>
                </div>
            </div>
        </nav>
        );
    }
}