import Image from 'next/image'

export default function President() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
        {/* Title Section */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-white mb-4">
                President
            </h2>
            <div className="relative inline-block">
                <div className="w-24 h-1 bg-lime-600 dark:bg-lime-300 rounded-full mb-1 mx-auto"></div>
                <div className="w-16 h-1 bg-lime-600 dark:bg-lime-300 rounded-full mx-auto"></div>
            </div>
        </div>

      <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column - Text Content */}
          <div className="w-full">
            <h2 className="text-3xl text-gray-900 dark:text-white sm:text-4xl">Dr. Sarah Johnson</h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 font-medium">President & CEO</p>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
              Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
              malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
              Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
              malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
              Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
              malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full flex justify-center md:justify-end">
            <Image 
              src="img/president.jpg" 
              alt="Dr. Sarah Johnson, President & CEO" 
              className="object-cover rounded-lg shadow-md w-full max-w-md" 
              height={600} 
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}