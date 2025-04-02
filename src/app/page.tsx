import MaxWidthWrapper from "@/components/globals/MaxWidthWrapper";
import { Icons } from "@/components/icons";
import ParallaxScroll from "@/components/ui/parallax-scroll";
import { images, miniTestimonials, strongPoints } from "@/constants";
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
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600"/>
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600"/>
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600"/>
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600"/>
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600"/>
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

      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Ce que 
              <span className="relative px-2">
                Disent nos{" "} <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-purple-500"/>
              </span> Clients
            </h2>
            <Image
              src={'/logo_illustration/testiIllustration.png'}
              width={500}
              height={500}
              alt='illustration'
              className="w-24 order-0 lg:order-2 rounded-b-full"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {/* First user testimonial */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
              </div>
              <div className="text-base leading-8">
                <p>
                  "J’ai eu une expérience incroyable avec cette plateforme ! J’avais besoin d’un coiffeur pour une occasion spéciale, et en quelques clics, <span className="p-0.5 bg-slate-800 text-white">j’ai trouvé un professionnel</span> talentueux et ponctuel. Il a su me conseiller et réaliser exactement la coiffure que je souhaitais. Je suis ravie du résultat et je compte bien utiliser ce service régulièrement !"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src='/hairestyleImg/coif_woman2.jpg'
                  alt="client"
                  width={500}
                  height={500}
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Sarah L</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                    <p className="text-sm">Achat vérifié</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Seciond user testimonial */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
                <Star className={'h-5 w-5 text-purple-600 fill-purple-600'}/>
              </div>
              <div className="text-base leading-8 max-h-xl">
                <p className="">
                  "Trouver un bon coiffeur n’a jamais été aussi simple ! Avant, je passais des heures à chercher des avis et des recommandations, mais grâce à cette plateforme, <span className="p-0.5 bg-slate-800 text-white">j’ai pu réserver en toute confiance</span>. Mon coiffeur était très professionnel, le salon accueillant, et le service impeccable. Parfait pour ceux qui veulent un coiffeur de qualité sans perdre de temps !"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src='/hairestyleImg/coif_man2.jpg'
                  alt="client"
                  width={500}
                  height={500}
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Karim D.</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                    <p className="text-sm">Achat vérifié</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-20">
          <ParallaxScroll images={images}/>
        </div>
      </section>
    </div>
  );
}
