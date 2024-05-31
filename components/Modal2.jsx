// import style from '../styles/Loader.module.css' 
import { useUser } from '../context/Context.js'


export default function Modal({ children, funcion, alert, cancelText, successText }) {

    const { modal, setModal } = useUser()

    function closeModal() {
        console.log('close')
        setModal('')
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-[#000000c7] z-[100000000]  p-4 overflow-x-hidden overflow-y-auto md:inset-0">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    {successText !== 'Soporte' && <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[14px] w-8 h-8 ml-auto inline-flex justify-center items-center  dark:hover:text-white" onClick={closeModal}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>}
                    <div className="p-6 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-2 text-lg font-normal text-gray-500 ">{children}</h3>
                        {!alert && <>
                            <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-[14px] font-medium px-5 py-4 hover:text-gray-900 focus:z-10 mr-2  dark:text-gray-300 dark:border-gray-500 dark:hover:text-white  dark:focus:ring-gray-600" onClick={closeModal}>
                                {cancelText ? cancelText : 'Cancelar'}
                            </button>
                            <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  inline-flex items-center px-5 py-4 text-center" onClick={funcion}>
                                {successText ? successText : 'Si, confirmar.'}
                            </button>
                        </>}

                    </div>
                </div>
            </div>
        </div>


    )
}