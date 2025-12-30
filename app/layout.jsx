import Navbar from "@/componets/Navbar";
import "../assets/styles/globals.css"; 
import Footer from "@/componets/Footer";

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental,property,real estate',
    description: 'Find the perfect rental Property'
}

const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html> );
}
 
export default MainLayout;