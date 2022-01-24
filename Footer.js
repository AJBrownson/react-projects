import React from 'react';
import Footer from '../components/Footer';
import Icon from '../components/Icons'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title> Customer Service </Footer.Title>
                    <Footer.Link href='#'>Track My Order</Footer.Link>
                    <Footer.Link href='#'>Contact Us</Footer.Link>
                    <Footer.Link href='#'>Shipping Info</Footer.Link>
                    <Footer.Link href='#'>Return & Exchanges</Footer.Link>
                    <Footer.Link href='#'>Size Guide</Footer.Link>
                    <Footer.Link href='#'>Customer Reviews</Footer.Link>
                    <Footer.Link href='#'>FAQs</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title> Information </Footer.Title>
                    <Footer.Link href='#'>About Us</Footer.Link>
                    <Footer.Link href='#'>Blog</Footer.Link>
                    <Footer.Link href='#'>Our Stores</Footer.Link>
                    <Footer.Link href='#'>Careers</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title> About Us </Footer.Title>
                    <Footer.Link href='#'>Get it on the Google Playstore</Footer.Link>
                    <Footer.Link href='#'>Download on the Apple Store</Footer.Link>
                    <Footer.Link href='#'>Get it from ApkPure</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title> Reach Us </Footer.Title>
                    <Footer.Link href='#'><Icon className='fab fa-facebook' />Facebook</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-twitter' />Twitter</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-instagram' />Instagram</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-tiktok' />Tik Tok</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-youtube' />Youtube</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}