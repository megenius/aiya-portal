import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Voucher } from "~/@types/app.type";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const liffApi = process.env.LIFF_API_URL || "http://localhost:14200";

  const vouchers = await fetch(`${liffApi}/api/vouchers`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }).catch((error) => {
      console.error("Error fetching vouchers:", error);
      return [];
    }) as Array<Voucher>

  return {
    message: "Hello from Remix!",
    vouchers
  };
}

export default function Index() {
  const { message, vouchers } = useLoaderData<typeof loader>();

  return (
    <>
      <div>AIYA Club: {message} [{vouchers.length}]</div>
      {
        vouchers.map((voucher) => {
          return (
            <div key={voucher.id} className="flex flex-col items-center justify-center">
              <img src={voucher.banner || ""}  className="w-32 h-32" />
              <div>{voucher.banner}</div>
              <h2 className="text-xl font-bold">{voucher.metadata?.title?.th}</h2>
              {/* <p>{voucher.description}</p> */}
              {/* <p>Expiry: {voucher.expiry}</p> */}
            </div>  
          )
        })
      }
    </>
  );
}
