import React from 'react';
import Image from 'next/image';

interface ExecutiveMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    alt: string;
}

const executiveMembers: ExecutiveMember[] = [
    {
        id: 1,
        name: 'Kazi Mizan Ahmed',
        role: 'General Secretary',
        imageUrl: '/img/president.jpg', // Ensure this path is correct in public folder
        alt: 'Kazi Mizan Ahmed'
    },
    {
        id: 2,
        name: 'Kazi Mizan Ahmed',
        role: 'Member',
        imageUrl: '/img/president.jpg',
        alt: 'Kazi Mizan Ahmed'
    },
    {
        id: 3,
        name: 'Kazi Mizan Ahmed',
        role: 'Member',
        imageUrl: '/img/president.jpg',
        alt: 'Kazi Mizan Ahmed'
    },
    {
        id: 4,
        name: 'Kazi Mizan Ahmed',
        role: 'Member',
        imageUrl: '/img/president.jpg',
        alt: 'Kazi Mizan Ahmed'
    }
];

interface ExecutiveMembersSectionProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
}

const ExecutiveMembersSection: React.FC<ExecutiveMembersSectionProps> = ({
    title = "Executive Members",
    ctaText = "View All Members",
    ctaLink = "/team"
}) => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-white mb-4">
                        {title}
                    </h2>
                    {/* <p>
                        {description}
                    </p> */}
                    <div className="relative inline-block">
                        <div className="w-24 h-1 bg-lime-700 dark:bg-lime-300 rounded-full mb-1 mx-auto"></div>
                        <div className="w-16 h-1 bg-lime-700 dark:bg-lime-300 rounded-full mx-auto"></div>
                    </div>
                </div>

                {/* Members Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {executiveMembers.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="text-center mt-12">
                    <a
                        href={ctaLink}
                        className="inline-block bg-linear-to-r from-lime-700 to-lime-800 hover:from-lime-600 hover:to-lime-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-tab-teal dark:hover:from-lime-600 dark:hover:to-lime-700 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </section>
    );
};

interface MemberCardProps {
    member: ExecutiveMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <div className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-800/30 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-800/50">
            {/* Image container */}
            <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-t-xl overflow-hidden">
                <Image
                    src={member.imageUrl}
                    alt={member.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={member.id <= 2} // Only prioritize first 2 images
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Name and Role */}
            <div className="p-4">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-tab-gray dark:text-gray-400 mb-4 transition-colors duration-300">
                    {member.role}
                </p>
            </div>

            {/* Optional: Bio slide-up on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-lg rounded-t-lg">
                {/* Add bio content here if needed */}
            </div>
        </div>
    );
};

export default ExecutiveMembersSection;