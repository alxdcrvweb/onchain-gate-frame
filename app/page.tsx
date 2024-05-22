import { Frame, getFrameFlattened } from "frames.js";
import type { Metadata } from "next";

// Declare the frame
const imageUrl = `${process.env.NEXT_PUBLIC_HOST}/gate.png`;
const initialFrame: Frame = {
  image: imageUrl,
  version: "vNext",
  buttons: [
    {
      label: "I'M GOING ONCHAIN",
      action: "link",
      target: `https://warpcast.com/~/compose?text=⛓%20All%20trenches%20lead%20onchain&embeds[]=${process.env.NEXT_PUBLIC_HOST}`,
    
    },

  ],
  postUrl: `${process.env.NEXT_PUBLIC_HOST}/showdown`,
  // imageAspectRatio: "1:1"
};

// Export Next.js metadata
export const metadata: Metadata = {
  title: "Onchain gate",
  description: "I'm going onchain",
  openGraph: {
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  other: getFrameFlattened(initialFrame),
};
export default async function Home() {
  // let html = getFrameHtml(initialFrame);
  // console.log(html);
  return <div>Onchain frame</div>;
}
