import React from "react";
import Footer from '../Components/Footer';
import Icon from '../Components/Icons';


export function FooterContainer() {
    return(
    <Footer>
        <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Seller Options</Footer.Title>
                    <Footer.Link href="#">Login as Seller</Footer.Link>
                    <Footer.Link href="#">Signup as Seller</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>My Account</Footer.Title>
                    <Footer.Link href="#">Login</Footer.Link>
                    <Footer.Link href="#">Creat Account</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Useful Links</Footer.Title>
                    <Footer.Link href="#">Browse All Products</Footer.Link>
                    <Footer.Link href="#">Browse All Category</Footer.Link>
                    <Footer.Link href="#">Browse All Brands</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Refund Policy</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Contactus href="#"><Icon className="fas fa-home" />Address</Footer.Contactus>
                    <Footer.Discribtion>Egypt , Cairo , NasrCity</Footer.Discribtion>
                    <Footer.Contactus href="#"><Icon className="fa fa-envelope" />Email</Footer.Contactus>
                    <Footer.Discribtion>Test@gmail.com</Footer.Discribtion>
                    <Footer.Contactus href="#"><Icon className="fa fa-phone" />Phone</Footer.Contactus>
                    <Footer.Discribtion>01234567890</Footer.Discribtion>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fa-brands fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fa-brands fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fa-brands fa-twitter" />Twitter</Footer.Link>
                    <Footer.Link href="#"><Icon className="fa-brands fa-youtube" />Youtube</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>
    )
}