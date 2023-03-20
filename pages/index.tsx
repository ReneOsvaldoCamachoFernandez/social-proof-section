import Head from "next/head";
import Image from "next/image";
import ImageColton from "public/images/image-colton.jpg";
import ImageIrene from "public/images/image-irene.jpg";
import ImageAnne from "public/images/image-anne.jpg";
import StarIco from "public/images/icon-star.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Social proof section</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon-32x32.png" />
      </Head>
      <main className="font-personal flex items-center px-5">
        <div>
          <div className="flex flex-col items-center mt-[79px] text-center mb-[30px]">
            <h1 className="text-[#502050] text-4xl leading-7 px-5  font-bold mb-[20px]">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[#937B92] font-medium text-[15px] px-[27px]">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          <div className="flex flex-col gap-[16px] mb-[49px] text-[#502050] ">
            <div className="rounded-lg py-[16px] bg-[#F7F2F7] flex flex-col items-center">
              <div className="flex gap-2 mb-[10px]">
                {/*[1, 2, 3, 4, 5].map((i) => (
                  <Image src={StarIco} alt="ico" key={i}></Image>
                ))*/}
              </div>
              <p className="font-bold">Rated 5 Stars in Reviews</p>
            </div>
            <div className="rounded-lg py-[16px] bg-[#F7F2F7] flex flex-col items-center">
              <div className="flex gap-2 mb-[10px]">
                {/*[1, 2, 3, 4, 5].map((i) => (
                  <Image src={StarIco} alt="ico" key={i}></Image>
                ))*/}
              </div>
              <p className="font-bold">Rated 5 Stars in Report Guru</p>
            </div>
            <div className="rounded-lg py-[16px] bg-[#F7F2F7] flex flex-col items-center">
              <div className="flex gap-2 mb-[10px]">
                {/*[1, 2, 3, 4, 5].map((i) => (
                  <Image src={StarIco} alt="ico" key={i}></Image>
                ))*/}
              </div>
              <p className="font-bold">Rated 5 Stars in BestTech</p>
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <div className="rounded-lg px-[30px] py-[40px] flex flex-col bg-[#502050] text-[#FFFFFF]">
              <div className=" flex ">
                <Image
                  src={ImageColton}
                  alt="ico"
                  className="rounded-full "
                  width={42}
                  height={42}
                ></Image>
                <div className="ml-[20px] mt-[]">
                  <p className="font-bold">Colton Smith </p>
                  <p className="font-medium text-[#EE68A4]">Verified Buyer</p>
                </div>
              </div>
              <p className="mt-[28px]">
                "We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time. Excellent!"
              </p>
            </div>

            <div className="rounded-lg px-[30px] py-[40px] flex flex-col bg-[#502050] text-[#FFFFFF]">
              <div className=" flex">
                <Image
                  src={ImageIrene}
                  alt="ico"
                  className="rounded-full "
                  width={42}
                  height={42}
                ></Image>
                <div className="ml-[20px] mt-[]">
                  <p className="font-bold">Irene Roberts</p>
                  <p className="font-medium text-[#EE68A4]">Verified Buyer</p>
                </div>
              </div>
              <p className="mt-[28px]">
                "Customer service is always excellent and very quick turn
                around. Completely delighted with the simplicity of the purchase
                and the speed of delivery."
              </p>
            </div>

            <div className="rounded-lg px-[30px] py-[40px] flex flex-col bg-[#502050] text-[#FFFFFF]">
              <div className=" flex">
                <Image
                  src={ImageAnne}
                  alt="ico"
                  className="rounded-full "
                  width={42}
                  height={42}
                ></Image>
                <div className="ml-[20px]">
                  <p className="font-bold">Anne Wallace </p>
                  <p className="font-medium text-[#EE68A4]">Verified Buyer</p>
                </div>
              </div>
              <p className="mt-[28px]">
                "Put an order with this company and can only praise them for the
                very high standard. Will definitely use them again and recommend
                them to everyone!"
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
