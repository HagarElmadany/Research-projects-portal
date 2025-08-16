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

  <v-card class="table-card">
  <v-card-text>
    <!-- Search -->
    <v-text-field
      v-model="search"
      label="Search projects ,faculty....."
      variant="outlined"
      flat
      hide-details
      single-line
      density="compact"
      class="mb-4 search-input mx-auto"
    >
      <template v-slot:prepend-inner>
        <v-icon class="gradient-icon">mdi-magnify</v-icon>
      </template>
    </v-text-field>

    <!-- Table -->
    <v-data-table
      :headers="headers"
      :items="paginatedItems"
      :items-per-page="itemsPerPage"
      class="elevation-1 striped-table custom-table"
    >
      <template v-slot:headers="{ columns }">
        <tr>
          <th v-for="col in columns" :key="col.value" class="custom-th">
            {{ col.text }}
          </th>
        </tr>
      </template>

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
      <v-btn class="action-btn edit-btn" @click="openDialog(item)" size="small" variant="outlined">
        <v-icon start>mdi-pencil</v-icon>Edit
      </v-btn>
      <v-btn class="action-btn delete-btn" @click="deleteFaculty(item)" size="small" variant="outlined">
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
  </v-card-text>
</v-card>


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
  background-color: #f1f4f9;
}

.v-data-table thead th {
  background-color: #f1f4f9;
  font-weight: bold;
  color: #333;
  text-align: left;
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
  margin-top: 10px ;
  width: 100%;

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


.table-card {
  background: white;
  border-radius: 10px;
  padding: 5px;
  margin-top: 30px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.search-input .v-field {
  background-color: #fff !important;
  border: 1px solid #ccc !important; 
  border-radius: 10px;
}

/* search icon */
.gradient-icon {
  background: linear-gradient(90deg, #396FC8, #37c8b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
}

.custom-table {
  border-radius: 10px;
  overflow: hidden; 
  
}



.action-btn {
  border-radius: 20px;  
  font-weight: 600;
  text-transform: none;
  padding: 4px 12px;
  transition: 0.3s ease;
}

.edit-btn {
  color: #396FC8;
  border: 1px solid #396FC8;
  background: #f5f9ff;
}
.edit-btn:hover {
  background: linear-gradient(90deg, #396FC8, #37c8b2);
  color: white !important;
}

.delete-btn {
  color: #e63946;
  border: 1px solid #e63946;
  background: #fff5f5;
  margin-left: 6px;
}
.delete-btn:hover {
  background: linear-gradient(90deg, #e63946, #ff7b7b);
  color: white !important;
}



</style>
