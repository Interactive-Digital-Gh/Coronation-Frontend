import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import PurpleHome from './pages/PurpleHome'
import PurpleNavbar from './components/PurpleNavbar'
import RedHome from './pages/RedHome'
import PurpleAbout from './pages/PurpleAbout'
import Footer from './components/Footer'
import PurpleProduct from './pages/PurpleProduct'
import PurpleProductDetails from './pages/PurpleProductDetails'
import PurpleCareers from './pages/PurpleCareers'
import PurpleContact from './pages/PurpleContact'
import PurpleInsights from './pages/PurpleInsights'
import DetailOne from './components/DetailOne'
import PurpleService from './pages/PurpleService'
import WhistleBlowing from './pages/WhistleBlowing'
import RedAbout from './pages/RedAbout'
import RedProduct from './pages/RedProduct'
import RedInsights from './pages/RedInsights'
import RedDetailOne from './components/RedDetailOne'
import RedCareers from './pages/RedCareers'
import RedContact from './pages/RedContact'
import RedService from './pages/RedService'
import RedProductDetails from './pages/RedProductDetails'
import Feedback from './components/FeedBack'
import { useEffect, useState } from 'react'
import CookieConsent from "react-cookie-consent";
import Privacy from './pages/Privacy'
import RedWhistleBlowing from './pages/RedWhistleBlowing'
import PurpleOffices from './pages/PurpleOffices'
import RedOffices from './pages/RedOffices'
import RouteSeo from './components/Seo'
import { prefetchAllCms } from './lib/cmsCache'
import MotorInsuranceGhana from './pages/MotorInsuranceGhana'
import MarineInsuranceGhana from './pages/MarineInsuranceGhana'
import BusinessProtectionInsurance from './pages/BusinessProtectionInsurance'



const legacyRedirects = {
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
  '/reddetail': '/corporate/insights',
  '/redcareers': '/corporate/careers',
  '/redcontact': '/corporate/contact',
  '/redservices': '/corporate/services',
  '/redwhistle': '/corporate/whistleblowing',
  '/redoffices': '/corporate/offices',
};

// Redirects /purpledetail/:id and /reddetail/:id while keeping the article id
const LegacyDetailRedirect = ({ to }) => {
  const { id } = useParams();
  return <Navigate to={`${to}/${id}`} replace />;
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
        <RouteSeo />
        <PurpleNavbar />
        <Routes>
          {/* Dedicated SEO product landing pages */}
          <Route path='/motor-insurance-ghana' element={<MotorInsuranceGhana />} />
          <Route path='/marine-insurance-ghana' element={<MarineInsuranceGhana />} />
          <Route path='/business-protection-insurance' element={<BusinessProtectionInsurance />} />

          {/* Individual (was "purple") */}
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

          {/* Corporate (was "red") */}
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

          <Route path='/privacy' element={<Privacy />} />

          {/* Redirects from the old purple/red URLs so indexed and bookmarked links keep working */}
          {Object.entries(legacyRedirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path='/purpledetail/:id' element={<LegacyDetailRedirect to='/individual/insights' />} />
          <Route path='/reddetail/:id' element={<LegacyDetailRedirect to='/corporate/insights' />} />
        </Routes>
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
