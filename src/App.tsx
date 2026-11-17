import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/about/AboutUs'));
const FoundersMessage = lazy(() => import('./pages/about/FoundersMessage'));
const PrincipalMessage = lazy(() => import('./pages/about/PrincipalMessage'));
const AboutCollege = lazy(() => import('./pages/about/AboutCollege'));
const VisionMission = lazy(() => import('./pages/about/VisionMission'));
const Management = lazy(() => import('./pages/about/Management'));
const FacultyStaff = lazy(() => import('./pages/about/FacultyStaff'));

const Academics = lazy(() => import('./pages/academics/Academics'));
const FirstYearPU = lazy(() => import('./pages/academics/FirstYearPU'));
const SecondYearPU = lazy(() => import('./pages/academics/SecondYearPU'));

const Admission = lazy(() => import('./pages/admission/Admission'));
const FirstYearEligibility = lazy(() => import('./pages/admission/FirstYearEligibility'));
const SecondYearEligibility = lazy(() => import('./pages/admission/SecondYearEligibility'));

const Guidelines = lazy(() => import('./pages/sambhrams-corner/Guidelines'));
const AttendanceMonitoring = lazy(() => import('./pages/sambhrams-corner/AttendanceMonitoring'));
const RulesRegulations = lazy(() => import('./pages/sambhrams-corner/RulesRegulations'));
const Library = lazy(() => import('./pages/sambhrams-corner/Library'));

const Media = lazy(() => import('./pages/media/Media'));
const Gallery = lazy(() => import('./pages/media/Gallery'));
const Blogs = lazy(() => import('./pages/media/Blogs'));
const BlogDetails = lazy(() => import('./pages/media/BlogDetails'));
const Videos = lazy(() => import('./pages/media/Videos'));

const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="flex items-center gap-3 text-sm font-medium text-[#363789]">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#363789] border-t-transparent" />
        <span>Loading page...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />

              {/* About Us Routes */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/about/founders-message" element={<FoundersMessage />} />
              <Route path="/about/principal-message" element={<PrincipalMessage />} />
              <Route path="/about/college" element={<AboutCollege />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/management" element={<Management />} />
              <Route path="/about/faculty" element={<FacultyStaff />} />

              {/* Academics Routes */}
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/first-year-pu" element={<FirstYearPU />} />
              <Route path="/academics/second-year-pu" element={<SecondYearPU />} />

              {/* Admission Routes */}
              <Route path="/admission" element={<Admission />} />
              <Route path="/admission/first-year-eligibility" element={<FirstYearEligibility />} />
              <Route path="/admission/second-year-eligibility" element={<SecondYearEligibility />} />

              {/* Sambhram's Corner Routes */}
              <Route path="/sambhrams-corner/guidelines" element={<Guidelines />} />
              <Route path="/sambhrams-corner/attendance" element={<AttendanceMonitoring />} />
              <Route path="/sambhrams-corner/rules-regulations" element={<RulesRegulations />} />
              <Route path="/sambhrams-corner/library" element={<Library />} />

              {/* Media Routes */}
              <Route path="/media" element={<Media />} />
              <Route path="/media/gallery" element={<Gallery />} />
              <Route path="/media/blogs" element={<Blogs />} />
              <Route path="/media/blogs/:slug" element={<BlogDetails />} />
              <Route path="/media/videos" element={<Videos />} />

              {/* Contact & Legal Routes */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
