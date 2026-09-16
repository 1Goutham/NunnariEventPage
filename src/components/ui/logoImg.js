import DIMS from "@/lib/logoDims";

// Plain <img> for static logos with intrinsic width/height filled in from
// the size map, so the browser can reserve space before the file arrives.
export default function LogoImg({ src, alt = "", ...rest }) {
  const d = DIMS[src];
  return <img src={src} alt={alt} width={d ? d[0] : undefined} height={d ? d[1] : undefined} decoding="async" {...rest} />;
}
