<template>
  <v-card outlined>
    <v-card-title>
      All Projects
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="showForm = true">Add Project</v-btn>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="projects"
      class="elevation-1"
    ></v-data-table>

    <!-- Add Project Dialog -->
    <v-dialog v-model="showForm" max-width="800px">
      <v-card>
        <v-card-title>Add New Project</v-card-title>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent="addProject">
            <v-text-field label="Project Title" v-model="newProject.title" required></v-text-field>
            <v-textarea label="Description" v-model="newProject.description"></v-textarea>
            <v-text-field label="Funding Source" v-model="newProject.funding"></v-text-field>
            <v-text-field label="Funding Amount" type="number" v-model="newProject.amount"></v-text-field>
            <v-select label="Status" :items="['Ongoing', 'Completed', 'Suspended']" v-model="newProject.status"></v-select>

            <v-btn type="submit" color="primary" class="mt-4">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  { text: "Title", value: "title" },
  { text: "Funding Source", value: "funding" },
  { text: "Amount", value: "amount" },
  { text: "Status", value: "status" }
]

const projects = ref([
  { title: "AI Research", funding: "SCU", amount: "200000", status: "Ongoing" },
  { title: "Medical Study", funding: "WHO", amount: "500000", status: "Completed" }
])

const showForm = ref(false)
const valid = ref(false)
const newProject = ref({
  title: '',
  description: '',
  funding: '',
  amount: '',
  status: ''
})

const addProject = () => {
  projects.value.push({ ...newProject.value })
  showForm.value = false
}
</script>
