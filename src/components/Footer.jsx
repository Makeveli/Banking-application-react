import { Link } from "react-router-dom";
import "./../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>Bharat Bank</h3>
                        <p>Providing secure and modern banking solutions for everyone.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/home">About</Link></li>
                            <li><Link to="/home">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: support@bharatbank.com</p>
                        <p>Phone: +91 (0326) 777-7777</p>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Bharat Bank. All rights reserved.</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}