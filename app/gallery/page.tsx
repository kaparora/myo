import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from MYO Jaipur — our play space, children's art activities, happy moments, and Garima working with children at our Civil Lines centre.",
};

export default function Gallery() {
  return <GalleryClient />;
}
