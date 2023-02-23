import Rectangle from "../images/Rectangle.svg";
import { FiDownload } from "react-icons/fi";
import { BiPlayCircle } from "react-icons/bi";
import Image from "next/legacy/image";
import Header from "@/component/Header/page";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="relative z-10 max-w-full mx-auto overflow-hidden bg-hero">
          <span className="absolute -z-10 w-5/12 -right-20 -top-10 bottom-0 ">
            <Rectangle className="" />
          </span>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex mt-10 h-screen items-center">
              <div className="max-w-full lg:w-6/12">
                <h1 className="text-7xl text-dark mb-10 leading-[5rem]">
                  Beautiful Design For{" "}
                  <span className="underline font-bold">Social Media</span>{" "}
                  Content
                </h1>
                <p className="text-muted text-2xl leading-tight">
                  Figma social media content templates for branding, marketing,
                  insights, and more. Free for personal and commercial use!
                </p>
                <div className="flex mt-10 gap-x-5">
                  <button className="bg-primary py-4 px-8 rounded-lg  text-white">
                    <div className="flex items-center gap-x-2">
                      <FiDownload />
                      <span>Download Now</span>
                    </div>
                  </button>
                  <button className="bg-primayLight py-4 px-8 rounded-lg  text-primary font-bold">
                    <div className="flex items-center gap-x-2">
                      <BiPlayCircle />
                      <span>See in Action</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative w-6/12 hidden lg:block">
                <span className="">
                  <Image
                    className="object-cover"
                    priority={true}
                    alt="Hero Image"
                    layout="responsive"
                    width={100}
                    height={100}
                    src="/images/hero.png"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
