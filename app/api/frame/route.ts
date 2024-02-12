import {NextResponse} from "next/server";

async function getResponse(req: Request) {
    const {searchParams}= new URL(req.url)
    const id: any = searchParams.get("id")
    const idAsNumber = parseInt(id)

    const nextId = idAsNumber + 1

    if(idAsNumber === 5){
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 5</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma9ebPKfMaSqDdqeioE81dvm261LRrwWfjVuUhJAFBSXw/5.png" />
    <meta property="fc:frame:button:1" content="Visit Naruto and Boruto FanClub" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="learn how this was made" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
    } else {
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma9ebPKfMaSqDdqeioE81dvm261LRrwWfjVuUhJAFBSXw/${id}.png" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
    }
}

export async function POST(req: Request) {
    return getResponse(req)
}


//prevents prerendering and  always rendered on the server side, instead of being statically optimized
export const dynamic = 'force-dynamic'