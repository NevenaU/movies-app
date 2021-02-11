<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          required
          v-model="formData.title"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="title"
        />
      </div>

      <div class="mb-3">
        <label for="director" class="form-label">Director</label>
        <input
          required
          v-model="formData.director"
          type="text"
          class="form-control"
          id="director"
          aria-describedby="director"
        />
      </div>

      <div class="mb-3">
        <label for="imageUrl" class="form-label">imageUrl</label>
        <input
          required
          v-model="formData.imageUrl"
          type="text"
          class="form-control"
          id="imageUrl"
          aria-describedby="imageUrl"
        />
      </div>

      <div class="mb-3 form-check">
        <label class="form-label" for="duration">Duration</label>
        <input
          v-model="formData.maxSpeed"
          type="number"
          class="form-number-input"
          id="duration"
        />
      </div>

      <div class="form-group row">
        <label for="releaseDate" class="form-label">Date</label>
          <input 
          v-model="formData.releaseDate"
          class="form-date-input" 
          type="date" 
          value="2011-08-19" 
          id="releaseDate"
          name="releaseDate" />
      </div>

      <div class="mb-3 form-check">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active" for="Male">
            <input
              required
              type="radio"
              v-model="formData.genre"
              id="Male"
              value="Male"
              name="genre"
              autocomplete="off"
              checked
            /> Male
          </label>
          <label class="btn btn-secondary" for="femail">
            <input
              type="radio"
              v-model="formData.genre"
              id="femail"
              value="femail"
              name="genre"
              autocomplete="off"
            /> Femail
          </label>
          <label class="btn btn-secondary" for="other">
            <input
              type="radio"
              v-model="formData.genre"
              id="other"
              value="other"
              name="genre"
              autocomplete="off"
            /> Other
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import movieService from "../services/MovieService";
  
export default {
  name: "AddMovie",
  data() {
    return {
      formData: {
        title: "",
        director: "",
        imageUrl: "",
        duration: 0,
        releaseDate: new Date(),
        genre: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      await movieService.addMovie(this.formData);
      //this.$router.push("/movies?");
    }
  }
};
</script>

<style>
</style>