<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-between">
    <a class="navbar-brand" href="#">Siyamthanda Tsobo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="contact">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="review">Review</a>
          </li>
        <li class="nav-item">
            <a class="nav-link " href="project">Projects</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </template>
  