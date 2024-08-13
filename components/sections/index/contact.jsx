import React from 'react'
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section scss
import contact from '../../../styles/sections/index/contact.module.scss'

export default function Contact() {
  return (
    <div>

        <Section classProp={contact.section}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Contact Me"
                    preTitle="Let's Connect"
                    subTitle="I'd love to hear from you."
                />
                <SectionGridBg classProp={contact.grid}>
                    <div>
                        <h3>Email</h3>
                        <p>chambers@example.com</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>+1 123-456-7890</p>
                    </div>
                    <div>
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </SectionGridBg>

        </Container>
            <h1>Reach out to me</h1>
            <p>Feel free to reach out to me at the following.</p>
            <div>

            </div>
        </Section>
    </div>
  )
}
