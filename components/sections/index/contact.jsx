import React from 'react'
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'


// Section scss
import contact from '../../../styles/sections/index/contact.module.scss'
import button 		from '../../../styles/blocks/button.module.scss';

// Icons
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

export default function Contact() {
  return (
    <div>

        <Section classProp={contact.section} >
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Reach Out To Me"
                    preTitle="Let's Connect"
                    subTitle="I'd love to hear from you."
                />
               
            <section className={contact.section}>
                <div>
                    <div className={contact.iconContainer}>
                    <CiMail className={contact.icon} size={70} />
                    </div>
                    <h3 className={contact.header}>Send a mail</h3>
                    <div className={contact.buttonContainer}>
                        <button className={`button ${button.primary}`} onClick={()=> window.location = "mailto:favourchamberlain32@gmail.com"} >Send</button>
                    </div>
                </div>
                <div className={contact.verticalLine}></div>
                <div>
                    <div className={contact.iconContainer}>
                    <IoIosCall className={contact.icon} size={70} />
                    </div>
                   
                    <h3 className={contact.header}>Place a call</h3>

                    <div className={contact.buttonContainer}>
                        <button className={`button ${button.primary}`} onClick={()=> window.location = "tel:+2347080136822"} >Dial</button>
                    </div>
                </div>
            </section>

            </Container>
            
        </Section>
    </div>
  )
}
