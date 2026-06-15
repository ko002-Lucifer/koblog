import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state") || "";
  const clientId = process.env.GITHUB_CLIENT_ID;

  // 临时调试：直接返回环境变量信息
  return NextResponse.json({
    clientIdPrefix: clientId ? clientId.substring(0, 6) : null,
    clientIdLength: clientId?.length ?? 0,
    expectedPrefix: "Ov231i",
    envKeys: Object.keys(process.env).filter(
      k => k.includes("GITHUB") || k.includes("CLIENT")
    ),
    redirectUrl: `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user&state=${encodeURIComponent(state)}`
  });
}
