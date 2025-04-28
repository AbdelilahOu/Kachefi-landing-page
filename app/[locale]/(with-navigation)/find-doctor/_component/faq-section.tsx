"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScopedI18n } from "@/locales/client";
import Image from "next/image";

const faqItems = [
  {
    question: "Pourquoi choisir notre médecine pour votre famille ?",
    answer:
      "Notre approche personnalisée et notre expertise médicale garantissent les meilleurs soins pour votre famille.",
  },
  {
    question: "Why are we different from others?",
    answer:
      "We combine cutting-edge medical technology with compassionate care to provide unique healthcare solutions.",
  },
  {
    question: "Sûre et amour pour les sites de confiance et expérimentés",
    answer:
      "Notre équipe expérimentée s&aposengage à fournir des soins de santé sûrs et fiables.",
  },
  {
    question: "Comment obtenir un rendez-vous en cas d&aposurgence?",
    answer:
      "En cas d&aposurgence, contactez-nous directement par téléphone ou via notre plateforme en ligne 24/7.",
  },
];

export default function FAQSection() {
  const t = useScopedI18n("find-doctor");

  return (
    <div className="flex w-full bg-white">
      <div className="container relative mx-auto bg-white px-4 py-12">
        <p className="text-center text-[#321C7D]/90">{t("faq.subtitle")}</p>
        <h2 className="mb-8 text-center font-bold text-4xl text-[#321C7D]">
          {t("faq.title")}
        </h2>
        {/* Decorative Wave */}
        <div className="absolute top-4 right-12 h-24 w-24 text-purple-400">
          <BouncyLineIcon />
        </div>
        <div className="-left-[10%] absolute top-[25%] h-24 w-24 text-purple-400">
          <SignatureIcon />
        </div>
        <div className="relative m-auto pt-4">
          <div className="m-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="relative m-auto max-w-lg lg:mx-0">
              <div className="overflow-hidden rounded-sm p-2 shadow-2xl">
                <Image
                  src="/find-doctor-faq.png"
                  alt="Happy healthcare providers"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="-right-6 absolute top-12 aspect-square h-16 rounded-full bg-white p-3 shadow-lg">
                <div className="flex h-full items-center justify-center">
                  <HeartInHandsIcon />
                </div>
              </div>
              <div className="-left-16 absolute bottom-12 h-20 w-full max-w-60 rounded-lg bg-white p-3 shadow-lg">
                <div className="flex h-full items-center gap-2">
                  <span className="text-4xl">😊</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#321C7D]">84k+</span>
                    <span className="text-sm">
                      {t("faq.satisfied-patients")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Accordion type="single" collapsible className="h-full w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    className="my-6 border-b-0"
                    value={`item-${index}`}
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="flex items-center gap-4 font-semibold text-[#321C7D]">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignatureIcon() {
  return (
    <svg
      width="118"
      height="136"
      viewBox="0 0 118 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M107.906 52.0436C106.634 49.9239 105.363 47.8042 104.087 45.6845C102.935 43.7709 100.224 43.8381 99.0581 45.6845C96.8941 49.1134 95.2196 52.7294 93.9912 56.4941C92.2975 52.0772 90.6037 47.6603 88.9052 43.2482C87.7297 40.1884 83.4401 40.6488 83.1858 44.0203C82.8451 48.4947 82.5044 52.9645 82.1638 57.4389C79.4768 49.7656 76.7899 42.0973 74.1077 34.424C73.0569 31.417 68.4027 31.7766 68.3883 35.196C68.3067 54.8108 69.2328 74.4016 71.1232 93.9061C63.4126 66.9107 58.5233 39.1334 53.7012 11.4857C53.1398 8.27735 47.7419 8.99192 47.9818 12.2578C50.52 46.5956 53.0534 80.9335 55.5916 115.272C42.1856 79.351 36.9124 40.8119 31.7544 2.96361C31.3178 -0.249563 25.6416 0.474591 26.035 3.73573C28.8515 27.1007 30.7564 50.5617 31.7592 74.0659C30.3294 67.5388 28.8995 61.007 27.4697 54.4799C26.6492 50.7345 21.352 52.4273 21.8559 56.0289C22.8491 63.1507 23.0554 70.3492 22.518 77.4949C20.4884 70.2102 18.4635 62.9206 16.4339 55.6357C15.551 52.4658 10.7481 53.1131 10.7145 56.4078C10.5898 67.9513 10.465 79.4947 10.3403 91.0382C10.3019 94.7837 16.1221 94.7885 16.1652 91.0382C16.218 86.3383 16.266 81.6384 16.3188 76.9385C17.7534 82.094 19.188 87.2543 20.6227 92.4099C21.3616 95.0619 25.632 95.3017 26.2366 92.4099C26.8891 89.2973 27.4025 86.1752 27.7768 83.0484C29.4033 90.4722 31.0299 97.901 32.6565 105.325C33.3666 108.558 38.4046 107.805 38.3758 104.553C38.2799 94.2274 38.0112 83.902 37.565 73.5863C42.1856 94.4433 48.3177 114.898 57.2998 134.469C58.4945 137.078 62.9328 135.802 62.7265 133.002C61.0135 109.819 59.3006 86.6357 57.5877 63.4529C61.9684 83.7774 67.3087 103.872 74.717 123.362C76.0653 126.911 80.8779 125.506 80.3309 121.813C76.9626 98.9704 75.0002 75.9362 74.4052 52.8589C76.6699 59.3284 78.9346 65.7932 81.1993 72.2627C82.2981 75.3991 86.6693 74.7996 86.9188 71.4905C87.2834 66.6948 87.6481 61.899 88.0128 57.1032C89.3083 60.4842 90.6085 63.8653 91.904 67.2463C93.1132 70.3971 97.23 69.7594 97.6234 66.4743C98.1896 61.736 99.5811 57.2039 101.659 52.9596C102.062 53.631 102.465 54.3073 102.873 54.9786C104.801 58.1918 109.839 55.2664 107.906 52.0436Z"
        fill="#7864BB"
      />
    </svg>
  );
}

function BouncyLineIcon() {
  return (
    <svg
      width="117"
      height="128"
      viewBox="0 0 117 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.3599 95.4391C94.8061 95.691 105.481 95.1866 115.469 98.7619C116.065 98.9725 116.719 98.6655 116.935 98.0697C117.145 97.4738 116.839 96.8186 116.243 96.6031C106.022 92.9456 95.1038 93.4038 84.4149 93.1469C83.7831 93.129 83.2563 93.6329 83.2427 94.2658C83.2242 94.8981 83.7281 95.4206 84.3599 95.4391Z"
        fill="#E588A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83.4199 80.2605C86.6763 77.2622 90.2299 75.0159 94.5257 73.9026C95.1395 73.7441 95.5058 73.1184 95.3501 72.506C95.1896 71.8937 94.5621 71.5257 93.9532 71.6843C89.2819 72.8943 85.4122 75.3152 81.8723 78.5734C81.4048 79.0016 81.3727 79.7271 81.8037 80.1927C82.2292 80.6579 82.9574 80.6886 83.4199 80.2605Z"
        fill="#E588A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.3613 47.5246C75.8546 42.4027 78.7948 38.396 83.3007 35.5026C83.8323 35.1611 83.988 34.4516 83.6446 33.9195C83.3056 33.3874 82.5954 33.2325 82.0643 33.5739C77.0774 36.7777 73.8166 41.2115 72.1634 46.8824C71.9849 47.4892 72.3375 48.1263 72.9421 48.3032C73.551 48.4806 74.1877 48.1314 74.3613 47.5246Z"
        fill="#E588A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9095 40.5736C22.021 41.6199 21.2242 42.7474 20.5464 43.9478C20.2442 44.4822 19.7129 45.6179 19.6305 46.5919C19.5389 47.6295 19.8915 48.505 20.7982 48.966C22.0027 49.5774 22.9644 49.5137 23.7063 49.1439C24.4208 48.7886 24.9794 48.0906 25.3321 47.1547C26.0053 45.3658 25.9045 42.6319 25.5519 41.0718C26.4998 40.0928 27.5395 39.205 28.6523 38.4157C36.9414 32.5376 49.1003 34.7051 58.4565 43.494C61.7308 46.5712 63.3063 53.0337 64.1258 60.0063C65.4035 70.8627 64.6754 82.9883 64.5748 86.5411C64.5519 87.4183 64.6346 87.9385 64.6803 88.043C64.8953 88.554 65.2757 88.6873 65.5412 88.7374C65.926 88.8065 66.2329 88.733 66.4799 88.6046C66.8141 88.4288 67.0889 88.1187 67.2173 87.6409C67.2859 87.3769 67.3044 87.0091 67.2951 86.6172C67.2859 86.3457 67.2309 86.0486 67.2859 85.8537C67.6434 84.6059 68.0739 83.3879 68.4951 82.161C69.9007 78.0365 71.7188 74.1714 73.7388 70.3109C80.1548 58.0442 86.3602 45.0831 96.8793 35.7373C97.3511 35.3179 97.3968 34.5928 96.9756 34.1198C96.5587 33.6468 95.8355 33.6037 95.3588 34.0235C84.6291 43.5541 78.254 56.7384 71.7101 69.248C69.9927 72.532 68.4173 75.8205 67.1074 79.2602C67.2402 73.1755 67.1896 64.7527 66.0767 57.3003C65.0879 50.6724 63.2056 44.8149 60.0226 41.8234C49.7735 32.1953 36.4056 30.1067 27.3288 36.5462C26.3579 37.2355 25.4329 37.9936 24.5719 38.8159C19.8228 30.2336 9.65604 26.7939 0.67084 30.8987C0.0938068 31.1613 -0.158068 31.8415 0.102971 32.4167C0.368589 32.9919 1.04635 33.2458 1.62338 32.9832C9.72014 29.2844 18.9023 32.5853 22.9095 40.5736ZM23.5735 43.4468C23.2026 43.9711 22.8591 44.5147 22.5385 45.0766C22.3691 45.3782 22.0759 45.958 21.9523 46.5254C21.9248 46.6583 21.9203 46.8664 21.9203 46.9627C22.2363 47.1185 22.4835 47.1937 22.685 47.0924C22.9369 46.9677 23.0652 46.6744 23.1889 46.3467C23.5002 45.5244 23.601 44.4345 23.5735 43.4468Z"
        fill="#E588A7"
      />
    </svg>
  );
}

function HeartInHandsIcon() {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_553_7545"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="41"
        height="41"
      >
        <path
          d="M40.6194 0.660156H0.619385V40.6602H40.6194V0.660156Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_553_7545)">
        <path
          d="M20.6194 16.1901C20.6194 15.188 21.4318 14.3756 22.4339 14.3756C23.436 14.3756 24.2484 15.188 24.2484 16.1901V14.9924C24.2484 13.9903 25.0608 13.1779 26.0629 13.1779C27.0651 13.1779 27.8775 13.9903 27.8775 14.9924V13.5477C27.8775 12.5303 28.7101 11.6782 29.7273 11.6976C30.7131 11.7165 31.5065 12.5215 31.5065 13.5118V14.9924C31.5065 13.9903 32.3189 13.1779 33.321 13.1779C34.3231 13.1779 35.1355 13.9903 35.1355 14.9924V32.5305C35.1355 33.928 34.6246 35.2059 33.7795 36.1883C33.2283 36.829 32.9292 37.6485 32.9292 38.4937V40.0494C32.9292 40.3869 32.6862 40.6606 32.3866 40.6606H22.5316C22.232 40.6606 21.989 40.387 21.989 40.0494V37.3507C21.989 36.6921 21.8072 36.0458 21.4598 35.4863C20.9271 34.6278 20.6194 33.6151 20.6194 32.5306V16.1901Z"
          fill="url(#paint0_linear_553_7545)"
        />
        <path
          d="M26.8155 27.7197C31.277 27.7197 34.8939 29.8968 34.8939 32.5824C34.8939 35.2681 31.277 37.4452 26.8155 37.4452C24.9502 37.4452 23.2328 37.0645 21.8654 36.4253C21.7767 36.0959 21.6415 35.7792 21.4599 35.4866C20.9271 34.6282 20.6194 33.6155 20.6194 32.5309V29.4625C22.1013 28.3973 24.3268 27.7197 26.8155 27.7197Z"
          fill="url(#paint1_linear_553_7545)"
        />
        <path
          d="M31.9018 29.0025C32.7814 29.0025 33.5785 29.3541 34.1614 29.9239L36.3552 27.7302C37.4161 26.6693 39.1362 26.6693 40.1971 27.7302C40.7599 28.293 40.7599 29.2053 40.1971 29.768L33.794 36.1712C32.7646 37.3778 31.2331 38.1432 29.5227 38.1432H28.3055C26.7745 38.1432 25.5334 36.902 25.5334 35.371C25.5334 31.8537 28.3847 29.0025 31.9018 29.0025Z"
          fill="url(#paint2_linear_553_7545)"
        />
        <path
          d="M31.5081 14.9923V24.6981H32.0003C33.7324 24.6981 35.1367 26.1025 35.1367 27.8345V14.9923C35.1367 13.9904 34.3245 13.1777 33.3227 13.1777C32.3203 13.1777 31.5081 13.9904 31.5081 14.9923Z"
          fill="url(#paint3_linear_553_7545)"
        />
        <path
          d="M27.8772 13.5119V24.6982H31.5064V13.5119C31.5064 12.5095 30.6937 11.6973 29.6918 11.6973C28.6894 11.6973 27.8772 12.5095 27.8772 13.5119Z"
          fill="url(#paint4_linear_553_7545)"
        />
        <path
          d="M24.2483 14.9923V24.6981H27.8775V14.9923C27.8775 13.9904 27.0653 13.1777 26.0629 13.1777C25.061 13.1777 24.2483 13.9904 24.2483 14.9923Z"
          fill="url(#paint5_linear_553_7545)"
        />
        <path
          d="M20.6194 16.1896V27.834C20.6194 26.1019 22.0237 24.6976 23.7558 24.6976H24.248V16.1896C24.248 15.1873 23.4358 14.375 22.4334 14.375C21.4315 14.375 20.6194 15.1873 20.6194 16.1896Z"
          fill="url(#paint6_linear_553_7545)"
        />
        <path
          d="M38.0193 31.9696L33.7934 36.18C32.7617 37.3847 31.2288 38.1472 29.5185 38.144L28.3013 38.1418L26.2274 38.1379C23.1277 38.1322 20.6196 35.6148 20.6253 32.5151L20.6264 31.9375L38.0193 31.9696Z"
          fill="url(#paint7_linear_553_7545)"
        />
        <path
          d="M40.1974 29.7672L33.7943 36.1704C33.7912 36.1743 33.788 36.1774 33.7849 36.1813C33.7833 36.1829 33.781 36.1853 33.7794 36.1876C33.228 36.8284 32.9292 37.648 32.9292 38.4927V40.0488C32.9292 40.386 32.6861 40.6598 32.3865 40.6598H30.57L20.6194 30.71V16.1892C20.6194 15.1876 21.4319 14.3751 22.4335 14.3751C23.4359 14.3751 24.2484 15.1876 24.2484 16.1892V14.9915C24.2484 13.99 25.061 13.1774 26.0625 13.1774C27.0649 13.1774 27.8774 13.99 27.8774 14.9915V13.5468C27.8774 12.5296 28.7104 11.6778 29.7276 11.6966C30.7127 11.7155 31.5065 12.5209 31.5065 13.5115V14.9915C31.5065 14.4904 31.7096 14.037 32.0382 13.7092C32.3661 13.3805 32.8202 13.1774 33.3206 13.1774C34.3229 13.1774 35.1355 13.99 35.1355 14.9915V28.9492L36.3551 27.7296C37.4163 26.6684 39.1363 26.6684 40.1974 27.7296C40.7598 28.2919 40.7598 29.2049 40.1974 29.7672Z"
          fill="url(#paint8_linear_553_7545)"
        />
        <path
          d="M20.6199 16.1901C20.6199 15.188 19.8075 14.3756 18.8054 14.3756C17.8032 14.3756 16.9908 15.188 16.9908 16.1901V14.9924C16.9908 13.9903 16.1785 13.1779 15.1763 13.1779C14.1742 13.1779 13.3618 13.9903 13.3618 14.9924V13.5477C13.3618 12.5303 12.5292 11.6782 11.5119 11.6976C10.5261 11.7165 9.73278 12.5215 9.73278 13.5118V14.9924C9.73278 13.9903 8.92038 13.1779 7.91827 13.1779C6.91615 13.1779 6.10376 13.9903 6.10376 14.9924V32.5305C6.10376 33.928 6.61466 35.2059 7.45976 36.1883C8.01097 36.829 8.31003 37.6485 8.31003 38.4937V40.0494C8.31003 40.3869 8.55301 40.6606 8.85262 40.6606H18.7077C19.0073 40.6606 19.2503 40.387 19.2503 40.0494V37.3507C19.2503 36.6921 19.4321 36.0458 19.7795 35.4863C20.3122 34.6278 20.6199 33.6151 20.6199 32.5306V16.1901Z"
          fill="url(#paint9_linear_553_7545)"
        />
        <path
          d="M14.4244 27.7188C9.96281 27.7188 6.34595 29.8959 6.34595 32.5815C6.34595 35.2672 9.96281 37.4443 14.4244 37.4443C16.2897 37.4443 18.0071 37.0636 19.3745 36.4244C19.4632 36.095 19.5984 35.7783 19.78 35.4857C20.3128 34.6273 20.6205 33.6146 20.6205 32.53V29.4616C19.1386 28.3964 16.9131 27.7188 14.4244 27.7188Z"
          fill="url(#paint10_linear_553_7545)"
        />
        <path
          d="M9.33673 29.0025C8.45713 29.0025 7.66011 29.3541 7.07713 29.9239L4.8834 27.7302C3.82246 26.6693 2.10238 26.6693 1.04144 27.7302C0.478699 28.293 0.478699 29.2053 1.04144 29.768L7.44458 36.1712C8.47399 37.3778 10.0054 38.1432 11.7159 38.1432H12.9331C14.4641 38.1432 15.7052 36.902 15.7052 35.371C15.7051 31.8537 12.8539 29.0025 9.33673 29.0025Z"
          fill="url(#paint11_linear_553_7545)"
        />
        <path
          d="M9.73238 14.9923V24.6981H9.24015C7.50807 24.6981 6.10376 26.1025 6.10376 27.8345V14.9923C6.10376 13.9904 6.91599 13.1777 7.9178 13.1777C8.92023 13.1777 9.73238 13.9904 9.73238 14.9923Z"
          fill="url(#paint12_linear_553_7545)"
        />
        <path
          d="M13.3599 13.5119V24.6982H9.73071V13.5119C9.73071 12.5095 10.5434 11.6973 11.5453 11.6973C12.5477 11.6973 13.3599 12.5095 13.3599 13.5119Z"
          fill="url(#paint13_linear_553_7545)"
        />
        <path
          d="M16.9908 14.9923V24.6981H13.3616V14.9923C13.3616 13.9904 14.1738 13.1777 15.1762 13.1777C16.1781 13.1777 16.9908 13.9904 16.9908 14.9923Z"
          fill="url(#paint14_linear_553_7545)"
        />
        <path
          d="M20.6191 16.1896V27.834C20.6191 26.1019 22.0237 24.6976 23.7558 24.6976H24.248V16.1896C24.248 15.1873 23.4358 14.375 22.4334 14.375C21.4315 14.375 20.6191 15.1873 20.6191 16.1896Z"
          fill="url(#paint15_linear_553_7545)"
        />
        <path
          d="M3.22095 31.9696L7.44692 36.18C8.4786 37.3847 10.0115 38.1472 11.7218 38.144L12.939 38.1418L15.0129 38.1379C18.1126 38.1322 20.6207 35.6148 20.615 32.5151L20.6139 31.9375L3.22095 31.9696Z"
          fill="url(#paint16_linear_553_7545)"
        />
        <path
          d="M20.6198 16.1902V30.7109L12.546 22.6372C10.3068 20.4757 8.96012 18.1855 8.53738 15.8145C8.38601 14.9651 8.38287 14.1086 8.51856 13.2804C9.22601 13.5282 9.73267 14.2012 9.73267 14.9925V13.5125C9.73267 12.5219 10.5264 11.7165 11.5115 11.6976C12.5288 11.6788 13.3617 12.5306 13.3617 13.5478V14.9925C13.3617 13.991 14.1743 13.1784 15.1766 13.1784C16.1782 13.1784 16.9907 13.991 16.9907 14.9925V16.1902C16.9907 15.1886 17.8033 14.3761 18.8056 14.3761C19.8072 14.3761 20.6198 15.1886 20.6198 16.1902Z"
          fill="url(#paint17_linear_553_7545)"
        />
        <path
          d="M20.6199 27.5402C20.1778 27.5402 19.735 27.4355 19.3394 27.2376C18.1438 26.6392 15.8091 25.3562 13.6066 23.4858C10.7415 21.0527 9.0433 18.441 8.55906 15.7234C8.18298 13.6122 8.71992 11.4571 10.0322 9.81046C11.2476 8.28552 12.9699 7.39446 14.8818 7.30121C14.9941 7.29572 15.1081 7.29297 15.2202 7.29297C17.0114 7.29297 18.7024 7.98325 19.9816 9.23674C20.2127 9.46317 20.4257 9.7034 20.6197 9.95556C20.8138 9.7034 21.0269 9.46309 21.2579 9.23666C22.5371 7.98325 24.2281 7.29297 26.0194 7.29297C26.1316 7.29297 26.2454 7.29572 26.3578 7.30121C28.2697 7.39438 29.992 8.28552 31.2074 9.81054C32.5197 11.4572 33.0567 13.6123 32.6804 15.7234C32.1963 18.4409 30.4981 21.0526 27.633 23.4858C25.4306 25.3561 23.0959 26.6391 21.9002 27.2376C21.5047 27.4356 21.0619 27.5402 20.6199 27.5402Z"
          fill="url(#paint18_linear_553_7545)"
        />
        <path
          d="M20.6187 5.78832C19.9244 5.78832 19.3616 5.22549 19.3616 4.53122V1.91718C19.3616 1.22298 19.9244 0.660156 20.6187 0.660156C21.3129 0.660156 21.8758 1.22298 21.8758 1.91726V4.5313C21.8758 5.22549 21.3129 5.78832 20.6187 5.78832Z"
          fill="url(#paint19_linear_553_7545)"
        />
        <path
          d="M17.3794 6.64477C16.8885 7.13567 16.0926 7.13567 15.6016 6.64477L13.7532 4.79637C13.2623 4.30547 13.2623 3.50955 13.7532 3.01857C14.2441 2.52767 15.04 2.52767 15.5309 3.01857L17.3793 4.86696C17.8704 5.35787 17.8704 6.15387 17.3794 6.64477Z"
          fill="url(#paint20_linear_553_7545)"
        />
        <path
          d="M23.8587 6.64477C23.3678 6.15387 23.3678 5.35794 23.8587 4.86696L25.7071 3.01857C26.198 2.52767 26.9939 2.52767 27.4849 3.01857C27.9758 3.50947 27.9758 4.30539 27.4849 4.7963L25.6365 6.64469C25.1455 7.13567 24.3496 7.13567 23.8587 6.64477Z"
          fill="url(#paint21_linear_553_7545)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_553_7545"
          x1="26.1179"
          y1="23.4842"
          x2="32.1757"
          y2="33.0794"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_553_7545"
          x1="26.5727"
          y1="27.8531"
          x2="27.5401"
          y2="31.8269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_553_7545"
          x1="30.1174"
          y1="25.5499"
          x2="35.3926"
          y2="37.4087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_553_7545"
          x1="30.9535"
          y1="20.5061"
          x2="36.3538"
          y2="20.5061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_553_7545"
          x1="27.1488"
          y1="18.1978"
          x2="32.5213"
          y2="18.1978"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_553_7545"
          x1="23.6732"
          y1="18.9379"
          x2="29.2034"
          y2="18.9379"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_553_7545"
          x1="20.2788"
          y1="21.1045"
          x2="25.9315"
          y2="21.1045"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_553_7545"
          x1="28.4603"
          y1="34.8288"
          x2="26.591"
          y2="41.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity="0" />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_553_7545"
          x1="31.8133"
          y1="26.5163"
          x2="25.6956"
          y2="21.2614"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity="0" />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_553_7545"
          x1="8.96768"
          y1="21.6515"
          x2="22.301"
          y2="36.8149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_553_7545"
          x1="11.3258"
          y1="28.0827"
          x2="15.4434"
          y2="34.5533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_553_7545"
          x1="5.92967"
          y1="26.7047"
          x2="10.7532"
          y2="37.0969"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDFCF" />
          <stop offset="1" stopColor="#FFA78F" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_553_7545"
          x1="10.287"
          y1="20.5061"
          x2="4.88666"
          y2="20.5061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset="1" stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_553_7545"
          x1="14.0884"
          y1="18.1978"
          x2="8.71581"
          y2="18.1978"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset="1" stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_553_7545"
          x1="17.5659"
          y1="18.9379"
          x2="12.0357"
          y2="18.9379"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset="1" stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_553_7545"
          x1="20.9597"
          y1="21.1045"
          x2="15.307"
          y2="21.1045"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />
          <stop offset="1" stopColor="#FFDFCF" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_553_7545"
          x1="12.78"
          y1="34.8288"
          x2="14.6494"
          y2="41.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity="0" />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_553_7545"
          x1="25.0911"
          y1="32.1235"
          x2="17.9799"
          y2="21.5614"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89580" stopOpacity="0" />
          <stop offset="0.9972" stopColor="#C5715A" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_553_7545"
          x1="16.7628"
          y1="11.0243"
          x2="27.5905"
          y2="21.8521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD3581" />
          <stop offset="1" stopColor="#972437" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_553_7545"
          x1="19.4991"
          y1="3.22667"
          x2="22.9905"
          y2="3.22667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97DA7B" />
          <stop offset="0.1327" stopColor="#91D67A" />
          <stop offset="0.3049" stopColor="#81CC75" />
          <stop offset="0.4987" stopColor="#66BB6C" />
          <stop offset="0.7084" stopColor="#41A461" />
          <stop offset="0.9286" stopColor="#128653" />
          <stop offset="1" stopColor="#017B4E" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_553_7545"
          x1="14.6411"
          y1="5.67255"
          x2="17.1095"
          y2="3.20414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97DA7B" />
          <stop offset="0.1327" stopColor="#91D67A" />
          <stop offset="0.3049" stopColor="#81CC75" />
          <stop offset="0.4987" stopColor="#66BB6C" />
          <stop offset="0.7084" stopColor="#41A461" />
          <stop offset="0.9286" stopColor="#128653" />
          <stop offset="1" stopColor="#017B4E" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_553_7545"
          x1="24.8417"
          y1="3.95284"
          x2="27.3102"
          y2="6.4213"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97DA7B" />
          <stop offset="0.1327" stopColor="#91D67A" />
          <stop offset="0.3049" stopColor="#81CC75" />
          <stop offset="0.4987" stopColor="#66BB6C" />
          <stop offset="0.7084" stopColor="#41A461" />
          <stop offset="0.9286" stopColor="#128653" />
          <stop offset="1" stopColor="#017B4E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
