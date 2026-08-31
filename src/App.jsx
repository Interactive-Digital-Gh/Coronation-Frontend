import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import PurpleHome from './pages/PurpleHome'
import PurpleNavbar from './components/PurpleNavbar'
import Footer from './components/Footer'
import Feedback from './components/FeedBack'
import CookieConsent from "react-cookie-consent";

// Every page except the landing page is lazy-loaded so mobile visitors only
// download the code for the route they are on, not the whole site.
const RedHome = lazy(() => import('./pages/RedHome'))
const PurpleAbout = lazy(() => import('./pages/PurpleAbout'))
const PurpleProduct = lazy(() => import('./pages/PurpleProduct'))
const PurpleProductDetails = lazy(() => import('./pages/PurpleProductDetails'))
const PurpleCareers = lazy(() => import('./pages/PurpleCareers'))
const PurpleContact = lazy(() => import('./pages/PurpleContact'))
const PurpleInsights = lazy(() => import('./pages/PurpleInsights'))
const DetailOne = lazy(() => import('./components/DetailOne'))
const PurpleService = lazy(() => import('./pages/PurpleService'))
const WhistleBlowing = lazy(() => import('./pages/WhistleBlowing'))
const RedAbout = lazy(() => import('./pages/RedAbout'))
const RedProduct = lazy(() => import('./pages/RedProduct'))
const RedInsights = lazy(() => import('./pages/RedInsights'))
const RedDetailOne = lazy(() => import('./components/RedDetailOne'))
const RedCareers = lazy(() => import('./pages/RedCareers'))
const RedContact = lazy(() => import('./pages/RedContact'))
const RedService = lazy(() => import('./pages/RedService'))
const RedProductDetails = lazy(() => import('./pages/RedProductDetails'))
const Privacy = lazy(() => import('./pages/Privacy'))
const RedWhistleBlowing = lazy(() => import('./pages/RedWhistleBlowing'))
const PurpleOffices = lazy(() => import('./pages/PurpleOffices'))
const RedOffices = lazy(() => import('./pages/RedOffices'))
const MotorInsuranceGhana = lazy(() => import('./pages/MotorInsuranceGhana'))
const MarineInsuranceGhana = lazy(() => import('./pages/MarineInsuranceGhana'))
const BusinessProtectionInsurance = lazy(() => import('./pages/BusinessProtectionInsurance'))

