import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'

export function Footer() {
    return (
        <div className="flex flex-col gap-3 items-center justify-center borde w-full py-4 mt-32 bg-[#262626] text-white">
            <div>
                <p>&copy; Desenvolvido por Gustavo Henrique</p>
            </div>
            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/gustavo-henrique-oliveira-dos-santos-028aa4181/" target="_blank" rel="noreferrer"><FaLinkedin className="text-2xl"/></a>
                <a href="https://github.com/guhenriq" target="_blank" rel="noreferrer"><FaGithub className="text-2xl"/></a>
                <a href=" https://api.whatsapp.com/send?phone=5511952516534"><FaWhatsapp className="text-2xl"/></a>
                <a href="mailto:gustavo.henrique.oliveira50@gmail.com"><MdEmail className="text-2xl"/></a>
            </div>
        </div>
    )
}