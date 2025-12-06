import Auth from './Auth'
import SearchController from './SearchController'
import LandingController from './LandingController'
import NewsletterController from './NewsletterController'
import UploadImage from './UploadImage'
import PropertiesController from './PropertiesController'
import BlogController from './BlogController'
import HomeController from './HomeController'
import InboxController from './InboxController'
import TestimonialsController from './TestimonialsController'
import AgentController from './AgentController'
import LocationController from './LocationController'
import NotificationController from './NotificationController'
import FaqController from './FaqController'
import RepairController from './RepairController'
import SiteController from './SiteController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
SearchController: Object.assign(SearchController, SearchController),
LandingController: Object.assign(LandingController, LandingController),
NewsletterController: Object.assign(NewsletterController, NewsletterController),
UploadImage: Object.assign(UploadImage, UploadImage),
PropertiesController: Object.assign(PropertiesController, PropertiesController),
BlogController: Object.assign(BlogController, BlogController),
HomeController: Object.assign(HomeController, HomeController),
InboxController: Object.assign(InboxController, InboxController),
TestimonialsController: Object.assign(TestimonialsController, TestimonialsController),
AgentController: Object.assign(AgentController, AgentController),
LocationController: Object.assign(LocationController, LocationController),
NotificationController: Object.assign(NotificationController, NotificationController),
FaqController: Object.assign(FaqController, FaqController),
RepairController: Object.assign(RepairController, RepairController),
SiteController: Object.assign(SiteController, SiteController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers