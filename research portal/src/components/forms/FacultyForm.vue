<template>
  <v-card outlined>
    <v-card-title>Add Faculty & Departments</v-card-title>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="submitForm">
        <!-- Faculty Info -->
        <v-text-field label="Faculty Name" v-model="faculty.name" required></v-text-field>
        <v-text-field label="Faculty Code" v-model="faculty.code"></v-text-field>
        <v-textarea label="Description" v-model="faculty.description"></v-textarea>

        <!-- Departments Multi-select -->
        <v-select
          label="Departments"
          v-model="faculty.departments"
          :items="departmentOptions"
          multiple
          chips
        ></v-select>

        <v-btn type="submit" color="primary" class="mt-4">Save</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const faculty = ref({
  name: '',
  code: '',
  description: '',
  departments: []
})

const departmentOptions = [
  "Computer Science",
  "Physics",
  "Chemistry",
  "Mechanical Engineering",
  "Medicine"
]

const submitForm = () => {
  console.log("Faculty Saved:", faculty.value)
}
</script>
