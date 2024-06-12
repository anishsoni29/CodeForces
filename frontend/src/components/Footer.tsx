
export const Footer = () => {
    return (
        <div className="bg-transparent">
            <footer className=" text-center bg-transparent py-12 border-b border-b-slate-100">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900">Start your free trial today</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
                <button className="bg-violet-500 rounded-lg p-4 shadow-lg hover:bg-violet-400 box-shadow: 8px 8px 16px #d1d5db, -8px -8px 16px #ffffff text-center;">
                    <a href="www.google.com/" className="text-md text-white"> Free trial for 30 days </a>
                </button>
            </footer>
            <div className="text-center">
                <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white" >
                <img src="/vslogo.png" alt="" className="h-6 mr-3 sm:h-9" />
                    <div className="text-md text-black py-7">
                    HorseCode
                    </div>
                </a>
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                © 2024-2025 HorseCode™. All Rights Reserved. Built with <a href="" className="text-purple-600 hover:underline dark:text-purple-500" > Firebase </a>
                    and <a href="" className="text-purple-600 hover:underline dark:text-purple-500"> Tailwind CSS</a>
                </span>
            </div>
        </div>
    )
}