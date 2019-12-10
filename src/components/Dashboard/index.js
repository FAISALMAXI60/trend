import React from 'react';
import { Route } from 'react-router-dom';
import TopHeader from './TopHeader/TopHeader';
import NavBar from './navbar/navbar';
import FrontCrousel from './FrontCrousel/frontcrousel';
import Introduction from './Introduction/indroduction';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import NewsLetter from './Newsletter/newsletter';
import FeaturedProductsDetail from './FeaturedProductsDetail/FeaturedProductsDetail'
import PolicyDetails from './Policy Details/Policy-Details';
import Footer from './Footer/footer'
import FeaturedCollectionDetails from './FeaturedCollectionDetails/FeaturedCollectionDetails';
import AdminLogin from '../Account/Admin-login/admin-login';
import AdminPanel from '../Account/Admin-Panel/adminpanel';
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <NavBar />
        <Route exact path="/" render={() => {
          return <React.Fragment>
            <FrontCrousel />
            <Introduction />
            <FeaturedCollection />
            <FeaturedProducts />
            <NewsLetter />
            <PolicyDetails />
          </React.Fragment>
        }
        }
        />
        <Route
          path="/FeaturedProductsDetail"
          component={FeaturedProductsDetail}
        />
        <Route
          path="/FeaturedCollectionDetails"
          component={FeaturedCollectionDetails}
        />
          <Route
          path="/admin-trendsynergy"
          component={AdminLogin}
        />
          <Route
          path="/adminpanel"
          component={AdminPanel}
        />
        {/* <Route
          path="/Signup"
          component={Signup}
        /> */}
        {/* <Route
          path="/kids"
          component={Kids}
        />
        <Route
          path="/collection/:pid"
          component={Detail}
        />
         <Route
          path="/womenCollection/:pid"
          component={WomenDetail}
        />
        <Route
          path="/kidsCollection/:pid"
          component={KidsDetail}
        />
        <Route
          path="/contact-us"
          component={ContactUs}
        />
        <Route
          path="/about-us"
          component={AboutUs}
        />
        <Route
          path="/return-exchange"
          component={ExcPolicy}
        />
       
         <Route
          path="/cc"
          component={cc}
        />
        <Route
          path="/update/:proid"
          component={Update}
        />
         <Route
          path="/womenupdate/:wooid"
          component={UpdateWomen}
        />
        <Route
          path="/kidsupdate/:kidsid"
          component={UpdateKids}
        />
        <Route
          path="/subscriptionForm"
          component={subscriptionform}
        />
         <Route
          path="/checkout"
          component={Checkout}
        />
        <Route
          path="/search-data"
          component={Search}
        />
        <Route
          path="/search-data-details/:xid"
          component={SearchDetails}
        />
        <Footer /> */}
        <Footer />

      </div>
    )
  }
}

export default Dashboard;