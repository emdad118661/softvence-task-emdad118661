import './App.css'
import Footer from './Sections/Footer'
import HeroSection from './Sections/HeroSection'
import InterestedWorkingWithUs from './Sections/InterestedWorkingWithUs'
import LoanProducts from './Sections/LoanProducts'
import Navbar from './Sections/Navbar'
import OtherResources from './Sections/OtherResources'
import PastProjects from './Sections/PastProjects'
import ReadyToStart from './Sections/ReadyToStart'
import Reviews from './Sections/Reviews'
import WhereWeLend from './Sections/WhereWeLend'
import WhyChooseUs from './Sections/WhyChooseUs'


function App() {

  return (
    <>
      <div className='overflow-x-hidden font-sans'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <LoanProducts></LoanProducts>
        <WhereWeLend></WhereWeLend>
        <WhyChooseUs></WhyChooseUs>
        <Reviews></Reviews>
        <PastProjects></PastProjects>
        <InterestedWorkingWithUs></InterestedWorkingWithUs>
        <OtherResources></OtherResources>
        <ReadyToStart></ReadyToStart>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
