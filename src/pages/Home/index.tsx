import { type FC, useState } from "react";

import bg from "../../assets/bg.png";
import Star from "../../svgs/Star";
import StarYellow from "../../svgs/StarYellow";
import appStore from "../../assets/appStore.png";
import googlePlay from "../../assets/googlePlay.png";
import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import curve from "../../assets/curve.png";
import spotify from "../../assets/spotify.png";
import google from "../../assets/google.png";
import grammarly from "../../assets/grammarly.png";
import afterpay from "../../assets/afterpay.png";
import dropbox from "../../assets/dropbox.png";
import asana from "../../assets/asana.png";
import footer from "../../assets/Footer.png";

import Header from "./ui/Header/header";
import Question from "./ui/Question";

const imgs = [google, afterpay, asana, dropbox, spotify, grammarly];
const questions = [
  "Nädip agza bolmaly?",
  "Sorag 1",
  "Köp soralýan sorag 2",
  "sorag 3",
  "Köp soralýan sorag 4",
];

const Home: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-[full] h-[900px] relative"
      >
        <Header />
        <div className="flex gap-4 px-[80px] mt-[20px] max-w-[1440px]">
          <div className="w-[55%]">
            <div className="bg-whiteThirty font-popreg w-fit text-white text-lg flex items-center gap-[6px] py-[13.5px] px-3 rounded-4xl">
              <Star />
              Galkynyş töleg platformasyna hoş geldiňiz
            </div>
            <h1 className="text-white text-[52px] font-popm mt-3">
              Şahsy maliýe serişdeleriňizi dolandyrmak aňsatlaşdyryldy
            </h1>
            <p className="text-lg text-white font-popm mt-8">
              Töleg platformasy döwlet edaralarynyň we hususy kompaniýalaryň
              arasynda aragatnaşygyň aňsatlaşmagyny, şeýle hem sanly tölegler
              arkaly ykdysadyýetiň hem-de bazar gatnaşyklarynyň çaltlaşmagyny
              gazanmagy göz öňünde tutýar.
            </p>
            <div className="flex items-center mt-[60px] gap-[20px]">
              <div className="cursor-pointer max-h-[60px]">
                <img src={googlePlay} alt="" />
              </div>
              <div className="cursor-pointer max-h-[60px]">
                <img src={appStore} alt="" />
              </div>
            </div>
          </div>

          <div className=" flex absolute bottom-0 right-[80px] items-end">
            <div className="w-[340px] mr-[-120px] z-10">
              <img src={app1} alt="" className="object-cover" />
            </div>
            <div className="w-[340px] ">
              <img src={app2} alt="" className="object-cover" />
            </div>
          </div>

          <div className="absolute bottom-[-66%] w-[106vw] left-[-80px] z-20">
            <img src={curve} alt="" className="w-[100%]" />
          </div>
        </div>

        <section className="px-[80px] mt-[180px] z-30 relative flex flex-col gap-[40px]">
          <h2 className="text-center text-[20px] text-mainText font-popsemi">
            Hyzmatdaşlarymyz
          </h2>
          <ul className="flex items-center justify-between">
            {imgs.map((img, i) => {
              return (
                <li key={i} className="max-h-[52px]">
                  <img src={img} alt="" className="object-cover h-[100%]" />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="px-[80px] mt-[120px] z-30 relative flex flex-col items-center">
          <div className="bg-paleYellow text-yellow flex items-center gap-3 py-3 px-[20px] rounded-3xl font-popsemi text-lg">
            <StarYellow />
            Soraglar
          </div>
          <div className="mt-3 text-[34px] font-popsemi text-mainText">
            Köp soralýan soraglar
          </div>
          <div className="flex flex-col gap-6 mt-[100px] w-[80%]">
            {questions.map((t, i) => {
              return (
                <Question
                  onClick={() => {
                    if (i === activeQuestion) {
                      setActiveQuestion(null);
                      return;
                    }
                    setActiveQuestion(i);
                  }}
                  isActive={i === activeQuestion}
                  title={t}
                  text="Google Play ýa-da App store arkaly jübi telefonyňyza programmany alyň we telefon belgi ýa-da email arkaly agza boluň we tassyklaň."
                />
              );
            })}
          </div>
        </section>
        <div className="w-[100vw] mt-[100px]">
          <img src={footer} alt="" className="object-cover w-[100%]" />
        </div>
      </div>
    </main>
  );
};

export default Home;
