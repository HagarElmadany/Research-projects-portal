<template>
  <v-container fluid>
    <h1 class="mb-4">All Projects</h1>

    <!-- Search and Filter -->
    <v-row class="mb-4 search-filters" align="center">
      <v-col cols="12" sm="2">
        <v-text-field v-model="filters.researcher" label="Researcher name .." density="compact" variant="outlined" hide-details class="white-field"/>
      </v-col>

      <v-col cols="12" sm="2">
        <v-text-field v-model="filters.projectTitle" label="Project Title" density="compact" variant="outlined" hide-details class="white-field"/>
      </v-col>

      <v-col cols="12" sm="2">
        <v-select v-model="filters.projectSource" :items="sources" label="Project Source" density="compact" variant="outlined" hide-details class="white-field"/>
      </v-col>

      <v-col cols="12" sm="2">
        <v-select v-model="filters.status" :items="statusList" label="Project Status" density="compact" variant="outlined" hide-details class="white-field"/>
      </v-col>

      <v-col cols="12" sm="2">
        <v-select v-model="filters.researcherType" :items="researcherTypes" label="Researcher Type" density="compact" variant="outlined" hide-details class="white-field"/>
      </v-col>

      <v-col cols="12" sm="2">
        <v-btn class="gradient-btn" block @click="applySearch">
          <v-icon start>mdi-magnify</v-icon>
          Search
        </v-btn>
      </v-col>
    </v-row>

    <!-- Projects Table -->
    <v-data-table :headers="headers" :items="filteredProjects" class="elevation-1 project-table" density="comfortable">
      <template v-slot:item.actions="{ item }">
        <v-btn size="small" variant="outlined" color="primary" class="me-1" @click="openDialog(item)">
          <v-icon start>mdi-pencil</v-icon> Edit
        </v-btn>
        <v-btn size="small" variant="outlined" color="error" @click="deleteProject(item)">
          <v-icon start>mdi-delete</v-icon> Delete
        </v-btn>
      </template>
    </v-data-table>

     <!-- Pagination -->
    <v-pagination
      v-model="page"
      :length="pageCount"
      total-visible="10"
      class="mt-4"
    ></v-pagination>

    <!-- Add Project Button -->
    <div class="text-center mt-4">
      <v-btn class="gradient-btn" @click="openDialog()">
        <v-icon start>mdi-plus</v-icon>
        Add Project
      </v-btn>
    </div>

    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="600">
    <v-card class="dialog-card">
        <v-card-title class="blue--text text-h5 font-weight-bold">
        {{ isEdit ? 'Edit Project' : 'Add Project' }}
        </v-card-title>
        <v-card-text>
            <v-row>
            <v-col cols="12" sm="6">
                <v-text-field v-model="form.title" label="Project Title"
                density="compact"
                variant="outlined" 
                class="small-input"/>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field v-model="form.researcher" label="Main Researcher" 
                variant="outlined"
                density="compact"
                class="small-input"/>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select v-model="form.source" :items="sources" label="Funding source" 
                variant="outlined"
                density="compact"
                class="small-input"
                />
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field v-model="form.amount" label="Funding Amount"
                variant="outlined"
                density="compact"
                class="small-input"/>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select v-model="form.status" :items="statusList" label="Status" variant="outlined"
                density="compact"
                class="small-input" />
            </v-col>
            <v-col cols="12" sm="6">
                <v-select v-model="form.researcherType" :items="researcherTypes" label="Researcher Type" 
                variant="outlined"
                density="compact"
                class="small-input"/>
            </v-col>
            <v-col cols="12" sm="6">
                <v-menu
                    v-model="startDateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                    <template #activator="{ props }">
                    <v-text-field
                        v-bind="props"
                        v-model="form.start_date"
                        label="Start Date"
                        variant="outlined"
                        density="compact"
                        readonly
                        class="small-input"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="form.start_date"
                    @update:model-value="startDateMenu = false"
                    ></v-date-picker>
                </v-menu>
                </v-col>

            </v-row>
        </v-card-text>
        <v-card-actions>
        <v-btn class="cancel-btn" @click="dialog = false">Cancel</v-btn>
        <v-btn class="gradient-btn" @click="saveProject">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
        dialog: false,
        isEdit: false,
        startDateMenu: false,
        editIndex: null,
        itemsPerPage: 5,
        page: 1,
        form: {
            title: "",
            researcher: "",
            source: "",
            amount: "",
            status: "",
            researcherType: "",
            start_date: ""
      },
      filters: {
        researcher: "",
        projectTitle: "",
        projectSource: "",
        status: "",
        researcherType: "",
      },
      sources: ["MindGo", "Blue Chip", "GearSense"],
      statusList: ["Ongoing", "Completed", "Suspended"],
      researcherTypes: ["Junior", "Postgraduate Student"],
      headers: [
        { text: "Main Researcher", value: "researcher" },
        { text: "Project start", value: "start_date" },
        { text: "Project Title / Description", value: "title" },
        { text: "Funding source", value: "source" },
        { text: "Funding Amount", value: "amount" },
        { text: "Project Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      projects: [
        { title: "AI in Education", researcher: "Dr. Ahmed", start_date: "2024-05", status: "Ongoing", source: "MindGo", amount: "$78", researcherType: "Junior" },
        { title: "Green Energy Solutions", researcher: "Prof. Mona", start_date: "2023-01", status: "Completed", source: "Blue Chip", amount: "$28", researcherType: "Postgraduate Student" }
      ],
      filteredProjects: []
    };
  },
  mounted() {
    this.filteredProjects = this.projects;
  },
  methods: {
    applySearch() {
      this.filteredProjects = this.projects.filter((p) => {
        return (
          (!this.filters.researcher || p.researcher.toLowerCase().includes(this.filters.researcher.toLowerCase())) &&
          (!this.filters.projectTitle || p.title.toLowerCase().includes(this.filters.projectTitle.toLowerCase())) &&
          (!this.filters.projectSource || p.source === this.filters.projectSource) &&
          (!this.filters.status || p.status === this.filters.status) &&
          (!this.filters.researcherType || p.researcherType === this.filters.researcherType)
        );
      });
    },
    openDialog(project) {
      if (project) {
        this.isEdit = true;
        this.editIndex = this.projects.indexOf(project);
        this.form = { ...project };
      } else {
        this.isEdit = false;
        this.editIndex = null;
        this.form = { title: "", researcher: "", source: "", amount: "", status: "", researcherType: "", start_date: "" };
      }
      this.dialog = true;
    },
    saveProject() {
      if (this.isEdit && this.editIndex !== null) {
        this.projects.splice(this.editIndex, 1, { ...this.form });
      } else {
        this.projects.push({ ...this.form });
      }
      this.applySearch();
      this.dialog = false;
    },
    deleteProject(project) {
      if (confirm(`Are you sure you want to delete ${project.title}?`)) {
        this.projects = this.projects.filter((p) => p !== project);
        this.applySearch();
      }
    }
  }
};
</script>

<style scoped>


.v-card-title{
    font-weight: bold;
    color: #396FC8;
    font-size: 20px;
    margin: 10px 10px 0 10px;
}
.v-card-actions{
    margin: 0 20px 10px 15px;
}
.gradient-btn {
  background: linear-gradient(90deg, #396FC8, #37c8b2);
  color: white !important;
  font-weight: bold;
  border-radius: 8px;
}

.cancel-btn {
 color: #396FC8;
    border: 1px solid transparent;
    background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(90deg, #396FC8, #37c8b2) border-box;
}



</style>

