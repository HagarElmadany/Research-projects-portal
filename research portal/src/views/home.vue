<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      app
      color="white"
      elevation="1"
      height="80"
    >
      <v-container class="d-flex align-center">
            <img src="@/assets/logo.png" alt="Logo" class="logo"  width="300px" height="auto"/>
        <v-spacer></v-spacer>

        <v-btn-group variant="text">
          <v-btn>Home</v-btn>
          <v-btn>Projects</v-btn>
          <v-btn>News</v-btn>
          <v-btn>About</v-btn>
          <v-btn>Contact</v-btn>
        </v-btn-group>

        <v-spacer></v-spacer>

        <div class="d-flex align-center ga-3">
          <v-btn class="login" variant="flat" size="small">Login</v-btn>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props" size="small">
                <v-icon>mdi-translate</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>English</v-list-item>
              <v-list-item>العربية</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- Hero Section -->
      <section class="hero-section">
        <v-container>
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" md="8" lg="6" class="text-center">
              <h1 class="display-1 font-weight-bold white--text mb-6">
                Empowering Research,<br>
                Driving Innovation
              </h1>
              <p class="text-h6 white--text mb-8 opacity-90">
                The SCU Research Portal provides a digital framework for researchers, students, administrators, and 
                institutions. Discover all opportunities, showcase your work, and increase the impact of scholarly work.
              </p>
              <div class="search-container mb-8">
                <v-text-field
                  v-model="searchQuery"
                  placeholder="Search for projects, researchers, or topics..."
                  variant="filled"
                  color="white"
                  class="search-field"
                  hide-details
                  single-line
                  append-inner-icon="mdi-magnify"
                  bg-color="white"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- About Section -->
      <section class="py-16">
        <v-container>
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-4">About the SCU Research Portal</h2>
            <p class="text-body-1 grey--text text--darken-1 mx-auto" style="max-width: 800px;">
              Committed to facilitating research on excellence, the SCU Research Portal provides a digital framework for 
              researchers, students, administrators, and institutions. Discover all opportunities, showcase projects and work, 
              and increase the impact of scholarly work. Our mission is empowering professors, scholars, a sustainable 
              environment, and industry the future of scholarly work.
            </p>
          </div>

          <v-row>
            <v-col cols="12" sm="6" md="3" v-for="feature in features" :key="feature.title">
              <div class="text-center">
                <v-avatar size="80" color="primary" class="mb-4">
                  <v-icon size="40" color="white">{{ feature.icon }}</v-icon>
                </v-avatar>
                <h4 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h4>
                <p class="text-body-2 grey--text">{{ feature.description }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Universities Section -->
      <section class="py-16 grey lighten-5">
        <v-container>
          <h2 class="text-h3 font-weight-bold text-center mb-12">Our Universities</h2>
          <v-row justify="center" align="center">
            <v-col cols="6" sm="4" md="2" v-for="university in universities" :key="university.name" class="text-center">
              <div class="university-logo-container mb-4">
                <v-img
                  :src="university.logo"
                  :alt="university.name"
                  max-width="120"
                  max-height="120"
                  class="mx-auto university-logo"
                />
              </div>
              <p class="text-caption font-weight-bold">{{ university.name }}</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Projects Section -->
      <section class="py-16">
        <v-container>
          <h2 class="text-h3 font-weight-bold text-center mb-12">Explore Public Research Projects</h2>
          <v-row>
            <v-col cols="12" md="4" v-for="project in projects" :key="project.id" class="mb-4">
              <v-card height="100%" class="project-card">
                <v-img
                  :src="project.image"
                  height="200"
                  cover
                />
                <v-card-title class="text-h6 font-weight-bold">
                  {{ project.title }}
                </v-card-title>
                <v-card-text>
                  <p class="text-body-2 grey--text text--darken-1">{{ project.description }}</p>
                  <div class="mt-3">
                    <v-chip size="small" color="primary" variant="outlined" class="me-2">{{ project.category }}</v-chip>
                    <v-chip size="small" color="success" variant="outlined">{{ project.status }}</v-chip>
                  </div>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn color="primary" variant="text">Learn More</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <div class="text-center mt-8">
            <v-btn color="primary" variant="outlined" size="large">View All Projects</v-btn>
          </div>
        </v-container>
      </section>

      <!-- Statistics Section -->
      <section class="py-16 primary">
        <v-container>
          <h2 class="text-h3 font-weight-bold text-center mb-12 white--text">Featured Statistics</h2>
          <v-row justify="center">
            <v-col cols="6" sm="3" v-for="stat in statistics" :key="stat.label" class="text-center">
              <div class="mb-4">
                <v-icon size="60" color="white" class="mb-2">{{ stat.icon }}</v-icon>
                <h3 class="text-h2 font-weight-bold white--text">{{ stat.value }}</h3>
                <p class="white--text text-body-1">{{ stat.label }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- News Section -->
      <section class="py-16">
        <v-container>
          <h2 class="text-h3 font-weight-bold text-center mb-12">Latest News</h2>
          <v-row>
            <v-col cols="12" md="4" v-for="news in latestNews" :key="news.id" class="mb-4">
              <v-card height="100%" class="news-card">
                <v-img
                  :src="news.image"
                  height="200"
                  cover
                />
                <v-card-title class="text-h6 font-weight-bold">
                  {{ news.title }}
                </v-card-title>
                <v-card-text>
                  <p class="text-body-2 grey--text text--darken-1">{{ news.summary }}</p>
                  <div class="mt-2">
                    <v-chip size="small" color="grey" variant="text">{{ news.date }}</v-chip>
                  </div>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn color="primary" variant="text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Council Members Section -->
      <section class="py-16 grey lighten-5">
        <v-container>
          <h2 class="text-h3 font-weight-bold text-center mb-12">The Supreme Council Members</h2>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" v-for="member in councilMembers" :key="member.id" class="text-center mb-8">
              <v-avatar size="120" class="mb-4">
                <v-img :src="member.image" />
              </v-avatar>
              <h4 class="text-h6 font-weight-bold">{{ member.name }}</h4>
              <p class="text-body-2 grey--text">{{ member.position }}</p>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>

    <!-- Footer -->
    <v-footer color="primary" class="white--text pa-8">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="d-flex align-center mb-4">
              <div>
                <div class="text-h6 font-weight-bold">Research Project Portal</div>
                <p class="text-body-2 mb-0">Connecting research and innovation</p>
              </div>
            </div>
            <p class="text-body-2">
              Empowering researchers and driving innovation through collaborative research projects and academic excellence.
            </p>
          </v-col>
          <v-col cols="12" md="2">
            <h6 class="text-h6 font-weight-bold mb-4">About</h6>
            <div class="d-flex flex-column ga-2">
              <a href="#" class="text-decoration-none white--text text-body-2">About Us</a>
              <a href="#" class="text-decoration-none white--text text-body-2">Our Mission</a>
              <a href="#" class="text-decoration-none white--text text-body-2">Team</a>
              <a href="#" class="text-decoration-none white--text text-body-2">Careers</a>
            </div>
          </v-col>
          <v-col cols="12" md="2">
            <h6 class="text-h6 font-weight-bold mb-4">Resources</h6>
            <div class="d-flex flex-column ga-2">
              <a href="#" class="text-decoration-none white--text text-body-2">Documentation</a>
              <a href="#" class="text-decoration-none white--text text-body-2">Help Center</a>
              <a href="#" class="text-decoration-none white--text text-body-2">Privacy Policy</a>
              <a href="#" class="text-decoration-none white--text text-body-2">Terms of Service</a>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <h6 class="text-h6 font-weight-bold mb-4">Contact Information</h6>
            <div class="d-flex flex-column ga-2">
              <div class="d-flex align-center">
                <v-icon class="me-2" size="small">mdi-email</v-icon>
                <span class="text-body-2">info@research-portal.edu</span>
              </div>
              <div class="d-flex align-center">
                <v-icon class="me-2" size="small">mdi-phone</v-icon>
                <span class="text-body-2">+1 (555) 123-4567</span>
              </div>
              <div class="d-flex align-center">
                <v-icon class="me-2" size="small">mdi-map-marker</v-icon>
                <span class="text-body-2">University Campus, Academic Building</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <div class="text-center">
          <p class="text-body-2 mb-4">&copy; 2024 Research Portal. All rights reserved.</p>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ResearchPortalLanding',
  setup() {
    const searchQuery = ref('')

    const features = [
      {
        icon: 'mdi-folder-outline',
        title: 'Project Submissions',
        description: 'Submit and track your research projects with ease through our comprehensive submission system.'
      },
      {
        icon: 'mdi-chart-line',
        title: 'Funding Management',
        description: 'Manage funding applications and track budget allocations for all your research initiatives.'
      },
      {
        icon: 'mdi-eye-outline',
        title: 'Research Output Tracking',
        description: 'Monitor and measure the impact of your research through detailed analytics and reporting.'
      },
      {
        icon: 'mdi-database-outline',
        title: 'Repository of Analytics',
        description: 'Access comprehensive data analytics and insights from research databases and repositories.'
      }
    ]

    const universities = [
      {
        name: 'ALEXANDRIA',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMDA3OUMxIi8+CjxzdmcgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0zMCAxMEwxMCAzMFY1MEwzMCAzMEg1MEwzMCAxMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
      },
      {
        name: 'MENOUFIA',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjRkY5ODAwIi8+CjxzdmcgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0zMCAxMEwyMCAyMEgyMFYzMEgzMFYyMEg0MFYzMEg1MFYyMEw0MCAx MEgzMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
      },
      {
        name: 'SCU',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMDA5NjU5Ii8+CjxzdmcgeD0iMjAiIHk9IjIwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik00MCAyMEwyMCA0MFY2MEw0MCA0MEg2MEw0MCAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
      },
      {
        name: 'CAIRO',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjODQxQzQwIi8+CjxzdmcgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0zMCAyMEwyMCAzMFY0MEwzMCAzMEg0MEwzMCAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
      },
      {
        name: 'SUEZ',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMDA3OUMxIi8+CjxzdmcgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0zMCAyMEwyNSAyNVYzNUwzMCAzMEg0MFYyNUgzNVYyMEgzMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
      }
    ]

    const projects = [
      {
        id: 1,
        title: 'Sustainable Urban Development Initiative',
        description: 'Exploring innovative approaches to sustainable urban planning and development in growing metropolitan areas.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDI4NUY0Ii8+CjxzdmcgeD0iMTYwIiB5PSI3MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgODAgNjAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTAgNTBIMjBWMzBIMzBWNTBINDBWMjBINTBWNTBINjBWMTBINzBWNTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4KPC9zdmc+',
        category: 'Urban Planning',
        status: 'Active'
      },
      {
        id: 2,
        title: 'Advanced Materials for Renewable Energy',
        description: 'Research into new materials and technologies for improving renewable energy efficiency and sustainability.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA5NjU5Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMjAwIDYwVjE0MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xNjAgMTAwSDE2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=',
        category: 'Energy',
        status: 'Completed'
      },
      {
        id: 3,
        title: 'Preserving Ancient Egyptian Heritage through Technology',
        description: 'Using cutting-edge digital preservation techniques to document and protect Egypt\'s archaeological treasures.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi0vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIi8+Cjxwb2x5Z29uIHBvaW50cz0iMjAwLDUwIDI1MCwxNTAgMTUwLDE1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxyZWN0IHg9IjE4MCIgeT0iMTMwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
        category: 'Heritage',
        status: 'Active'
      },
      {
        id: 4,
        title: 'Quantum Computing for Drug Discovery',
        description: 'Leveraging quantum computing algorithms to accelerate pharmaceutical research and drug development processes.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjODQxQzQwIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjgwIiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEyMCIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iMTY1IiB5MT0iODAiIHgyPSIyMzUiIHkyPSIxMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K',
        category: 'Healthcare',
        status: 'Active'
      },
      {
        id: 5,
        title: 'Economic Digitization for Personalized Medicine',
        description: 'Developing economic models and digital frameworks to make personalized medicine more accessible and cost-effective.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA3OUMxIi8+CjxwYXRoIGQ9Ik0xMDAgMTUwTDE1MCA2MEwyMDAgMTIwTDI1MCA4MEwzMDAgMTQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTUwIiByPSI1IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSI2MCIgcj0iNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTIwIiByPSI1IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSI4MCIgcj0iNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMzAwIiBjeT0iMTQwIiByPSI1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
        category: 'Digital Health',
        status: 'Active'
      },
      {
        id: 6,
        title: 'Impact of Climate Change on Agricultural Yields',
        description: 'Comprehensive analysis of how climate change affects crop production and developing adaptive farming strategies.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDI4NUY0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjYwIiByPSIyMCIgZmlsbD0iI0ZGRDcwMCIvPgo8cGF0aCBkPSJNODAgMTgwUTEyMCAxNjAgMTgwIDE3MFEyNDAgMTgwIDI4MCAyMDBRMzIwIDIyMCAzNjAgMTgwIiBzdHJva2U9IiMwMDk2NTkiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPgo8cmVjdCB4PSIxNDAiIHk9IjE0MCIgd2lkdGg9IjQiIGhlaWdodD0iNDAiIGZpbGw9IiMwMDk2NTkiLz4KPGNpcmNsZSBjeD0iMTQyIiBjeT0iMTMwIiByPSIxMCIgZmlsbD0iIzAwOTY1OSIvPgo8L3N2Zz4K',
        category: 'Agriculture',
        status: 'Completed'
      }
    ]

    const statistics = [
      {
        icon: 'mdi-flask-outline',
        value: '450+',
        label: 'Ongoing Projects'
      },
      {
        icon: 'mdi-school-outline',
        value: '50+',
        label: 'Participating Universities'
      },
      {
        icon: 'mdi-currency-usd',
        value: '$150M',
        label: 'Total Funding Secured'
      },
      {
        icon: 'mdi-file-document-outline',
        value: '1,200+',
        label: 'Published Papers'
      }
    ]

    const latestNews = [
      {
        id: 1,
        title: 'New Funding Opportunities Announced for 2024',
        summary: 'The government has announced additional research funding opportunities for universities and research institutions.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDI4NUY0Ii8+CjxyZWN0IHg9IjEwMCIgeT0iNjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8bGluZSB4MT0iMTIwIiB5MT0iODAiIHgyPSIyODAiIHkyPSI4MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxsaW5lIHgxPSIxMjAiIHkxPSIxMDAiIHgyPSIyODAiIHkyPSIxMDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iMTIwIiB5MT0iMTIwIiB4Mj0iMjQwIiB5Mj0iMTIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+',
        date: 'Dec 15, 2024'
      },
      {
        id: 2,
        title: 'SCU Hosts Annual Research Symposium',
        summary: 'Leading researchers from across the region gathered to share their latest findings and collaborative opportunities.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA5NjU5Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIxMDAiIHI9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMDAiIHI9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
        date: 'Dec 10, 2024'
      },
      {
        id: 3,
        title: 'Breakthrough in Renewable Energy Research',
        summary: 'Research team achieves significant milestone in solar panel efficiency, potentially revolutionizing clean energy adoption.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0ZGRDcwMCIvPgo8cGF0aCBkPSJNMjAwIDUwTDE5MCA2MEwyMTAgNjBaIiBmaWxsPSIjRkZENzAwIi8+CjxwYXRoIGQ9Ik0yMDAgMTEwTDE5MCAxMDBMMjEwIDEwMFoiIGZpbGw9IiNGRkQ3MDAiLz4KPHBhdGggZD0iTTE3MCA4MEwxODAgOTBMMTgwIDcwWiIgZmlsbD0iI0ZGRDcwMCIvPgo8cGF0aCBkPSJNMjMwIDgwTDIyMCA5MEwyMjAgNzBaIiBmaWxsPSIjRkZENzAwIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTQwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDA3OUMxIi8+Cjwvc3ZnPg==',
        date: 'Dec 8, 2024'
      }
    ]

    const councilMembers = [
      {
        id: 1,
        name: 'Dr. Yasser Gaber',
        position: 'Chairman of Research Council',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjRUU3Qzk0Ii8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDUiIHI9IjE4IiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0zMCA5MEMzMCA3OCA0NCU4IDYwIDc4Uzg5IDc4IDkwIDkwVjEyMEgzMFY5MFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+'
      },
      {
        id: 2,
        name: 'Prof. Samir El-Adly',
        position: 'Vice Chairman for Research',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjQTE4N0ZGIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDUiIHI9IjE4IiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0zMCA5MEMzMCA3OCA0NCA3OCA2MCA3OFM5MCA3OCA5MCA5MFYxMjBIMzBWOTBaIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPg=='
      },
      {
        id: 3,
        name: 'Dr. Huda Marafi',
        position: 'Director of Academic Programs',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjNzFEOEUwIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDUiIHI9IjE4IiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0zMCA5MEMzMCA3OCA0NCA3OCA2MCA3OFM5MCA3OCA5MCA5MFYxMjBIMzBWOTBaIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPg=='
      }
    ]

    return {
      searchQuery,
      features,
      universities,
      projects,
      statistics,
      latestNews,
      councilMembers
    }
  }
})
</script>

