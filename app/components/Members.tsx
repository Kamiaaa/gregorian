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
                        <div className="w-24 h-1 bg-[#231B67] dark:bg-[#362b99] rounded-full mb-1 mx-auto"></div>
                        <div className="w-16 h-1 bg-[#231B67] dark:bg-[#362b99] rounded-full mx-auto"></div>
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
                        className="inline-block bg-linear-to-r from-[#231B67] to-[#362b99] hover:from-[#231B67] hover:to-[#362b99] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-tab-teal dark:hover:from-[#362b99] dark:hover:to-[#362b99] transition-all duration-300 transform hover:-translate-y-1"
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
        <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 w-full shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Border animation container */}
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-br from-[#231B67] to-[#362b99] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#231B67] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-[#231B67] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#231B67] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#231B67] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
            </div>

            {/* Image container - Adjusted for new layout */}
            <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden mb-6">
                <Image
                    src={member.imageUrl}
                    alt={member.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={member.id <= 2}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Name and Role - Adjusted padding removed since container has p-8 */}
            <div className="relative z-10">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-tab-gray dark:text-gray-400 transition-colors duration-300">
                    {member.role}
                </p>
            </div>

            {/* Optional: Bio slide-up on hover - Removed as it conflicts with new design */}
            {/* You can add this back if needed, but adjust positioning accordingly */}
        </div>
    );
};

export default ExecutiveMembersSection;