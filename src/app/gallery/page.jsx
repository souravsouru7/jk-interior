import Gallery from "../../components/Gallery";

export const metadata = {
  title: "Gallery",
  description: "Browse the JK Interiors gallery of residential and commercial interior design work.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
