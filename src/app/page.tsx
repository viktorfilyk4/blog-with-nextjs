import Footer from '@/components/HomePage/Footer'
import Header from '@/components/HomePage/Header'
import AboutSection from '@/components/HomePage/AboutSection'
import ProjectsSection from '@/components/HomePage/ProjectsSection'
import PostsSection from '@/components/HomePage/PostsSection'

export default async function RootPage() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <PostsSection />
      </main>
      <Footer />
    </>
  )
}
