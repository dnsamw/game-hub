import logo from "../assets/log.png";
export const getCroppedImageUrl = (url: string): string => {
  if (!url) return logo;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
