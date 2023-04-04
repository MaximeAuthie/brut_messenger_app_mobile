import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ConversationListView from '../views/ConversationListView.vue';
import ContactsListView from '../views/ContactsListView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import GeneralSettingsView from '../views/GeneralSettingsView.vue';
import SignInView from '../views/SignInView.vue';
import ContactView from '../views/ContactView.vue';
import NewGroupView from '../views/NewGroupView.vue';
import NewConversationView from '../views/NewConversationView.vue';
import GroupInvitationView from '../views/GroupInvitationView.vue';
import ConversationSettingsView from '../views/ConversationSettingsView.vue';
import GroupSettingsView from '../views/GroupSettingsView.vue';
import MemberSettingsView from '../views/MemberSettingsView.vue';
import DeleteAccountView from '../views/DeleteAccountView.vue';
import ConversationView from '../views/ConversationView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/conversation-list',
    name: 'ConversationList',
    component: ConversationListView
  },
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
    path: '/general-settings',
    name: 'GeneralSettings',
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
    path: '/new-group',
    name: 'NewGroup',
    component: NewGroupView
  },
  {
    path: '/new-conversation',
    name: 'NewConversation',
    component: NewConversationView
  },
  {
    path: '/group-invitation',
    name: 'GroupInvitation',
    component: GroupInvitationView
  },
  {
    path: '/conversation-settings',
    name: 'ConversationSettings',
    component: ConversationSettingsView
  },
  {
    path: '/group-settings',
    name: 'GroupSettings',
    component: GroupSettingsView
  },
  {
    path: '/member-settings',
    name: 'MemberSettings',
    component: MemberSettingsView
  },
  {
    path: '/delete-account',
    name: 'DeleteAccount',
    component: DeleteAccountView
  },
  {
    path: '/conversation',
    name: 'Conversation',
    component: ConversationView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