<style scoped>

.login{
    background: linear-gradient(90deg, #396FC8, #37c8b2);
    color: white !important;
    font-weight: bold;
}
.login:hover {
  opacity: 0.9;
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxNjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjODQxQzQwIi8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjQUE1NTY2IiBvcGFjaXR5PSIwLjMiLz4KPHJlY3QgeD0iMjAwIiB5PSIxNTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjQUE1NTY2IiBvcGFjaXR5PSIwLjMiLz4KPHJlY3QgeD0iMzUwIiB5PSI4MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9IiNBQTU1NjYiIG9wYWNpdHk9IjAuMyIvPgo8cmVjdCB4PSI1MDAiIHk9IjEyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIzODAiIGZpbGw9IiNBQTU1NjYiIG9wYWNpdHk9IjAuMyIvPgo8cmVjdCB4PSI2NTAiIHk9IjYwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ0MCIgZmlsbD0iI0FBNTU2NiIgb3BhY2l0eT0iMC4zIi8+CjxyZWN0IHg9IjgwMCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0FBNTU2NiIgb3BhY2l0eT0iMC4zIi8+CjxyZWN0IHg9Ijk1MCIgeT0iMTQwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjM2MCIgZmlsbD0iI0FBNTU2NiIgb3BhY2l0eT0iMC4zIi8+CjxyZWN0IHg9IjExMDAiIHk9IjkwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQxMCIgZmlsbD0iI0FBNTU2NiIgb3BhY2l0eT0iMC4zIi8+CjxyZWN0IHg9IjEyNTAiIHk9IjExMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIzOTAiIGZpbGw9IiNBQTU1NjYiIG9wYWNpdHk9IjAuMyIvPgo8cmVjdCB4PSIxNDAwIiB5PSIxNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMzQwIiBmaWxsPSIjQUE1NTY2IiBvcGFjaXR5PSIwLjMiLz4KPHJlY3QgeD0iMTUwMCIgeT0iMTMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjM3MCIgZmlsbD0iI0FBNTU2NiIgb3BhY2l0eT0iMC4zIi8+CjwKPC9zdmc+');
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-field :deep(.v-field) {
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.news-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.university-logo-container {
  transition: transform 0.3s ease;
}

.university-logo-container:hover {
  transform: scale(1.1);
}

.university-logo {
  transition: filter 0.3s ease;
}

.university-logo:hover {
  filter: brightness(1.1);
}
</style>