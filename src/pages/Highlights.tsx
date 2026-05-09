import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighlightGallery from "@/components/HighlightGallery";

const Highlights = () => {
    return (
        <>
            <Helmet>
                <title>Highlights & Media | Needin - Our Journey & Milestones</title>
                <meta name="description" content="Explore Needin's gallery of achievements, events, awards, and media features. See how we are transforming local logistics." />
            </Helmet>

            <Header />
            <main className="min-h-screen pt-20">
                <HighlightGallery />
            </main>
            <Footer />
        </>
    );
};

export default Highlights;
