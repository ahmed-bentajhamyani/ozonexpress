import OzonLogo from 'assets/brand/ozonexpress_logo.png'
import errorImage from 'assets/images/oops-error.jpg'

function ErrorFallback() {
    return (
        <section className="container flex flex-col lg:flex-row justify-center lg:items-center mx-auto pt-20 px-5 md:px-10 xl:px-20">
            <div className="flex flex-col items-start mt-3 lg:mt-0 lg:w-1/2">
                <img src={OzonLogo} className='mb-10' alt="Logo" />


                <p className="font-extrabold text-4xl lg:text-5xl 2xl:text-6xl mt-1 dark:text-white">
                    Oops 404 ERROR
                </p>

                <p className="text-base 2xl:text-xl mt-2 2xl:mt-5 dark:text-white">
                    The server encountered an error and could not complete your request. Please try again later.
                </p>
            </div>

            <div className="flex justify-end items-end lg:w-1/2">
                <img src={errorImage} alt="" className='h-[400px] 2xl:h-[600px]' />
            </div>
        </section>
    )
}

export default ErrorFallback