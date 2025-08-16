import { createRouter, createWebHistory } from 'vue-router'
import UniversityAdminLayout from '@/layouts/UniversityAdminLayout.vue'
import Addfaculty from '@/views/universityadmin/AddFaculty.vue'
import Dashboard from '@/views/universityadmin/Dashboard.vue'
import Projects from '@/views/universityadmin/Projects.vue'
import FundingOverview from '@/views/universityadmin/FundingOverview.vue'
import Home from '@/views/home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/university-admin',
    component: UniversityAdminLayout,
    children: [
      
        {
            path: 'dashboard',
            name: 'Dashboard',
            component:Dashboard,
            meta: { title: 'Dashboard' }

        },
        {
            path: 'faculty',
            name: 'Faculty',
            component: Addfaculty,
            meta: { title: 'Departments & Faculties' }
        },
        {
            path: 'projects',
            name: 'Projects',
            component: Projects,
            meta: { title: 'Projects' }
        },
        {
            path: 'funding',
            name: 'Funding',    
            component: FundingOverview,
            meta: { title: 'Funding Overview' }
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
