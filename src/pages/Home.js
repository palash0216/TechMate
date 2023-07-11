import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="bg-gray-900 text-#152737 min-h-screen flex items-center">
            <div className="container mx-auto text-#152737">
                <div className="flex items-center justify-between mb-20 mt-10">
                    <h1 className="overline text-4xl font-bold">TextMate</h1>
                    <div className="flex items-center ">
                        <a href="https://github.com/your_username" className='hover:text-white'>
                            <FaGithub className="text-2xl mx-2" />
                        </a>
                        <a href="https://linkedin.com/in/your_profile " className='hover:text-white'>
                            <FaLinkedin className="text-2xl mx-2" />
                        </a>
                        <a href="https://twitter.com/your_username" className='hover:text-white'>
                            <FaTwitter className="text-2xl mx-2" />
                        </a>
                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <img src="./left-image.jpg" alt="left" width="100" height="100" />
                    <div className="container text-center">
                        <h1 className="text-4xl mb-2">
                            UNLOCK THE <br className="md:hidden" />
                            <span className="text-gray-400">[  POWER OF WORDS ]</span> <br className="md:hidden" />
                            BY TEXTMATE
                        </h1>
                        {/* <p className="mb-10">Improve the quality of your writing with our advanced text enhancement features.</p> */}
                        <div className="border rounded inline-block p-3 mt-20 bg-gray-900" >
                            <p>
                                <a href="https://platform.openai.com/account/api-keys" className="hover:text-white">
                                    Get your API Key here !!
                                </a>
                            </p>
                        </div>

                    </div>
                    <img src="right-image.jpg" alt="Right" className="ml-4" />
                </div>

                <div className="text-center border-2 mt-20">
                    <h2 className="text-2xl font-bold mt-8">Boost Your Productivity</h2>
                    <p className=" m-4">Save time and effort with our efficient writing tools and automation features.</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-700 rounded p-6 flex items-center justify-center m-6">
                            <span className="text-white text-2xl mr-2">1</span>
                            Grammar Corrector
                        </div>
                        <div className="bg-gray-700 rounded p-6 flex items-center justify-center m-6">
                            <span className="text-white text-2xl mr-2">2</span>
                            Text Enhancer
                        </div>
                        <div className="bg-gray-700 rounded p-6 flex items-center justify-center m-6">
                            <span className="text-white text-2xl mr-2">3</span>
                            Notes to summary Convertor
                        </div>
                    </div>
                </div>



                <div className="m-12 text-center">
                    <button className="bg-gray-500 hover:bg-blue-900 text-white py-2 px-4 rounded">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;