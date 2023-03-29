import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FormPage from '../views/FormPage.vue';
import ConversationList from '../views/ConversationListComponent.vue';
import ContactsListView from '../views/ContactsListView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import GeneralSettingsView from '../views/GeneralSettingsView.vue';
import SignInView from '../views/SignInView.vue'
import ContactView from '../views/ContactView.vue'
import NewGroupView from '../views/NewGroupView.vue'

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
  {
    path: '/contacts-list',
    name: 'ContactsList',
    component: ContactsListView
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfileView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: GeneralSettingsView
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignInView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/new_group',
    name: 'NewGroup',
    component: NewGroupView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
