import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mission } from "../_components/our-mission";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MobileAppSection } from "../_components/mobile-app-section";
import { Services } from "../_components/services";
import { Functionality } from "../_components/functionality";
import { Testimonials } from "../_components/testimonials";
import { FAQ } from "../_components/faq";
import { getScopedI18n } from "@/locales/server";

export default async function Home() {
  const scopedI18N = await getScopedI18n("home-page");
  return (
    <main>
      {/* Hero Section */}
      <div className="flex-1 bg-gradient-to-r pb-8 from-violet-300 to-white">
        <section className="container m-auto grid lg:grid-cols-2 gap-8 py-12 md:py-20">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1
                className="text-3xl text-center lg:text-start tracking-tighter sm:text-5xl xl:text-7xl"
                dangerouslySetInnerHTML={{ __html: scopedI18N("hero.title") }}
              ></h1>
              <p className="max-w-[600px] m-auto lg:m-0 text-center lg:text-start text-black md:text-xl">
                {scopedI18N("hero.subtitle")}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary rounded-full hover:bg-[#6D28D9]"
              >
                {scopedI18N("hero.download-app")}
              </Button>
              <Button
                className="rounded-full font-semibold text-primary hover:bg-transparent"
                variant="ghost"
                size="lg"
              >
                <div className="size-10 flex pl-1 items-center justify-center rounded-full bg-white">
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#7864BB" />
                  </svg>
                </div>
                {scopedI18N("hero.get-started")}
              </Button>
            </div>
          </div>
          <div className="relative m-auto lg:ml-auto mt-8 lg:mt-0 w-fit h-fit">
            <div className="h-[250px] w-[300px] md:h-[350px] md:w-[400px] lg:h-[500px] lg:w-[550px]">
              <Image
                src="/hero-image.png"
                alt="Healthcare Professional"
                width={550}
                height={500}
                className="rounded-2xl w-full h-full m-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 sm:-top-8 -right-10 bg-white p-2 sm:p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-base lg:text-3xl font-bold text-primary">
                  10K+
                </span>
                <div className="text-xs lg:text-sm leading-tight text-center">
                  {scopedI18N("hero.stats.hours")}
                </div>
              </div>
            </div>
            <div className="absolute md:-bottom-12 -bottom-6 -left-8 bg-white px-4 py-2 rounded-lg shadow-lg w-fit lg:w-60">
              <div className="flex items-center flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src="/user-1.png"
                        width={32}
                        height={32}
                        className="inline-block size-6 lg:size-8 rounded-full ring-2 ring-slate-100"
                        alt="user image"
                      />
                    ))}
                  </div>
                  <span className="text-base lg:text-2xl font-bold text-primary">
                    2,650+
                  </span>
                </div>
                <div className="text-xs lg:text-sm">
                  {scopedI18N("hero.stats.patients")}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <Services />

      {/* Offers Section */}
      <div className="w-full py-8 grid h-fit gap-4 mb-24 md:mb-0 px-10">
        <div className="w-full flex flex-wrap md:flex-nowrap gap-4 justify-between">
          <div className="rounded-md w-full">
            <Image
              src={"/offers/offer-1.png"}
              width={390}
              height={200}
              alt="offer 1 image"
              className="rounded-md h-full w-full object-fill"
            />
          </div>
          <div className="rounded-md w-full">
            <Image
              src={"/offers/offer-2.png"}
              width={390}
              height={200}
              alt="offer 1 image"
              className="rounded-md h-full w-full object-fill"
            />
          </div>
          <div className="rounded-md w-full">
            <Image
              src={"/offers/offer-1.png"}
              width={390}
              height={200}
              alt="offer 1 image"
              className="rounded-md h-full w-full object-fill"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 h-12">
          <div className="size-2 rounded-full bg-primary/60"></div>
          <div className="size-2 rounded-full bg-primary ring  ring-offset-4 ring-primary/70"></div>
          <div className="size-2 rounded-full bg-primary/60"></div>
        </div>
      </div>

      {/* Functionality Section */}
      <Functionality />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Our Mission Section */}
      <Mission />

      {/* Ask Questions Section */}
      <div className="w-full flex relative py-14 h-fit px-4">
        <div className="w-12 absolute inset-6">
          <svg
            width="117"
            height="135"
            viewBox="0 0 117 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107.066 51.154C105.794 49.0343 104.523 46.9146 103.246 44.7949C102.095 42.8813 99.384 42.9485 98.218 44.7949C96.054 48.2238 94.3795 51.8398 93.1511 55.6045C91.4574 51.1876 89.7636 46.7707 88.0651 42.3586C86.8896 39.2988 82.6 39.7592 82.3457 43.1307C82.005 47.6051 81.6643 52.0748 81.3237 56.5493C78.6367 48.876 75.9498 41.2076 73.2676 33.5343C72.2168 30.5273 67.5626 30.887 67.5482 34.3064C67.4666 53.9212 68.3927 73.512 70.2831 93.0164C62.5725 66.021 57.6832 38.2438 52.8611 10.5961C52.2997 7.3877 46.9018 8.10227 47.1417 11.3682C49.6799 45.706 52.2133 80.0439 54.7515 114.382C41.3455 78.4613 36.0723 39.9223 30.9143 2.07396C30.4777 -1.13921 24.8015 -0.415058 25.1949 2.84608C28.0114 26.2111 29.9163 49.6721 30.9191 73.1763C29.4893 66.6492 28.0594 60.1174 26.6296 53.5903C25.8091 49.8448 20.5119 51.5377 21.0158 55.1393C22.009 62.2611 22.2153 69.4595 21.6779 76.6053C19.6483 69.3205 17.6234 62.0309 15.5938 54.7461C14.711 51.5761 9.90805 52.2235 9.87446 55.5182C9.74971 67.0617 9.62494 78.6051 9.50019 90.1486C9.4618 93.8941 15.282 93.8989 15.3252 90.1486C15.3779 85.4487 15.4259 80.7488 15.4787 76.0489C16.9133 81.2044 18.3479 86.3647 19.7826 91.5202C20.5215 94.1722 24.7919 94.412 25.3965 91.5202C26.049 88.4077 26.5624 85.2856 26.9367 82.1588C28.5632 89.5826 30.1898 97.0114 31.8164 104.435C32.5265 107.668 37.5645 106.915 37.5357 103.663C37.4398 93.3378 37.1711 83.0124 36.7249 72.6967C41.3455 93.5536 47.4776 114.008 56.4597 133.579C57.6544 136.188 62.0927 134.912 61.8864 132.112C60.1734 108.929 58.4605 85.746 56.7476 62.5632C61.1283 82.8877 66.4686 102.982 73.8769 122.472C75.2252 126.021 80.0378 124.616 79.4908 120.923C76.1225 98.0808 74.1601 75.0466 73.5651 51.9693C75.8298 58.4388 78.0945 64.9035 80.3592 71.3731C81.458 74.5095 85.8292 73.91 86.0787 70.6009C86.4433 65.8052 86.808 61.0094 87.1727 56.2136C88.4682 59.5946 89.7684 62.9757 91.0639 66.3567C92.2731 69.5075 96.3899 68.8697 96.7833 65.5846C97.3495 60.8463 98.741 56.3143 100.819 52.07C101.222 52.7414 101.625 53.4176 102.033 54.089C103.961 57.3022 108.999 54.3768 107.066 51.154Z"
              fill="#7864BB"
              fillOpacity="0.37"
            />
          </svg>
        </div>
        <div className="flex gap-6 items-start m-auto">
          <div className="flex-1 space-y-10 text-center">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {scopedI18N("faq.subtitle")}
              </p>
              <h1 className="text-6xl font-semibold md:leading-9 leading-light tracking-tight text-[#1B3C74]">
                {scopedI18N("faq.title")}
              </h1>
            </div>
            <div className="relative max-w-lg m-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                className="pl-10 rounded-[6px] bg-gray-200"
                placeholder="Search here"
              />
            </div>
          </div>
        </div>
      </div>

      {/* faq */}
      <FAQ />

      {/* Mobile app section */}
      <MobileAppSection />
    </main>
  );
}
