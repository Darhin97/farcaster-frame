import {getFrameMetadata} from "@coinbase/onchainkit";
import {Metadata} from "next";


const frameMetadata = getFrameMetadata({
  buttons: [{label: "Begin"}],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma9ebPKfMaSqDdqeioE81dvm261LRrwWfjVuUhJAFBSXw/0.png`,
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`
})


export const metadata:Metadata ={
  title: 'Anime FanClub',
  description: 'A fun club for boruto and naruto lovers',
  openGraph: {
    title: 'Anime FanClub',
    description: 'A fun club for boruto and naruto lovers',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}`]
  },
  other: {
    ...frameMetadata
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className={'text-4xl font-bold tracking-wide'}>Naturo and Boruto fan club</h1>

    </main>
  );
}
