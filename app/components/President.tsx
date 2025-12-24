import Image, { StaticImageData } from 'next/image';

// Type definitions
interface PresidentProps {
  title?: string;
  name?: string;
  position?: string;
  imageSrc?: string | StaticImageData; // Made optional with ?
  imageAlt?: string;
  paragraphs?: string[];
  showTitleSection?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  containerMaxWidth?: string;
}

export default function President({
  title = "President",
  name = "Dr. Sarah Johnson",
  position = "President & CEO",
  imageSrc = "/img/president.jpg", // Default image path
  imageAlt = "",
  paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel."
  ],
  showTitleSection = true,
  imageWidth = 400,
  imageHeight = 600,
  containerMaxWidth = "max-w-7xl"
}: PresidentProps) {
  // Generate alt text if not provided
  const generatedAlt = imageAlt || `${name}, ${position}`;

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      {showTitleSection && (
        <div className="text-center mb-16 pt-8">
          <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-white mb-4">
            {title}
          </h2>
          <div className="relative inline-block">
            <div className="relative inline-block">
              <div className="w-24 h-1 bg-[#231B67] dark:bg-[#362b99] rounded-full mb-1 mx-auto"></div>
              <div className="w-16 h-1 bg-[#231B67] dark:bg-[#362b99] rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      <div className={`container mx-auto ${containerMaxWidth} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full">
            <h2 className="text-3xl text-gray-900 dark:text-white sm:text-4xl font-bold">
              {name}
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 font-medium">
              {position}
            </p>

            <div className="mt-6 space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 text-justify dark:text-gray-400 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Image - Only show if imageSrc is provided */}
          

{/* Right Column - Image - Only show if imageSrc is provided */}
{imageSrc && (
  <div className="w-full flex justify-center md:justify-end">
    <div className="relative w-full max-w-md group">
      {/* Gradient Border Container */}
      <div className="relative p-1 bg-gradient-to-r from-[#231B67] via-[#362b99] to-lime-600 dark:from-[#231B67] dark:via-[#362b99] dark:to-lime-400 rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
        {/* Inner white/dark background for clean look */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={generatedAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-cover w-full h-auto rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
            priority
          />
        </div>
        
        {/* Optional decorative corner accents */}
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-lime-500 dark:border-lime-300 rounded-tl-lg opacity-70"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#231B67] dark:border-[#362b99] rounded-br-lg opacity-70"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#231B67] to-lime-600 dark:from-[#362b99] dark:to-lime-400 opacity-10 rounded-full -z-10 blur-sm group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-lime-600 to-[#231B67] dark:from-lime-400 dark:to-[#362b99] opacity-5 rounded-full -z-10 blur-sm group-hover:opacity-15 transition-opacity duration-300"></div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
}