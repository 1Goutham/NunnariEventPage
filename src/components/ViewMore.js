"use client";
import { useRouter } from "next/navigation";

export default function ViewMore() {
    const router = useRouter();
    return (
        <div>
            <button
            type="button"
            className=" px-2 font-semibold bg-transparent text-[#cfcfd0] underline"
            onClick={()=> router.push(`/blogs`)}
         >
            View More
          </button>
        </div>
    )
}