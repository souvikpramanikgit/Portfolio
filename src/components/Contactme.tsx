import React from 'react'

const Contactme = () => {
    return (
        <div className="flex flex-col gap-4 mb-20">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Want to chat? Just shoot me a dm with a{" "}
                <a
                    href="https://x.com/SouvikPram718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                >
                    direct question on twitter
                </a>{" "}
                or email me directly at{" "}
                <a
                    href="mailto:souvikkr1981@gmail.com"
                    className="text-blue-500"
                >
                    souvikkr1981@gmail.com
                </a>
            </p>
        </div>
    )
}

export default Contactme