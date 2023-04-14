import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import { Prestake__factory } from "@/types";

export default async function handler(
  _: NextApiRequest,
  response: NextApiResponse
) {
  const PRESTAKE_ADDR = "0x0ec46ad7aa8600118da4bd64239c3dc364fd0274";
  const provider = new ethers.providers.JsonRpcProvider(
    "https://api.node.glif.io/rpc/v1",
    314
  );
  const prestake = Prestake__factory.connect(PRESTAKE_ADDR, provider);

  const tvl = await prestake.totalValueLocked();

  response.status(200).json({
    tvl: tvl.toString(),
  });
}
