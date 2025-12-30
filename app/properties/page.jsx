'use client';
import { useRouter, useParams } from "next/navigation";


const PropertiesPage = () => {
    const router = useRouter();
    const params = useParams();

    return ( <div>
        Property Page {params.id}
    </div> );
}
 
export default PropertiesPage;