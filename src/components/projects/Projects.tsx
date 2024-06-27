import davaoDemo from '@videos/davao.webm';
import officesDemo from '@videos/offices.webm';
import commercialDemo from '@videos/commercial.webm';
import research from '@images/research.webp';
import gwCMSDemo from '@videos/gw-cms.webm';
import gwDemo from '@videos/gw.webm';
import pattrackDemo from '@videos/pattrack.mp4'

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col max-w-container mx-auto mt-16">
            <h1 className='text-xl text-light'>#Projects</h1>
            <main className="flex flex-col gap-10 mt-6">
                <div className="h-auto w-full flex gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <video autoPlay={true} loop muted>
                            <source src={davaoDemo} type='video/webm' />
                        </video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://davao.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link flex items-center group"
                        >
                            <span>Davao Prime Philippines</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1 text-light group-hover:text-link"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                            </svg>
                        </a>

                        <h2 className='text-sm text-gray italic'>Internship Project</h2>
                        <p className="my-4 text-gray text-sm">Showcases PRIME Philippines' real estate services and property listings in Davao.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-xs text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-xs text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-xs text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-xs text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-row-reverse gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <video autoPlay={true} loop muted>
                            <source src={officesDemo} type='video/webm' />
                        </video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://offices.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link flex items-center group">
                            <span>Offices Prime Philippines</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1 text-light group-hover:text-link"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                            </svg>
                        </a>
                        <h2 className='text-sm text-gray italic'>Internship Project</h2>
                        <p className="my-4 text-gray text-sm">Focuses on available office spaces for lease or sale managed by PRIME Philippines.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-xs text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-xs text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-xs text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-xs text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <video autoPlay={true} loop muted>
                            <source src={commercialDemo} type='video/webm' />
                        </video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://commercialproperties.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link flex items-center group"
                        >
                            <span className="truncate">Commercial Properties Prime Philippines</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1 text-light group-hover:text-link"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                            </svg>
                        </a>

                        <h2 className='text-sm text-gray italic'>Internship Project</h2>
                        <p className="my-4 text-gray text-sm">Highlights commercial real estate offerings such as retail, industrial, and warehouse spaces.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-xs text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-xs text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-xs text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-xs text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-row-reverse gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <img src={research} alt="Research PRIME Philippines Website" />
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://research.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link flex items-center group">
                            <span>Research Prime Philippines</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1 text-light group-hover:text-link"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                            </svg>
                        </a>
                        <h2 className='text-sm text-gray italic'>Internship Project</h2>
                        <p className="my-4 text-gray text-sm">Provides market research, reports, and insights into the real estate market for investors and businesses.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-xs text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-xs text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-xs text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-xs text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <video autoPlay={true} loop muted>
                            <source src={gwDemo} type='video/webm' />
                        </video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="#"
                            className="text-light hover:text-link">
                            GreatWork Global
                        </a>
                        <h2 className='text-sm text-gray italic'>Internship Project</h2>
                        <p className="my-4 text-gray text-sm">GreatWork Global provides modern, tech-powered workspaces, including serviced offices, co-working spaces, virtual offices, and meeting rooms, designed for productivity and a healthy work-life balance.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-xs text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-xs text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-xs text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-xs text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-row-reverse gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <video autoPlay={true} loop muted>
                            <source src={gwCMSDemo} type='video/webm' />
                        </video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="#"
                            className="text-light hover:text-link">
                            GreatWork Global CMS
                        </a>
                        <h2 className='text-sm text-gray italic'>Internship Project</h2>
                        <p className="my-4 text-gray text-sm">The content management system for GreatWork Global streamlines the management and customization on their workspace offerings for their website, ensuring efficient service delivery and user experience.</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="text-xs text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-xs text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-xs text-lime-400 border border-lime-400 rounded-lg px-2">NodeJS</div>
                            <div className="text-xs text-cyan-400 border border-cyan-400 rounded-lg px-2">Typescript</div>
                            <div className="text-xs text-slate-400 border border-slate-400 rounded-lg px-2">Express</div>
                            <div className="text-xs text-indigo-400 border border-indigo-400 rounded-lg px-2">Prisma ORM</div>
                            <div className="text-xs text-sky-400 border border-sky-400 rounded-lg px-2">MySQL</div>
                            <div className="text-xs text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex gap-4 border border-neutral-700 rounded-lg p-4 hover:bg-neutral-950">
                    <div className="w-3/5">
                        <video autoPlay={true} loop muted>
                            <source src={pattrackDemo} type='video/mp4' />
                        </video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="#"
                            className="text-light hover:text-link">
                            Pattrack Mobile App
                        </a>
                        <h2 className='text-sm text-gray italic'>Capstone Project</h2>
                        <p className="mt-4 mb-2 text-gray text-sm">A Patient Tracker System for Rural Health Units (RHUs) with SMS Notification</p>
                        <ul className="mb-4 list-disc list-inside pl-4 text-gray">
                            <li className='text-sm'>
                                <span className='text-light'>User Management: </span>
                                Manage different user roles.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Medicine Inventory: </span>
                                Track and manage medication stock.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Queuing System: </span>
                                Organize patient flow. Includes a dedicated queueing screen web app for real-time updates.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Vitals and Diagnosis Recording: </span>
                                Collect vital signs, allow doctors to diagnose, and prescribe medications.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Patient Portal: </span>
                                Patients can queue themselves for appointments and access their medical records and prescriptions.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Report Generation: </span>
                                Export reports in Excel and PDF formats.
                            </li>
                        </ul>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="text-xs text-indigo-400 border border-indigo-400 rounded-lg px-2">FlutterFlow</div>
                            <div className="text-xs text-amber-400 border border-amber-400 rounded-lg px-2">Firebase</div>
                            <div className="text-xs text-violet-400 border border-violet-400 rounded-lg px-2">Syncfusion</div>
                            <div className="text-xs text-rose-400 border border-rose-400 rounded-lg px-2">CraftMyPDF</div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Projects