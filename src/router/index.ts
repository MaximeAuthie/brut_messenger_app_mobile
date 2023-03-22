import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FormPage from '../views/FormPage.vue';
import ConversationList from '../components/ConversationListComponent.vue';
import ContactsList from '../components/ContactsListComponent.vue';
import UserProfile from '../components/UserProfileComponent.vue';
import Settings from '../components/SettingsComponent.vue';
import SignIn from '../components/SignInComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: HomePage
  // },

  // {
  //   path: '/conversation-list',
  //   name: 'ConversationList',
  //   component: ConversationList
  // },
  // {
  //   path: '/contacts-list',
  //   name: 'ContactsList',
  //   component: ContactsList
  // },
  // {
  //   path: '/user-profile',
  //   name: 'UserProfile',
  //   component: UserProfile
  // },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: Settings
  // },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
