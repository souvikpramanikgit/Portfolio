import Clipboard from './Clipboard';

const Intro = () => {

    return (
        <div className="w-full flex flex-col-reverse lg:flex-row gap-4 justify-between items-center">
            <div className="flex flex-col gap-2 w-full lg:w-4/5">
                <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Souvik.</h1>
                <p className="text-base text-gray-800 dark:text-gray-300 mb-4">
                I am skilled in developing efficient, scalable applications, focusing on clean design and robust functionality.My approach emphasizes collaboration, version control, and continuous improvement to meet evolving project needs.
                </p>
                <Clipboard />
            </div>
            <div className="flex items-center justify-center md:mb-0">
                <img
                    src='Image/img.png'
                    alt="Souvik"
                    width={160}
                    height={160}
                    className="border-2 border-gray-100 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default Intro;