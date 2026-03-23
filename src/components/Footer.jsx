import "./../styles/footer.css";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Bharat Bank</h3>
                        <p>Secure banking for the modern world.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/home">About</a></li>
                            <li><a href="/home">Contact</a></li>
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