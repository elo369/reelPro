"use client"


import { IKVideo } from "imagekitio-next";
import Link from "next/link";
// import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import { IVideo } from "@/models/video";


// interface VideoFeedProps {
//   videos: IVideo[];
// }

interface VideoComponentsProps {
  video: IVideo;
  // onDelete: (id: string) => void;
}

export default function VideoComponents({ video }: VideoComponentsProps) {
  // href={`/videos/${video._id}`}
 
  return (
    // <BackgroundGradient className=" max-w-sm p-[1px] dark:bg-zinc-900">
    <div className="card bg-[#333333] shadow-lg hover:shadow-blue-500/50 hover:shadow-lg transition-all duration-300 rounded-3xl">
      <figure className="relative px-4 pt-4 ">
        <Link href={""} className="relative group w-full">
          <div
            className="rounded-xl overflow-hidden relative w-full"
            style={{ aspectRatio: "9/16" }}
          >
            <IKVideo
              path={video.videoUrl}
              transformation={[
                {
                  height: "1920",
                  width: "1080",
                },
              ]}
              controls={video.controls}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </figure>

      <div className="card-body p-4">
        <Link
          href={""}
          className="hover:opacity-80 transition-opacity flex justify-between"
        >
          <h2 className="caret-title text-lg text-black font-bold bg-gradient-to-tr from-blue-400 to-white text-transparent bg-clip-text">{video.title}</h2>
          {/* <div><Trash2  className="text-red-500" onClick={() => onDelete(video._id?.toString()!)} /></div> */}
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-2 text-white">
          {video.description}
        </p>
      </div>
    </div>
    // </BackgroundGradient>
  );
}
