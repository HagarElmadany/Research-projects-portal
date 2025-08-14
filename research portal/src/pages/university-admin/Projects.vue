<template>
  <v-container>
    <h1>All Projects</h1>

    <!-- Search and Filter -->
    <v-text-field
      label="Search Projects"
      v-model="search"
      append-icon="mdi-magnify"
      class="mb-4"
    />

    <!-- Projects Table -->
    <v-data-table
      :headers="headers"
      :items="filteredProjects"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn size="small" icon color="primary" @click="editProject(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn size="small" icon color="red" @click="deleteProject(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      search: "",
      headers: [
        { text: "Project Title", value: "title" },
        { text: "Main Researcher", value: "researcher" },
        { text: "Start Date", value: "start_date" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      projects: [
        { title: "AI in Education", researcher: "Dr. Ahmed", start_date: "2024-05", status: "Ongoing" },
        { title: "Green Energy Solutions", researcher: "Prof. Mona", start_date: "2023-01", status: "Completed" }
      ]
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(p =>
        p.title.toLowerCase().includes(this.search.toLowerCase()) ||
        p.researcher.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    editProject(project) {
      console.log("Edit", project);
    },
    deleteProject(project) {
      console.log("Delete", project);
    }
  }
};
</script>
