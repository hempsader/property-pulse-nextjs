import properties from '@/properties.json'
import PropertyCard  from '@/componets/PropertyCard'

const PropertiesPage = () => {
    return (
        <section className='px-5 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-4'>
                {properties.length === 0 ? (<p>No properties found</p>) : 
                 (<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                 </div>
                )}
            </div>
        </section>
    )
}
 
export default PropertiesPage;