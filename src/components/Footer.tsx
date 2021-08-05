import Image from 'next/image'

const Footer = ({props}) => {
    return(
        <footer className = {`
            bg-gray-500
        `} >
            <a
                href="https://wcseven.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    text-yellow-500
                `}
            >
                Desenvolvido por{' '}
                <span>
                    <Image src="/wcseven.svg" alt="WC Logo" width={72} height={16} />
                </span>
            </a>
        </footer >
    )
}
export default Footer