// Shown briefly while a lazy route chunk downloads
const RouteFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-[#B580D1] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

// Forwards legacy insight-detail URLs (/purpledetail/:id, /reddetail/:id) to the new paths
const LegacyDetailRedirect = ({ base }) => {
  const { id } = useParams();
  return <Navigate to={`${base}/${id}`} replace />;
};

function App() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const isModalShown = localStorage.getItem('isFeedbackModalShown');
    if (!isModalShown) {
      const timer = setTimeout(() => {
        setShowFeedbackModal(true);
        localStorage.setItem('isFeedbackModalShown', 'true');
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <PurpleNavbar />
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* Individual (personal) section */}
          <Route path='/' element={<PurpleHome />} />
          <Route path='/about-us' element={<PurpleAbout />} />
          <Route path='/personal-insurance' element={<PurpleProduct />} />
          <Route path='/personal-insurance/*' element={<PurpleProductDetails />} />
          <Route path='/careers' element={<PurpleCareers />} />
          <Route path='/contact-us' element={<PurpleContact />} />
          <Route path='/insights' element={<PurpleInsights />} />
          <Route path='/insights/:id' element={<DetailOne />} />
          <Route path='/self-service' element={<PurpleService />} />
          <Route path='/whistle-blowing' element={<WhistleBlowing />} />
          <Route path='/our-offices' element={<PurpleOffices />} />

          {/* Corporate section */}
          <Route path='/corporate' element={<RedHome />} />
          <Route path='/corporate/about-us' element={<RedAbout />} />
          <Route path='/corporate/business-insurance' element={<RedProduct />} />
          <Route path='/corporate/business-insurance/*' element={<RedProductDetails />} />
          <Route path='/corporate/careers' element={<RedCareers />} />
          <Route path='/corporate/contact-us' element={<RedContact />} />
          <Route path='/corporate/insights' element={<RedInsights />} />
          <Route path='/corporate/insights/:id' element={<RedDetailOne />} />
          <Route path='/corporate/self-service' element={<RedService />} />
          <Route path='/corporate/whistle-blowing' element={<RedWhistleBlowing />} />
          <Route path='/corporate/our-offices' element={<RedOffices />} />

          <Route path="/privacy" element={<Privacy />} />

          {/* SEO-optimized dedicated product landing pages (theme follows section) */}
          <Route path="/motor-insurance-ghana" element={<MotorInsuranceGhana />} />
          <Route path="/marine-insurance-ghana" element={<MarineInsuranceGhana />} />
          <Route path="/business-protection-insurance" element={<BusinessProtectionInsurance />} />
          <Route path="/corporate/motor-insurance-ghana" element={<MotorInsuranceGhana />} />
          <Route path="/corporate/marine-insurance-ghana" element={<MarineInsuranceGhana />} />
          <Route path="/corporate/business-protection-insurance" element={<BusinessProtectionInsurance />} />

          {/* Legacy URL redirects — keep old bookmarks, CMS links and indexed pages working */}
          <Route path='/purpleabout' element={<Navigate to="/about-us" replace />} />
          <Route path='/purpleproduct' element={<Navigate to="/personal-insurance" replace />} />
          <Route path='/purpleproductdetails' element={<Navigate to="/personal-insurance" replace />} />
          <Route path='/purpleproductdetails/motor' element={<Navigate to="/personal-insurance/motor" replace />} />
          <Route path='/purpleproductdetails/travel' element={<Navigate to="/personal-insurance/travel" replace />} />
          <Route path='/purpleproductdetails/home' element={<Navigate to="/personal-insurance/home" replace />} />
          <Route path='/purplecareers' element={<Navigate to="/careers" replace />} />
          <Route path='/purplecontact' element={<Navigate to="/contact-us" replace />} />
          <Route path='/purpleinsights' element={<Navigate to="/insights" replace />} />
          <Route path='/purpledetail/:id' element={<LegacyDetailRedirect base="/insights" />} />
          <Route path='/purpleservices' element={<Navigate to="/self-service" replace />} />
          <Route path='/purplewhistle' element={<Navigate to="/whistle-blowing" replace />} />
          <Route path='/purpleoffices' element={<Navigate to="/our-offices" replace />} />
          <Route path='/redhome' element={<Navigate to="/corporate" replace />} />
          <Route path='/redabout' element={<Navigate to="/corporate/about-us" replace />} />
          <Route path='/redproduct' element={<Navigate to="/corporate/business-insurance" replace />} />
          <Route path='/redproductdetails' element={<Navigate to="/corporate/business-insurance" replace />} />
          <Route path='/redproductdetails/redmotor' element={<Navigate to="/corporate/business-insurance/motor" replace />} />
          <Route path='/redproductdetails/engineer' element={<Navigate to="/corporate/business-insurance/engineering" replace />} />
          <Route path='/redproductdetails/marine' element={<Navigate to="/corporate/business-insurance/marine" replace />} />
          <Route path='/redcareers' element={<Navigate to="/corporate/careers" replace />} />
          <Route path='/redcontact' element={<Navigate to="/corporate/contact-us" replace />} />
          <Route path='/redinsights' element={<Navigate to="/corporate/insights" replace />} />
          <Route path='/reddetail/:id' element={<LegacyDetailRedirect base="/corporate/insights" />} />
          <Route path='/redservices' element={<Navigate to="/corporate/self-service" replace />} />
          <Route path='/redwhistle' element={<Navigate to="/corporate/whistle-blowing" replace />} />
          <Route path='/redoffices' element={<Navigate to="/corporate/our-offices" replace />} />
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      <Feedback showModal={showFeedbackModal} setShowModal={setShowFeedbackModal} />
      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        cookieName="Coronation Insurance Cookie"
        style={{ background: "#000000" }}
        buttonStyle={{ color: "#ffffff", backgroundColor: "#B580D1", fontSize: "16px" }}
        expires={150}
        acceptOnScroll={true}
        acceptOnScrollPercentage={50}
        enableDeclineButton
        flipButtons={true}
      >
        This website uses cookies to enhance the user experience.{" "}
        See our <a href="/privacy" className='text-[#B580D1]'>Privacy Policy</a> for more.
      </CookieConsent>

    </div>
  )
}

export default App
