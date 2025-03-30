import MaxWidthWrapper from "@/components/globals/MaxWidthWrapper";
import { miniTestimonials, strongPoints } from "@/constants";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div
              className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-10"/>
                <Image
                  src={'/logo_illustration/head1.png'}
                  alt='logo'
                  height={500}
                  width={500}
                  className="full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Votre Coiffeur Préféré, <span className="bg-purple-600 px-2 text-white">à Portée</span> de Main.
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Avec notre application, trouvez et réservez facilement un rendez-vous chez votre coiffeur préféré <span className="font-semibold">en quelques secondes</span>. Plus besoin d’appeler ou d’attendre sur place, tout se fait en ligne, à votre convenance !
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className='space-y-2'> 
                  {strongPoints.map((point, index) => (
                    <li key={index} className="flex gap-1.5 items-center text-left">
                      <Check className="w-5 h-5 shrink-0 text-purple-600" />
                      {point}
                    </li>
                  ))}
                </div>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                {miniTestimonials.map((testimonial, index) => (
                  <Image
                    key={index}
                    src={testimonial}
                    alt='logo'
                    height={500} 
                    width={500}
                    className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-100"
                  />
                ))}
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  </div>
                  <p>
                    <span className="font-semibold">2.000</span> {" "}
                    clients Satisfaient
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-2xl">
              <Image 
                src='/artiste.png'
                alt='artiste'
                height={500} 
                width={500}
                className="absolute w-72 -top-20 left-64 select-none hidden sm:block lg:hidden xl:block"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-16"/>
              <Image 
                  src='/logo_illustration/heroIllustration.png'
                  alt='artiste'
                  height={1000} 
                  width={1000}
                  className="object-cover w-[400px] h-[400px]"
                />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
