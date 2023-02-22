import Rectangle from "../images/Rectangle.svg";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section>
      <div className="relative z-10 max-w-full mx-auto overflow-hidden bg-hero">
        <span className="absolute -z-10 w-5/12 -right-20 -top-10 bottom-0 ">
          <Rectangle className="" />
        </span>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex mt-10 h-screen items-center">
            <div className="w-6/12">
              <h1 className="text-7xl text-dark mb-10 leading-[5rem]">
                Beautiful Design For{" "}
                <span className="underline font-bold">Social Media</span>{" "}
                Content
              </h1>
              <p className="text-muted">
                Figma social media content templates for branding, marketing,
                insights, and more. Free for personal and commercial use!
              </p>
              <div className="flex mt-10">
                <button className="bg-primary py-4 px-8 rounded-lg  text-white">
                  <div className="flex items-center gap-x-2">
                    <FiDownload />
                    <span>Download Now</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <h1>Beautiful Design For Social Media Content</h1>
              <p>
                Figma social media content templates for branding, marketing,
                insights, and more. Free for personal and commercial use!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
