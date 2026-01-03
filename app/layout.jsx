import Navbar from "@/componets/Navbar";
import "../assets/styles/globals.css"; 
import Footer from "@/componets/Footer";
import AuthProvider from "@/componets/AuthProvider";

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental,property,real estate',
    description: 'Find the perfect rental Property'
}

const MainLayout = ({children}) => {
    return (
        <AuthProvider>
        <html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html> 
    </AuthProvider>);
}
 
export default MainLayout;