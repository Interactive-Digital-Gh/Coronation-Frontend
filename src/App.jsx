import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import PurpleHome from './pages/PurpleHome'
import PurpleNavbar from './components/PurpleNavbar'
import Footer from './components/Footer'
import Feedback from './components/FeedBack'
import CookieConsent from "react-cookie-consent";
import { prefetchAllCms } from './lib/cmsCache'

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


// Old URL -> current URL. Covers the Sept 2026 scheme (/about-us, /personal-insurance, ...)
// and the original purple/red paths.
const legacyRedirects = {
  // Sept 2026 scheme
  '/about-us': '/individual/about',
  '/personal-insurance': '/individual/products',
  '/personal-insurance/motor': '/individual/products/motor',
  '/personal-insurance/travel': '/individual/products/travel',
  '/personal-insurance/home': '/individual/products/home',
  '/careers': '/individual/careers',
  '/contact-us': '/individual/contact',
  '/insights': '/individual/insights',
  '/self-service': '/individual/services',
  '/whistle-blowing': '/individual/whistleblowing',
  '/our-offices': '/individual/offices',
  '/corporate/about-us': '/corporate/about',
  '/corporate/business-insurance': '/corporate/products',
  '/corporate/business-insurance/motor': '/corporate/products/motor',
  '/corporate/business-insurance/engineering': '/corporate/products/engineering',
  '/corporate/business-insurance/marine': '/corporate/products/marine',
  '/corporate/contact-us': '/corporate/contact',
  '/corporate/self-service': '/corporate/services',
  '/corporate/whistle-blowing': '/corporate/whistleblowing',
  '/corporate/our-offices': '/corporate/offices',
  // Original purple/red scheme
  '/purpleabout': '/individual/about',
  '/purpleproduct': '/individual/products',
  '/purpleproductdetails': '/individual/products',
  '/purpleproductdetails/motor': '/individual/products/motor',
  '/purpleproductdetails/travel': '/individual/products/travel',
  '/purpleproductdetails/home': '/individual/products/home',
  '/purplecareers': '/individual/careers',
  '/purplecontact': '/individual/contact',
  '/purpleinsights': '/individual/insights',
  '/purpleservices': '/individual/services',
  '/purplewhistle': '/individual/whistleblowing',
  '/purpleoffices': '/individual/offices',
  '/redhome': '/corporate',
  '/redabout': '/corporate/about',
  '/redproduct': '/corporate/products',
  '/redproductdetails': '/corporate/products',
  '/redproductdetails/redmotor': '/corporate/products/motor',
  '/redproductdetails/engineer': '/corporate/products/engineering',
  '/redproductdetails/marine': '/corporate/products/marine',
  '/redinsights': '/corporate/insights',
  '/redcareers': '/corporate/careers',
  '/redcontact': '/corporate/contact',
  '/redservices': '/corporate/services',
  '/redwhistle': '/corporate/whistleblowing',
  '/redoffices': '/corporate/offices',
};

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


  // Warm the CMS cache in the background once the first page has settled,
  // so navigating to any other page is instant.
  useEffect(() => {
    const timer = setTimeout(prefetchAllCms, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <PurpleNavbar />
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* Individual (personal) section */}
          <Route path='/' element={<PurpleHome />} />
          <Route path='/individual/about' element={<PurpleAbout />} />
          <Route path='/individual/products' element={<PurpleProduct />} />
          <Route path='/individual/products/*' element={<PurpleProductDetails />} />
          <Route path='/individual/careers' element={<PurpleCareers />} />
          <Route path='/individual/contact' element={<PurpleContact />} />
          <Route path='/individual/insights' element={<PurpleInsights />} />
          <Route path='/individual/insights/:id' element={<DetailOne />} />
          <Route path='/individual/services' element={<PurpleService />} />
          <Route path='/individual/whistleblowing' element={<WhistleBlowing />} />
          <Route path='/individual/offices' element={<PurpleOffices />} />

          {/* Corporate section */}
          <Route path='/corporate' element={<RedHome />} />
          <Route path='/corporate/about' element={<RedAbout />} />
          <Route path='/corporate/products' element={<RedProduct />} />
          <Route path='/corporate/products/*' element={<RedProductDetails />} />
          <Route path='/corporate/careers' element={<RedCareers />} />
          <Route path='/corporate/contact' element={<RedContact />} />
          <Route path='/corporate/insights' element={<RedInsights />} />
          <Route path='/corporate/insights/:id' element={<RedDetailOne />} />
          <Route path='/corporate/services' element={<RedService />} />
          <Route path='/corporate/whistleblowing' element={<RedWhistleBlowing />} />
          <Route path='/corporate/offices' element={<RedOffices />} />

          <Route path="/privacy" element={<Privacy />} />

          {/* SEO-optimised dedicated product landing pages (theme follows section) */}
          <Route path="/motor-insurance-ghana" element={<MotorInsuranceGhana />} />
          <Route path="/marine-insurance-ghana" element={<MarineInsuranceGhana />} />
          <Route path="/business-protection-insurance" element={<BusinessProtectionInsurance />} />
          <Route path="/corporate/motor-insurance-ghana" element={<MotorInsuranceGhana />} />
          <Route path="/corporate/marine-insurance-ghana" element={<MarineInsuranceGhana />} />
          <Route path="/corporate/business-protection-insurance" element={<BusinessProtectionInsurance />} />

          {/* Redirects from every earlier URL scheme, so bookmarks, CMS links and indexed pages keep working */}
          {Object.entries(legacyRedirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path='/insights/:id' element={<LegacyDetailRedirect base="/individual/insights" />} />
          <Route path='/purpledetail/:id' element={<LegacyDetailRedirect base="/individual/insights" />} />
          <Route path='/reddetail/:id' element={<LegacyDetailRedirect base="/corporate/insights" />} />
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
