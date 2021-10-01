<template>
  <header class="header">
    <div class="navbar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img src="assets/img/logo/logo-removebg.png" width="70" alt="Logo" />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="page-scroll" href="/">Home</a>
                  </li>
                </ul>
              </div>

            </nav>

          </div>
        </div>

      </div>

    </div>

  </header>
<div class="container">
  <section id="driver" class="about-section received-section pt-150">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="about-img received-img wow fadeInUp" data-wow-delay=".5s">
            <img src="assets/img/delivery/delivery-img.svg" alt="" height="300" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="about-content received-content">
            <div class="section-title">
              <span class="wow fadeInUp" data-wow-delay=".2s">Drive with us</span>
              <form @submit="checkForm">
                <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
                </p>
                <div class="form-group mb-3">
                  <input type="text" v-model="firstName" name="name" class="form-control" id="firstname" placeholder="First name">
                </div>
                <div class="form-group mb-3">
                  <input type="text"  v-model="lastName"  class="form-control" id="lastname" placeholder="Last name">
                </div>
                <div class="form-group mb-3">
                  <input type="text"  v-model="mobileNumber"  class="form-control" id="mobile" placeholder="Mobile Number">
                </div>
                <div class="form-group mb-3" >
                  <input type="email"  v-model="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-check mb-3">
                  <input type="checkbox"  v-model="validDrivers"  class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Valid drivers licence</label>
                </div>
                <div class="form-check mb-3">
                  <input type="checkbox"  v-model="acceptedTerms"  class="form-check-input" id="termsCheck">
                  <label class="form-check-label" for="termsCheck">Accept the <a href="/terms">Terms of Service</a></label>
                </div>
                <div class="form-check mb-3">
                  <input type="checkbox"  v-model="acceptedPrivacy"  class="form-check-input" id="privacyCheck">
                  <label class="form-check-label" for="privacyCheck">Accept the  <a href="/privacy">Privacy Policy</a></label>
                </div>
                <button type="submit" class="main-btn btn-hover">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>

import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
export default {
  name: "home",
  data: function() {
    return {
    errors: [],
    lastName: "",
    firstName: "",
    mobileNumber: "",
    email: "",
    validDrivers:false,
    acceptedTerms:false,
    acceptedPrivacy:false
  };
},
  methods:{
    checkForm: function (e) {

      if (this.firstName && this.lastName && this.mobileNumber && this.email && this.acceptedTerms && this.acceptedPrivacy && this.validDrivers) {
        axios.post('https://queless-api.herokuapp.com/driver/save', {
          firstName:this.firstName,
          lastName:this.lastName,
          mobileNumber:this.mobileNumber,
          email:this.email,
          validDrivers:this.validDrivers,
        })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        createToast('Congrats, your details have been saved!',{
          position: 'bottom-center',
          type: 'success',
          transition: 'bounce',
        });
        return true;
      }

      this.errors = [];

      if (!this.firstName) {
        this.errors.push('First name required.');
      }
      if (!this.lastName) {
        this.errors.push('Last name required.');
      }
      if (!this.mobileNumber) {
        this.errors.push('Mobile number required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.acceptedTerms) {
        this.errors.push('Please accept the terms of us.');
      }
      if (!this.acceptedPrivacy) {
        this.errors.push('Please accept the privacy policy');
      }
      if (!this.validDrivers) {
        this.errors.push('A valid drivers licence is required');
      }
      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>
