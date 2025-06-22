import Image from 'next/image'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import figma from '../../../public/logos/figma.svg'
import auth0 from '../../../public/logos/auth0.svg'
import notion from '../../../public/logos/notion.svg'
import asana from '../../../public/logos/asana.svg'
import algolia from '../../../public/logos/algolia.svg'
import clickup from '../../../public/logos/clickup.svg'
import SectionWrapper from '../../SectionWrapper'

import hesperia from '../../../public/logos/hesperia.png'
import ujap from '../../../public/logos/ujap.png'
import clx from '../../../public/logos/clx.png'
import redvital from '../../../public/logos/redvital.jpg'

const logos = [
    {
        src: hesperia,
        alt: "Hesperia WTC Valencia"
    },
    {
        src: ujap,
        alt: "Universidad Jose Antonio Páez"
    },
    {
        src: redvital,
        alt: "Redvital"
    },
    {
        src: clx,
        alt: "CLX Group"
    },
]

const logos2 = [
    {
        src: freshbooks,
        alt: "freshbooks"
    },
    {
        src: sendgrid,
        alt: "sendgrid"
    },
    {
        src: figma,
        alt: "figma"
    },
    {
        src: clickup,
        alt: "clickup"
    },
    {
        src: algolia,
        alt: "algolia"
    },
    {
        src: asana,
        alt: "asana"
    },
    {
        src: notion,
        alt: "notion"
    },
    {
        src: auth0,
        alt: "auth0"
    },
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 text-center">
                Nuestras Alianzas
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-8 md:gap-x-16 sm:grid-cols-2 md:grid-cols-4">
                    {
                        logos.map((item, idx) => (
                            <li key={idx} className="flex justify-center items-center">
                                <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        style={{ objectFit: 'contain' }}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid