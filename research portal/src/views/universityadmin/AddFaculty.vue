<template>
  <v-container fluid>
    <!-- Header -->
    <v-row align="center" justify="space-between" class="mb-4">
      <h2>Departments & Faculties</h2>
      </v-row>
      <v-row justify="center">
        <v-btn class="gradient-btn" @click="openDialog()">
            <v-icon start>mdi-plus</v-icon>
            Add faculty
        </v-btn>
    </v-row>


    <!-- Search -->
        <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search projects ,faculty....."
        variant="outlined"
        flat
        hide-details
        single-line
        density="compact"
        class="mb-4 search-input"
        ></v-text-field>



    <!-- Table -->
    <v-data-table
    :headers="headers"
    :items="paginatedItems"
    :items-per-page="itemsPerPage"
    class="elevation-1 striped-table"
    >
    <template v-slot:item.departments="{ item }">
        <div>
        <v-chip
            v-for="(dep, i) in item.departments"
            :key="i"
            class="ma-1"
            :color="i % 2 === 0 ? 'secondary' : 'orange'"
            small
        >
            {{ dep }}
        </v-chip>
        </div>
    </template>

    <template v-slot:item.actions="{ item }">
        <v-btn small color="primary" @click="openDialog(item)">
        <v-icon start>mdi-pencil</v-icon>Edit
        </v-btn>
        <v-btn small color="error" class="ml-2" @click="deleteFaculty(item)">
        <v-icon start>mdi-delete</v-icon>Delete
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

    <!-- Dialog -->
    <v-dialog v-model="showDialog" max-width="600">
      <v-card>
        <v-card-title class="blue--text text-h5 font-weight-bold">
          {{ editMode ? 'Edit faculty' : 'Add faculty' }}
        </v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="6">
              <v-select
                label="Faculty Name"
                :items="facultyNames"
                v-model="form.facultyName"
                variant="outlined"
                density="compact"
                class="small-input"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                label="University"
                :items="universities"
                v-model="form.university"
                variant="outlined"
                density="compact"
                class="small-input"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Contact Email"
                v-model="form.email"
                variant="outlined"
                density="compact"
                class="small-input"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Contact phone"
                v-model="form.phone"
                variant="outlined"
                density="compact"
                class="small-input"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Website URL"
                v-model="form.website"
                variant="outlined"
                density="compact"
                class="small-input"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="form.departments"
                :items="departmentsList"
                label="Select departments"
                multiple
                chips
                variant="outlined"
                density="compact"
                class="small-input"
                ></v-combobox>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="cancelbtn" text @click="closeDialog">Cancel</v-btn>
          <v-btn class="gradient-btn" color="primary" @click="saveFaculty">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "DepartmentsFaculties",
  data() {
    return {
      search: "",
      showDialog: false,
      editMode: false,
      itemsPerPage: 5,
      page: 1,
      headers: [
        { text: "Faculty Name", value: "facultyName" },
        { text: "University", value: "university" },
        { text: "Contact phone", value: "phone" },
        { text: "Departments", value: "departments" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      faculties: [
        {
          facultyName: "Engineering",
          university: "Mansoura",
          phone: "(414) 511-7268",
          departments: ["Computer", "Electrical"],
        },
        {
          facultyName: "Medicine",
          university: "Mansoura",
          phone: "(929) 617-0714",
          departments: ["New tag"],
        },
        {
          facultyName: "Science",
          university: "Cairo",
          phone: "(929) 777-1234",
          departments: ["Physics", "Chemistry"],
        },
        {
          facultyName: "Arts",
          university: "Alexandria",
          phone: "(929) 111-5555",
          departments: ["History", "Philosophy"],
        },
      ],
      facultyNames: ["Engineering", "Medicine", "Arts", "Computer Science"],
      universities: ["Mansoura", "Cairo", "Alexandria"],
      departmentsList: ["Computer", "Math", "Physics", "Chemistry"],
      form: {
        facultyName: "",
        university: "",
        email: "",
        phone: "",
        website: "",
        departments: [],
      },
    };
  },
  computed: {
    filteredFaculties() {
      if (!this.search) return this.faculties;
      return this.faculties.filter((f) =>
        f.facultyName.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    paginatedItems() {
      const start = (this.page - 1) * this.itemsPerPage;
      return this.filteredFaculties.slice(start, start + this.itemsPerPage);
    },
    pageCount() {
      return Math.ceil(this.filteredFaculties.length / this.itemsPerPage);
    },
  },
  methods: {
    openDialog(item = null) {
      if (item) {
        this.editMode = true;
        this.form = { ...item };
      } else {
        this.editMode = false;
        this.form = {
          facultyName: "",
          university: "",
          email: "",
          phone: "",
          website: "",
          departments: [],
        };
      }
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    saveFaculty() {
      if (this.editMode) {
        const index = this.faculties.findIndex(
          (f) => f.facultyName === this.form.facultyName
        );
        if (index !== -1) this.faculties[index] = { ...this.form };
      } else {
        this.faculties.push({ ...this.form });
      }
      this.closeDialog();
    },
    deleteFaculty(item) {
      this.faculties = this.faculties.filter((f) => f !== item);
    },
  },
};
</script>

<style scoped>

.v-data-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.v-data-table thead th {
  background-color: #f1f4f9;
  font-weight: bold;
  color: #333;
}

.gradient-btn {
  background: linear-gradient(90deg, #396FC8, #37c8b2);
  color: white !important;
  font-weight: bold;
}
.gradient-btn:hover {
  opacity: 0.9;
}

.search-input {
  margin-top: 50px ;
}
.search-input .v-field {
  background-color: white !important;
  border-radius: 8px; 
}


.v-card-actions .cancelbtn {
    color: #396FC8;
    border: 1px solid transparent;
    background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(90deg, #396FC8, #37c8b2) border-box;
}

.cancelbtn:hover {
  background:
    linear-gradient(#f7fbff, #f7fbff) padding-box,
    linear-gradient(90deg, #396FC8, #37c8b2) border-box;
}

.v-card-title{
    font-weight: bold;
    color: #396FC8;
    font-size: 20px;
    margin: 10px 10px 0 10px;
}
.v-card-actions{
    margin: 0 15px 10px 15px;
}



</style>
