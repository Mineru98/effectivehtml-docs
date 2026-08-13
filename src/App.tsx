import { createHashRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom'
import GuidePage from './pages/GuidePage'
import SkillExhibitPage from './pages/SkillExhibitPage'
import SkillResultPage from './pages/SkillResultPage'
import WhyHtmlPage from './pages/WhyHtmlPage'
import DesigningArtifactsPage from './pages/DesigningArtifactsPage'
import ChoosingFidelityPage from './pages/ChoosingFidelityPage'
import WireframesPage from './pages/WireframesPage'
import PrototypesPage from './pages/PrototypesPage'
import DiagramsPage from './pages/DiagramsPage'
import DecksPage from './pages/DecksPage'
import PlansPage from './pages/PlansPage'
import PreviewPage from './pages/PreviewPage'
import ScrollToTop from './layout/ScrollToTop'

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Navigate to="/docs" replace />} />
      <Route path="/docs" element={<GuidePage />} />
      <Route path="/docs/skill-exhibit" element={<SkillExhibitPage />} />
      <Route path="/docs/skill-results" element={<SkillResultPage />} />
      <Route path="/docs/why-html" element={<WhyHtmlPage />} />
      <Route path="/docs/designing-artifacts" element={<DesigningArtifactsPage />} />
      <Route path="/docs/choosing-fidelity" element={<ChoosingFidelityPage />} />
      <Route path="/docs/wireframes" element={<WireframesPage />} />
      <Route path="/docs/prototypes" element={<PrototypesPage />} />
      <Route path="/docs/diagrams" element={<DiagramsPage />} />
      <Route path="/docs/decks" element={<DecksPage />} />
      <Route path="/docs/plans" element={<PlansPage />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
