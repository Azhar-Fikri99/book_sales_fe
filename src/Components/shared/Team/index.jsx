//biar bisa looping

const people = [
    {
        name: "Azhar",
        role: "Fullstack Developer",
        imageUrl:
        "https://dthezntil550i.cloudfront.net/vk/latest/vk2109201722238120021761211/3bf2b3c9-816e-48c4-9be1-7563a6373798.jpg"
    },
    {
        name: "Fikri",
        role: "Backend Developer",
        imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgY_ZkKwImIWepa1WLhsMjTGa4MlMFEMfRNg&s"
    },
    {
        name: "Azhar Fikri",
        role: "Cyber Security Developer",
        imageUrl:
        "https://static.wikia.nocookie.net/lou/images/5/5a/Kosuke_Ueki.png/revision/latest?cb=20120131062056"
    }

]

export default function Team()
{
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font-mb-4 text-grey-900">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

            <div className="flex flex-wrap -m-2">
                {people.map((person) => (
                    <div key={person.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="p-2.lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img src={person.imageUrl}  alt="" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">{person.name}</h2>
                                <p className="text-gray-500"> {person.role}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    ))}
           
            </div>

            </div>
            
        </section>
    )
}