import davaoDemo from '@videos/davao.webm';
import officesDemo from '@videos/offices.webm';
import commercialDemo from '@videos/commercial.webm';
import research from '@images/research.webp';
import gwCMSDemo from '@videos/gw-cms.webm';
import gwDemo from '@videos/gw.webm';

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col max-w-container mx-auto pt-4">
            <h1 className='text-xl text-light'>#Projects</h1>
            <main className="flex flex-col gap-10 mt-6">
                <div className="h-auto w-full flex gap-4">
                    <div className="w-3/5">
                        <video src={davaoDemo} autoPlay loop></video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://davao.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link">
                            Davao Prime Philippines
                        </a>
                        <p className="my-4 text-gray text-sm">Showcases PRIME Philippines' real estate services and property listings in Davao.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-row-reverse gap-4">
                    <div className="w-3/5">
                        <video src={officesDemo} autoPlay loop></video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://offices.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link">
                            Offices Prime Philippines
                        </a>
                        <p className="my-4 text-gray text-sm">Focuses on available office spaces for lease or sale managed by PRIME Philippines.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex gap-4">
                    <div className="w-3/5">
                        <video src={commercialDemo} autoPlay loop></video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://commercialproperties.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link">
                            Commercial Properties Prime Philippines
                        </a>
                        <p className="my-4 text-gray text-sm">Highlights commercial real estate offerings such as retail, industrial, and warehouse spaces.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-row-reverse gap-4">
                    <div className="w-3/5">
                        <img src={research} alt="Research PRIME Philippines Website" />
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="https://research.primephilippines.com/"
                            target='_blank'
                            className="text-light hover:text-link">
                            Research Prime Philippines
                        </a>
                        <p className="my-4 text-gray text-sm">Provides market research, reports, and insights into the real estate market for investors and businesses.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex gap-4">
                    <div className="w-3/5">
                        <video src={gwDemo} autoPlay loop></video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="#"
                            className="text-light hover:text-link">
                            GreatWork Global
                        </a>
                        <p className="my-4 text-gray text-sm">GreatWork Global provides modern, tech-powered workspaces, including serviced offices, co-working spaces, virtual offices, and meeting rooms, designed for productivity and a healthy work-life balance.</p>
                        <div className="flex items-center gap-2">
                            <div className="text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-red-400 border border-red-400 rounded-lg px-2">Redux</div>
                            <div className="text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex flex-row-reverse gap-4">
                    <div className="w-3/5">
                        <video src={gwCMSDemo} autoPlay loop></video>
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="#"
                            className="text-light hover:text-link">
                            GreatWork Global CMS
                        </a>
                        <p className="my-4 text-gray text-sm">The content management system for GreatWork Global streamlines the management and customization on their workspace offerings for their website, ensuring efficient service delivery and user experience.</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="text-blue-400 border border-blue-400 rounded-lg px-2">React</div>
                            <div className="text-green-400 border border-green-400 rounded-lg px-2">Axios</div>
                            <div className="text-lime-400 border border-lime-400 rounded-lg px-2">NodeJS</div>
                            <div className="text-slate-400 border border-slate-400 rounded-lg px-2">Express</div>
                            <div className="text-indigo-400 border border-indigo-400 rounded-lg px-2">Prisma ORM</div>
                            <div className="text-sky-400 border border-sky-400 rounded-lg px-2">MySQL</div>
                            <div className="text-pink-400 border border-pink-400 rounded-lg px-2">SASS</div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex gap-4">
                    <div className="w-3/5">
                        <img src="" alt="" />
                    </div>
                    <div className="w-2/5 h-auto">
                        <a
                            href="#"
                            className="text-light hover:text-link">
                            Pattrack Mobile App
                        </a>
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
                                Organize patient flow.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Vitals and Diagnosis Recording: </span>
                                Collect vital signs, allow doctors to diagnose, and prescribe medications.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Patient Portal: </span>
                                Patients can view their medical records and prescriptions.
                            </li>
                            <li className='text-sm'>
                                <span className='text-light'>Report Generation: </span>
                                Export reports in Excel and PDF formats.
                            </li>
                        </ul>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="text-indigo-400 border border-indigo-400 rounded-lg px-2">FlutterFlow</div>
                            <div className="text-amber-400 border border-amber-400 rounded-lg px-2">Firebase</div>
                            <div className="text-violet-400 border border-violet-400 rounded-lg px-2">Syncfusion</div>
                            <div className="text-rose-400 border border-rose-400 rounded-lg px-2">CraftMyPDF</div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Projects